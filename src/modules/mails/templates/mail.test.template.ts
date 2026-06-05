interface MailTemplate {
    username: string;
    asunto: string;
    contenido: string;
}

const WelcomeMailTemplate = ({username, asunto, contenido}: MailTemplate): string=>{
   return `<h1>Bienvenido ${username}</h1>
   <h2>${asunto}</h2>
   <p>${contenido}</p>
   <a href="https://google.com">Ir a Google a modo de ejemplo</a>
   `
}

export {
    WelcomeMailTemplate
}