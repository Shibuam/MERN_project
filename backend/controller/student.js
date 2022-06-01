import asyncHandler from 'express-async-handler'
import Teacher from '../Model/teacherModel.js'
export const getTeacher =asyncHandler (async (req, res) => {
    const course = req.user.courseType;
    let teacherDetails = await Teacher.find({ subject: course })
    res.json({
        teacherDetails
    })
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