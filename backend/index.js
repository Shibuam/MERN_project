import Express from "express";
import createError from 'http-errors'
import mongoConnect from './config/connect.js'
import cors from 'cors'

import student from './routes/student.js'
import teacher from './routes/teacher.js'
import login from './routes/login.js'
import otpverification from './routes/otpverification.js'
import otpConform from './routes/OtpConform.js'
let portnumber = 4500
//create a new express application
let app = Express()
app.use(cors())

app.use(Express.json())


//mongoose connection
try {
  mongoConnect()
} catch (err) {
  console.log("errror is", err);
}




app.use('/api/otpConform',otpConform)
app.use('/api/Otpverification', otpverification)
app.use('/api/student', student)
app.use('/api/teacher', teacher)
app.use('/api/login', login)

app.use(function (req, res, next) {
  next(createError(404));
  // throw new Error('routeError')
});

app.use((err, req, res, next) => {
  console.log(err)
  res.send("invalid page")
})

app.listen(portnumber, console.log("server running on port number:", portnumber))