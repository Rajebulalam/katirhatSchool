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
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
