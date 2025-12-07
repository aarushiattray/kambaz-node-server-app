import model from "./model.js";
import { v4 as uuidv4 } from "uuid";

export default function AssignmentsDao() {

  async function findAssignmentsForCourse(courseId) {
    return model.find({ course: courseId });
  }

  async function createAssignment(assignment) {
    const newAssignment = { ...assignment, _id: uuidv4() };
    return model.create(newAssignment);
  }

  async function updateAssignment(assignmentId, updates) {
    const updated = await model.findByIdAndUpdate(assignmentId, updates, { new: true });
    return updated;
  }

  async function deleteAssignment(assignmentId) {
    const result = await model.deleteOne({ _id: assignmentId });
    return { success: result.deletedCount > 0 };
  }

  return {
    findAssignmentsForCourse,
    createAssignment,
    updateAssignment,
    deleteAssignment,
  };
}
