import { Router } from "express";
import { generateInterview, othersInterview } from "../controllers/interview.controller.js";

const interviewRouter = Router();

interviewRouter.post("/generate",generateInterview);
interviewRouter.post("/others", othersInterview);

export default interviewRouter;