import { Router } from "express";
import { createFeedback } from "../controllers/feedback.controller.js";

const feedBackRouter = Router();

feedBackRouter.post("/create", createFeedback);

export default feedBackRouter;