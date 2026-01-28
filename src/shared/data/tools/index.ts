import { Models } from "../models";
import { Repositories } from "../repositories";
import { PaymentTools } from "./payment";
import { WebhookTools } from "./webhook";

export class Tools {
    static new = async (models: Models, repo: Repositories) => {
        return new Tools(
            new PaymentTools(models, repo),
            new WebhookTools(models, repo)
        )
    }
    constructor(
        readonly payment: PaymentTools,
        readonly webhook: WebhookTools,
    ) { }
}