import AssignmentsDao from "./dao.js";

export default function AssignmentsRoutes(app) {
  const dao = AssignmentsDao();

  const findAssignmentsForCourse = async (req, res) => {
    const { courseId } = req.params;
    const assignments = await dao.findAssignmentsForCourse(courseId);
    res.json(assignments);
  };

  const createAssignmentForCourse = async (req, res) => {
    const { courseId } = req.params;
    const assignment = { ...req.body, course: courseId };
    const newAssignment = await dao.createAssignment(assignment);
    res.json(newAssignment);
  };

  const updateAssignment = async (req, res) => {
    const { assignmentId } = req.params;
    const updated = await dao.updateAssignment(assignmentId, req.body);
    if (!updated) return res.status(404).json({ error: "Assignment not found" });
    res.json(updated);
  };

  const deleteAssignment = async (req, res) => {
    const { assignmentId } = req.params;
    const result = await dao.deleteAssignment(assignmentId);
    res.json(result);
  };

  app.get("/api/courses/:courseId/assignments", findAssignmentsForCourse);
  app.post("/api/courses/:courseId/assignments", createAssignmentForCourse);
  app.put("/api/assignments/:assignmentId", updateAssignment);
  app.delete("/api/assignments/:assignmentId", deleteAssignment);
}
