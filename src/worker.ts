import { Models } from '@/models/index';
import { Repositories } from '@/repositories/index';
import { Tools } from '@/tools/index';
import { loadConfig } from '@/utils/helpers/helper';
import DBConnection from './shared/adapter/libraries/postgres';
import { logger } from '@/libraries/logger';
import express from 'express';
import http from 'http';

const runApp = async () => {
    loadConfig()
    
    const dataSource = await DBConnection.connect();

    const model = await Models.new(dataSource);
    const repo = await Repositories.new();
    const tools = await Tools.new( model, repo );

    tools.payment.listenForTransaction();
    tools.webhook.listenForWebhooks();

    const app = express();
    const httpServer = http.createServer(app);

    const PORT = process.env.PORT || 8080;

    httpServer.listen(PORT, () => {
        logger.info(`Server in Development Mode and Listening on port ${PORT}`);
    }); 
}

export default runApp();