import Img01 from '../assets/img/Img01.png'
import Img02 from "../assets/img/Img02.png"

import React from 'react'

const Home = () => {
  return (
    <div>
    <div>
       <section class="text-gray-600 body-font">
      <div className="container mx-auto flex px-5 py-1 md:flex-row flex-col items-center">
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-5 md:mb-0">
          <img className="object-cover object-center rounded-full mx-auto" alt="hero" src= {Img01} />
        </div>
        <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Passionate self-taught web developer
            <br className="hidden lg:inline-block"/>
          </h1>
          <p className="mb-8 leading-relaxed">with expertise in JavaScript, React, HTML, CSS, and backend development using Java and Spring Boot. Committed to creating efficient, user-friendly web solutions and eager to bring innovative ideas to the tech industry.</p>
          <div className="flex justify-center">
            <button className="inline-flex bg-transparent hover:bg-slate-400 text-slate-400 font-semibold hover:text-white py-2 px-4 border border-slate-500 hover:border-transparent rounded mt-2">Resume</button>
            <button className="ml-4 inline-flex bg-transparent hover:bg-slate-400 text-slate-400 font-semibold hover:text-white py-2 px-4 border border-slate-500 hover:border-transparent rounded mt-2">Hobbies</button>
            <button className="ml-4 inline-flex bg-transparent hover:bg-slate-400 text-slate-400 font-semibold hover:text-white py-2 px-4 border border-slate-500 hover:border-transparent rounded mt-2">Goals and interests</button>
    
    
    
          </div>
        </div>
      </div>
    </section>
    </div>

    






<section className="text-gray-600 body-font">
  <div className="container px-5 py-5 mx-auto flex flex-wrap">
    
    <div className="flex flex-col flex-wrap lg:py-6 -mb-10 lg:w-1/2 lg:pl-12 lg:text-left text-center">
      <div className="flex flex-col mb-10 lg:items-start items-center">
        {/* <div class="w-12 h-12 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5">
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-6 h-6" viewBox="0 0 24 24">
            <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
          </svg>
        </div> */}
        <div className="inline-block space-x-5 pb-3">
        <i className="fa-brands fa-html5"></i>
        <i className="fa-brands fa-css3"></i>
        <i className="fa-brands fa-react"></i>
        <i className="fa-brands fa-js"></i>
        <i className="fa-solid fa-p"></i>
        </div>
        <div className="flex-grow">
          <h2 className="text-gray-900 text-lg title-font font-medium mb-3">Fronted</h2>
          <p className="leading-relaxed text-base">Use of HTML, CSS, React, JavaScript, Tailwind and Photoshop to create web pages.</p>
          <a className="mt-3 text-indigo-500 inline-flex items-center">Learn More
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </a>
        </div>
      </div>
      <div className="flex flex-col mb-10 lg:items-start items-center">
        {/* <div class="w-12 h-12 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5">
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-6 h-6" viewBox="0 0 24 24">
            <circle cx="6" cy="6" r="3"></circle>
            <circle cx="6" cy="18" r="3"></circle>
            <path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12"></path>
          </svg>
        </div> */}
        <div className="inline-block space-x-5 pb-3">
        <i className="fa-brands fa-java"></i>
        <i className="fa-solid fa-leaf"></i>
        </div>
        <div className="flex-grow">
          <h2 className="text-gray-900 text-lg title-font font-medium mb-3">Backend</h2>
          <p className="leading-relaxed text-base">Using of Java and Spring Boot to send information to the server.</p>
          <a className="mt-3 text-indigo-500 inline-flex items-center">Learn More
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </a>
        </div>
      </div>
      <div className="flex flex-col mb-10 lg:items-start items-center">
        {/* <div class="w-12 h-12 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5">
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-6 h-6" viewBox="0 0 24 24">
            <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
            <circle cx="12" cy="7" r="4"></circle>
          </svg>
        </div> */}
        <div className="inline-block space-x-5 pb-3">
        <i className="fa-brands fa-github"></i>
        <i className="fa-brands fa-git-alt"></i>
        </div>
        <div className="flex-grow">
          <h2 className="text-gray-900 text-lg title-font font-medium mb-3">Version control</h2>
          <p className="leading-relaxed text-base">Using version control, such as Git and GitHub, to manage changes to a project's source code.</p>
          <a className="mt-3 text-indigo-500 inline-flex items-center">Learn More
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </a>
        </div>
      </div>
    </div>
    <div className="lg:w-1/2 w-full mb-10 lg:mb-0 rounded-lg overflow-hidden pl-14 mt-7">
      <img alt="feature" class="object-cover object-center h-full w-full rounded-full" src= {Img02} />
    </div>
  </div>
</section>


{/* <footer class="text-gray-600 body-font">
  <div class="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
    <a class="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
      
      <span class="ml-3 text-xl">Santiago Valadez</span>
    </a>
    <p class="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">© 2020 Santiago Valadez —
      <a href="https://www.instagram.com/valadez8829/" class="text-gray-600 ml-1" rel="noopener noreferrer" target="_blank">valadez8829</a>
    </p>


    <span class="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
      <a href="https://www.facebook.com/santiago.valadez.50" class="text-gray-500">
        <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
          <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
        </svg>
      </a>
      <a href="https://x.com/Santiaga_va7" class="ml-3 text-gray-500">
        <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
          <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
        </svg>
      </a>
      <a href="https://www.instagram.com/valadez8829/" class="ml-3 text-gray-500">
        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
          <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
          <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
        </svg>
      </a>
      <a href="https://www.linkedin.com/in/santiago-valadez-b02a812b0/" class="ml-3 text-gray-500">
        <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="0" class="w-5 h-5" viewBox="0 0 24 24">
          <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
          <circle cx="4" cy="4" r="2" stroke="none"></circle>
        </svg>
      </a>
    </span>
  </div>
</footer> */}
</div>

  )
};

export default Home;
