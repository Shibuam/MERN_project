import  Express   from "express";

import {otpSentStudent} from '../controller/otpverification.js'
import {otpConformStudent}  from '../controller/otpConform.js' 
import {protectStudent} from '../middlewares/authMiddleware.js'
import {getTeacher,booking_date,bookTeacher} from '../controller/student.js'


let  router=Express.Router()


router.post('/otpVerification',otpSentStudent)
router.post('/otpConformStudent',otpConformStudent)
router.route('/getTeacher').get(protectStudent,getTeacher)
router.route('/date_booking').post(protectStudent,booking_date)
router.route('/bookTeacher').post(protectStudent,bookTeacher)

export default router;