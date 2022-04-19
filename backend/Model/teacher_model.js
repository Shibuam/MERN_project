import mongoose from 'mongoose'
const teacherSchema =mongoose.Schema({
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
        type:Number,

    },
    subject:{
        required:true,
        type:String
    },
    pincode:{
        required:true,
        type:Number
    },
    password:{
        required:true,
        type:String
    }
})
const teacher=mongoose.model('teacher',teacherSchema)
export default teacher