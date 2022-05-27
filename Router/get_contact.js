// Function for Fetch details of single contact.


const contact_data=require('../Models/contact');

async function get_contact(req,res){
    console.log(req.body);
    let user=await contact_data.findOne({ "Name":`${req.body.Name}` });
    res.status(200);
    res.send(user);
}
module.exports=get_contact;