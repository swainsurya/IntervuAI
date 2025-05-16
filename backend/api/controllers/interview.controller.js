import { interviewModel } from "../models/interviewModel.js";
import { GoogleGenAI } from "@google/genai";
import "dotenv/config";

const ai = new GoogleGenAI({ apiKey: process.env.GOOGLE_GEMINI_API_KEY });

export const generateInterview = async (req, res) => {
    const { userid, type, role, level, techstacks, amount } = req.body;
    try {
        const qus = await ai.models.generateContent({
            model: "gemini-2.0-flash",
            contents: `Prepare questions for a job interview.
            The job role is ${role}.
            The job experience level is ${level}.
            The tech stack used in the job is: ${techstacks+" "}.
            The focus between behavioural and technical questions should lean towards: ${type}.
            The amount of questions required is: ${amount}.
            Please return only the questions, without any additional text.
            The questions are going to be read by a voice assistant so do not use "/" or "*" or any     other special characters which might break the voice assistant.
            Return the questions formatted like this:
            ["Question 1", "Question 2", "Question 3"]
        
            Thank you! < 3`
        })

        const interview = new interviewModel({
            role, type, level,
            techstacks: `${techstacks} `,
            userid,
            finalized: true,
            questions: JSON.parse(qus.text),
            amount: parseInt(amount)
        })


        await interview.save();
        return res.status(200).json({
            message: "Interview created successfully",
            success: true,
            interview
        })
    } catch (error) {
        console.log(error)
        return res.status(400).json({
            message: "Internal server error",
            success: false,
            error
        })
    }
}

export const othersInterview = async(req,res) => {
    try {
        const interviews = await interviewModel.find().sort({createdAt: -1})
        return res.status(200).json({
            interviews
        })
    } catch (error) {
        
    }
}

export const myInterviews = async(req, res) => {
    const {userid} = req.body;
    try {
        const interviews = await interviewModel.find({userid});
        return res.status(200).json({
            message: "These are user's created interviews",
            success: true,
            interviews
        })
    } catch (error) {
        return res.status(400).json({
            message: "Internal server error",
            success: false
        })
    }
}

export const getInterviewByid = async(req, res) => {
    const {id} = req.params ;
    try {
        const interview = await interviewModel.findById(id);
        return res.json({
            success: true,
            interview
        })
    } catch (error) {
        return res.json({
            success: false,
            message: "Internal Server Error"
        })
    }
}

export const delInterviewById = async(req,res) => {
    const {interviewId} = req.body;
    try {
        const interview = await interviewModel.findByIdAndDelete(interviewId);
        await interview.save();
        return res.status(200).json({
            message: "Interview Deleted",
            success: true
        })
    } catch (error) {
        return res.status(400).json({
            message: "Internal server error",
            success: false
        })
    }
}