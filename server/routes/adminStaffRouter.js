import express from "express";
const adminStaffRoutes = express.Router();

import {
  getAllAdminStaffDetails,
  createAdminStaff,
} from "../controllers/adminStaffController.js";

adminStaffRoutes.route("/").get(getAllAdminStaffDetails);
adminStaffRoutes.route("/adminStaffCreate").post(createAdminStaff);

export { adminStaffRoutes };
