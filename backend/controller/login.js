import bcrypt from 'bcrypt'
import asyncHandler from 'express-async-handler'

import genarateToken from '../../backend/util/generateToken.js'
import studentModel from '../Model/studentModel.js'
import teacherModel from '../Model/teacherModel.js'

const loginHandler = asyncHandler(async (req, res, next) => {

    let { email, password } = req.body

    const teacher = await teacherModel.findOne({ email })

    const student = await studentModel.findOne({ email })

    if (teacher) {
        const response = await bcrypt.compare(password, teacher.password)
        if (response) {
            res.json({
                user_id: teacher._id,
                name: teacher.name,
                teacherStatus: true,
                token: genarateToken(teacher._id),

            })

        }
        else {
            throw new Error("Invalid Password ")

        }
    }
    else if (student) {
        const response = await bcrypt.compare(password, student.password)
        if (response) {
            res.json({
                user_id: student._id,
                name: student.name,
                studentStatus: true,
                token: genarateToken(student._id),
            })

        }
        else {

            throw new Error("Invalid Password")

        }

    }



    else {
        throw new Error("Invalid email id")

    }
})


export default loginHandler


