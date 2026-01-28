import { connection } from "../../../adapter/libraries/socket";

export class SocketRepository {
    constructor() {
    }

    get getConnection() {
        return connection
    }
}