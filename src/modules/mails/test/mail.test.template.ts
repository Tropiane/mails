interface MailTemplate {
    username: string;
    asunto: string;
    contenido: string;
}

const WelcomeMailTemplate = ({
    username,
    asunto,
    contenido,
}: MailTemplate): string => {
    return `
    <!DOCTYPE html>
    <html lang="es">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>${asunto}</title>
    </head>
    <body style="
        margin:0;
        padding:0;
        background-color:#f4f6f9;
        font-family:Arial, Helvetica, sans-serif;
    ">
        <table width="100%" cellpadding="0" cellspacing="0" style="padding:30px 0;">
            <tr>
                <td align="center">

                    <table width="650" cellpadding="0" cellspacing="0" style="
                        background:#ffffff;
                        border-radius:12px;
                        overflow:hidden;
                        box-shadow:0 4px 12px rgba(0,0,0,0.08);
                    ">

                        <!-- HEADER -->
                        <tr>
                            <td style="
                                background:linear-gradient(135deg,#1e3a8a,#2563eb);
                                padding:35px;
                                text-align:center;
                                color:white;
                            ">
                                <h1 style="margin:0;font-size:30px;">
                                    Portal Jurídico
                                </h1>

                                <p style="
                                    margin-top:10px;
                                    opacity:0.9;
                                    font-size:14px;
                                ">
                                    Sistema de gestión y seguimiento de casos
                                </p>
                            </td>
                        </tr>

                        <!-- BODY -->
                        <tr>
                            <td style="padding:40px;">

                                <h2 style="
                                    color:#1f2937;
                                    margin-top:0;
                                ">
                                    Hola ${username}
                                </h2>

                                <div style="
                                    background:#eff6ff;
                                    border-left:5px solid #2563eb;
                                    padding:15px;
                                    margin:25px 0;
                                    border-radius:6px;
                                ">
                                    <strong>Asunto:</strong> ${asunto}
                                </div>

                                <p style="
                                    color:#4b5563;
                                    line-height:1.7;
                                    font-size:15px;
                                ">
                                    ${contenido}
                                </p>

                                <div style="
                                    background:#f9fafb;
                                    padding:20px;
                                    border-radius:8px;
                                    margin:30px 0;
                                ">
                                    <p style="margin:0;color:#374151;">
                                        Este es un correo de prueba para verificar
                                        el correcto funcionamiento de plantillas HTML,
                                        estilos, botones y enlaces dentro del sistema.
                                    </p>
                                </div>

                                <!-- BOTÓN PRINCIPAL -->
                                <div style="text-align:center;margin:35px 0;">
                                    <a
                                        href="https://google.com"
                                        style="
                                            display:inline-block;
                                            background:#2563eb;
                                            color:#ffffff;
                                            text-decoration:none;
                                            padding:14px 28px;
                                            border-radius:8px;
                                            font-weight:bold;
                                        "
                                    >
                                        Para ver el estado del caso, ingresa aquí
                                    </a>
                                </div>

                                <!-- LINKS SECUNDARIOS -->
                                <h3 style="color:#1f2937;">
                                    Accesos rápidos
                                </h3>

                                <ul style="
                                    color:#4b5563;
                                    line-height:2;
                                    padding-left:20px;
                                ">
                                    <li>
                                        <a href="https://google.com">
                                            Ver historial del caso
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://github.com">
                                            Acceder al portal de documentación
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://stackoverflow.com">
                                            Consultar recursos adicionales
                                        </a>
                                    </li>
                                </ul>

                            </td>
                        </tr>

                        <!-- FOOTER -->
                        <tr>
                            <td style="
                                background:#111827;
                                color:#d1d5db;
                                text-align:center;
                                padding:25px;
                            ">
                                <p style="margin:0;font-size:13px;">
                                    Correo generado automáticamente.
                                </p>

                                <p style="
                                    margin-top:10px;
                                    font-size:12px;
                                    opacity:0.8;
                                ">
                                    © 2026 Sistema de Gestión Jurídica
                                </p>
                            </td>
                        </tr>

                    </table>

                </td>
            </tr>
        </table>
    </body>
    </html>
    `;
};

export {
    WelcomeMailTemplate
};