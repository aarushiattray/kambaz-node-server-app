import mongoose from "mongoose";

const quizSchema = new mongoose.Schema(
  {
    _id: { type: String, required: true },
    course: { type: String, required: true },
    title: { type: String, required: true },
    description: { type: String },
    points: { type: Number, default: 0 },
    numberOfQuestions: { type: Number, default: 0 },
    questions: [
      {
        questionText: String,
        points: { type: Number, default: 1 },
        choices: [String],
        correctAnswer: String,
      },
    ],
    availableDate: { type: Date },
    dueDate: { type: Date },
    availableUntil: { type: Date },
    published: { type: Boolean, default: false },
    studentScores: { type: Map, of: Number },
    shuffleAnswers: { type: Boolean, default: true },
    oneQuestionAtATime: { type: Boolean, default: true },
    webcamRequired: { type: Boolean, default: false },
    lockQuestionsAfterAnswering: { type: Boolean, default: false },
    showCorrectAnswers: { type: Boolean, default: false },
    accessCode: { type: String, default: "" },
    multipleAttempts: { type: Boolean, default: false },
    howManyAttempts: { type: Number, default: 1 },
    assignmentGroup: { type: String, default: "Quizzes" },
  },
  { collection: "quizzes" }
);

export default quizSchema;
