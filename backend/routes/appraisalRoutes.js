// routes/facultyFormRoutes.js
import express from 'express';
import {
  createForm,
  getAllForms,
  getFormById,
  updateForm,
  deleteForm,updateStatus
} from '../controllers/appraisalController.js';

const router = express.Router();

// Route to create a new form
router.post('/create', createForm);

// Route to get all forms
router.get('/get', getAllForms);

// Route to get a specific form by ID
router.get('/get/:id', getFormById);

// Route to update a specific form by ID
router.put('/update/:id', updateForm);

// Route to delete a specific form by ID
router.delete('/delete/:id', deleteForm);

router.put('/status/:id/status', updateStatus);

export default router;
