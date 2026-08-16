import React from 'react';
import { motion } from 'framer-motion';

const experiences = [
  {
    period: '07/11/2024 — Present',
    role: 'Full Stack / Backend Developer',
    type: 'Professional experience',
    company: 'COLIMASOFT • Project: RASH',
    highlights: [
      'Designed and implemented the core billing module of an enterprise web system, improving the automation of sales, inventory control, quotations and electronic invoicing operations.',
      'Developed secure and efficient backend services with Node.js and Express to manage complex financial flows, including payment advances, cancellations and transactional business logic.',
      'Modeled and optimized relational data structures in MySQL, ensuring data integrity, query performance and reliability across critical business processes.',
      'Built reusable and interactive frontend components with React.js and Tailwind CSS to improve usability, visual consistency and the overall end-user experience.',
      'Contributed to the sales process by integrating payment advances into purchase workflows and reinforcing collaboration through Git and GitHub-based version control.',
    ],
  },
  {
    period: '07/07/2025 — Present',
    role: 'Frontend Developer / Interface Specialist',
    type: 'Professional experience',
    company: 'COLIMASOFT • Project: LUMIKA',
    highlights: [
      'Led the research and selection of modern, adaptable web templates to define the technical and visual direction of public and internal interfaces.',
      'Configured and stabilized local development environments to ensure clean installations, reliable testing and efficient customization of distributed UI components.',
      'Designed advanced dashboards for users and administrators, integrating CRM, order management and customer support workflows into a cohesive experience.',
      'Executed compatibility and performance validation across platforms, improving consistency, fidelity and usability across the interface ecosystem.',
    ],
  },
  {
    period: '2026 — Present',
    role: 'Master’s in Digital Transformation',
    type: 'Current study',
    company: 'Universidad de Colima – Facultad de Telemática',
    highlights: [
      'Currently expanding my strategic perspective in digital transformation, innovation and technology-driven business modernization.',
      'Connecting software engineering with organizational change, process optimization and the practical adoption of digital solutions in real environments.',
    ],
  },
  {
    period: '2026 — Present',
    role: 'Oracle OCI AI Foundations Associate',
    type: 'Current course',
    company: 'Oracle Cloud Infrastructure • Certification path',
    highlights: [
      'Currently enrolled in Oracle’s AI Foundations Associate program, focused on essential AI concepts, cloud-based applications and enterprise-ready AI adoption.',
      'Deepening my understanding of AI fundamentals in a structured, certification-oriented pathway that complements my software and digital transformation background.',
      'Strengthening the bridge between technical implementation, innovation strategy and future-oriented business solutions.',
    ],
  },
];

const Experience = () => {
  return (
    <div className="pt-16 pb-20">
      <section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.26em] text-blue-600">Experience</p>
          <h1 className="mt-4 text-4xl font-black tracking-tight text-slate-900 sm:text-5xl">
            Professional experience focused on digital transformation, scalable products and practical implementation.
          </h1>
          <p className="mt-5 text-lg leading-8 text-slate-600">
            My professional journey combines practical software development with real business impact, spanning backend systems, modern interfaces and digital transformation initiatives. I am currently pursuing a Master&apos;s in Digital Transformation and advancing my expertise through the Oracle OCI AI Foundations Associate program, strengthening my ability to connect technology, innovation and business value in enterprise environments.
          </p>
        </div>

        <div className="relative mt-12">
          <div className="absolute left-5 top-0 hidden h-full w-px bg-slate-200 md:block" />

          {experiences.map((item, index) => (
            <motion.article
              key={item.role}
              className="relative mb-8 md:pl-16"
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.12, duration: 0.45 }}
            >
              <div className="absolute left-0 top-8 hidden h-4 w-4 rounded-full border-4 border-white bg-blue-600 shadow-md md:block" />

              <div className="rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-[0_18px_48px_rgba(15,23,42,0.05)] sm:p-7">
                <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <span className="inline-flex rounded-full bg-blue-50 px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.22em] text-blue-700">
                      {item.period}
                    </span>
                    <h2 className="mt-4 text-2xl font-black text-slate-900">{item.role}</h2>
                    <p className="mt-2 text-base font-semibold text-slate-600">{item.company}</p>
                  </div>

                  <span className="inline-flex self-start rounded-full border border-slate-200 bg-slate-50 px-2.5 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-slate-600">
                    {item.type}
                  </span>
                </div>

                <ul className="mt-6 space-y-3">
                  {item.highlights.map((point) => (
                    <li key={point} className="flex gap-3 text-base leading-7 text-slate-600">
                      <span className="mt-2 h-2.5 w-2.5 shrink-0 rounded-full bg-blue-500" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.article>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Experience;
