import {Router} from 'express';
import Application from '../models/Application.js';
import auth from '../middleware/auth.js';
const router=Router();router.use(auth);
router.get('/',async(req,res,next)=>{try{const rows=await Application.find({user:req.user.id}).sort({date:-1,createdAt:-1});res.json(rows);}catch(e){next(e);}});
router.post('/',async(req,res,next)=>{try{const row=await Application.create({...req.body,user:req.user.id});res.status(201).json(row);}catch(e){next(e);}});
router.put('/:id',async(req,res,next)=>{try{const row=await Application.findOneAndUpdate({_id:req.params.id,user:req.user.id},req.body,{new:true,runValidators:true});if(!row)return res.status(404).json({message:'Application not found.'});res.json(row);}catch(e){next(e);}});
router.delete('/:id',async(req,res,next)=>{try{const row=await Application.findOneAndDelete({_id:req.params.id,user:req.user.id});if(!row)return res.status(404).json({message:'Application not found.'});res.json({message:'Application deleted.'});}catch(e){next(e);}});
export default router;
