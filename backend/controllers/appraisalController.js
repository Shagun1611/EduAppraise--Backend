// controllers/facultyFormController.js
import FacultyForm from '../models/Appraisal.js';

// Create a new Faculty Self-Appraisal Form
const createForm = async (req, res) => {
  try {
    // The status is automatically set to "Pending" by default in the model
    const newForm = new FacultyForm(req.body);
    const savedForm = await newForm.save();
    res.status(201).json(savedForm);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Get all Faculty Self-Appraisal Forms
const getAllForms = async (req, res) => {
  try {
    const forms = await FacultyForm.find();
    res.status(200).json(forms);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get a single Faculty Self-Appraisal Form by ID
const getFormById = async (req, res) => {
  try {
    const form = await FacultyForm.findById(req.params.id);
    if (!form) return res.status(404).json({ message: 'Form not found' });
    res.status(200).json(form);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update a Faculty Self-Appraisal Form by ID
const updateForm = async (req, res) => {
  try {
    const updatedForm = await FacultyForm.findByIdAndUpdate(
      req.params.id, 
      { ...req.body, status: 'Updated' }, // Set the status to 'Updated'
      { new: true }
    );
    
    if (!updatedForm) return res.status(404).json({ message: 'Form not found' });

    res.status(200).json(updatedForm);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Approve a Faculty Self-Appraisal Form (Admin only)
const approveForm = async (req, res) => {
  try {
    const form = await FacultyForm.findByIdAndUpdate(
      req.params.id,
      { status: 'Approved' }, // Set the status to 'Approved'
      { new: true }
    );
    
    if (!form) return res.status(404).json({ message: 'Form not found' });

    res.status(200).json(form);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Delete a Faculty Self-Appraisal Form by ID
const deleteForm = async (req, res) => {
  try {
    const deletedForm = await FacultyForm.findByIdAndDelete(req.params.id);
    if (!deletedForm) return res.status(404).json({ message: 'Form not found' });
    res.status(200).json({ message: 'Form deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update only the status of a Faculty Self-Appraisal Form
const updateStatus = async (req, res) => {
  try {
    const form = await FacultyForm.findById(req.params.id);
    
    if (!form) return res.status(404).json({ message: 'Form not found' });

    // Update the status
    form.status = req.body.status;

    // Save the updated form
    const updatedForm = await form.save();

    res.status(200).json({ message: 'Status updated successfully', form: updatedForm });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


export { createForm, getAllForms, getFormById, updateForm, deleteForm, approveForm ,updateStatus};
