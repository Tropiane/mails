import App from "./app";
import helmet from "helmet";
import cors from "cors";
import morgan from "morgan";

App.use(morgan("dev"));
App.use(helmet());
App.use(cors());

const PORT = 3000;

App.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});