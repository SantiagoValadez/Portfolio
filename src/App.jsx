
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './components/About';
import Certifications from './components/Certifications';
import Container from './components/Container';
import Experience from './components/Experience';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Bfooter from './components/Bfooter';
import './App.css';

function App() {
  return (
    <div className="app-shell">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/projects" element={<Container />} />
          <Route path="/certifications" element={<Certifications />} />
        </Routes>
      </Router>

      <Bfooter />
    </div>
  );
}

export default App;

