// controllers/adminController.js
import Admin from '../models/Admin.js';

// Create a new admin
const createAdmin = async (req, res) => {
  try {
    const admin = new Admin(req.body);
    await admin.save();
    res.status(201).json(admin);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Get all admins
const getAllAdmins = async (req, res) => {
  try {
    const admins = await Admin.find();
    res.status(200).json(admins);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get admin by ID
const getAdminById = async (req, res) => {
  try {
    const admin = await Admin.findOne({ adminId: req.params.adminId });
    if (!admin) return res.status(404).json({ message: 'Admin not found' });
    res.status(200).json(admin);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update an admin
const updateAdmin = async (req, res) => {
  try {
    const admin = await Admin.findOneAndUpdate(
      { adminId: req.params.adminId },
      { $set: req.body },
      { new: true }
    );
    if (!admin) return res.status(404).json({ message: 'Admin not found' });
    res.status(200).json(admin);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Delete an admin
const deleteAdmin = async (req, res) => {
  try {
    const admin = await Admin.findOneAndDelete({ adminId: req.params.adminId });
    if (!admin) return res.status(404).json({ message: 'Admin not found' });
    res.status(200).json({ message: 'Admin deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
export{createAdmin,getAllAdmins,getAdminById,updateAdmin,deleteAdmin}
