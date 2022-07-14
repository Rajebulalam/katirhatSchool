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

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/chairmanMessage' element={<ChairmanMessage></ChairmanMessage>}></Route>
        <Route path='/principleMessage' element={<PrincipleMessage></PrincipleMessage>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
