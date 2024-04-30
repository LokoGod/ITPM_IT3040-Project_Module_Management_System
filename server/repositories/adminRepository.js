import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

import bcrypt from "bcrypt";

const getAllAdminDetails = async () => {
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
  getAllAdminDetails,
  createAdmin,
};
export default adminRepository;
