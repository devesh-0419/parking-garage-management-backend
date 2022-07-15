const Consumer= require('../model/consumer');

async function createConsumer (user) {
    
    let consumer=new Consumer({
        name:user.name,
        vehicleNumber:user.vehicleNumber,
        mobileNumber:user.mobileNumber,
        typeOfVehicle:user.typeOfVehicle,
        dateOfEntry:user.dateOfEntry

     });
     await consumer.save();

     return consumer;
}
module.exports=createConsumer;