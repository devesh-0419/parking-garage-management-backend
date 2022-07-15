const express = require('express');
const Consumer= require('../model/consumer');
const createConsumer= require('../controllers/createConsumer');
const reserveSpot = require('../controllers/reserveSpot');


const router = express();

router.post('/',async(req,res)=>{

   try {
      
      let consumer= await Consumer.findOne({vehicleNumber:req.body.vehicleNumber});
        if(consumer) return res.send(`${req.body.vehicleNumber}already present Please check Number.`);

       consumer=await createConsumer(req.body);
      
     res.header({_id:consumer._id}).send(`Registered Sucessfully....`);

   } catch (error) {
      
      console.error(error.message);
   }
});

module.exports=router;