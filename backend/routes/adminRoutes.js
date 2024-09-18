// routes/adminRoutes.js
import express from 'express';
import { createAdmin, getAllAdmins, getAdminById, updateAdmin, deleteAdmin } from '../controllers/adminController.js';

const router = express.Router();

// Routes for CRUD operations
router.post('/create', createAdmin);
router.get('/get', getAllAdmins);
router.get('/get/:adminId', getAdminById);
router.put('/update/:adminId', updateAdmin);
router.delete('/delete/:adminId', deleteAdmin);

export default router;
