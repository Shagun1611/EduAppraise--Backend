import mongoose from 'mongoose';

// Define Faculty Schema
const facultySchema = new mongoose.Schema({
  facultyId: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true }, // Hashed password for security
  department: { type: String, required: true },
  designation: { type: String, required: true },
  joiningDate: { type: Date, required: true },
  publications: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Publication' }],
  seminars: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Seminar' }],
  projects: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Project' }],
  lastAppraisalDate: { type: Date },
  createdAt: { type: Date, default: Date.now }
});

// Create and export Faculty model
const Faculty = mongoose.model('Faculty', facultySchema);
export default Faculty;
