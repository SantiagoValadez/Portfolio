import Img06 from '../assets/img/Img06.png';
import Img07 from '../assets/img/Img07.png';
import Img08 from '../assets/img/Img08.png';
import Img09 from '../assets/img/Img09.png';

const projects = [
  {
    title: 'Construction Company Website',
    category: 'Landing page',
    description: 'Modern business landing page designed to highlight services, trust and contact conversion.',
    stack: ['HTML', 'CSS', 'JavaScript'],
    image: Img06,
    link: 'https://santiago-proyect-final-bedu.netlify.app/',
  },
  {
    title: 'To-do List in Java',
    category: 'Backend logic',
    description: 'Application focused on task management and organization using Java logic and structured workflow.',
    stack: ['Java'],
    image: Img07,
    link: 'https://github.com/SantiagoValadez/weather-react-app',
  },
  {
    title: 'Weather App',
    category: 'Frontend app',
    description: 'Weather application that consumes an external API and displays real-time data in a clean interface.',
    stack: ['React', 'JavaScript', 'API'],
    image: Img08,
    link: 'https://github.com/SantiagoValadez/weather-react-app',
  },
  {
    title: 'Blog',
    category: 'Editorial design',
    description: 'A simple blog-style web project built to demonstrate content structure and responsive layout design.',
    stack: ['HTML', 'CSS', 'JavaScript'],
    image: Img09,
    link: 'https://fanciful-valkyrie-e91e67.netlify.app/',
  },
];

const Container = () => {
  return (
    <div className="pt-16 pb-20">
      <section className="px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-blue-600">Portfolio</p>
              <h1 className="mt-3 text-4xl font-black text-slate-900 sm:text-5xl">Projects</h1>
            </div>

            <p className="max-w-2xl text-base leading-7 text-slate-600">
              These are my most representative projects, built with a focus on front-end design, practical user flows and clear problem-solving.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {projects.map((project) => (
              <a
                key={project.title}
                href={project.link}
                target="_blank"
                rel="noreferrer"
                className="group overflow-hidden rounded-[1.75rem] border border-slate-200 bg-white shadow-[0_18px_40px_rgba(15,23,42,0.06)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_48px_rgba(37,99,235,0.12)]"
              >
                <div className="overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-48 w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>

                <div className="p-5">
                  <span className="inline-flex rounded-full bg-blue-50 px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-blue-700">
                    {project.category}
                  </span>

                  <h2 className="mt-4 text-xl font-bold text-slate-900">{project.title}</h2>
                  <p className="mt-3 text-sm leading-6 text-slate-600">{project.description}</p>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.stack.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full border border-slate-200 bg-slate-50 px-2.5 py-1 text-[11px] font-medium text-slate-700"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Container;
