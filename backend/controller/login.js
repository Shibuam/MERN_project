import asyncHandler from 'express-async-handler'
import bcrypt from 'bcrypt'

import teacherModel from '../Model/teacher_model.js'

const loginHandler = asyncHandler(async (req, res, next) => {

    let { email, password } = req.body

    const userDetails = await teacherModel.findOne({ email })

    if (userDetails) {
        const response = await bcrypt.compare(password, userDetails.password)
        if(response){
            res.json({
                user:userDetails,
                login:true
            })
            
        }
        else{
            res.json({
                invalid_password:true
            })
                
            
        }

    } else {
        res.json({
            invalid_email:true
        })
    }
})


export default loginHandler