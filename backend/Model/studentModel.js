import mongoose from "mongoose";
const studentSchema=mongoose.Schema({
  name:{
      required:true,
      type:String
  },
  email:{
      required:true,
        type:String
  },
  contactNumber:{
      required:true,
      type:Number
  },
  password:{
      required:true,
      type:String
  },
  trainingType:{
      required:true,
      type:String
  },
  courseType:{
        required:true,
        type:String
},
classType:{
    required:true,
    type:String
},
location:{
    required:true,
    type:String
},
subject:{
    required:true,
    type:String
}

})
const student=mongoose.model('student',studentSchema);

export default student