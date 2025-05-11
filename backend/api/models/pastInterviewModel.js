import mongoose from "mongoose";

const pastInterviewSchema = new mongoose.Schema({
    userid: {type: String, required: true},
    role: {type: String, required: true},
    description: {type: String, required: true},
    rating: {type: String},
    interviewId: {type: String, required: true}
})

export const pastInterviewModel = await mongoose.model("pasts",pastInterviewSchema);