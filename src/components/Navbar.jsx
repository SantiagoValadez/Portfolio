// import React from 'react';
import { Link } from 'react-router-dom';

function Navbar  ()  {
    return (
        <header class="fixed md:sticky lg:sticky sm:sticky top-0 text-gray-600 body-font bg-slate-500 pt-1 pb- w-screen opacity-90">
        <div class="mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
            <a class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                <span class="ml-3 text-2xl text-neutral-50">DEVELOPER</span>
            </a>
            <nav class="fixed md:sticky lg:sticky sm:sticky top-0 text-gray-600 body-font bg-slate-500 pt-1 pb- w-screen opacity-90">
                <ul class="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
                    <li class="mr-5 hover:text-gray-900 text-xl text-slate-300 cursor-pointer" ><Link to="/Home">Home</Link></li>
                    <li class="mr-5 hover:text-gray-900 text-xl text-slate-300 cursor-pointer"><Link to="/Container">Projects</Link></li>
                    <li class="mr-5 hover:text-gray-900 text-xl text-slate-300 cursor-pointer"><Link to="/Certifications">Certifications</Link></li>
                </ul>
            </nav>
        <button class="bg-transparent hover:bg-slate-400 text-slate-300 font-semibold hover:text-white py-2 px-4 border border-white hover:border-transparent rounded mt-2">Contact</button>
        </div>
        </header>
    );
};

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
export default Navbar;
