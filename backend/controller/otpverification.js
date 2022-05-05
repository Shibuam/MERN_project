import twilio from 'twilio'
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const ServiceID = process.env.TWILLIO_SERVICEID;

const otpsendTeacher = ((req, res) => {





    const client = twilio(accountSid, authToken, {
        lazyLoading: true
    });

    let number = req.body.contactNumber
    client.verify.services(ServiceID).verifications.create({
        to: `+91${number}`,
        channel: "sms"
    })




    console.log(number, "reached")
    res.json({
        contactNumber: number
    })
})

const otpSentStudent = ((req, res) => {

    let number=req.body.contactNumber
   




    const client = twilio(accountSid, authToken, {
           lazyLoading: true
       });

   
       client.verify.services(ServiceID).verifications.create({
           to: `+91${number}`,
           channel: "sms"
       })

//console.log(client)


    console.log(number, "reached at student verification")
     res.json({
         contactNumber: number
     })

})

export { otpsendTeacher, otpSentStudent }