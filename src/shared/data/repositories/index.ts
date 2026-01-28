import { CryptoRepository } from "./crypto"
import EncryptionRepository from "./encryption"
import { QueueRepository } from "./queue"
import FileRepository from "./files"
import EmailRepository from "./email"
import { SocketRepository } from "./socket"
import { CacheRepository } from "./cache"

export class Repositories {
    static new = async () => {
        return new Repositories(
            new CryptoRepository(),
            new EncryptionRepository(),
            new SocketRepository(),
            new FileRepository(),
            new EmailRepository(),
            await QueueRepository.new(),
            await CacheRepository.new(),
        )
    }
    
    constructor(
        readonly crypto: CryptoRepository,
        readonly encryption: EncryptionRepository,
        readonly socket: SocketRepository,
        readonly file: FileRepository,
        readonly email: EmailRepository,
        readonly queue: QueueRepository,
        readonly cache: CacheRepository,
    ) {}
}