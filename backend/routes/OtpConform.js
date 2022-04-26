import  Express   from "express";

import {otpConformTeacher,otpConformStudent} from '../controller/otpConform.js'

let  router=Express.Router()

router.post('/',otpConformTeacher)
router.post('/student',otpConformStudent)


export default router;