import { Router } from "express";
import { login, register } from "../controllers/auth.controllers.js";

const authRouter = Router();

authRouter.get("/", (req, res) => {
    res.json({
        message: "Login get request"
    })
})

authRouter.post("/login",login);
authRouter.post("/register",register);

export default authRouter;