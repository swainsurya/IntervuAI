import express from "express";
import "dotenv/config";
import { DBConnection } from "./api/lib/connectDatabase.js";
import authRouter from "./api/routes/auth.routes.js";
import interviewRouter from "./api/routes/interview.routes.js";
import cors from "cors";
import job from "./api/lib/cron.js";
import feedBackRouter from "./api/routes/feedback.routes.js";
import adminRouter from "./api/routes/admin.routes.js";

const app = express();
const port = process.env.PORT || 4000;
// cron job
job.start();

// db connection 
DBConnection();
const corsOptions = {
    origin: '*', // Allow all origins
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'], // Allow all common HTTP methods
    allowedHeaders: ['Content-Type', 'Authorization'], // Allow common headers
};
app.use(cors(corsOptions));
app.use(express.json());

// routing in server 
app.use("/auth", authRouter);
app.use("/ai", interviewRouter);
app.use("/feedback",feedBackRouter);

// admin panel
app.use("/admin", adminRouter);

app.get("/", (req, res) => {
    res.json({
        success: true,
        message: "Server is running fine"
    })
})
app.listen(port, () => console.log("Server is live at ", port))