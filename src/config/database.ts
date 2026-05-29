import mongoose from "mongoose";

import { ENV } from "./env";

const connection = async () => {
    try {
        await mongoose.connect(ENV.MONGO_URL);
        console.log("Database connected");
    } catch (error) {
        console.log(error);
    }
};

export default connection;