import { userModel } from "../models/userModel.js";
import bcrypt from "bcryptjs";

export const register = async(req, res) => {
    const {fullname, email, password} = req.body ;
    if(!fullname || !email || !password) {
        return res.status(400).json({
            message: "All fields are required",
            success: false
        })
    }
    try {
        const userExists = await userModel.findOne({email});
        if(userExists) {
            return res.status(400).json({
                message: "User Already Exists",
                success: false
            })
        }
        const hashedPassword = await bcrypt.hashSync(password, 10);
        const newUser = new userModel({ fullname, email, password:hashedPassword }) ;
        newUser.save();
        return res.status(200).json({
            message: "Registration Success",
            success: true
        })
    } catch (error) {
        return res.status(400).json({
            message: "Internal server error, Try again later.",
            success: false
        })
    }
}

export const login = async(req, res) => {
    const { email, password } = req.body;
    if(!email || !password) {
        return res.status(400).json({
            message: "All fields are required",
            success: false
        })
    }
    try {
        const user = await userModel.findOne({ email });
        if(!user) {
            return res.status(400).json({
                message: "User not exists, Register first",
                success: false
            })
        }
        const comparePassword = await bcrypt.compareSync(password, user.password);
        if(!comparePassword) {
            return res.status(400).json({
                message: "Password not matched, Try Again.",
                success: false
            })
        }
        return res.status(200).json({
            message: "Login Success",
            success: true,
            user: {
                userid: user._id,
                name: user.fullname,
                email: user.email
            }
        })
    } catch (error) {
        return res.status(400).json({
            message: "Internal server error, Try again later",
            success: false
        })
    }
}