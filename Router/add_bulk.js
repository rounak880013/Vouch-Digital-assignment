// Function for Add bulk contacts.// Function for Add a new contact.

const contact_data=require('../Models/contact');

async function add_bulk_contact(req,res){
    for(let i=0;i<req.body.length;i++){
        let user={
            Name:`${req.body[i].Name}`,
            Number:`${req.body[i].Mobile_no}`
        }
        await contact_data.create(user);
    }
    res.status(200);
    res.send("contact added");
}
module.exports=add_bulk_contact;