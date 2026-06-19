import { Mail } from "./mail.model";

import { MailDTO } from "./mail.interface";

export class MailDAO {
    async sendMail(mail: MailDTO) {
        const newMail = new Mail(mail);
        if(newMail.error) throw new Error(newMail.error);
        await newMail.save();
    }
}