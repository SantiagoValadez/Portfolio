
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // se elimno Router,
import Certifications from './components/Certifications';
import Container from './components/Container';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Bfooter from './components/Bfooter';
import { useState } from 'react';
import './App.css';


function App() {
  return (
    <div > 
      <Router>
        <Navbar />
        <Routes>
              <Route path="/home" element={<Home/>} />
              <Route path="/" element={<Home/>} />
              <Route path="/container" element={<Container/>} />
              <Route path="/certifications" element={<Certifications/>} />
        </Routes>
      </Router>
     
      <Bfooter />
    </div>
  );
}



export default App;

