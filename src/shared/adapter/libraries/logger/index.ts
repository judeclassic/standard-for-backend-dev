import morgan from "morgan";
import winston, { format, transports } from "winston";
import chalk from "chalk";

const { combine, timestamp, json, errors, printf, colorize, label } = format;

// Utility to truncate long strings
const truncateString = (str: string, maxLength: number = 200): string => {
  if (str.length <= maxLength) return str;
  return str.substring(0, maxLength) + '... (truncated)';
};

// Utility to limit object depth and size
const limitObjectDepth = (obj: any, depth: number = 2, currentDepth: number = 0): any => {
  if (currentDepth >= depth) return '[Object]';
  if (obj === null || obj === undefined) return obj;
  if (typeof obj !== 'object') {
    if (typeof obj === 'string') return truncateString(obj, 100);
    return obj;
  }
  if (Array.isArray(obj)) {
    if (obj.length > 5) {
      return [...obj.slice(0, 5).map(item => limitObjectDepth(item, depth, currentDepth + 1)), `... (${obj.length - 5} more items)`];
    }
    return obj.map(item => limitObjectDepth(item, depth, currentDepth + 1));
  }
  const result: any = {};
  const keys = Object.keys(obj);
  const limitedKeys = keys.slice(0, 10); // Limit to 10 keys
  for (const key of limitedKeys) {
    result[key] = limitObjectDepth(obj[key], depth, currentDepth + 1);
  }
  if (keys.length > 10) {
    result['...'] = `(${keys.length - 10} more properties)`;
  }
  return result;
};

const baseFormat = combine(
  errors({ stack: true }),
  timestamp({ format: "YYYY-MM-DD HH:mm:ss" }),
  json()
);

// Custom colors for different log levels
const levelColors: Record<string, (text: string) => string> = {
  error: chalk.bold.red,
  warn: chalk.bold.yellow,
  info: chalk.bold.cyan,
  debug: chalk.bold.gray,
  verbose: chalk.bold.magenta,
};

// Component color mapping for visual distinction
const componentColors = [
  chalk.blue,
  chalk.green,
  chalk.magenta,
  chalk.cyan,
  chalk.yellow,
];

const getComponentColor = (component: string) => {
  const hash = component.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
  return componentColors[hash % componentColors.length];
};

