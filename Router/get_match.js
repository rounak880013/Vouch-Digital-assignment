// Function for Fetch phase matching results.

const contact_data=require('../Models/contact');

async function get_partial_contact(req,res){
    let temp=[];
    let user=await contact_data.find();
    console.log(user);
    for(let i=0;i<user.length;i++){
        if(user[i].Name.includes(`${req.body.Name}`)){
            temp.push(user[i]);
        }
    }
    res.status(200);
    res.send(temp);
}
module.exports=get_partial_contact;