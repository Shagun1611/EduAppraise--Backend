import express from "express";
import cors from 'cors'
import dotenv from 'dotenv'
import routers from './routes/routes.js'
import connectDB from "./utlis/db.js";
import facultyRoutes from "./routes/facultyRoutes.js";
import publicationRoutes from "./routes/publicationRoutes.js"
import seminarRoutes from "./routes/seminarRoutes.js"
import appraisalRoutes from "./routes/appraisalRoutes.js"
import adminRoutes from "./routes/adminRoutes.js"


dotenv.config();
const port = process.env.PORT || 5000;
connectDB();
const app=express()

app.use(cors())
app.use(express.json())
app.use('/api',routers)
app.use('/api/faculties', facultyRoutes)
app.use('/api/publications', publicationRoutes); // Use new routes
app.use('/api/seminars',seminarRoutes);
app.use('/api/appraisal',appraisalRoutes)
app.use('/api/admin',adminRoutes)



app.listen(port, () => console.log(`Server running on port: ${port}`));