import asyncHandler from 'express-async-handler'
import Teacher from '../Model/teacherModel.js'
import Student from '../Model/studentModel.js'
export const getTeacher =asyncHandler (async (req, res) => {
     const course = req.user.courseType;
    
     let longitude=req.user.loc.coordinates[0]
     let altitude=req.user.loc.coordinates[1]
     
   
  try{

 
    const teacherDetails=await Teacher.find({ subject: course,

        loc:
       { $near:
          {
            $geometry: { type: "Point",  coordinates: [  longitude,altitude] },
            $minDistance: 0,
            $maxDistance: 5000*25
          }
       }
    })
    
        console.log(teacherDetails,"teacher")
        res.json({teacherDetails})
  }
  catch(err){
    console.log(err)
  }
})

export const booking_date =asyncHandler (async (req, res) => {

    let { dateBooked, teacher_id } = req.body
    let teacher = await Teacher.findById(teacher_id)

    const newBooking = {
        date: dateBooked,
        student: req.user._id
    }



    teacher.booked_date.push(newBooking)
    console.log(teacher.booked_date)

    await teacher.save()

})

export const bookTeacher =asyncHandler (async (req, res) => {
    let teacher = await Teacher.findById(req.body.teacher_id)

    const studentExists = teacher.students.filter((student => student.student_id.toString() === req.user._id.toString()))
    if (studentExists.length > 0) {
        return res.status(400).json({
            message: 'Already enrolled for this course'
        })
    }

    const student = {
        student_id: req.user._id
    }

    teacher.students.push(student)
    teacher.save()
    res.json({
        message: "Successfully Booked"
    })


})
export const Location=(async(req,res)=>{

try{

    let student=await Student.findById(req.user._id)
  
    student.loc.coordinates=req.body.coordinates
    student.save()
    res.json(200)
}
catch(err){
    console.log(err)
}
    
    

})