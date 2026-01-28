import * as express_serve_static_core from 'express-serve-static-core';
import http from 'http';

declare const _default: Promise<{
    app: express_serve_static_core.Express;
    server: http.Server<typeof http.IncomingMessage, typeof http.ServerResponse>;
}>;

export { _default as default };
