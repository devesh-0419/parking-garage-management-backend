const ConsumerLogs= require('../model/consumerLogs');

async function createConsumerLog (user,price) {
    
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
     return log;
}
module.exports=createConsumerLog;