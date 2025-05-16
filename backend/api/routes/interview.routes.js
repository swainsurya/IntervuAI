import { Router } from "express";
import { delInterviewById, generateInterview, getInterviewByid, myInterviews, othersInterview } from "../controllers/interview.controller.js";

const interviewRouter = Router();

interviewRouter.post("/generate",generateInterview);
interviewRouter.post("/others", othersInterview);
interviewRouter.post("/my-interviews", myInterviews);
interviewRouter.post("/interview/:id",getInterviewByid);
interviewRouter.post("/del-id",delInterviewById);


export default interviewRouter;