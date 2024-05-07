import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";

const prisma = new PrismaClient();

const getAllAdminStaffDetails = async () => {
  return await prisma.admin.findMany();
};

const createAdminStaff = async (email, password, role) => {
  if (!email || !password) {
    console.log("email & Password Mandatory");
  }

  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(password, salt);

  return await prisma.admin.create({
    data: {
      email,
      password: hash,
      role
    },
  });
};

const adminStaffRepository = {
  getAllAdminStaffDetails,
  createAdmin,
};
export default adminStaffRepository;
