// Function for Add a new contact.

const contact_data=require('../Models/contact');

async function add_contact(req,res){
    let user={
        Name:`${req.body.Name}`,
        Number:`${req.body.Mobile_no}`
    }
    await contact_data.create(user);
    res.status(200);
    res.send("contact added");
}
module.exports=add_contact;