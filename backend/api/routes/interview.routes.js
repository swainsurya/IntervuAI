import { Router } from "express";
import { generateInterview } from "../controllers/interview.controller.js";

const interviewRouter = Router();

interviewRouter.post("/generate",generateInterview);

export default interviewRouter;