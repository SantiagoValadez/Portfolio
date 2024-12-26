import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
// import Button from './components/button.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <Button></Button> */}
    <App />
  </StrictMode>,
)