import assignmentRepository from "../repositories/assignmentRepository.js";

const getAllAssignments = async (req, res) => {
  try {
    const response = await assignmentRepository.getAllAssignments();
    res.status(200).json({ response });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error " });
  }
};

const createAssignment = async (req, res) => {
  try {
    const { assignment_title, assignment_details } = req.body;
    const response = await assignmentRepository.createAssignment(
      assignment_title,
      assignment_details
    );
    res.status(201).json({ response });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

export { getAllAssignments, createAssignment}
