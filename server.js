//const notes =require('./notes.js');// importing notes js file to server.js

//import other server


//var age = notes.age;
//console.log(age);

//var result = notes.addNumber(age,18);
//console.log(result);

const express = require('express')
const app = express()// app ke jagah kuch aur bhi ho sakta hai
const db = require('./db');// for connection database
require('dotenv').config();// ab server ko pta hai ek dot env krke ek file hai

const bodyParser = require('body-parser'); 
app.use(bodyParser.json());// store kr dega req.bpdy me
const PORT =process.env.PORT || 3000;// isse ye hoga agr port dot env file me hoga  toh use hoga agr nhi huaa toh 30000 use krega

// person model export
 //const MenuItem = require('./models/MenuItem');// menu item export



      

      

      

  
      
          
        
     

      
        
      
   
    


    //const data =req.body// assuming the rquest body contains the person data store hoga // outdated

    //CREATE A NEW PERSON DOCUMENT USING THE MOONGSE MODEL
   // const newPerson = new Person(data);// outdatd

    //save the new  person to the database
   // ●Nowadays no one uses callback functions like, we used in the POST methods They look quite complex and also do not give us code readability.
//●What actually callback does, callback is a function that is executed just after the execution of another main function, it means the callback will wait until its main function is not executed
   ///newPerson.save((error, savedPerson) => {

    //if (error) {
      //console.error('Error saving person:', error);
     // res.status(500).json({ error: 'Internal server error' });
   // } else {
    //  console.log('Data saved');
    //  res.status(201).json(savedPerson);
   // }
  //});
    //newPerson.name=data.name
    //newPerson.name=data.name
    //newPerson.name=data.name
    //newPerson.name=data.name
    //newPerson.name=data.name  

app.get('/', function (req, res) {
  res.send('Hello World')
})

 //app.get('/chicken', function (req, res) {// app.get('chicken ,  (req,res)=>{res.send("nvkjkjvbfj")} arrow function
  //  res.send('love chicken')
////})

//app.get('/idli', function (req, res) {// // app.get('chicken ,  (req,res)=>{res.send("nvkjkjvbfj")} arrow function
   // var cust_idli={
      //  name:"rava idli",
       // size:'10 cm',
       // is_samabar:true,
       ///// is_chuteny:false
   // }
    //res.send(cust_idli)
//})

// post method
//app.post('/items',(req,res)=>{
   /// res.send("data is saved")
//})


// import router files
const personRoutes=require('./routes/personRoutes');
const menuItemRoutes=require('./routes/menuItemRoutes');
//use the routes
app.use('/person',personRoutes);  
// use the routes 
app.use('/menu',menuItemRoutes);  


app.listen(PORT,()=>{
    console.log("listening on port ");//isse pta chalega server jinda hai
})



//var fs = require('fs');
//var os = require('os');// to know the opersting system


//var user = os.userInfo();
//console.log(user.username);
//console.log(user);

//fs.appendFile('gretting.txt','Hi' + user.username + '!', ()=>{//USER NAME OS NIKAL AKR DIYA HAI FS MEANS FILE SYSTEM
  //  console.log('file is created');// CALL BACK FUNCTION
//});

//console.log(os);//to know function of os
//console.log(fs);// to know function of fs

