import React from 'react';
import { motion } from 'framer-motion';
import Img01 from '../assets/img/Img01.png';

function About() {
  const strengths = [
    {
      title: 'Design mindset',
      text: 'I care about clarity, hierarchy, and visual quality so digital products feel polished and intuitive.',
    },
    {
      title: 'Technical execution',
      text: 'I work with JavaScript, React, HTML, CSS, Java, and Spring Boot to build cohesive and functional experiences.',
    },
    {
      title: 'Growth and adaptability',
      text: 'I enjoy learning fast, solving problems, and improving each iteration through real-world feedback.',
    },
  ];

  return (
    <div className="pt-16 pb-20">
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          className="grid items-center gap-10 overflow-hidden rounded-[2rem] border border-slate-200 bg-white/80 p-6 shadow-[0_25px_70px_rgba(15,23,42,0.06)] backdrop-blur-sm md:p-10 lg:grid-cols-[0.9fr_1.1fr]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <div className="overflow-hidden rounded-[1.5rem] border border-slate-200 bg-slate-100">
            <img
              src={Img01}
              alt="Santiago Valadez"
              className="h-full w-full object-cover object-center"
            />
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-600">About me</p>
            <h1 className="mt-4 text-3xl font-black tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
              Full Stack developer who transforms concepts into scalable, production-ready solutions.
            </h1>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              I bring together technical rigor, design thinking, and a track record of shipping products that work. My professional experience spans backend systems, modern frontends, and the full lifecycle from concept to production deployment.
            </p>

            <p className="mt-4 text-lg leading-8 text-slate-600">
              I'm most effective when solving real business problems: automating workflows, optimizing user experiences, and building systems that scale. I enjoy working with teams, learning new challenges, and taking full ownership of features from design through implementation and validation.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              {['React', 'JavaScript', 'HTML', 'CSS', 'Java', 'Spring Boot', 'Tailwind', 'Git'].map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-sm font-medium text-slate-700"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </motion.div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {strengths.map((item, index) => (
            <motion.div
              key={item.title}
              className="rounded-[1.5rem] border border-slate-200 bg-white p-6 shadow-[0_18px_50px_rgba(15,23,42,0.04)]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.12, duration: 0.5 }}
            >
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-xl text-blue-700">
                {index === 0 ? '🎨' : index === 1 ? '⚙️' : '🚀'}
              </div>
              <h2 className="text-xl font-black text-slate-900">{item.title}</h2>
              <p className="mt-3 text-base leading-7 text-slate-600">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default About;

