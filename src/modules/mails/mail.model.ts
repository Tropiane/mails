import mongoose from "mongoose";

const mailSchema = new mongoose.Schema({
    destinatario: {
        type: String,
        required: true
    },
    fechaEnvio: {
        type: Date,
        required: true,
        default: Date.now
    },
    asunto: {
        type: String,
        required: true
    },
    contenido: {
        type: String,
        required: true
    },
    estado: {
        type: String,
        required: true,
        default: "enviado"
    },
    error: {
        type: String,
        required: false
    }
});

export const Mail = mongoose.model("Mail", mailSchema);