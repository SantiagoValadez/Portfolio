import Img06 from '../assets/img/Img06.png'
import Img07 from '../assets/img/Img07.png'
import Img08 from '../assets/img/Img08.png'
import Img09 from '../assets/img/Img09.png'



const Container = () => {
  return (
    <div>
      <section class="text-gray-600 body-font">
  <div class="container px-5 py-24 mx-auto ">
    <div class="flex flex-wrap w-full mb-20 ">
      <div class="lg:w-1/2 w-full mb-6 lg:mb-0">
        <h1 class="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">PROJECTS</h1>
        <div class="h-1 w-20 bg-indigo-500 rounded"></div>
      </div>
      <p class="lg:w-1/2 w-full leading-relaxed text-gray-500">I am a self-taught web developer with experience in HTML, CSS, JavaScript, React, and Java. Through personal projects, I have built practical skills to create efficient, user-friendly web solutions. Although I lack professional experience, I am eager to learn, grow, and contribute value to any company that trusts in my potential. My projects showcase my proficiency in HTML, CSS, JavaScript, React, and Java.
      </p>  
    </div>

    <div class="flex flex-wrap -m-4">
      <button class="xl:w-1/4 md:w-1/2 p-4 focus:outline-none">
      <a href='https://santiago-proyect-final-bedu.netlify.app/'>
        <div class="bg-gray-100 p-6 rounded-lg bg-blue-100 hover:bg-gray-200 hover:bg-opacity-50 focus:outline-none focus:shadow-outline transform transition-all duration-500 cursor-pointer .border-gray-800">
          <img class="h-40 rounded w-full object-cover object-center mb-6" src={Img06} alt="content"/>
          <h3 class="tracking-widest text-indigo-500 text-xs font-medium title-font">SUBTITLE</h3>
          <h2 class="text-lg text-gray-900 font-medium title-font mb-4">Website for a construction company</h2>
          <p class="leading-relaxed text-base pb-5">Using HTML, CSS and JavaScript.</p>
        </div>
      </a>
      </button>

      <button class="xl:w-1/4 md:w-1/2 p-4 focus:outline-none">
      <a href='https://github.com/SantiagoValadez/weather-react-app'>
        <div class="bg-gray-100 p-6 rounded-lg bg-blue-100 hover:bg-gray-200 hover:bg-opacity-50 focus:outline-none focus:shadow-outline transform transition-all duration-500 cursor-pointer .border-gray-800">
          <img class="h-40 rounded w-full object-cover object-center mb-6" src={Img07} alt="content"/>
          <h3 class="tracking-widest text-indigo-500 text-xs font-medium title-font">SUBTITLE</h3>
          <h2 class="text-lg text-gray-900 font-medium title-font mb-4 pb-7">To do list in Java</h2>
          <p class="leading-relaxed text-base pb-12">Using pure JAVA.</p>
        </div>
      </a>
      </button>

      <div class="xl:w-1/4 md:w-1/2 p-4 focus:outline-none">
      <a href='https://github.com/SantiagoValadez/weather-react-app'>
        <button class="bg-gray-100 p-6 rounded-lg bg-blue-100 hover:bg-gray-200 hover:bg-opacity-50 focus:outline-none focus:shadow-outline transform transition-all duration-500 cursor-pointer .border-gray-800">
          <img class="h-40 rounded w-full object-cover object-center mb-6" src={Img08} alt="content"/>
          <h3 class="tracking-widest text-indigo-500 text-xs font-medium title-font">SUBTITLE</h3>
          <h2 class="text-lg text-gray-900 font-medium title-font mb-4 pb-7">Weather App</h2>
          <p class="leading-relaxed text-base pb-5">Using HTML, CSS, JavaScript and React.</p>
        </button>
      </a>
      </div>

      <div class="xl:w-1/4 md:w-1/2 p-4 focus:outline-none">
      <a href='https://fanciful-valkyrie-e91e67.netlify.app/'>
        <button class="bg-gray-100 p-6 rounded-lg bg-blue-100 hover:bg-gray-200 hover:bg-opacity-50 focus:outline-none focus:shadow-outline transform transition-all duration-500 cursor-pointer .border-gray-800">
          <img class="h-40 rounded w-full object-cover object-center mb-6" src={Img09} alt="content"/>
          <h3 class="tracking-widest text-indigo-500 text-xs font-medium title-font">SUBTITLE</h3>
          <h2 class="text-lg text-gray-900 font-medium title-font mb-4 pb-7">Blog</h2>
          <p class="leading-relaxed text-base pb-5">Using HTML, CSS and JavaScript.</p>
        </button>
      </a>
      </div>
    </div>
  </div>
</section>
    </div>
  );
};

export default Container;
