import {transport} from "./transport/transport";
import {MailDTO} from "./mail.interface";
import {ENV} from "../../config/env";
import { MailDAO } from "./mail.dao";

import {WelcomeMailTemplate} from "./test/mail.test.template";

export default class MailService {
    private dao: MailDAO = new MailDAO();

    async sendMail(mail: MailDTO){
        try {
            await transport.sendMail({
                from: `"Mi Aplicación" <${ENV.mail_username}>`,
                to: mail.destinatario,
                subject: mail.asunto,
                text: mail.contenido,
                html: WelcomeMailTemplate({username: mail.destinatario, asunto: mail.asunto, contenido: mail.contenido})
            });

            await this.dao.sendMail(mail);
        } catch (error) {
            
        }
    }

    async createTemplate(){
        try {
            
        } catch (error) {
            
        }
    }
    
};