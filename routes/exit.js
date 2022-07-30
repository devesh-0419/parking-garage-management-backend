const express = require('express');
const createConsumerLog = require('../controllers/createHistory');
//const { findOneAndDelete } = require('../model/consumer');
const Consumer= require('../model/consumer');

const router = express();

router.post('/',async (req,res)=>{
    try {
       
           let consumer= await Consumer.findOne({vehicleNumber:req.body.vehicleNumber});
           if(!consumer) return res.send(`${req.body.vehicleNumber} not found check the number.`);
    
         let price = consumer.getChargeAmount();
       console.log('rentPrice', price)

          //console.log('consumer: ', consumer);
      const log = await createConsumerLog(consumer,price)
          console.log('logged', log);
    
        
        //  const visited = await Consumer.findOneAndDelete({vehicleNumber:user.vehicleNumber});
          // console.log('visited', visited);
          
          res.send(`Price for the Parking will be ${price}`);
    } catch (error) {

        console.error(error.message)
    }
});

module.exports=router;