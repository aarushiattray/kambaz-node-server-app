import mongoose from "mongoose";

const assignmentSchema = new mongoose.Schema(
  {
    _id: { type: String, required: true },
    course: { type: String, required: true },
    title: { type: String, required: true },
    description: { type: String },
    points: { type: Number, required: true },
    availableDate: { type: String },  
    dueDate: { type: String },
    availableUntil: { type: String },
  },
  { collection: "assignments" }
);

export default assignmentSchema;
