import { configDotenv } from "dotenv";

configDotenv();

export const ENV = {
    PORT: process.env.PORT || 3000,
    MONGO_URL: process.env.MONGO_URL || "mongodb://localhost:27017/mails",
    mail_username: process.env.MAIL_USERNAME || "username",
    mail_password: process.env.MAIL_PASSWORD || "password"
}