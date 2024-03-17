import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

const getAllAssignments = async () => {
  try {
    return prisma.assignment.findMany();
  } catch (error) {
    console.error(error);
  }
};

const createAssignment = () => {
  try {
    return;
  } catch (error) {}
};
