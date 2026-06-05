import {transport} from "../transport/transport";
import {Mail} from "../interfaces/mail.interface";
import {ENV} from "../../../config/env";

import {WelcomeMailTemplate} from "../templates/mail.test.template";

export default class MailService {

    async sendMail(mail: Mail){
        try {
            await transport.sendMail({
                from: `"Mi Aplicación" <${ENV.mail_username}>`,
                to: mail.destinatario,
                subject: mail.asunto,
                text: mail.contenido,
                html: WelcomeMailTemplate({username: mail.destinatario, asunto: mail.asunto, contenido: mail.contenido})
            });
        } catch (error) {
            
        }
    }

    async createTemplate(){
        try {
            
        } catch (error) {
            
        }
    }
    
};