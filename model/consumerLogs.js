const mongoose= require('mongoose');

const consumerLogSchema=mongoose.Schema({
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
        type:Date
      },
      duration:{
type:Number
      },
      rentPrice:{
      type:Number
      },
   exitDate:{
    type:Date,
    default:Date.now()
   } 

});

const ConsumerLog= mongoose.model('ConsumerLog',consumerLogSchema);

module.exports=ConsumerLog;