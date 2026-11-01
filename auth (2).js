import {Router} from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import User from '../models/User.js';
const router=Router();
router.post('/register',async(req,res,next)=>{try{
 const {name,email,password}=req.body;
 if(!name||!email||!password||password.length<6)return res.status(400).json({message:'Name, valid email and password (6+ characters) are required.'});
 if(await User.findOne({email}))return res.status(409).json({message:'An account with this email already exists.'});
 const user=await User.create({name,email,password:await bcrypt.hash(password,12)});
 const token=jwt.sign({id:user._id},process.env.JWT_SECRET,{expiresIn:'7d'});
 res.status(201).json({token,user:{id:user._id,name:user.name,email:user.email}});
}catch(e){next(e);}});
router.post('/login',async(req,res,next)=>{try{
 const {email,password}=req.body;const user=await User.findOne({email});
 if(!user||!await bcrypt.compare(password,user.password))return res.status(401).json({message:'Invalid email or password.'});
 const token=jwt.sign({id:user._id},process.env.JWT_SECRET,{expiresIn:'7d'});
 res.json({token,user:{id:user._id,name:user.name,email:user.email}});
}catch(e){next(e);}});
export default router;
