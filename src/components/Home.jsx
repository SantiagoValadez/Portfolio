import Img01 from '../assets/img/Img01.png'
import Img02 from "../assets/img/Img02.png"

import React from 'react'

const Home = () => {
  return (
    <div>
        <div>
        <section class="text-gray-600 body-font sm:w-full lg:pl-24 md:pl-16 sm:pl-8 pl-4">
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

    
        <section className="text-gray-600 body-font lg:pl-24 md:pl-16 sm:pl-8 pl-4">
        <div className="container px-5 py-5 mx-auto flex flex-wrap">
            <div className="flex flex-col flex-wrap lg:py-6 -mb-10 lg:w-1/2 lg:pl-12 lg:text-left text-center">
                <div className="flex flex-col mb-10 lg:items-start items-center">
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
            <div className="lg:w-1/2 mb-10 lg:mb-0 rounded-lg overflow-hidden mt-7 sm:w-full ">
                <img alt="feature" class="object-cover object-center h-full w-full md:w-full sm:w-full rounded-full" src= {Img02} />
            </div>
        </div>
        </section>
    </div>

  )
};

export default Home;
