import expressListEndpoints from 'express-list-endpoints';
import cors from "cors";
import express from "express";
import http from "http";
import routerFeature from './features/routes';
import { logger, getApiRequests } from './shared/adapter/libraries/logger';
import { Repositories } from '@/repositories';
import { Models } from '@/models';
import { loadConfig } from '@/utils/helpers/helper';
import { Tools } from '@/tools/index';
import DBConnection from './shared/adapter/libraries/postgres';
import { burstDetection, ddosProtection } from '@/middleware/limiter';

const runApp = async () => {
    loadConfig()

    console.log(process.env.POSTGRES_URL);
    
    const app = express();
    const dataSource = await DBConnection.connect();

    const model = await Models.new(dataSource);
    const repo = await Repositories.new();
    const tools = await Tools.new( model, repo );
    
    const router = routerFeature({ model, repo, tools });

    app.use(cors());
    app.use(express.static('public'));
    app.use(express.urlencoded({ extended: true }));
    app.use(express.json());

    // Security middleware
    app.use(ddosProtection);
    app.use(burstDetection);
    
    // API request logging
    app.use(getApiRequests());

    app.use(router.router);
    const httpServer = http.createServer(app);
    router.socket.runServer(httpServer);

    const PORT = process.env.PORT || 8080;

    httpServer.listen(PORT, () => {
        logger.info(`Server in Development Mode and Listening on port ${PORT}`);
        // router.bot.runBot(process.env.BOT_TOKEN || '');

        // tools.payment.listenForTransaction();
        // tools.payment.listenForTransaction();
        
        // Log management is now active
        logger.info('Log rotation and volume monitoring started');
        
        if (process.env.ENV !== 'production') {
            console.log(expressListEndpoints(app))
            console.log(router.socket.socketInfo
                .map((sock) => ({ path: sock.path, action: sock.action.name })));
        }
    });

    return { app, server: httpServer };
}

export default runApp();