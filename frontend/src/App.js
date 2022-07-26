import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Footer from "./components/footer";
import Header from "./components/header";
import OtpVerification from "./components/otpVerification";
import Home from "./screen/homePage";
import Login from './screen/login';
import Register from './screen/Register';
import Attend from './screen/student/AttendClass';
import Course from "./screen/student/course";
import Dashboard from './screen/student/dashboard';
import Location from "./screen/student/location";
import StartTraining from "./screen/student/StartTraining";
import StudentReg from './screen/student/studentReg';
import StudentSubject from "./screen/student/studentSubject";
import Calendar from './screen/teacher/calendar';
import ClassType from "./screen/teacher/classTypeAndFees";
import TeacherCourse from './screen/teacher/courseTeacher';
import Experience from "./screen/teacher/experience";
import TeacherHomePage from "./screen/teacher/homePage";
import OnetimeFee from './screen/teacher/oneTimeFee';
import { Payment } from './screen/teacher/payment';
import { Profile } from './screen/teacher/profile';
import ProfilePicture from './screen/teacher/ProfilePicture';
import TutorRegister from './screen/teacher/TutorSignUpForm';



function App() {
  return (
    <Router>
      <Header />
      <main style={{ minHeight: '90vh' }}>
        <Routes>
          <Route path='/' element={<Home />} exact />
          <Route path="/register" element={<Register />} />
          <Route path='/tutorSignUpForm' element={<TutorRegister />} />
          <Route path='/login' element={<Login />} />
          <Route path='/otpverification' element={<OtpVerification />} />
          <Route path='/studentSubject' element={<StudentSubject />} />
          <Route path='/location' element={<Location />} />
          <Route path="/attendClass" element={<Attend />} />
          <Route path="/course" element={<Course />} />
          <Route path="/startTraining" element={<StartTraining />} />
          <Route path='/studentReg' element={<StudentReg />} />
          <Route path='/studentdashboard' element={<Dashboard />} />
          <Route path='/classType' element={<ClassType />} />
          <Route path="/teacherCourse" element={<TeacherCourse />} />
          <Route path='/onetimeFee' element={<OnetimeFee />} />
          <Route path='/experience' element={<Experience />} />
          <Route path='/profilePicture' element={<ProfilePicture />} />
          <Route path='/teacherHomePage' element={<TeacherHomePage />} />

          <Route path='/teacherProfile' element={<Profile />} />
          <Route path='/Calendar' element={<Calendar />} />
          <Route path='/payment' element={<Payment />} />

          <Route path='*' element={<Register />} />
        </Routes>
      </main>
      <Footer />
    </Router>

  );
}

export default App;
