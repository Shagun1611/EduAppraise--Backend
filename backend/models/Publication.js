import mongoose from 'mongoose';

// Define Publication Schema
const publicationSchema = new mongoose.Schema({
  title: { type: String, required: true },
  journal: { type: String, required: true },
  datePublished: { type: Date, required: true },
  authors: [String],  // Array of author names
  link: { type: String },  // URL to the publication, if any
  faculty: { type: mongoose.Schema.Types.ObjectId, ref: 'Faculty', required: true },  // Reference to the faculty member
  createdAt: { type: Date, default: Date.now }
});

// Create and export Publication model
const Publication = mongoose.model('Publication', publicationSchema);
export default Publication;
