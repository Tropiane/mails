import { transport } from "./prueba.transport";

import {ENV} from "../../../config/env";

export async function mailTestTransport() {
    try {
        await transport.verify();
        console.log("El transporte funciona correctamente");
        
    } catch (error) {
        console.log("Error en SMTP", error);
    }
}

export async function sendMail(){
    try {
    const info = await transport.sendMail({
        from: `"Mi Aplicación" <${ENV.mail_username}>`,
        to: "soyfedetropmanya@gmail.com",
        subject: "Correo de prueba",
        text: "Hola, este es un correo de prueba",
        html: "<h1>Hola</h1><p>Este es un correo de prueba</p>"
    });

    console.log("Correo enviado:", info.messageId);

} catch (error) {
    console.error("Error enviando correo:", error);
}
}