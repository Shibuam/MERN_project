import  Express   from "express";

import login from '../controller/login.js'
let  router=Express.Router()
router.post('/',login)

export default router;