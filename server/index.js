import express from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import cors from "cors";

// Custom Routing
import { assignmentRoutes } from "./routes/assignmentRouter.js";

// Instances
const app = express();

// Middleware
app.use(bodyParser.json());
app.use(cors());
dotenv.config();

// API Endpoints

app.use("/api/v1/assignment", assignmentRoutes);

const port = process.env.PORT || 9000;

const start = () => {
  try {
    app.listen(port, () => {
      console.log(`Server is running on PORT: ${port}...`);
    });
  } catch (error) {
    console.error(error);
  }
};

start();
