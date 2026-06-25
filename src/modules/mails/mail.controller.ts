import { Request, Response } from "express";

import { MailSchema } from "./mail.interface";
import MailService from "./mail.service";

export default class MailController{
    private mailService: MailService = new MailService();

    async sendMail(req: Request<{},{}, {mail: typeof MailSchema, template?: string }>, res: Response) {
        try {
            const validateMail = MailSchema.safeParse(req.body.mail);
            
            if (!validateMail.success) {
                return res.status(400).json({message: validateMail.error.message});
            }
            const mail = validateMail.data;
            await this.mailService.sendMail(mail, req.body.template);
            res.json({status: 200, message: "Correo enviado"});
        } catch (error) {
            res.sendStatus(500).json({message: "Error enviando correo"});
        }
    }

    async sendMailChangeStatus(req: Request, res: Response) {
        try {
            const validateMail = MailSchema.safeParse(req.body);
            if (!validateMail.success) {
                return res.status(400).json({message: validateMail.error.message});
            }
            const mail = validateMail.data;
            await this.mailService.sendMailChangeStatus(mail);
            res.json({status: 200, message: "Correo enviado"});
        } catch (error) {
            res.sendStatus(500).json({message: "Error enviando correo"});
        }
    }
    
}