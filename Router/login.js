// Function for login & JWT authentication to secure API.

const userModel=require('../Models/user');
const jwt = require('jsonwebtoken');
const JWT_key="qwertyuiop";
async function loginuser(req,res){
    const { email, password } = req.body;
    try{
        let user=await userModel.findOne({ email });
        if(user.password==password){
            let token=jwt.sign({id:user._id},JWT_key);
            res.cookie('login',token,{httpOnly:true});
            res.send('logged in')
        }
    }
    catch(err){
        console.log('catch');
    }
}
module.exports=loginuser;