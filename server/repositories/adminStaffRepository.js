import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";

const prisma = new PrismaClient();

const getAllAdminStaffDetails = async () => {
  return await prisma.admin.findMany();
};

const createAdmin = async (username, password) => {
  if (!username || !password) {
    console.log("Username & Password Mandatory");
  }

  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(password, salt);

  return await prisma.admin.create({
    data: {
      username,
      password: hash,
    },
  });
};

const adminRepository = {
  getAllAdminStaffDetails,
  createAdmin,
};
export default adminRepository;
