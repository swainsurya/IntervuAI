import mongoose from "mongoose";
import "dotenv/config";

export const DBConnection = async() => {
    await mongoose.connect(process.env.MONGODB_URI)
    .then(() => console.log("database connection success"))
    .catch((err) => console.log("database connection error ", err))
}