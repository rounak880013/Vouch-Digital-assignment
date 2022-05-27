// Table for maintaining records of contacts

const mongoose=require('mongoose');
const connect=require('../dbconnect');

let contact_schema= new mongoose.Schema({
    Name:{
        type:String,
        required:true
    },
    Number:{
        type:Number,
        required:true
    }
})
const contact_data=mongoose.model('contact_data',contact_schema);
module.exports=contact_data;