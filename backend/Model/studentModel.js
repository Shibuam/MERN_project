import mongoose from "mongoose";
const studentSchema=mongoose.Schema({
    name:String,
    email:String,
    contactNumber:Number
})
const student=mongoose.model('student',studentSchema);

export default student