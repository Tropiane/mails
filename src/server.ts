import helmet from "helmet";
import cors from "cors";
import morgan from "morgan";

import App from "./app";
import connection from "./config/database";
import { ENV } from "./config/env";

import { mailRouter } from "./modules/mails/routes/mail.router";

App.use(morgan("dev"));
App.use(helmet());
App.use(cors());

const PORT = ENV.PORT;

App.use("/api/mails", mailRouter);

App.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
    connection();
});