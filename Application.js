import mongoose from 'mongoose';
const schema=new mongoose.Schema({
 user:{type:mongoose.Schema.Types.ObjectId,ref:'User',required:true,index:true},
 company:{type:String,required:true,trim:true},role:{type:String,required:true,trim:true},
 location:{type:String,default:''},type:{type:String,default:'Full-time'},
 status:{type:String,enum:['Applied','Interview','Offer','Rejected','Saved'],default:'Applied'},
 date:{type:String,required:true},salary:{type:String,default:''},notes:{type:String,default:''}
},{timestamps:true});
export default mongoose.model('Application',schema);
