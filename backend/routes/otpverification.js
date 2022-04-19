import  Express   from "express";
import otpsend from '../controller/otpverification.js'

let  router=Express.Router()
router.post('/',otpsend)


export default router;