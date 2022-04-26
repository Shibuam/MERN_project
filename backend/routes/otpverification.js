import  Express   from "express";
import {otpsendTeacher,otpSentStudent} from '../controller/otpverification.js'

let  router=Express.Router()
router.post('/',otpsendTeacher)
router.post('/student',otpSentStudent)



export default router;