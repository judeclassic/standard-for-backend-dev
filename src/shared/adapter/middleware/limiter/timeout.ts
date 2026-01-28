import { Request, Response, NextFunction } from 'express';

const TIMEOUT_MS = 5000; // 5 seconds

export function requestTimeout(req: Request, res: Response, next: NextFunction) {
  // Create a timeout timer
  const timeout = setTimeout(() => {
    if (!res.headersSent) {
      res.status(503).json({ status: false, message: 'Request timed out' });
    }

    req.destroy?.(); // if req.destroy exists (Node 18+)
  }, TIMEOUT_MS);

  // Clear the timer if the request finishes or errors
  const cleanup = () => clearTimeout(timeout);

  res.on('finish', cleanup); // request completed
  res.on('close', cleanup);  // connection closed
  res.on('error', cleanup);  // error happened

  next();
}
