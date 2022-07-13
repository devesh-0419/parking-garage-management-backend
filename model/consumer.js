const mongoose= require('mongoose');
const dayjs=require('dayjs');

const consumerSchema=mongoose.Schema({
      name:{
        type:String,
        minlength:3,
        maxlength:100,
        required:true
      },
      vehicleNumber:{
        type:String,
        required:true,
        minlength:10,
        maxlength:20,
        unique:true
      },
      typeOfVehicle:{
        type:String,
        required:true
      },
      mobileNumber:{
          type:Number,
          minlength:10,
          maxlength:10
      },
      dateOfEntry:{
        type:Date,
        default:Date.now()
      }


});

consumerSchema.methods.getChargeAmount=function (now) {
       let entryDate=dayjs(this.dateOfEntry);
       let currentDate=dayjs(now);
      console.log('entryDate', entryDate.format('YYYY-MM-DD'));
      console.log('currentDate', currentDate.format('YYYY-MM-DD'));
      let durationHour =Math.ceil((currentDate.getmilisecond()-entryDate.getmilisecond())/(1000*3600*24));
    
       let price=5*durationHour;
       
       return price;
}


const Consumer= mongoose.model('Consumer',consumerSchema);

module.exports=Consumer;