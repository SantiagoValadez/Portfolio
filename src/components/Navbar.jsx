// import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { Modal, Box, Button, Typography } from "@mui/material";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="fixed top-0 w-full bg-slate-500 text-gray-600 body-font pt-1 pb-2 opacity-90">
      <div className="container mx-auto flex flex-wrap p-5 flex-row items-center justify-between">
        {/* Logo */}
        <a className="flex title-font font-medium items-center text-gray-900">
          <span className="ml-3 text-2xl text-neutral-50">DEVELOPER</span>
        </a>

        {/* Botón Hamburguesa */}
        <button
          className="inline-flex items-center md:hidden text-slate-300 hover:text-white focus:outline-none"
          onClick={toggleMenu}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </button>

        {/* Menú de Navegación */}
        <nav
          className={`${
            isOpen ? 'block' : 'hidden'
          } md:flex md:items-center md:w-auto w-full`}
        >
          <ul className="flex flex-col md:flex-row items-center text-base justify-center">
            <li className="mr-5 hover:text-gray-900 text-xl text-slate-300 cursor-pointer transform transition-all duration-2000">
              <Link to="/Home">Home</Link>
            </li>
            <li className="mr-5 hover:text-gray-900 text-xl text-slate-300 cursor-pointer transform transition-all duration-2000">
              <Link to="/Container">Projects</Link>
            </li>
            <li className="mr-5 hover:text-gray-900 text-xl text-slate-300 cursor-pointer transform transition-all duration-2000">
              <Link to="/Certifications">Certifications</Link>
            </li>

            {/* Botón de Modal (Visible dentro del menú para móviles) */}
            <li className="md:hidden mt-3">
              <ModalComponent />
            </li>
          </ul>
        </nav>

        {/* Botón de Modal (Visible fuera del menú para pantallas grandes) */}
        <div className="hidden md:block">
          <ModalComponent />
        </div>
      </div>
    </header>
  );
}

function ModalComponent() {
  // Estado para controlar si la modal está abierta o cerrada
  const [isOpen, setIsOpen] = useState(false);

  // Funciones para abrir y cerrar la modal
  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);

  // Estilo de la ventana modal
  const modalStyle = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    boxShadow: 24,
    p: 4,
    borderRadius: "8px",
  };

  return (
    <div>
      {/* Botón para abrir la modal */}
      <Button class="bg-transparent hover:bg-slate-400 text-slate-300 font-semibold hover:text-white py-2 px-4 border border-white hover:border-transparent rounded mt-2 focus:"variant="contained" color="primary" onClick={handleOpen}>
        Contact
      </Button>

      {/* Ventana Modal */}
      <Modal
        open={isOpen}
        onClose={handleClose}
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
      >
        <Box sx={modalStyle}>
          {/* Título de la Modal */}
          <Typography id="modal-title" variant="h6" component="h2">
            Contact
          </Typography>

          {/* Contenido de la Modal */}
          <Typography id="modal-description" sx={{ mt: 2 }}>
            Name: Santiago Valadez.
          </Typography>
          <Typography id="modal-description" sx={{ mt: 2 }}>
            Phone: +52 3121034713 or +52 5653678194
          </Typography>
          <a>
          <Typography id="modal-description" className='cursor-pointer' sx={{ mt: 2 }}>
            Email: saniago1340@gmail.com
          </Typography>
          </a>

          {/* Botón para cerrar */}
          <Button
            variant="outlined"
            onClick={handleClose}
            sx={{ mt: 2 }}
          >
            Cerrar
          </Button>
        </Box>
      </Modal>
    </div>
  );
}

export default Navbar;




{/* // const Bheader = () => {
//     return (
//       <header class="fixed md:sticky lg:sticky sm:sticky top-0 text-gray-600 body-font bg-slate-500 pt-1 pb- w-screen opacity-90">
//     <div class="mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
//       <a class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
//         <span class="ml-3 text-2xl text-neutral-50">DEVELOPER</span>
//       </a>
//       <nav class="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
//           <a class="mr-5 hover:text-gray-900 text-xl text-slate-300 cursor-pointer"> <Link to="/">About me</Link></a>
//           <a class="mr-5 hover:text-gray-900 text-xl text-slate-300 cursor-pointer"> <Link to="/Container">Projects</Link></a>
//           <a class="mr-5 hover:text-gray-900 text-xl text-slate-300 cursor-pointer"> <Link to="/Certificactions">Certifications</Link></a>
//       </nav>
//       <button class="bg-transparent hover:bg-slate-400 text-slate-300 font-semibold hover:text-white py-2 px-4 border border-white hover:border-transparent rounded mt-2">
//         Contact
//       </button>
//     </div>
//   </header>
//     )
//   } */}
