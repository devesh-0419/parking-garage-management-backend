const express = require('express');
//const { findOneAndDelete } = require('../model/consumer');
const Consumer= require('../model/consumer');
const ConsumerLogs= require('../model/consumerLogs');

const router = express();

router.post('/',async (req,res)=>{
    try {
       
           let consumer= await Consumer.findOne({vehicleNumber:req.body.vehicleNumber});
           if(!consumer) return res.send(`${req.body.vehicleNumber} not found check the number.`);
    
         let price = consumer.getChargeAmount();
       console.log('rentPrice', price)

          //console.log('consumer: ', consumer);
      let user=consumer;
          let consumerLogs= new ConsumerLogs({
            name:user.name,
            vehicleNumber:user.vehicleNumber,
            mobileNumber:user.mobileNumber,
            typeOfVehicle:user.typeOfVehicle,
            dateOfEntry:user.dateOfEntry,
            rentPrice:price,
            duration:price/5,
            
          });
          const log= await consumerLogs.save();
        //  console.log('logged', log);
    
          
          const visited = await Consumer.findOneAndDelete({vehicleNumber:user.vehicleNumber});
          // console.log('visited', visited);
          
          res.send(`Price for the Parking will be ${price}`);
    } catch (error) {

        console.error(error.message)
    }
});

module.exports=router;