import mongoose from "mongoose";

const quizSchema = new mongoose.Schema(
{
_id: { type: String, required: true },
course: { type: String, required: true },
title: { type: String, required: true },
description: { type: String },
points: { type: Number, default: 0 },
numberOfQuestions: { type: Number, default: 0 },
availableDate: { type: String },
availableUntil: { type: String },
published: { type: Boolean, default: false },
studentScores: { type: Map, of: Number }, // { studentId: score }
},
{ collection: "quizzes" }
);

export default quizSchema;
