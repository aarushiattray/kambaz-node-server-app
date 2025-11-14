import { v4 as uuidv4 } from "uuid";

export default function EnrollmentsDao(db) {
  function findEnrollmentsForUser(userId) {
    const { enrollments } = db;
    return enrollments.filter(e => e.user === userId);
  }

  function enrollUserInCourse(userId, courseId) {
    const { enrollments } = db;
    const exists = enrollments.find(e => e.user === userId && e.course === courseId);
    if (exists) return exists;

    const newEnrollment = { _id: uuidv4(), user: userId, course: courseId };
    db.enrollments = [...db.enrollments, newEnrollment];
    return newEnrollment;
  }

  function unenrollUserFromCourse(userId, courseId) {
    const { enrollments } = db;
    const enrollment = enrollments.find(e => e.user === userId && e.course === courseId);
    if (!enrollment) return null;

    db.enrollments = enrollments.filter(e => !(e.user === userId && e.course === courseId));
    return enrollment;
  }

  return {
    findEnrollmentsForUser,
    enrollUserInCourse,
    unenrollUserFromCourse,
  };
}
