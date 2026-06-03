import nodemailer from 'nodemailer';

import {ENV} from "../../../config/env";

export const transport = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
        user: ENV.mail_username,
        pass: ENV.mail_password
    }
})