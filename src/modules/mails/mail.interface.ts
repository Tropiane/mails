import {z} from "zod";

export const MailSchema = z.object({
    destinatario: z.email(),
    asunto: z.string().min(1),
    contenido: z.string().min(1)
})

export type MailDTO = z.infer<typeof MailSchema>;