const express = require('express');
const Consumer= require('../model/consumer');


const router = express();

router.post('/',async(req,res)=>{

   try {
      
      let consumer= await Consumer.findOne({vehicleNumber:req.body.vehicleNumber});
        if(consumer) return res.send(`/"${req.body.vehicleNumber}/" already present Please check Number.`);

       let user=req.body
        consumer=new Consumer({
           name:user.name,
           vehicleNumber:user.vehicleNumber,
           mobileNumber:user.mobileNumber,
           typeOfVehicle:user.typeOfVehicle,
          

        });
        await consumer.save();
     res.send('Registered Sucessfully....');

   } catch (error) {
      
      console.error(error.message);
   }
});

module.exports=router;