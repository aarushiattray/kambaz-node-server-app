import EnrollmentsDao from "./dao.js";

export default function EnrollmentsRoutes(app, db) {
  const dao = EnrollmentsDao(db);

  // Get all enrollments for a user
  const findEnrollmentsForUser = (req, res) => {
    const { userId } = req.params;
    const enrollments = dao.findEnrollmentsForUser(userId);
    res.json(enrollments);
  };

  // Enroll user in a course
  const enrollUserInCourse = (req, res) => {
    const { courseId } = req.params;
    const { userId } = req.body; // send { userId } in body
    if (!userId) return res.status(400).json({ error: "userId is required" });

    const newEnrollment = dao.enrollUserInCourse(userId, courseId);
    res.json(newEnrollment);
  };

  // Unenroll user from a course
  const unenrollUserFromCourse = (req, res) => {
    const { courseId, userId } = req.params;
    const deletedEnrollment = dao.unenrollUserFromCourse(userId, courseId);
    if (!deletedEnrollment) return res.status(404).json({ error: "Enrollment not found" });
    res.json(deletedEnrollment);
  };

  // Routes
  app.get("/api/users/:userId/enrollments", findEnrollmentsForUser);
  app.post("/api/courses/:courseId/enrollments", enrollUserInCourse);
  app.delete("/api/courses/:courseId/enrollments/:userId", unenrollUserFromCourse);
}
