import About from "./components/about"
import Navbar from "./components/navbar"
import Home from "./components/home"
import Resume from "./components/resume"
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router ,Routes,Route} from "react-router-dom"

function App() {
  return (
    <Router>
      <div className="App ">
        <Navbar/>
        <Routes>
          <Route exact path="/" element={ <Home/>}/>
          <Route exact path="/about" element={ <About/>}/>
          <Route exact path="/resume" element={ <Resume/>}/>

      </Routes>
      
    </div>
    </Router>
    
  );
}

export default App;
