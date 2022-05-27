// Function for Delete the given contact.

const contact_data=require('../Models/contact');

async function deleting_contact(req,res){
    contact_data.deleteOne(req.body.Name);
    res.status(200);
    res.send("contact deleted");
}
module.exports=deleting_contact;