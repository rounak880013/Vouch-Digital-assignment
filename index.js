const express=require('express');
// Importing fuction for Add a new contact.
const add_contact=require('./Router/add_contact')
// Importing fuction for Add bulk contacts.
const add_bulk_contact=require('./Router/add_bulk')
// Importing fuction for Fetch details of single contact.
const get_contact=require('./Router/get_contact')
// Importing fuction for Fetch phase matching results.
const get_partial_contact=require('./Router/get_match')
// Importing fuction for Update the given contact.
const update_contact=require('./Router/update_contact')
// Importing fuction for Fetch the list of contacts with pagination.
const contact_by_pagination=require('./Router/contact_by_pagination')
// Importing fuction for Update the given contact.
const deleting_contact=require('./Router/Delete_contact')
// Importing fuction for signup
const signupuser=require('./Router/signup')
// Importing fuction for login
const loginuser=require('./Router/login')
const app=express();
let port = process.env.PORT || 8080;
app.listen(port,function(){
    console.log(`server is listening on port ${port}`);
});
app.use(express.json());

const contactrouter=express.Router();

app.use('/contact',contactrouter);
contactrouter
.route('/add_contact')
.post(add_contact);
contactrouter
.route('/add_bulk_contact')
.post(add_bulk_contact);
contactrouter
.route('/get_contact')
.get(get_contact);
contactrouter
.route('/get_partial_contact')
.get(get_partial_contact);
contactrouter
.route('/update_contact')
.post(update_contact);
contactrouter
.route('/contact_by_pagination')
.get(contact_by_pagination);
contactrouter
.route('/deleting_contact')
.post(deleting_contact);

const authrouter=express.Router();
app.use('/auth',authrouter);
authrouter
.route('/signup')
.post(signupuser);
authrouter.
route('/login')
.post(loginuser);