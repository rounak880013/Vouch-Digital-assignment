Step1=connect to your Mongo by putting your database link in dbconnect.js

1=>http://localhost:8080/contact/add_contact
post call
{
    "Name":"Police",
    "Mobile_no":"100"
}

2=>http://localhost:8080/contact/add_bulk_contact
post call
[
{
    "Name":"Divya Kumari",
    "Mobile_no":"9625588574"
}
{
    "Name":"Rounak Raj",
    "Mobile no":"8287847383"
}
]

3=>http://localhost:8080/contact/get_contact
GET call
{
    "Name":"Rounak Raj",
    "Mobile no":"8287847383"
}

4=>http://localhost:8080/contact/get_partial_contact
GET call
{
    "Name":"Ro"
}

5=>http://localhost:8080/contact/contact_by_pagination
Get call
{
    "perPage":1,
    "page":1
}

6=>http://localhost:8080/contact/deleting_contact
post call
{
    "Name":"Rounak Raj",
    "Mobile no":"8287847383"
}

7=>http://localhost:8080/contact/update_contact
post call
{
    "Name":"Divya Kumari",
    "Mobile_no":"9958569122"
}

8=>http://localhost:8080/auth/signup
post call
{
    "email":"",
    "password":"qwertyuiop"
}