import  Express   from "express";

import {otpConformTeacher,otpConformStudent} from '../controller/otpConform.js'
//import teachersDetails from '../controller/teacher.js'
import login from '../controller/login.js'
//import studentDetails from '../controller/student.js'
import {otpsendTeacher,otpSentStudent} from '../controller/otpverification.js'

let  router=Express.Router()
router.post('/login',login)


//router.post('/studentDetails',studentDetails)

 //router.route('/teacherDetails').post(teachersDetails)
 //router.post('/otpsendTeacher',otpsendTeacher)
// router.post('/otpSentStudent',otpSentStudent)

// router.post('/otpConformStudent',otpConformTeacher)
// router.post('/otpConformStudent',otpConformStudent)

export default router;