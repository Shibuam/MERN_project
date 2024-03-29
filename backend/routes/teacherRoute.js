import  Express  from "express";
import {teacherProfile,getTeacherProfileImage,teacherInformation,updateVideo,studentDetails,location} from '../controller/teacher.js'
import {otpsendTeacher} from '../controller/otpverification.js'
import{otpConformTeacher} from '../controller/otpConform.js'
import {protect} from '../middlewares/authMiddleware.js'


let router=Express.Router()



router.route('/otpConformTeacher').post(otpConformTeacher)
router.route('/OtpverificationTeacher').post(otpsendTeacher)
router.route('/teacherProfile').post(protect, teacherProfile)
router.route('/TeacherProfileImage').get(protect,getTeacherProfileImage)
router.route('/teacherDetails').get(protect, teacherInformation)
router.route('/updateVideo').post(protect,updateVideo)
router.route('/student_details/:student').get(protect,studentDetails)
router.route('/location').post(protect,location)

export default router


