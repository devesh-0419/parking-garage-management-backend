const mongoose= require('mongoose');


const parkingSpotSchema=mongoose.Schema({
    date:{
        type:String,
        required:true
    },
   spotNumber:{
    type:Number,
    required:true,
    unique:true
   },
   currentUser:{
          type:mongoose.Schema.Types.ObjectId,
          ref:'Consumer',
          required:true,

   }

});



const ParkingSpot= mongoose.model('ParkingSpot',parkingSpotSchema);

module.exports=ParkingSpot;