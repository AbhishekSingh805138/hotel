const express = require('express');
const router = express.Router();
const Person = require('./../models/Person');

//POST ROUTE TO ADD A PERSON

router.post('/', async (req, res) => {// is type ka menuitem ka post methode bna d
    try {
        const data =req.body//asumming the request bpdy contains the person data
        const newPerson=new Person(data);// create a new person document using the monnhose  model
      
      // Save the new person to the database using await
      const response = await newPerson.save();
      console.log('Saved person to database');
      res.status(201).json(response);
    } catch (error) {
      console.error('Error saving person:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  });

     //GET THE PERSON
     router.get('/', async (req, res) => {// is type ka menuitem ka get methode bna do
        try {
        
          const data = await Person.find();
          console.log('fetched  person to database');
          res.status(201).json(data);
        } catch (error) {
          console.error('Error saving person:', error);
          res.status(500).json({ error: 'Internal server error' });
        }
      });

         //PARAMETERIZED API // http://localhost:3000/person/chef  person ke sath chf ka hi milega
    
router.get('//:workType', async (req, res) => {
    try {
      const workType = req.params.workType; // Extract the work type from the URL parameter
      if(workType=="chef" || workType=="manager" || workType=="waiter"){
        const response = await Person.find({work:workType});    // Assuming you already have a Person model and MongoDB connection set up
  
        console.log("response fetcged");
        res.status(200).json(response);
      }else{
        res.status(404).json({ error: 'Internal work  error' });
  
      }
  
    } catch (error) {
      console.error('Error fetching persons:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  });


  ///UPDATE THE DATA IN DATA
  router.put('/:id', async (req,res) =>{
    try{
        const personId = req.params.id;    //id-params kai through
        const updatedPersonData = req.body; //body mai jo data update krna hota h uss bhejte h body k through

        const response = await Person.findByIdAndUpdate(personId, updatedPersonData, {
            new: true,    //return the updated document (return to response)
            runValidators: true,   //Run Mongoose validation (check are required field)
        })
        if (!response){// AGAR RESPONSE NHI AAYA
            return res.status(404).json({error: 'Person not found'});        
        }

        console.log('data updated')
        res.status(200).json(response);

        

    }catch(err){
        console.log(err);  
        res.status(500).json({error: 'Internal Server Error'});
    }
})

//DELETE THE RECORD
router.delete('/:id', async(req,res) =>{
    try{
        const personId = req.params.id;  //Extract personId from the URL parameter
        //Assuming you have a Person model
        const response = await Person.findByIdAndDelete(personId);
        if (!response){
            return res.status(404).json({error: 'Person not found'});
        }
        console.log('data deleted')
        res.status(200).json('Person deleted success');

    }catch(err){
        console.log(err);  
        res.status(500).json({error: 'Internal Server Error'});
    }
})

  module.exports = router;


