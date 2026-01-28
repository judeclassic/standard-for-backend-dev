import { Server as HttpServer } from 'http';
import { Namespace, Socket, Server as SocketServer, DefaultEventsMap } from 'socket.io';
import { IAuthAPI, ResponseProps } from '../../utils/types/types';
import EncryptionRepository, { Token } from '@/repositories/encryption';
import { logger } from './logger';

export type ISocketRequest<Request> = {
    user_id: string;
    auth: IAuthAPI
    message: Request;
};

export type ISocketAction<Request, Response> = (req: ISocketRequest<Request>, res: ISocketResponse<Response>) => void;

type ISocketInfo<Request, Response> = {
    path: string;
    action: ISocketAction<Request, Response>
}

export type ISocketResponse<Response> = {
    connection:Namespace<DefaultEventsMap, DefaultEventsMap, DefaultEventsMap, any> | SocketServer<DefaultEventsMap, DefaultEventsMap, DefaultEventsMap, any>
    client: Socket<DefaultEventsMap, DefaultEventsMap, DefaultEventsMap, any>;
    callBack: (response: ResponseProps<Response>) => void;
};

export let connection: Namespace<DefaultEventsMap, DefaultEventsMap, DefaultEventsMap, any> | SocketServer<DefaultEventsMap, DefaultEventsMap, DefaultEventsMap, any>

export class SocketConnector {
    constructor(private readonly encryption: EncryptionRepository) {}

    socketInfo: ISocketInfo<any, any>[] = [];

    route = <Request, Response>(path: string, action: ISocketAction<Request, Response>) => {
        this.socketInfo.push({ path, action });
    }
    
    extendsRoutes = (socketConnector: SocketConnector) => {
        this.socketInfo = [ ...this.socketInfo, ...socketConnector.socketInfo ];
    }

    runServer = (server: HttpServer, path?: string) => {
        const io = new SocketServer(server, {
            cors: {
                origin: process.env.ALLOWED_ORIGINS?.split(',') || ['http://localhost:3000'],
                methods: ['GET', 'POST'],
                credentials: true
            },
            allowEIO3: true
        });

        connection = path ? io.of(path): io;

        connection.use((socket, next) => {
            try {
                const token = socket.handshake.auth.token;
                const stringifiedAccount = this.encryption.decryptId(token, Token.apiAccessToken as "Special Token");
                if (!stringifiedAccount.status) return next(new Error('authentication error'));

                const account: IAuthAPI = JSON.parse(stringifiedAccount.data);
                if (!account.account_id) return next(new Error('authentication error'));
                
                socket.handshake.auth.account_id = account.account_id;
                socket.handshake.auth.type = account.type;
                return next();
            } catch (err) {
                logger.error("Socket authentication error", { error: err });
                return next(new Error('authentication error'));
            }
        });

        connection.on('connection', (client) => {
            client.emit('connected');
            this.socketInfo.forEach((info) => {
                client.on(info.path, (data, callBack) => {
                    if (!callBack) callBack = (demo: any) => demo;
                    info.action(
                        { 
                            message: data, 
                            auth: {
                                account_id: client.handshake.auth.account_id,
                                type: client.handshake.auth.type
                            },
                            user_id: client.handshake.auth.user_id
                        }, { connection, client, callBack });
                })
            })
        })
    }
}

export const NewSocketConnector = (encryption: EncryptionRepository) => {
    return new SocketConnector(encryption);
}