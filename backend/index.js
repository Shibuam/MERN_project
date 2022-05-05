import Express from "express";
import createError from 'http-errors'
import mongoConnect from './config/connect.js'
import cors from 'cors'

import student from './routes/studentRoute.js'
import teacher from './routes/teacherRoute.js'
import login from './routes/common.js'

let portnumber = 4500
//create a new express application
let app = Express()
app.use(cors())

app.use(Express.json())


//mongoose connection
mongoConnect()


app.use('/api', login)

app.use('/api/student', student)
app.use('/api/teacher', teacher)

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(dirname, '/frontend/build')));

  app.get('*', (req, res, next) =>
    res.sendFile(
      'index.html',
      { root: path.join(dirname, '/frontend/build') },
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

app.use((err, req, res, next) => {
  console.log(err)
  res.send("invalid page")
})

app.listen(portnumber, console.log("server running on port number:", portnumber))