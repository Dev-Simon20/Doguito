import "./assets/css/base/base.css";
import "./assets/css/componentes/card.css";
import Home from "./pages/Home";
import Sobre from "./pages/Sobre";
import Error from "./pages/Page404";
import Header from "./components/Header";
import Epoca from "./pages/Epoca";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/sobre' element={<Sobre/>}/>
        <Route path='*' element={<Error/>}/>
        <Route path='posts/3' element={<Epoca/>}/>
      </Routes>
    </Router>
  );
}

export default App;
