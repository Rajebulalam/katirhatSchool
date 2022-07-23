import './App.css';
import Home from './Pages/Home/Home';
import Footer from './Shared/Footer/Footer';
import Header from './Shared/Header/Header';
import {
  Routes,
  Route,
} from "react-router-dom";
import ChairmanMessage from './Pages/Message/ChairmanMessage';
import PrincipleMessage from './Pages/Message/PrincipleMessage';
import VicePrincipleMessage from './Pages/Message/VicePrincipleMessage';
import TeacherMessage from './Pages/Message/TeacherMessage';
import AcademicHour from './Pages/Academic/AcademicHour';
import ClassRoutine from './Pages/Academic/ClassRoutine';
import ExtraCurriculumn from './Pages/Academic/ExtraCurriculumn';
import Syllabus from './Pages/Academic/Syllabus';
import Teachers from './Pages/Academic/Teachers';
import Staff from './Pages/Academic/Staff';
import AcademicCalender from './Pages/Academic/AcademicCalender';
import Library from './Pages/Facilities/Library';
import Canteen from './Pages/Facilities/Canteen';
import GuardianRoom from './Pages/Facilities/GuardianRoom';
import Sports from './Pages/Facilities/Sports';
import PrayerRoom from './Pages/Facilities/PrayerRoom';
import Notices from './Pages/Notice/Notices';
import Images from './Pages/Gallery/Images';
import SportGallery from './Pages/Gallery/SportGallery';
import Videos from './Pages/Gallery/Videos';
import AdmissionInstruction from './Pages/Admission/AdmissionInstruction';
import OnlineAdmission from './Pages/Admission/OnlineAdmission';
import About from './Pages/About/About';
import Contact from './Pages/Contact/Contact';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import StudentLogin from './Pages/Login/StudentLogin';
import TeacherLogin from './Pages/Login/TeacherLogin';
import Dashboard from './Pages/Dashboard/Dashboard';
import MyProfile from './Pages/Dashboard/MyProfile';
import Blogs from './Pages/Dashboard/Blogs';
import Problems from './Pages/Dashboard/Problems';
import AddBlogs from './Pages/Dashboard/AddBlogs';
import AddProblems from './Pages/Dashboard/AddProblems';
import StudentNotice from './Pages/Dashboard/StudentNotice';
import Suggestions from './Pages/Dashboard/Suggestions';
import TeachersProfile from './Pages/Dashboard/TeachersProfile';
import AddNotice from './Pages/Dashboard/AddNotice';
import AddSuggestion from './Pages/Dashboard/AddSuggestion';
import Students from './Pages/Dashboard/Students';
import AddStudent from './Pages/Dashboard/AddStudent';
import AdminLogin from './Pages/Login/AdminLogin';
import AddTeacher from './Pages/Dashboard/AddTeacher';
import NotFound from './Pages/NotFound';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import AdminsProfile from './Pages/Dashboard/AdminsProfile';
import AddAdmin from './Pages/Dashboard/AddAdmin';
import Admins from './Pages/Dashboard/Admins';

function App() {

  const student = localStorage.getItem('student');
  const teacher = localStorage.getItem('teacher');
  const admin = localStorage.getItem('admin');

  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='home' element={<Home></Home>}></Route>
        <Route path='chairmanMessage' element={<ChairmanMessage></ChairmanMessage>}></Route>
        <Route path='principleMessage' element={<PrincipleMessage></PrincipleMessage>}></Route>
        <Route path='vicePrincipleMessage' element={<VicePrincipleMessage></VicePrincipleMessage>}></Route>
        <Route path='teacherMessage' element={<TeacherMessage></TeacherMessage>}></Route>
        <Route path='academicHour' element={<AcademicHour></AcademicHour>}></Route>
        <Route path='classRoutine' element={<ClassRoutine></ClassRoutine>}></Route>
        <Route path='extraCurricular' element={<ExtraCurriculumn></ExtraCurriculumn>}></Route>
        <Route path='syllabus' element={<Syllabus></Syllabus>}></Route>
        <Route path='teachers' element={<Teachers></Teachers>}></Route>
        <Route path='staff' element={<Staff></Staff>}></Route>
        <Route path='academicCalender' element={<AcademicCalender></AcademicCalender>}></Route>
        <Route path='library' element={<Library></Library>}></Route>
        <Route path='canteen' element={<Canteen></Canteen>}></Route>
        <Route path='guardian' element={<GuardianRoom></GuardianRoom>}></Route>
        <Route path='sport' element={<Sports></Sports>}></Route>
        <Route path='prayer' element={<PrayerRoom></PrayerRoom>}></Route>
        <Route path='notice' element={<Notices></Notices>}></Route>
        <Route path='images' element={<Images></Images>}></Route>
        <Route path='sportGallery' element={<SportGallery></SportGallery>}></Route>
        <Route path='video' element={<Videos></Videos>}></Route>
        <Route path='admissionInstruction' element={<AdmissionInstruction></AdmissionInstruction>}></Route>
        <Route path='onlineAdmission' element={<OnlineAdmission></OnlineAdmission>}></Route>
        <Route path='history' element={<About></About>}></Route>
        <Route path='contact' element={<Contact></Contact>}></Route>
        <Route path='studentLogin' element={<StudentLogin></StudentLogin>}></Route>
        <Route path='teacherLogin' element={<TeacherLogin></TeacherLogin>}></Route>
        <Route path='admin' element={<AdminLogin></AdminLogin>}></Route>
        <Route path='dashboard' element={<Dashboard></Dashboard>}>
          {
            student && <Route index element={<MyProfile></MyProfile>}></Route>
          }
          {
            teacher && <Route index element={<TeachersProfile></TeachersProfile>}></Route>
          }
          {
            admin && <Route index element={<AdminsProfile></AdminsProfile>}></Route>
          }
          <Route path='blogs' element={<Blogs></Blogs>}></Route>
          <Route path='problems' element={<Problems></Problems>}></Route>
          <Route path='addBlogs' element={<AddBlogs></AddBlogs>}></Route>
          <Route path='addProblems' element={<AddProblems></AddProblems>}></Route>
          <Route path='studentNotice' element={<StudentNotice></StudentNotice>}></Route>
          <Route path='studentSuggestion' element={<Suggestions></Suggestions>}></Route>
          <Route path='addStudentNotice' element={<AddNotice></AddNotice>}></Route>
          <Route path='addSuggestion' element={<AddSuggestion></AddSuggestion>}></Route>
          <Route path='students' element={<Students></Students>}></Route>
          <Route path='addStudent' element={<AddStudent></AddStudent>}></Route>
          <Route path='addTeacher' element={<AddTeacher></AddTeacher>}></Route>
          <Route path='addAdmin' element={<AddAdmin></AddAdmin>}></Route>
          <Route path='admins' element={<Admins></Admins>}></Route>
        </Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
      <ToastContainer />
    </div>
  );
}

export default App;
