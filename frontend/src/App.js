import ResponsiveAppBar from "./components/header/ResponsiveAppBar";
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'

import Register from './components/register/Register'
import Home from "./components/homePage";
import TutorRegister from './components/teacher/TutorSignUpForm'
import Login from './components/form/login'
import OtpVerification from "./components/form/otpVerification";
import TeacherProfile from "./components/teacher/TeacherProfile";
import Footer from "./components/footer/footer";
import StudentSubject from "./components/student/studentSubject";
import Location from "./components/student/location";
import Attend from './components/student/AttendClass'
import Course from "./components/student/course";
import StartTraining from "./components/student/StartTraining";
import StudentReg from './components/student/studentReg'

function App() {
  return (
     <Router>
    <ResponsiveAppBar/>
       <Routes>
          <Route path='/' element={<Home/>} exact/>
         <Route path="/register" element={<Register/>}/>
         <Route path='/tutorSignUpForm' element={<TutorRegister/>}/>
         <Route path ='/login' element={<Login/>}/>
         <Route path= '/otpverification' element={<OtpVerification/>}/>
         <Route path='/teacherProfile' element={<TeacherProfile/>}/>
         <Route path='/studentSubject' element={<StudentSubject/>}/>
         <Route path='/location' element={<Location/>}/>
         <Route path="/attendClass" element={<Attend/>}/>
         <Route path="/course" element={<Course/>}/>
         <Route path="/startTraining" element={<StartTraining/>}/>
         <Route path='/studentReg' element={<StudentReg/>}/>
       </Routes>
       <Footer/>
     </Router>
    
  );
}

export default App;
