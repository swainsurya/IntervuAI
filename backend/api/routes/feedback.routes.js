import { Router } from "express";
import { createFeedback } from "../controllers/feedback.controller.js";

const feedBackRouter = Router();

feedBackRouter.post("/create", createFeedback);
feedBackRouter.get("/",(req,res) => {
    res.json({
        message: "feedback get request"
    })
})

export default feedBackRouter;