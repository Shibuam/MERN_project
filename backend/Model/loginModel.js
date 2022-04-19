import mongoose from "mongoose";
const loginSchema=mongoose.Schema({
    login:{
        required:true,
        type:String
    },
    password:{
        required:true,
        
    }
})