import QuizzesDao from "./dao.js";

export default function QuizzesRoutes(app) {
const dao = QuizzesDao();

const findQuizzesForCourse = async (req, res) => {
const { courseId } = req.params;
const quizzes = await dao.findQuizzesForCourse(courseId);
res.json(quizzes);
};

const createQuizForCourse = async (req, res) => {
const { courseId } = req.params;
const quiz = { ...req.body, course: courseId };
const newQuiz = await dao.createQuiz(quiz);
res.json(newQuiz);
};

const updateQuiz = async (req, res) => {
const { quizId } = req.params;
const updated = await dao.updateQuiz(quizId, req.body);
if (!updated) return res.status(404).json({ error: "Quiz not found" });
res.json(updated);
};

const deleteQuiz = async (req, res) => {
const { quizId } = req.params;
const result = await dao.deleteQuiz(quizId);
res.json(result);
};

const findQuizById = async (req, res) => {
    const { quizId } = req.params;
    const quiz = await dao.findQuizById(quizId);
    if (!quiz) return res.status(404).json({ error: "Quiz not found" });
    res.json(quiz);
  };

app.get("/api/courses/:courseId/quizzes", findQuizzesForCourse);
app.post("/api/courses/:courseId/quizzes", createQuizForCourse);
app.put("/api/quizzes/:quizId", updateQuiz);
app.delete("/api/quizzes/:quizId", deleteQuiz);
app.get("/api/quizzes/:quizId", findQuizById);
}
