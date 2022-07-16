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

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/chairmanMessage' element={<ChairmanMessage></ChairmanMessage>}></Route>
        <Route path='/principleMessage' element={<PrincipleMessage></PrincipleMessage>}></Route>
        <Route path='/vicePrincipleMessage' element={<VicePrincipleMessage></VicePrincipleMessage>}></Route>
        <Route path='/teacherMessage' element={<TeacherMessage></TeacherMessage>}></Route>
        <Route path='/academicHour' element={<AcademicHour></AcademicHour>}></Route>
        <Route path='/classRoutine' element={<ClassRoutine></ClassRoutine>}></Route>
        <Route path='/extraCurricular' element={<ExtraCurriculumn></ExtraCurriculumn>}></Route>
        <Route path='/syllabus' element={<Syllabus></Syllabus>}></Route>
        <Route path='/teachers' element={<Teachers></Teachers>}></Route>
        <Route path='/staff' element={<Staff></Staff>}></Route>
        <Route path='/academicCalender' element={<AcademicCalender></AcademicCalender>}></Route>
        <Route path='/library' element={<Library></Library>}></Route>
        <Route path='/canteen' element={<Canteen></Canteen>}></Route>
        <Route path='/guardian' element={<GuardianRoom></GuardianRoom>}></Route>
        <Route path='/sport' element={<Sports></Sports>}></Route>
        <Route path='/prayer' element={<PrayerRoom></PrayerRoom>}></Route>
        <Route path='/notice' element={<Notices></Notices>}></Route>
        <Route path='/images' element={<Images></Images>}></Route>
        <Route path='/sportGallery' element={<SportGallery></SportGallery>}></Route>
        <Route path='/video' element={<Videos></Videos>}></Route>
        <Route path='/admissionInstruction' element={<AdmissionInstruction></AdmissionInstruction>}></Route>
        <Route path='/onlineAdmission' element={<OnlineAdmission></OnlineAdmission>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
