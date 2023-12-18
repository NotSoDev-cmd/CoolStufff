import logo from './logo.jpg';
import './App.css';
import { Routes, Route } from "react-router-dom"
import Home from "./Home.js"
import About from "./About.js"
import Locate from "./locate.js"
import Contact from "./Contact.js"

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="about" element={ <About/> } />
        <Route path="pel" element={ <Locate/> } />
        <Route path="contact" element={ <Contact/> } />
      </Routes>
    </div>
  );
}

export default App;