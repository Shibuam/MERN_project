import teacherModel from '../Model/teacherModel.js'
import studentModel from '../Model/studentModel.js'
import bcrypt from 'bcrypt'
import generateToken from '../util/generateToken.js' // import jwt from 'jsonwebtoken'
import twilio from 'twilio'
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const ServiceID = process.env.TWILLIO_SERVICEID

 const otpConformTeacher = (async (req, res, next) => {


  const otp = req.body.data.OTP
  const teacherDetails = req.body.teacherData
  const number = teacherDetails.contactNumber
  let password = teacherDetails.password
  let email = teacherDetails.email


 
 const client = twilio(accountSid, authToken, {
    lazyLoading: true
  });
  // console.log(client)


  client.verify.services(ServiceID).verificationChecks.create({
    to: `+91${number}`,
    code: otp
  }).then(async (data) => {
    if (data.status == 'approved') {
      console.log(data)
      console.log("success")


      password = await bcrypt.hash(password, 10)

      const teacherdb = await teacherModel.findOne({ email })
      if (teacherdb) {


        res.json({
          alredy_exist:true
        })
      }
      else {
        const teacher = await teacherModel.create({ name: teacherDetails.name, email: teacherDetails.email, contactNumber: teacherDetails.contactNumber, subject: teacherDetails.subject, pincode: teacherDetails.pincode, password: password })

        console.log("successfully inserted", teacher)
        res.json({
          name: teacher.name,
          ID: teacher._id,

          token: generateToken(teacher)
        })

      }

    }
    else {
      console.log("invalid otp")
      res.json({
        invalid_otp:true
      })
    }

  }).catch((err)=>{
    console.log(err)
  })
})

const otpConformStudent=(async(req,res)=>{

  
 let{student_details,trainingType,courseType,classType,location,subject,otp}  = req.body
// console.log(trainingType,courseType,classType,location,subject,OTP)
let {name,email,contactNumber,password}=student_details.payload
let training_Type=trainingType.payload
let course_Type=courseType.payload
let class_Type=classType.payload
let Location=location.payload
let OTP=otp.OTP
console.log(training_Type,course_Type,Location,class_Type,OTP)



  //  const client = twilio(accountSid, authToken, {
  //   lazyLoading: true
  //  });
  //  console.log(client)


  //  client.verify.services(ServiceID).verificationChecks.create({
  //    to: `+91${contactNumber}`,
  //   code: OTPNUMBER
  //  }).then(async (data) => {
  //    if (data.status == 'approved') {
  //      console.log(data)
  //      console.log("success")
  //    }
  //    })
       password = await bcrypt.hash(password, 10)

  //     const studentDB = await studentModel.findOne({ email })
       if (studentDB) {


         res.json({
           alredy_exist:true
        })
       }
       else {
  //       const teacher = await teacherModel.create({ name: teacherDetails.name, email: teacherDetails.email, contactNumber: teacherDetails.contactNumber, subject: teacherDetails.subject, pincode: teacherDetails.pincode, password: password })

  //       console.log("successfully inserted", teacher)
  //       res.json({
  //         name: teacher.name,
  //         ID: teacher._id,

  //         token: generateToken(teacher)
  //       })

       }

  //   }
  //   else {
  //     console.log("invalid otp")
  //     res.json({
  //       invalid_otp:true
  //     })
  //   }

  // }).catch((err)=>{
  //   console.log(err)
  // })
})

export {otpConformTeacher,otpConformStudent}
