import { Router } from "express";
import { generateInterview, getInterviewByid, getPastInterviewByUserId, myInterviews, othersInterview, pastInterview } from "../controllers/interview.controller.js";

const interviewRouter = Router();

interviewRouter.post("/generate",generateInterview);
interviewRouter.post("/others", othersInterview);
interviewRouter.post("/my-interviews", myInterviews);
interviewRouter.post("/interview/:id",getInterviewByid);

interviewRouter.post("/past-interview", pastInterview);
interviewRouter.post("/get-past-interviews",getPastInterviewByUserId);

export default interviewRouter;