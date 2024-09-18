import Seminar from '../models/Seminar.js';

// Create a new seminar
const createSeminar = async (req, res) => {
  try {
    const seminar = new Seminar(req.body);
    await seminar.save();
    res.status(201).json(seminar);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Get all seminars
const getAllSeminars = async (req, res) => {
  try {
    const seminars = await Seminar.find().populate('faculty');  // Populating faculty data
    res.status(200).json(seminars);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get seminar by ID
const getSeminarById = async (req, res) => {
  try {
    const seminar = await Seminar.findById(req.params.id).populate('faculty');
    if (!seminar) return res.status(404).json({ message: 'Seminar not found' });
    res.status(200).json(seminar);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update a seminar
const updateSeminar = async (req, res) => {
  try {
    const seminar = await Seminar.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    ).populate('faculty');
    if (!seminar) return res.status(404).json({ message: 'Seminar not found' });
    res.status(200).json(seminar);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Delete a seminar
const deleteSeminar = async (req, res) => {
  try {
    const seminar = await Seminar.findByIdAndDelete(req.params.id);
    if (!seminar) return res.status(404).json({ message: 'Seminar not found' });
    res.status(200).json({ message: 'Seminar deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
export{createSeminar,getAllSeminars,getSeminarById,updateSeminar,deleteSeminar}
