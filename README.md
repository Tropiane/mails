#MailsSend

Is a simple API to send manual and automatic emails to your users or clients.
This API consist in create and usage differents types of emails, templates, attachments and more.

##Characteristics

- Create templates
- Send emails
- Attachments
- Automatic emails
- Save logs

##Technologies

-Node.js
-Express.js
-TypeScript
-MongoDB
-Mongoose
-Nodemailer
-Handlebars
-Zod
-JWT Authentication (if implemented)

##Project Structure

    -src
        -config
        -modules
        -templates
        -utils
        -errors
        -middlewares
        -shared
        -server.ts
        -app.ts

##Usage

**Clone**: git clone https://github.com/Tropiane/mails

**Install**: npm install

**Start**: npm run dev

##Environment Variables

    You have a file .env in the root of the project, and in the folder config, you have a file env.ts. This file is used to store the environment variables.

    -PORT: process.env.PORT || 3000,
    -MONGO_URL: process.env.MONGO_URL || "mongodb://localhost:27017/mails",
    -mail_username: process.env.MAIL_USERNAME || "username",
    -mail_password: process.env.MAIL_PASSWORD || "password"

##Endpoints

Have differents endopind, to send automatic emails with a specific template, and a endpoint to send manual emails.

- /api/mails (POST)
- /api/mails/change-status (POST)

-- /api/mails to send manual emails with differents templates and contents.

-- /api/mails/change-status to send automatic emails with differents templates and contents. Use when you need to send a short message to your users or clients.

##Examples to send a mail

**POST /api/mails**:

```json
{
    "nombre": "Jhon Doe",
    "destinatario": "W7H8T@example.com",
    "asunto": "Caso Retención",
    "contenido": "Correo de prueba enviado a traves de postman con detalles y estilos"
}
```

**Author**: Tropiane

**Version**: 1.0.0