import {Router} from "express";
import { checkAdmin, delInterviewById, delUserById, fetchInterviews, fetchUsers } from "../controllers/admin.controllers.js";

const adminRouter = Router();

adminRouter.post("/checkAdmin", checkAdmin);
adminRouter.post("/fetch-users",fetchUsers);
adminRouter.post("/fetch-interviews", fetchInterviews);
adminRouter.post("/del-user",delUserById);
adminRouter.post("/del/interview",delInterviewById);

export default adminRouter ;