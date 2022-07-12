const mongoose= require('mongoose');


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
       let entryDate=new Date(this.dateOfEntry);
       let currentDate=new Date(now);
      
       let durationHour =Math.ceil((currentDate.getTime()-entryDate.getTime())/(1000*3600*24));
      // console.log('durationHour: ', durationHour)
       let price=5*durationHour;
       
       return price;
}


const Consumer= mongoose.model('Consumer',consumerSchema);

module.exports=Consumer;