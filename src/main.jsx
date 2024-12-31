import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import ReactDOM from 'react-dom'
// import { BrowserRouter } from 'react-router-dom'
import './index.css'
// import React from 'react';
// import ReactDom from 'react-dom/client';
import App from './App.jsx'
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Certifications from './components/Pages/Certifications'; 
// import Container from './components/Pages/Container';
// import Button from './components/button.jsx'

// createRoot(document.getElementById('root')).render(
createRoot(document.getElementById('root')).render(
     <StrictMode>
     {/* <BrowserRouter>  */}
     {/* <Button></Button> */}
     <App />
     {/* </BrowserRouter> */}
     </StrictMode>

)
