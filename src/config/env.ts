import { configDotenv } from "dotenv";

configDotenv();

export const ENV = {
    PORT: process.env.PORT || 3000,
    MONGO_URL: process.env.MONGO_URL || "mongodb://localhost:27017/mails",
}