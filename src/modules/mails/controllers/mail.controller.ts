import { Request, Response } from "express";

import { Mail } from "../interfaces/mail.interface";
import MailService from "../services/mail.service";

export default class MailController{
    private mailService: MailService = new MailService();

    async sendMail(req: Request, res: Response) {
        try {
            const mail: Mail = req.body;
            await this.mailService.sendMail(mail);
            res.sendStatus(200);
            console.log("Correo enviado");
        } catch (error) {
            res.sendStatus(500).json({message: "Error enviando correo"});
        }
    }
}