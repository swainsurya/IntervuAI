import mongoose from "mongoose";

const pastInterviewSchema = new mongoose.Schema({
    interviewId: {type: String, required: true}
}, {timestamps: true});

const userSchema = new mongoose.Schema({
    fullname: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    pastInterviews:[pastInterviewSchema]
},{
    timestamps:true
})

export const userModel = await mongoose.model("user", userSchema);