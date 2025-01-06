/*import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App*/
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // se elimno Router,
import Certifications from './components/Certifications';
import Container from './components/Container';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Bfooter from './components/Bfooter';
import { useState } from 'react';
import './App.css';

// import React from 'react';
// import Header from './components/Header';
// import About from './components/About';
// import Skills from './components/Skills'; 
// import Projects from './components/Projects';
// import Contact from './components/Contact';
// import Babout from './components/Babout';
// import Bheader from './components/Bheader';

//

//
// import Bskills from './components/Bskills';
// import Bfooter from './components/Bfooter';
// import { Route, Routes } from "react-router-dom"
// import './Index.css'

// import Container from './components/Container';

// const About = () => <h1>About</h1>
// const Certifications = () => <h1>Certifications</h1>
// const Container = () => <h1>Projects</h1>

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

