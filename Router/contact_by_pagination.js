// Function for Fetch the list of contacts with pagination.

const contact_data=require('../Models/contact');

async function contact_by_pagination(req,res){
    console.log(req.body);
    let user=await contact_data.find({}).skip(req.body.perPage * req.body.page).limit(req.body.perPage);
    res.status(200);
    res.send(user);
}
module.exports=contact_by_pagination;