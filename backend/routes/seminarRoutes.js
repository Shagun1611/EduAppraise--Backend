import express from 'express';
import { createSeminar, getAllSeminars, getSeminarById, updateSeminar, deleteSeminar } from '../controllers/seminarController.js';

const router = express.Router();

// Create a new seminar
router.post('/create', createSeminar);

// Get all seminars
router.get('/get', getAllSeminars);

// Get a seminar by ID
router.get('/get/:id', getSeminarById);

// Update a seminar
router.put('/update/:id', updateSeminar);

// Delete a seminar
router.delete('/delete/:id', deleteSeminar);

export default router;
