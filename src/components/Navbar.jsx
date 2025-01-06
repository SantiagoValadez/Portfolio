// import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="fixed top-0 w-full bg-slate-500 text-gray-600 body-font pt-1 pb-2 opacity-90">
      <div className="container mx-auto flex flex-wrap p-5 flex-row items-center justify-between">
        {/* Logo */}
        <a className="flex title-font font-medium items-center text-gray-900">
          <span className="ml-3 text-2xl text-neutral-50">DEVELOPER</span>
        </a>

        {/* Hamburguesa */}
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
          </ul>
        </nav>

        {/* Botón de Contact */}
        <button className="hidden md:inline-flex bg-transparent hover:bg-slate-400 text-slate-300 font-semibold hover:text-white py-2 px-4 border border-white hover:border-transparent rounded mt-1 focus:outline-none transform transition-all duration-500">
          Contact
        </button>
      </div>
    </header>
  );
}

export default Navbar;



// const Bheader = () => {
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
//   }
