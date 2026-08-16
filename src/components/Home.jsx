import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Modal, Box, Button, Typography } from '@mui/material';
import Img01 from '../assets/img/Img01.png';
import Img02 from '../assets/img/Img02.png';

const Home = () => {
  const navigate = useNavigate();
  const [openModal, setOpenModal] = useState(false);
  const [modalContent, setModalContent] = useState('');

  const handleOpenModal = (content) => {
    setModalContent(content);
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
    setModalContent('');
  };

  const handleExternalRedirect = () => {
    window.open('https://drive.google.com/drive/folders/12a3jfwm-uUvm_mG94-OlJ0CjnpYEcCf1');
  };

  const stats = [
    { value: '3+', label: 'core stacks' },
    { value: '100%', label: 'focus on quality' },
    { value: 'UX', label: 'driven' },
  ];

  const stack = ['React', 'JavaScript', 'HTML', 'CSS', 'Java', 'Spring Boot', 'Tailwind', 'Git'];

  const fadeUp = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="pt-16 pb-16">
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(59,130,246,0.16),_transparent_32%),radial-gradient(circle_at_bottom_right,_rgba(99,102,241,0.12),_transparent_30%)]" />
        <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-white/50 to-transparent" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-[1.12fr_0.88fr]">
            <motion.div
              className="text-center lg:text-left"
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              transition={{ duration: 0.7, ease: 'easeOut' }}
            >
              <motion.span
                className="inline-flex items-center rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-700 shadow-sm"
                initial={{ opacity: 0, y: -12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.5 }}
              >
                Full Stack Developer · Frontend focused
              </motion.span>

              <motion.h1
                className="mt-6 text-4xl font-black tracking-tight text-slate-900 sm:text-5xl lg:text-6xl"
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15, duration: 0.7 }}
              >
                I build clean, functional interfaces that drive real business value.
              </motion.h1>

              <motion.p
                className="mx-auto mt-6 max-w-xl text-lg leading-8 text-slate-600 lg:mx-0"
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.25, duration: 0.7 }}
              >
                Full Stack developer with a focus on frontend interfaces. I combine JavaScript, React, and Java with Spring Boot to create solutions that are both technically sound and visually compelling. I work best on projects where design precision and functional delivery matter equally.
              </motion.p>

              <motion.div
                className="mt-8 flex flex-wrap justify-center gap-4 lg:justify-start"
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35, duration: 0.7 }}
              >
                <Button
                  variant="contained"
                  onClick={() => navigate('/projects')}
                  sx={{
                    borderRadius: '999px',
                    background: 'linear-gradient(135deg, #1d4ed8 0%, #2563eb 100%)',
                    px: 3.2,
                    py: 1.5,
                    textTransform: 'none',
                    fontWeight: 800,
                    boxShadow: '0 20px 40px rgba(37, 99, 235, 0.28)',
                    letterSpacing: '0.01em',
                    transition: 'all 0.2s ease',
                    '&:hover': {
                      background: 'linear-gradient(135deg, #1e40af 0%, #1d4ed8 100%)',
                      transform: 'translateY(-1px)',
                    },
                  }}
                >
                  View projects
                </Button>

                <Button
                  variant="outlined"
                  onClick={() => handleOpenModal('I hold a degree in Architecture, which has fueled my passion for design and creativity. This passion is reflected in the websites I develop, blending aesthetics and functionality to create unique experiences. Click the link below to learn more about me!')}
                  sx={{
                    borderRadius: '999px',
                    borderColor: '#cbd5e1',
                    color: '#0f172a',
                    px: 3.2,
                    py: 1.5,
                    textTransform: 'none',
                    fontWeight: 800,
                    transition: 'all 0.2s ease',
                    '&:hover': {
                      borderColor: '#94a3b8',
                      background: 'rgba(148, 163, 184, 0.06)',
                    },
                  }}
                >
                  Resume
                </Button>
              </motion.div>

              <motion.div
                className="mx-auto mt-10 grid max-w-lg grid-cols-3 gap-4 lg:mx-0"
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.45, duration: 0.7 }}
              >
                {stats.map((item) => (
                  <div
                    key={item.label}
                    className="rounded-2xl border border-slate-200 bg-white/80 p-4 shadow-[0_10px_30px_rgba(15,23,42,0.04)] backdrop-blur-sm"
                  >
                    <div className="text-2xl font-black text-slate-900">{item.value}</div>
                    <div className="mt-1 text-[10px] uppercase tracking-[0.18em] text-slate-500">{item.label}</div>
                  </div>
                ))}
              </motion.div>

              <motion.div
                className="mt-8 flex flex-wrap items-center justify-center gap-3 lg:justify-start"
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.55, duration: 0.7 }}
              >
                {stack.map((item) => (
                  <motion.span
                    key={item}
                    className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-sm font-medium text-slate-700 shadow-sm"
                    whileHover={{ y: -2, scale: 1.02 }}
                    transition={{ type: 'spring', stiffness: 300, damping: 16 }}
                  >
                    {item}
                  </motion.span>
                ))}
              </motion.div>
            </motion.div>

            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 28 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
            >
              <div className="absolute -left-10 top-10 h-32 w-32 rounded-full bg-blue-200/60 blur-3xl" />
              <div className="absolute -right-10 bottom-12 h-32 w-32 rounded-full bg-indigo-200/60 blur-3xl" />

              <div className="relative overflow-hidden rounded-[2rem] border border-slate-200 bg-white p-3 shadow-[0_30px_80px_rgba(15,23,42,0.14)]">
                <div className="overflow-hidden rounded-[1.5rem] bg-slate-100">
                  <img
                    src={Img01}
                    alt="Santiago Valadez"
                    className="h-[520px] w-full object-cover object-center"
                  />
                </div>

                <div className="mt-4 grid gap-3 sm:grid-cols-3">
                  <div className="rounded-2xl bg-slate-900 p-4 text-white shadow-lg shadow-slate-900/10">
                    <div className="text-[10px] uppercase tracking-[0.2em] text-slate-300">Focus</div>
                    <div className="mt-2 text-lg font-bold">UX & Web</div>
                  </div>
                  <div className="rounded-2xl bg-blue-50 p-4 text-slate-900 shadow-sm">
                    <div className="text-[10px] uppercase tracking-[0.2em] text-slate-500">Stack</div>
                    <div className="mt-2 text-lg font-bold">React</div>
                  </div>
                  <div className="rounded-2xl bg-indigo-50 p-4 text-slate-900 shadow-sm">
                    <div className="text-[10px] uppercase tracking-[0.2em] text-slate-500">Back-end</div>
                    <div className="mt-2 text-lg font-bold">Java</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="mt-12 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl rounded-[2rem] border border-slate-200 bg-white/80 p-6 shadow-[0_22px_60px_rgba(15,23,42,0.05)] backdrop-blur-sm sm:p-8">
          <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
            <div className="overflow-hidden rounded-[1.5rem] bg-slate-100">
              <img src={Img02} alt="Developer workspace" className="h-full w-full object-cover" />
            </div>

            <div className="space-y-6">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-600">About me</p>
                <h2 className="mt-3 text-3xl font-black text-slate-900 sm:text-4xl">I combine design thinking, technical execution, and a strong focus on usability.</h2>
              </div>

              <p className="text-lg leading-8 text-slate-600">
                I&apos;m a developer with a creative background and a strong interest in building meaningful digital experiences. I enjoy taking ideas from concept to execution, working with clean code, improving user flows, and creating interfaces that are both functional and visually polished.
              </p>

              <div className="grid gap-4 md:grid-cols-3">
                <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                  <div className="mb-3 text-2xl">🎨</div>
                  <h3 className="text-lg font-bold text-slate-900">UI mindset</h3>
                  <p className="mt-2 text-sm text-slate-600">I value clarity, aesthetics, and clean interfaces that improve the user experience.</p>
                </div>

                <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                  <div className="mb-3 text-2xl">⚙️</div>
                  <h3 className="text-lg font-bold text-slate-900">Technical focus</h3>
                  <p className="mt-2 text-sm text-slate-600">I work with frontend and backend tools to build robust, coherent solutions.</p>
                </div>

                <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                  <div className="mb-3 text-2xl">🚀</div>
                  <h3 className="text-lg font-bold text-slate-900">Growth</h3>
                  <p className="mt-2 text-sm text-slate-600">I like learning fast, adapting to new challenges, and improving every iteration.</p>
                </div>
              </div>

              <div className="flex flex-wrap gap-3">
                <Button
                  variant="contained"
                  onClick={() => handleOpenModal('As an architect with a strong design background, I aim to merge my creative skills with my passion for technology to contribute to innovative projects in the tech sector. I thrive on challenges and am committed to continuous learning and professional growth. My goal is to join a company where I can make a meaningful impact, bring value through my skills, and develop solutions that align with organizational goals.')}
                  sx={{ borderRadius: '999px', background: '#0f172a', textTransform: 'none', fontWeight: 700, px: 3 }}
                >
                  Goals and interests
                </Button>

                <Button
                  variant="outlined"
                  onClick={() => handleOpenModal('My hobbies include video games, anime, movies, music, playing musical instruments, and spending time with my friends. However, I’m also passionate about topics that challenge me and provide opportunities to constantly learn new things.')}
                  sx={{ borderRadius: '999px', borderColor: '#cbd5e1', color: '#0f172a', textTransform: 'none', fontWeight: 700, px: 3 }}
                >
                  Hobbies
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Modal
        open={openModal}
        onClose={handleCloseModal}
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
      >
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: { xs: '90%', sm: 420 },
            bgcolor: 'background.paper',
            boxShadow: 24,
            p: 4,
            borderRadius: '20px',
          }}
        >
          <Typography id="modal-title" variant="h6" component="h2" sx={{ fontWeight: 800 }}>
            More about me
          </Typography>
          <Typography id="modal-description" sx={{ mt: 2, color: '#475569', lineHeight: 1.7 }}>
            {modalContent}
          </Typography>

          {modalContent === 'I hold a degree in Architecture, which has fueled my passion for design and creativity. This passion is reflected in the websites I develop, blending aesthetics and functionality to create unique experiences. Click the link below to learn more about me!' && (
            <Button
              variant="contained"
              onClick={handleExternalRedirect}
              sx={{ mt: 3, borderRadius: '999px', background: 'linear-gradient(135deg, #1d4ed8 0%, #2563eb 100%)', textTransform: 'none', fontWeight: 700 }}
            >
              See my resume
            </Button>
          )}

          <Button
            variant="outlined"
            onClick={handleCloseModal}
            sx={{ mt: 2, borderRadius: '999px', borderColor: '#cbd5e1', color: '#0f172a', textTransform: 'none', fontWeight: 700 }}
          >
            Close
          </Button>
        </Box>
      </Modal>
    </div>
  );
};

export default Home;
