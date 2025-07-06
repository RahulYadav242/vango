import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import authRoutes from './routes/auth.route.js';
import dotenv from 'dotenv';


dotenv.config();
const app = express();

// ✅ Setup CORS first


app.use(cors({
  origin: ["http://localhost:5173", "https://vango-td7i.onrender.com"],
  credentials: true,
}));



// ✅ Then parse cookies and JSON
app.use(cookieParser());
app.use(express.json());

// ✅ Then your routes
app.use('/api/auth', authRoutes);

import {connectDB} from '../src/lib/db.js'
import User from './models/user.model.js';





const PORT = process.env.PORT || 5001;

app.listen(PORT, () => {
    console.log(`server is running on ${PORT}`);
    connectDB()
})

