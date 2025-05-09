import express from "express";
import "dotenv/config";
import { DBConnection } from "./api/lib/connectDatabase.js";
import authRouter from "./api/routes/auth.routes.js";
import interviewRouter from "./api/routes/interview.routes.js";
import cors from "cors";

const app = express();
const port = process.env.PORT || 4000;

// db connection
DBConnection();
app.use(cors());
app.use(express.json());

// routing in server 
app.use("/auth", authRouter);
app.use("/ai",interviewRouter);

app.get("/",(req, res) => {
    res.json({
        success: true,
        message: "Server is running fine"
    })
})
app.listen(port,() => console.log("Server is live at ",port))