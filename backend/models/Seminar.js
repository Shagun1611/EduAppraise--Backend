import mongoose from 'mongoose';

const seminarSchema = new mongoose.Schema({
  title: { type: String, required: true },
  date: { type: Date, required: true },
  location: { type: String, required: true },
  role: { type: String, required: true },  // Role of the faculty (Speaker, Participant, etc.)
  description: { type: String },
  faculty: { type: mongoose.Schema.Types.ObjectId, ref: 'Faculty', required: true },  // Reference to the faculty member
  createdAt: { type: Date, default: Date.now }
});

// Create and export Seminar model
const Seminar = mongoose.model('Seminar', seminarSchema);
export default Seminar;
