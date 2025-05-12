import { GoogleGenAI } from "@google/genai";
import { feedBackModel } from "../models/feedbackModel.js";
import "dotenv/config";

const ai = new GoogleGenAI({ apiKey: process.env.GOOGLE_GEMINI_API_KEY });

export const createFeedback = async (req, res) => {
    const { interviewId, userid, messages } = req.body;

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
            model: "gemini-1.5-flash", // Prefer the latest available
            contents: [{ role: "user", parts: [{ text: prompt }] }]
        });

        const response = await result.response;
        const text = await response.text();

        // Try parsing JSON from Gemini output
        let feedbackObj;
        let feedback;
        try {
            feedbackObj = JSON.parse(text);

            feedback = new feedBackModel({
                interViewId: interviewId, userId:userid,
                totalScore: feedbackObj.totalScore,
                categoryScore: feedbackObj.categoryScore,
                strengths: feedbackObj.strengths,
                areasForImprovements: feedbackObj.areasForImprovements,
                finalAssessment:feedbackObj.finalAssessment
            })
            await feedback.save();
            return res.status(200).json({
                success: true,
                feedbackId: feedback._id
            })
        } catch (parseError) {
            return res.status(500).json({ error: "Failed to parse AI response.", raw: text });
        }

    } catch (error) {
        console.error("Gemini API error:", error);
        res.status(500).json({ error: "Internal server error" });
    }
};
