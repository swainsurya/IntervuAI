import mongoose from "mongoose";

const interviewSchema = new mongoose.Schema({
    userid: { type: String, required: true },
    type: { type: String, required: true },
    role: { type: String, required: true },
    level: { type: String, required: true },
    finalized: { type: Boolean, default: false },
    coverImage: { type: String},
    amount: { type:Number, default: 2 },
    techstacks: { type: String, default:"Frontend"},
    questions:[]
},{
    timestamps: true
})

export const interviewModel = await mongoose.model("interview", interviewSchema);