const express = require('express');
//const { findOneAndDelete } = require('../model/consumer');
const Consumer= require('../model/consumer');
const ConsumerLogs= require('../model/consumerLogs');

const router = express();

router.post('/',async (req,res)=>{
    try {
        let user=req.body;
           let consumer= await Consumer.findOne({vehicleNumber:user.vehicleNumber});
           if(!consumer) return res.send(`${req.body.vehicleNumber} not found check the number.`);
    
         let price = consumer.getChargeAmount(Date.now());
       console.log('rentPrice', price)

           res.send(`Price for the Parking will be ${price}`);
       user=consumer;
          let consumerLogs= new ConsumerLogs({
            name:user.name,
            vehicleNumber:user.vehicleNumber,
            mobileNumber:user.mobileNumber,
            typeOfVehicle:user.typeOfVehicle,
            dateOfEntry:user.dateOfEntry,
            rentPrice:price,
            duration:price/5,
            
          });
    
          await consumerLogs.save();
    
        await Consumer.findOneAndDelete({vehicleNumber:user.vehicleNumber});
        
    } catch (error) {

        console.error(error.message)
    }
});

module.exports=router;