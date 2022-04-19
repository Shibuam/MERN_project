import  Express   from "express";

import OtpConform from '../controller/otpConform.js'

let  router=Express.Router()

router.post('/',OtpConform)


export default router;