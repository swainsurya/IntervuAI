import mongoose from "mongoose";

const feedbackSchema = new mongoose.Schema({
    interViewId: {type: String, required: true},
    userId: {type: String, required: true},
    totalScore: {type:Number, required: true},
    categoryScore: {type:Object},
    strengths: [],
    areasForImprovements: [],
    finalAssessment: {type:String},
    createdDate: {type: String, default:  new Date().toISOString()},
    role: {type: String, default: "Technical Engineer"},
    desc: {type:String}
})

export const feedBackModel = await mongoose.model("feedback",feedbackSchema);