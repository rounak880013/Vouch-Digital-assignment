//  table for maintaining records of users

const mongoose=require('mongoose');
const connect=require('../dbconnect');
const userSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
});
const userModel=mongoose.model('userModal',userSchema);
module.exports=userModel;