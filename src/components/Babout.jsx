import Img01 from '../assets/img/Img01.png'

const Babout = () => {
  return (
    <section class="text-gray-600 body-font">
  <div class="container mx-auto flex px-5 py-1 md:flex-row flex-col items-center">
    <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-5 md:mb-0">
      <img class="object-cover object-center rounded-full mx-auto" alt="hero" src= {Img01} />
    </div>
    <div class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
      <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Passionate self-taught web developer
        <br class="hidden lg:inline-block"/>
      </h1>
      <p class="mb-8 leading-relaxed">with expertise in JavaScript, React, HTML, CSS, and backend development using Java and Spring Boot. Committed to creating efficient, user-friendly web solutions and eager to bring innovative ideas to the tech industry.</p>
      <div class="flex justify-center">
        <button class="inline-flex bg-transparent hover:bg-slate-400 text-slate-400 font-semibold hover:text-white py-2 px-4 border border-slate-500 hover:border-transparent rounded mt-2">Resume</button>
        <button class="ml-4 inline-flex bg-transparent hover:bg-slate-400 text-slate-400 font-semibold hover:text-white py-2 px-4 border border-slate-500 hover:border-transparent rounded mt-2">Hobbies</button>
        <button class="ml-4 inline-flex bg-transparent hover:bg-slate-400 text-slate-400 font-semibold hover:text-white py-2 px-4 border border-slate-500 hover:border-transparent rounded mt-2">Goals and interests</button>



      </div>
    </div>
  </div>
</section>
  )
}

export default Babout
