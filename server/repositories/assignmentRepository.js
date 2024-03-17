import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

const getAllAssignments = async () => {
  return await prisma.assignment.findMany();
};

const createAssignment = async (assignment_title, assignment_details) => {
  return await prisma.assignment.create({
    data: {
      assignment_title,
      assignment_details,
    },
  });
};

const assignmentRepository = {
  getAllAssignments,
  createAssignment,
};
export default assignmentRepository;
