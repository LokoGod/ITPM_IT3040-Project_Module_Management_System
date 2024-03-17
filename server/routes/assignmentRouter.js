import express from "express";
const assignmentRoutes = express.Router();

import {
  getAllAssignments,
  createAssignment,
} from "../controllers/assignmentController.js";

assignmentRoutes.route("/").get(getAllAssignments).post(createAssignment);

export { assignmentRoutes };
