import { interviewModel } from "../models/interviewModel.js";
import { userModel } from "../models/userModel.js";

export const checkAdmin = async(req, res) => {
    const {userid} = req.body;
    try {
        if(userid == "68205b3161be9593900eda0c") {
            return res.status(200).json({
                success: true
            })
        }
        else return res.status(400).json({
            success: false
        })
    } catch (error) {
        return res.status(400).json({
            success: false
        })
    }
}

export const fetchUsers = async(req, res) => {
    try {
        const users = await userModel.find();
        return res.status(200).json({
            message: "All users fetched",
            users
        })
    } catch (error) {
        return res.status(400).json({
            success: false,
            message: "Internal server error"
        })
    }
}

export const fetchInterviews = async(req, res) => {
    try {
        const interviews = await interviewModel.find();
        return res.status(200).json({
            message: "All interviews are fetched",
            interviews
        })
    } catch (error) {
        return res.status(400).json({
            success: false,
            message: "Internal server error"
        })
    }
}

export const delUserById = async(req, res) => {
    const {userid} = req.body;
    try {
        const user = await userModel.findByIdAndDelete(userid);
        await user.save();
        return res.status(200).json({
            message: "User deleted success",
            success: true
        })
    } catch (error) {
        return res.status(400).json({
            success: false,
            message: "Internal server error"
        })
    }
}

export const delInterviewById = async(req,res) => {
    const {interviewId} = req.body;
    try {
        const interview = await interviewModel.findByIdAndDelete(interviewId);
        await interview.save();
        return res.status(200).json({
            message: "Interview deleted success",
            success: true
        })
    } catch (error) {
        return res.status(400).json({
            success: false,
            message: "Internal server error"
        })
    }
}