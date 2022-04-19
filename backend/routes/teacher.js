import  Express  from "express";
import teachersDetails from '../controller/teacher.js'
let router=Express.Router()



router.route('/').post(teachersDetails)



export default router