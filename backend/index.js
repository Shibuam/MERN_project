import cors from 'cors';
import express from "express";
import createError from 'http-errors';
import path from 'path';
import mongoConnect from './config/connect.js';
import { errorHandler } from './middlewares/errorMiddleware.js';
import login from './routes/common.js';
import student from './routes/studentRoute.js';
import teacher from './routes/teacherRoute.js';


let portnumber = process.env.PORT
//create a new express application
let app = express()
app.use(cors())

app.use(express.json({
  limit: '50mb', extended: true
}))


//mongoose connection
mongoConnect()


app.use('/api', login)

app.use('/api/student', student)
app.use('/api/teacher', teacher)

const __dirname = path.resolve()

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, 'frontend/build')));

  app.get('*', (req, res, next) =>
    res.sendFile(
      'index.html',
      { root: path.join(__dirname, 'frontend/build') },
      (err) => {
        if (err) {
          console.log(err);
          next(err);
        }
      }
    )
  );
} else {
  app.get('/', (req, res) => {
    res.send('API is running....');
  });
}

app.use(function (req, res, next) {
  next(createError(404));
  // throw new Error('routeError')
});

app.use(errorHandler)



app.listen(portnumber, console.log("server running on port number:", portnumber))