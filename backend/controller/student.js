import teacher from '../Model/teacherModel.js'
export const getTeacher=(async(req,res)=>{
    const course=req.user.courseType;
    let teacherDetails=await teacher.find({subject:course})
    res.json({
        teacherDetails
    })
})