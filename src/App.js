import Home from "./pages/Home"; 
import About from "./pages/About"; 
import Contact from "./pages/Contact";
import "bootstrap/dist/css/bootstrap.min.css"
import './styles/App.scss';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
