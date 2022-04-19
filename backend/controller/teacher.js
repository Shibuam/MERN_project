import asyncHandler from 'express-async-handler'
import teacherModel from '../Model/teacher_model.js'
import bcrypt from 'bcrypt'
import generateToken from '../util/generateToken.js' // import jwt from 'jsonwebtoken'
// import twilio from 'twilio'

// const accountSid = process.env.TWILIO_ACCOUNT_SID;
// const authToken = process.env.TWILIO_AUTH_TOKEN;
// const ServiceID= process.env.TWILLIO_SERVICEID
// const client = twilio(accountSid, authToken, {
//   lazyLoading: true
// });

const teacherRegisterHandler = asyncHandler(async (req, res) => {
  let { name, email, contactNumber, subject, pincode, password } = req.body
  
  console.log(client)



  console.log(req.body)
  password = await bcrypt.hash(password, 10)

  const teacher = await teacherModel.findOne({ email })

  client.verify.services.create({friendlyName: 'My First Verify Service'})
                      .then(service => console.log(service.sid));

  if (teacher) {

    throw new Error("email already exist")
  }
  else {
    const teacher = await teacherModel.create({ name:name, email:email, contactNumber:contactNumber, subject:subject, pincode:pincode, password:password })

    console.log("successfully inserted", teacher)
    res.json({
      teacher,
      token: generateToken(teacher)
    })

  }






})
export default teacherRegisterHandler