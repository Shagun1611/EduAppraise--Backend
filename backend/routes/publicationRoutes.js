import express from 'express';
import { createPublication, getAllPublications, getPublicationById, updatePublication, deletePublication } from '../controllers/publicationController.js';

const router = express.Router();

// Route to create a new publication
router.post('/create', createPublication);

// Route to get all publications
router.get('/get', getAllPublications);

// Route to get a publication by ID
router.get('/get/:publicationId', getPublicationById);

// Route to update a publication by ID
router.put('/update/:publicationId', updatePublication);

// Route to delete a publication by ID
router.delete('/delete/:publicationId', deletePublication);

export default router;
