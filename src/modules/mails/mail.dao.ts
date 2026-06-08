import { Mail } from "./mail.model";

import { MailDTO } from "./mail.interface";

export class MailDAO {
    async sendMail(mail: MailDTO) {
        const newMail = new Mail(mail);
        await newMail.save();
    }
}