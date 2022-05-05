import  Express   from "express";

import {otpSentStudent} from '../controller/otpverification.js'
import {otpConformStudent}  from '../controller/otpConform.js' 

let  router=Express.Router()


router.post('/otpVerification',otpSentStudent)
router.post('/otpConformStudent',otpConformStudent)

export default router;