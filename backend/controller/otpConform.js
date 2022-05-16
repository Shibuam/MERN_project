import teacherModel from '../Model/teacherModel.js'
import studentModel from '../Model/studentModel.js'
import bcrypt from 'bcrypt'
import generateToken from '../util/generateToken.js' // import jwt from 'jsonwebtoken'
import twilio from 'twilio'
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const ServiceID = process.env.TWILLIO_SERVICEID

const otpConformTeacher = (async (req, res, next) => {

//console.log(req.body)
  const otp = req.body.otp.OTP
  const teacherDetails = req.body.teacherData
  const number = teacherDetails.contactNumber
  let password = teacherDetails.password
  let email = teacherDetails.email

console.log(otp,number,password,email)

  // const client = twilio(accountSid, authToken, {
  //   lazyLoading: true
  // });
  //  console.log(client)


  //  client.verify.services(ServiceID).verificationChecks.create({
  //    to: `+91${number}`,
  //    code: otp
  //  }).then(async (data) => {
  //   if (data.status == 'approved') {
  //      console.log(data)
  //     console.log("success")


       password = await bcrypt.hash(password, 10)

       const teacherdb = await teacherModel.findOne({ email })
       if (teacherdb) {


         res.json({
        message:"teacher alredy registerd"
         })
       }
       else {
         const teacher = await teacherModel.create({ name: teacherDetails.name, email: teacherDetails.email, contactNumber: teacherDetails.contactNumber, subject: teacherDetails.subject, pincode: teacherDetails.pincode, password: password })

         console.log("successfully inserted", teacher)
         res.json({
          name: teacher.name,
           user_id: teacher._id,
           teacherStatus: true,
           token: generateToken(teacher._id)
        })

      }

    //  }
    //  else {
    //    console.log("invalid otp")
    //    res.json({
    //      invalid_otp: true
    //    })
    //  }

//    }).catch((err) => {
//      console.log(err)
//   //  })
 })

const otpConformStudent = (async (req, res) => {


  let { name, email, contactNumber, password, trainingType, courseType, classType, location, subject, OTP } = req.body


  console.log(name, email, contactNumber, password, trainingType, courseType, classType, location, subject, OTP)

  const client = twilio(accountSid, authToken, {
    lazyLoading: true
  });
  console.log(client)


  client.verify.services(ServiceID).verificationChecks.create({
    to: `+91${contactNumber}`,
    code: OTP
  }).then(async (data) => {
    if (data.status == 'approved') {
      console.log(data)
      console.log("success")

    
  password = await bcrypt.hash(password, 10)

  const studentDB = await studentModel.findOne({ email })
  if (studentDB) {


    res.json({
     student_alredy_exist: true
    })
  }
  else {
    const student = await studentModel.create({ name, email, contactNumber, password, trainingType, courseType, classType, location, subject })

    console.log("successfully inserted", student)
    res.json({
      name: student.name,
      user_id: student._id,
     

      studentStatus: true,
      token: generateToken(student._id)
    })

  }

}
     else {
  console.log("invalid otp")
  res.json({
    invalid_otp: true
  })
}

    }).catch ((err) => {
  console.log(err)
})
})

export { otpConformTeacher, otpConformStudent }
