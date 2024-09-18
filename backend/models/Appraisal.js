// models/FacultyForm.js
import mongoose from 'mongoose';

// Define the schema for the Faculty Self-Appraisal Form
const formSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  designation: {
    type: String,
    required: true,
  },
  phoneNo: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  department: {
    type: String,
    required: true,
  },
  dateOfAppointment: {
    type: Date,
    required: true,
  },
  dateOfLastPromotion: {
    type: Date,
    required: false, // Optional field
  },
  coursesTaught: {
    type: [String], // Array of strings for multiple courses taught
    required: false,
  },
  publications: {
    type: [String], // Array of strings for multiple publications
    required: false,
  },
  projects: {
    type: String, // Single string for the projects
    required: false,
  },
  certifications: {
    type: [String], // Array of strings for multiple certifications
    required: false,
  },
  goals: [
    {
      goal: {
        type: String,
        required: true,
      },
      progress: {
        type: String,
        required: true,
      },
    },
  ],
  performanceRating: {
    type: Number,
    required: true,
    min: 1,
    max: 5,
  },
  status: {
    type: String,
    enum: ['Pending', 'Approved', 'Updated','Rejected'], // Enum for status
    default: 'Pending', // Default value is 'Pending'
  },
}, { timestamps: true }); // Automatically adds createdAt and updatedAt fields

// Create the FacultyForm model
const FacultyForm = mongoose.model('FacultyForm', formSchema);

export default FacultyForm;
