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

import React from 'react';
// import Header from './components/Header';
// import About from './components/About';
// import Skills from './components/Skills'; 
// import Projects from './components/Projects';
// import Contact from './components/Contact';
import './App.css';
import Babout from './components/Babout';
import Bheader from './components/Pages/Bheader';
import Bskills from './components/Bskills';
import Bfooter from './components/Bfooter';
import { Route, Routes } from "react-router-dom"
// import { BrowserRouter as Router, Router } from 'react-router-dom';
// import './Index.css'

// import Container from './components/Container';

const About = () => <h1>About</h1>
const Certifications = () => <h1>Certifications</h1>
const Projects = () => <h1>Container</h1>

function App() {
  return (
    <div > 
      {/* <Router>
        <Router></Router>
      </Router> */}
      {/* className='bg-slate-800 min-h screen' */}
      {/* <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1> */}
      <Bheader />
      <Routes>
              <Route path="./Pages/Bheader" element={<About/>} />
              <Route path="./Pages/Container" element={<Projects/>} />
              <Route path="./Pages/Certifications" element={<Certifications/>} />
      </Routes>
      {/* <Header /> */}
      <Babout />
      {/* <About /> */}
      <Bskills />
      {/* <Skills /> */}
      {/* <Projects /> Los proyectos se pondran en otra pagina
      <Contact /> Los datos de contacto, se pondran en otra pagina */}
      <Bfooter />
    </div>
  );
}



export default App;