const consoleFormat = combine(
  timestamp({ format: "YYYY-MM-DD HH:mm:ss" }),
  printf(({ level, message, timestamp, stack, component, ...meta }) => {
    // Colorize level
    const levelName = level.replace(/\x1B\[\d+m/g, ''); // Remove existing colors
    const coloredLevel = levelColors[levelName] ? levelColors[levelName](levelName.toUpperCase().padEnd(7)) : level;
    
    // Colorize timestamp
    const coloredTimestamp = chalk.gray(`[${timestamp}]`);
    
    // Colorize component
    const componentColor = getComponentColor(`${component || "core"}`);
    const coloredComponent = componentColor(`[${component || "core"}]`);
    
    // Format stack trace - only first line for console with color
    const stackTrace = stack 
      ? ' ' + chalk.dim('│') + ' ' + chalk.red(stack.toString().split('\n')[0]) 
      : '';
    
    // Colorize metadata
    let coloredMeta = '';
    if (Object.keys(meta).length > 0) {
      const metaStr = JSON.stringify(limitObjectDepth(meta, 2));
      coloredMeta = ' ' + chalk.dim('│') + ' ' + chalk.gray(metaStr);
    }
    
    // Main message color based on level
    const messageColor = levelName === 'error' ? chalk.red : 
                        levelName === 'warn' ? chalk.yellow : 
                        chalk.white;
    
    return `${coloredTimestamp} ${coloredLevel} ${coloredComponent} ${messageColor(truncateString(`${message}`, 150))}${stackTrace}${coloredMeta}`;
  })
);

// Create shared file transports to prevent memory leaks
// Multiple loggers writing to the same file can cause EventEmitter warnings
const sharedCombinedFileTransport = new transports.File({ 
  filename: "logs/combined.log",
  maxsize: 5242880, // 5MB
  maxFiles: 5,
});

const sharedExceptionsFileTransport = new transports.File({ 
  filename: "logs/exceptions.log",
  maxsize: 5242880, // 5MB
  maxFiles: 5,
});

const sharedRejectionsFileTransport = new transports.File({ 
  filename: "logs/rejections.log",
  maxsize: 5242880, // 5MB
  maxFiles: 5,
});

// Increase max listeners to prevent warnings when multiple loggers share transports
// Each logger adds multiple event listeners (error, finish, close, etc.)
// With 5 loggers, we need at least 5 × 4 = 20 listeners per transport
sharedCombinedFileTransport.setMaxListeners(25);
sharedExceptionsFileTransport.setMaxListeners(25);
sharedRejectionsFileTransport.setMaxListeners(25);

export const createBaseLogger = (component: string) => {
  const API_KEY = process.env.DATADOG_CLOUD_API_KEY;
  const hostname = process.env.ENV;
  const service = process.env.AWS_LAMBDA_FUNCTION_NAME || process.env.REGION;

  if (!API_KEY || !hostname || !service) {
    throw new Error("Missing critical environment variables for logger setup");
  }

  const httpTransportOptions = {
    host: "http-intake.logs.datadoghq.eu",
    path: `/api/v2/logs?ddsource=nodejs&service=${service}&host=${hostname}`,
    ssl: true,
    headers: {
      'DD-API-KEY': API_KEY
    }
  };

  return winston.createLogger({
    level: "info",
    defaultMeta: { service, hostname, component },
    format: baseFormat, // used for non-console transports
    transports: [
      // Pretty, colorized logs for local console (each logger gets its own console transport)
      new transports.Console({ format: consoleFormat }),

      // Shared file transport - all loggers write to the same file
      sharedCombinedFileTransport,
      
      // HTTP transport for Datadog
      new transports.Http(httpTransportOptions),
    ],
    exceptionHandlers: [
      sharedExceptionsFileTransport,
      new transports.Console({ format: consoleFormat }),
    ],
    rejectionHandlers: [
      sharedRejectionsFileTransport,
    ],
    exitOnError: false,
  });
};

export const logger = createBaseLogger("core");
export const userLogger = createBaseLogger("user-service");
export const merchantLogger = createBaseLogger("merchant-service");
export const paymentLogger = createBaseLogger("payment-service");
export const securityLogger = createBaseLogger("security-service");

// Security event logging functions
export const logSecurityEvent = (event: string, details: any) => {
  securityLogger.warn(`SECURITY_EVENT: ${event}`, {
    event,
    timestamp: new Date().toISOString(),
    ...details
  });
};

export const logAuthenticationFailure = (ip: string, reason: string, userAgent?: string) => {
  logSecurityEvent('AUTHENTICATION_FAILURE', {
    ip,
    reason,
    userAgent,
    severity: 'HIGH'
  });
};

export const logAuthorizationFailure = (userId: string, resource: string, ip: string) => {
  logSecurityEvent('AUTHORIZATION_FAILURE', {
    userId,
    resource,
    ip,
    severity: 'MEDIUM'
  });
};

export const logSuspiciousActivity = (activity: string, details: any) => {
  logSecurityEvent('SUSPICIOUS_ACTIVITY', {
    activity,
    severity: 'HIGH',
    ...details
  });
};

export const logDataAccess = (userId: string, resource: string, action: string, ip: string) => {
  securityLogger.info('DATA_ACCESS', {
    userId,
    resource,
    action,
    ip,
    timestamp: new Date().toISOString()
  });
};

export const logPaymentEvent = (event: string, transactionId: string, details: any) => {
  paymentLogger.info(`PAYMENT_EVENT: ${event}`, {
    event,
    transactionId,
    timestamp: new Date().toISOString(),
    ...details
  });
};

export const getApiRequests = () =>
  morgan((tokens, req, res) => {
    const status = tokens.status(req, res);
    const method = tokens.method(req, res);
    const url = tokens.url(req, res);
    const responseTime = tokens["response-time"](req, res);
    
    // Color-coded status and method
    const statusNum = parseInt(status || '0');
    const coloredStatus = statusNum >= 500 ? chalk.red.bold(status) :
                         statusNum >= 400 ? chalk.yellow.bold(status) :
                         statusNum >= 300 ? chalk.cyan(status) :
                         statusNum >= 200 ? chalk.green.bold(status) :
                         chalk.white(status);
    
    const methodColors: Record<string, any> = {
      'GET': chalk.blue,
      'POST': chalk.green,
      'PUT': chalk.yellow,
      'PATCH': chalk.magenta,
      'DELETE': chalk.red,
    };
    
    const coloredMethod = (methodColors[method || ''] || chalk.white)(method?.padEnd(6));
    const coloredUrl = chalk.cyan(url);
    const coloredTime = chalk.gray(`(${responseTime}ms)`);
    
    const emoji = statusNum >= 500 ? "❗" :
                 statusNum >= 400 ? "⚠️" :
                 statusNum >= 200 ? "✅" :
                 "🔔";

    return JSON.stringify({
      emoji,
      method,
      url,
      status,
      response_time: `${responseTime} ms`,
      timestamp: new Date().toISOString(),
      colored: `${emoji} ${coloredMethod} ${coloredUrl} ${coloredStatus} ${coloredTime}`
    });
  }, {
    stream: {
      write: (message) => {
        try {
          const parsed = JSON.parse(message);
          // Console: colorful single line
          logger.info(parsed.colored);
        } catch {
          logger.info(message.trim());
        }
      },
    },
  });