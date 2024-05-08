import adminStaffRepository from "../repositories/adminStaffRepository.js";

const getAllAdminStaffDetails = async (req, res) => {
  try {
    const response = await adminStaffRepository.getAllAdminStaffDetails();
    res.status(200).json({ response });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

const createAdminStaff = async (req, res) => {
  const { email, password, role } = req.body;
  try {
    const response = await adminStaffRepository.createAdminStaff(
      email,
      password,
      role
    );
    res.status(201).json({ response });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

export { getAllAdminStaffDetails, createAdminStaff };
