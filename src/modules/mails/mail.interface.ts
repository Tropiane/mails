import {z} from "zod";

export const MailSchema = z.object({
    nombre: z.string().min(1),
    destinatario: z.email(),
    asunto: z.string().min(1),
    contenido: z.string().min(1)
})

export type MailDTO = z.infer<typeof MailSchema>;