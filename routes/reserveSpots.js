const express = require('express');
const reserveSpot = require('../controllers/reserveSpot');
const ParkingSpot=require('../model/parkingSpot');

const router = express();



router.get('/',async(req,res)=>{
    try {
        let reserved= await ParkingSpot
            .find().sort({spotNumber:1})
            .select({spotNumber:1,_id:0});
       // available.values()
      
        res.send(reserved);
     
    } catch (error) {
        console.error(error)
    }
    
});

router.post('/',async (req,res)=>{

        try {
                let available = await ParkingSpot.findOne({spotNumber:req.body.spotNumber});
                console.log('available', available);
                if(available) return res.send(`${req.body.spotNumber} is not available please try another spot`);
          
                let reserve= await reserveSpot(req.body.spotNumber,req.header("_id"));
                  
                console.log('reserve: ', reserve);
                res.send(`${req.body.spotNumber} is reserved`)
                
        } catch (error) {
           
                console.error(error.message)
        }
});

module.exports=router;

//let reserve =await reserveSpot(req.body.spot,consumer._id)