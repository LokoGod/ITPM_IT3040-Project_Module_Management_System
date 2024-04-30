import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

const getAllAdminDetails = async () => {
  return await prisma.admin.findMany();
};

const createAdmin = async () => {
  return await prisma.admin.create({});
};

const adminRepository = {
  getAllAdminDetails,
  createAdmin,
};
export default adminRepository;
