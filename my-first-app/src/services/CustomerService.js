
const customers=[
    { "id":1 , "name":"Bhakti Arude" , "city":"Pune" , "email":"bhakti233@gmail.com" , "Password":"bhakti123"},
    { "id":2 , "name":"Disha Satpute" , "city":"Mumbai" , "email":"disha33@gmail.com" , "Password":"disha23"},
    { "id":3 , "name":"Sanika Bhor" , "city":"Nashik" , "email":"sanu3@gmail.com" , "Password":"sanika3"},
    { "id":4 , "name":"Darshan Shinde" , "city":"Pune" , "email":"darshan563@gmail.com" , "Password":"pune3"},
    { "id":5 , "name":"Sakshi kamble" , "city":"Solapur" , "email":"sakshi73@gmail.com" , "Password":"sakshi3"},
    { "id":6 , "name":"Isha Bangar" , "city":"Khed" , "email":"abcs3@gmail.com" , "Password":"ishu453"},
];

const CustomerService={

 getall(){
        return customers ;
    },

 getByid(id){
    var customer=customers.find((p)=>(p.id===id));
    return customer;
   },

insert(product){
var customer=customers.push(product);
return customer;
},
update(id){
    var customer=customers.filter((p)=>(p.id!==id));
    customer.push(id);
    return customer;
},
remove(id){

    var removeperson=customers.filter((p)=>(p.id!==id));
    return removeperson;
}
}
export default CustomerService;