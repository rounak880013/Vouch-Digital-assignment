// Function for creating new user

const userModel=require('../Models/user');
async function signupuser(req,res){
    let user={
        name:`${req.body.name}`,
        email:`${req.body.email}`,
        password:`${req.body.password}`
    };
    let userObj=await userModel.create(user);
    res.status(200);
    res.send('signed in');
}
module.exports=signupuser;