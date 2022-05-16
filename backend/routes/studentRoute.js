import  Express   from "express";

import {otpSentStudent} from '../controller/otpverification.js'
import {otpConformStudent}  from '../controller/otpConform.js' 
import {protectStudent} from '../middlewares/authMiddleware.js'
import {getTeacher} from '../controller/student.js'

let  router=Express.Router()


router.post('/otpVerification',otpSentStudent)
router.post('/otpConformStudent',otpConformStudent)
router.route('/getTeacher').get(protectStudent,getTeacher)

export default router;