import {transport} from "./transport/transport";
import {MailDTO} from "./mail.interface";
import {ENV} from "../../config/env";
import { MailDAO } from "./mail.dao";
import { compileTemplate } from "../templates/compiler";
import { AppError } from "../../shared/errors/app.error";

export default class MailService {
    private dao: MailDAO = new MailDAO();

    async sendMail(mail: MailDTO){
        try {
            const html = compileTemplate("welcome",{username: mail.destinatario, asunto: mail.asunto, contenido: mail.contenido});
            await transport.sendMail({
                from: `"Mi Aplicación" <${ENV.mail_username}>`,
                to: mail.destinatario,
                subject: mail.asunto,
                text: mail.contenido,
                html
            });

            await this.dao.sendMail(mail);
        } catch (error) {
            throw new AppError("Error enviando correo", 500);
        }
    }

    async sendMailChangeStatus(mail: MailDTO){
        try {
            const html = compileTemplate("actualizacion.caso",{username: mail.destinatario, asunto: mail.asunto, contenido: mail.contenido});
            await transport.sendMail({
                from: `"Mi Aplicación" <${ENV.mail_username}>`,
                to: mail.destinatario,
                subject: mail.asunto,
                text: mail.contenido,
                html
            })
        } catch (error) {
            throw new AppError("Error enviando correo automatico de actualizacion de caso", 500);
        }
    }

    async createTemplate(){
        try {
            
        } catch (error) {
            
        }
    }
    
};