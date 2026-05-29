import mongoose from "mongoose";

const templateSchema = new mongoose.Schema({
    asunto: {
        type: String,
        required: true
    },
    contenido: {
        type: String,
        required: true
    }
});

export const Template = mongoose.model("Template", templateSchema);