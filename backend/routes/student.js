import  Express   from "express";
import studentDetails from '../controller/student.js'
let  router=Express.Router()
router.post('/',studentDetails)

export default router;