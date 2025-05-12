import { GoogleGenAI } from "@google/genai";
import { feedBackModel } from "../models/feedbackModel.js";
import "dotenv/config";

const ai = new GoogleGenAI({ apiKey: process.env.GOOGLE_GEMINI_API_KEY });

export const createFeedback = async (req, res) => {
    const { interviewId, userid, messages, role, desc } = req.body;

    try {
        // Format messages into a readable transcript
        const formattedMessage = messages.map(
            (msg) => `- ${msg.role}: ${msg.content}`
        ).join('\n');

        // Construct prompt
        const prompt = `
You are a professional interviewer. Based on the following interview conversation between a user and an AI interviewer, provide a structured JSON feedback object with the following keys:
- totalScore: (number out of 100)
- categoryScore: (object with keys like 'communication', 'problemSolving', etc. with scores out of 100)
- strengths: (array of strings)
- areasForImprovements: (array of strings)
- finalAssessment: (string summary)

Respond ONLY with a valid JSON object. No explanations.

Conversation:
${formattedMessage}
`;
        // Call Gemini API
        const result = await ai.models.generateContent({
            model: "gemini-2.0-flash",
            contents: prompt
        });

        const text = await result.text ;
        const cleanedText = text.replace(/```json|```/g, '').trim();

        // Try parsing JSON from Gemini output
        let feedbackObj = JSON.parse(cleanedText);
        console.log(feedbackObj)

        const feedback = new feedBackModel({
                interViewId: interviewId, userId: userid,role,desc,
                totalScore: feedbackObj.totalScore,
                categoryScore: feedbackObj.categoryScore,
                strengths: feedbackObj.strengths,
                areasForImprovements: feedbackObj.areasForImprovements,
                finalAssessment: feedbackObj.finalAssessment
            })
            await feedback.save();
            console.log(feedbackObj)
            return res.status(200).json({
                success: true,
                feedbackId: feedback._id
            })

    } catch (error) {
        console.error("Gemini API error:", error);
        res.status(500).json({ error: "Internal server error" });
    }
};

export const getFeedbackById = async(req,res) => {
    const {feedbackId} = req.body;
    try {
        const feedback = await feedBackModel.findById(feedbackId);
        return res.status(200).json({
            feedback
        })
    } catch (error) {
        return res.status(400).json({
            messages: 'Internal server error'
        })
    }
}


export const pastInterviewWithFeedback = async(req, res) => {
    const {userid} = req.body;
    try {
        const pastInterviews = await feedBackModel.find({userId: userid});
        return res.json({
            pastInterviews
        })
    } catch (error) {
        return res.status(400).json({
            messages: "Internal server error"
        })
    }
}