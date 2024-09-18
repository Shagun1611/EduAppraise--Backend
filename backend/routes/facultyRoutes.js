import { createFaculty, getAllFaculties, getFacultyById, updateFaculty, deleteFaculty } from '../controllers/facultyController.js';  // Named imports

import express from 'express';
const router = express.Router();

// Route to create a new faculty
router.post('/create', createFaculty);

// Route to get all faculties
router.get('/get', getAllFaculties);

// Route to get a faculty by ID
router.get('/get/:facultyId', getFacultyById);

// Route to update a faculty by ID
router.put('/update/:facultyId', updateFaculty);

// Route to delete a faculty by ID
router.delete('/delete/:facultyId', deleteFaculty);

export default router;
