import helmet from "helmet";
import cors from "cors";
import morgan from "morgan";

import App from "./app";
import connection from "./config/database";
import { ENV } from "./config/env";

import { errorMiddleware } from "./shared/middlewares/error.middleware";
import { mailRouter } from "./modules/mails/mail.router";

App.use(morgan("dev"));
App.use(helmet());
App.use(cors());
App.use(errorMiddleware);

const PORT = ENV.PORT;

App.use("/api/mails", mailRouter);

App.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
    connection();
});