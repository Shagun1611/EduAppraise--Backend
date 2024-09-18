import Faculty from '../models/faculty.js';  // Use import for ES modules

// Create a new faculty
const createFaculty = async (req, res) => {
  try {
    const faculty = new Faculty(req.body);
    await faculty.save();
    res.status(201).json(faculty);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Get all faculties
const getAllFaculties = async (req, res) => {
  try {
    const faculties = await Faculty.find();
    res.status(200).json(faculties);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get faculty by ID
const getFacultyById = async (req, res) => {
  try {
    const faculty = await Faculty.findOne({ facultyId: req.params.facultyId });
    if (!faculty) return res.status(404).json({ message: 'Faculty not found' });
    res.status(200).json(faculty);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update a faculty
const updateFaculty = async (req, res) => {
  try {
    const faculty = await Faculty.findOneAndUpdate(
      { facultyId: req.params.facultyId },
      { $set: req.body },
      { new: true }
    );
    if (!faculty) return res.status(404).json({ message: 'Faculty not found' });
    res.status(200).json(faculty);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Delete a faculty
const deleteFaculty = async (req, res) => {
  try {
    const faculty = await Faculty.findOneAndDelete({ facultyId: req.params.facultyId });
    if (!faculty) return res.status(404).json({ message: 'Faculty not found' });
    res.status(200).json({ message: 'Faculty deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
export {createFaculty,getAllFaculties,getFacultyById,updateFaculty,deleteFaculty}
