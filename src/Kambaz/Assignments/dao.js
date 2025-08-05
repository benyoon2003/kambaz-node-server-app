import Database from "../Database/index.js";
import { v4 as uuidv4 } from "uuid";

export function createAssignment(assignment) {
  const newAssignment = { ...assignment, _id: uuidv4() };
  Database.assignments = [...Database.assignments, newAssignment];
  return newAssignment;
}

export function findAllAssignments() {
  return Database.assignments;
}

export function findAssignmentById(id) {
  return Database.assignments.find((a) => a._id === id);
}

export function updateAssignment(id, updates) {
  const assignment = Database.assignments.find((a) => a._id === id);
  Object.assign(assignment, updates);
  return assignment;
}

export function deleteAssignment(id) {
  Database.assignments = Database.assignments.filter((a) => a._id !== id);
}
