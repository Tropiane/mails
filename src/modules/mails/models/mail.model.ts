import mongoose from "mongoose";

const mailSchema = new mongoose.Schema({
    destinatario: {
        type: String,
        required: true
    },
    fechaEnvio: {
        type: Date,
        required: true
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
        required: true
    },
    error: {
        type: String
    }
});

export const Mail = mongoose.model("Mail", mailSchema);