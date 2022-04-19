import twilio from 'twilio'

const otpsend = ((req, res) => {



    const accountSid = process.env.TWILIO_ACCOUNT_SID;
    const authToken = process.env.TWILIO_AUTH_TOKEN;
    const ServiceID = process.env.TWILLIO_SERVICEID
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
    
})
})



export default otpsend