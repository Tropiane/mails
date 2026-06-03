import helmet from "helmet";
import cors from "cors";
import morgan from "morgan";

import App from "./app";
import connection from "./config/database";
import { ENV } from "./config/env";

import { mailTestTransport,sendMail } from "./modules/mails/transport/mail.test";

App.use(morgan("dev"));
App.use(helmet());
App.use(cors());

const PORT = ENV.PORT;

mailTestTransport();

App.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
    connection();
});