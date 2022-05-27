// for connecting mongodb

const mongoose=require('mongoose');
const db_link="connect your mongo here"
mongoose.connect(db_link).then(function(){
    console.log('db_connect');
})
.catch(function(err){
    console.log(err);
});