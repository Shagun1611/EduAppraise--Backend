// models/admin.js
import mongoose from 'mongoose';

const adminSchema = new mongoose.Schema({
  adminId: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },  // Hashed password for security
  role: { type: String, default: 'admin' },  // Admin role
  createdAt: { type: Date, default: Date.now }
});

const Admin = mongoose.model('Admin', adminSchema);
export default Admin;
