import { Router } from "express";
import { createFeedback, getFeedbackById, pastInterviewWithFeedback } from "../controllers/feedback.controller.js";

const feedBackRouter = Router();

feedBackRouter.post("/create", createFeedback);
feedBackRouter.post("/get-feedback-by-id",getFeedbackById);
feedBackRouter.post("/all-feedback", pastInterviewWithFeedback);
feedBackRouter.get("/",(req,res) => {
    res.json({
        message: "feedback get request"
    })
})

export default feedBackRouter;