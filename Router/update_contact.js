// Function for updating contacts

const contact_data=require('../Models/contact');

async function update_contact(req,res){
    try{
        let user=await contact_data.findOne({ "Name":`${req.body.Name}` });
        console.log(user);
        if(user){
            const result = await userModel.updateOne({_id:`${user._id}`},{
                $set:{
                    Number:`${req.body.Mobile_no}`
                }
            });
        }
    }
    catch(err){
        console.log('catch');
    }
}
module.exports=update_contact;