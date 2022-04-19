import ResponsiveAppBar from "./components/header/ResponsiveAppBar";
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import { Provider } from "react-redux";

import Register from './components/register/Register'
import Home from "./components/homePage";
import TutorRegister from './components/form/TutorSignUpForm'
import Login from './components/form/login'
import OtpVerification from "./components/form/otpVerification";
import TeacherProfile from "./components/TeacherProfile";
import Store from "./redux/store";
import Footer from "./components/footer/footer";
import StudentSubject from "./components/form/studentSubject";

function App() {
  return (
   <Provider store={Store}>
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
       </Routes>
       <Footer/>
     </Router>
    
   </Provider>
  );
}

export default App;
