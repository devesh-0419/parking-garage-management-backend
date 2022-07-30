const ParkingSpot= require('../model/parkingSpot');

async function reserveSpot (spot,user) {
    
    let reserve=new ParkingSpot({
       date:new Date().toLocaleDateString(),
       spotNumber:spot,
       currentUser:user
       
       

     });
    await reserve.validate()
     await reserve.save();

     return reserve;
}
module.exports=reserveSpot;