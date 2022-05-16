import twilio from 'twilio'
import dotenv from 'dotenv'
dotenv.config()
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const ServiceID = process.env.TWILLIO_SERVICEID;

const otpsendTeacher = (async(req, res) => {
console.log(req.body)

try{



//     const client =await twilio(accountSid, authToken, {
//         lazyLoading: true
//     });
// console.log(client)
    let number =parseInt( req.body.contactNumber)
//   console.log(number)
//    let resp=await client.verify.services(ServiceID).verifications.create({
//     to: `+91${number}`,
//     channel: "sms"
//     })
// console.log(resp)




    console.log(number, "reached otpsendTeacher")
    res.json({
        contactNumber: number
    })
}
catch(error){
    console.log(error)
}
})


const otpSentStudent = ((req, res) => {

    let number=req.body.contactNumber
   




//     const client = twilio(accountSid, authToken, {
//            lazyLoading: true
//        });

   
//        client.verify.services(ServiceID).verifications.create({
//            to: `+91${number}`,
//            channel: "sms"
//        })

// //console.log(client)


    console.log(number, "reached at student verification")
     res.json({
         contactNumber: number
     })

})

export { otpsendTeacher, otpSentStudent }