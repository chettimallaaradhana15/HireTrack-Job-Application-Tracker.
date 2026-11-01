import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import authRoutes from './routes/auth.js';
import applicationRoutes from './routes/applications.js';
dotenv.config();
const app=express();
app.use(cors({origin:process.env.CLIENT_ORIGIN?.split(',')||true,credentials:true}));
app.use(express.json({limit:'1mb'}));
app.get('/api/health',(req,res)=>res.json({status:'ok',service:'HireTrack API'}));
app.use('/api/auth',authRoutes);
app.use('/api/applications',applicationRoutes);
app.use((err,req,res,next)=>{console.error(err);res.status(500).json({message:'Something went wrong.'});});
const port=process.env.PORT||5000;
if(process.env.MONGO_URI){mongoose.connect(process.env.MONGO_URI).then(()=>console.log('MongoDB connected')).catch(e=>console.error('MongoDB connection error:',e.message));}
app.listen(port,()=>console.log(`HireTrack API listening on ${port}`));
