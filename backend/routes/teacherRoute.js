import  Express  from "express";
import teachersDetails from '../controller/teacher.js'
import {otpsendTeacher} from '../controller/otpverification.js'
import{otpConformTeacher} from '../controller/otpConform.js'
let router=Express.Router()



router.route('/otpConformTeacher').post(otpConformTeacher)
router.route('/OtpverificationTeacher').post(otpsendTeacher)


export default router