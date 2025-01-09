import React, { useState } from 'react';
import { Modal, Box, Button, Typography } from '@mui/material';
import Img01 from '../assets/img/Img01.png';
import Img02 from '../assets/img/Img02.png';

const Home = () => {
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
    window.open('https://drive.google.com/drive/folders/12a3jfwm-uUvm_mG94-OlJ0CjnpYEcCf1'); // Reemplaza con tu URL externa
  };

  return (
    <div className="pt-20 mx-auto">
      <section className="text-gray-600 body-font sm:w-full px-4 lg:px-24 md:px-16 py-6">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-center px-5 py-1">
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-full mb-5 md:mb-0">
            <img className="object-cover object-center rounded-full mx-auto" alt="hero" src={Img01} />
          </div>
          <div className="lg:flex-grow md:w-1/2 w-full flex flex-col items-center md:items-start text-center md:text-left lg:pl-24 md:pl-16">
            <h1 className="title-font sm:text-4xl text-2xl mb-4 font-medium text-gray-900">
              Passionate self-taught web developer
            </h1>
            <p className="mb-8 leading-relaxed text-sm sm:text-base">
              With expertise in JavaScript, React, HTML, CSS, and backend development using Java and Spring Boot. Committed to creating efficient, user-friendly web solutions and eager to bring innovative ideas to the tech industry.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button
                variant="outlined"
                onClick={() => handleOpenModal('Resume')}
                sx={{ mt: 2 }}
              >
                Resume
              </Button>
              <Button
                variant="outlined"
                onClick={() => handleOpenModal('This is the Hobbies content')}
                sx={{ mt: 2 }}
              >
                Hobbies
              </Button>
              <Button
                variant="outlined"
                onClick={() => handleOpenModal('This is the Goals and Interests content')}
                sx={{ mt: 2 }}
              >
                Goals and Interests
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Modal */}
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
            width: { xs: '90%', sm: 400 },
            bgcolor: 'background.paper',
            boxShadow: 24,
            p: 4,
            borderRadius: '8px',
          }}
        >
          <Typography id="modal-title" variant="h6" component="h2">
            Check it out to find out more about me!
          </Typography>
          <Typography id="modal-description" sx={{ mt: 2 }}>
            {modalContent}
          </Typography>

          {/* Botón para redirigir a una página externa */}
          {modalContent === 'Resume' && (
            <Button
              variant="contained"
              color="secondary"
              onClick={handleExternalRedirect}
              sx={{ mt: 2 }}
            >
              Go to External Page
            </Button>
          )}

          <Button
            variant="contained"
            color="primary"
            onClick={handleCloseModal}
            sx={{ mt: 2 }}
          >
            Close
          </Button>
        </Box>
      </Modal>

    
      <section className="text-gray-600 body-font lg:pl-24 md:pl-16 sm:pl-8 pl-4">
  <div className="container px-5 py-5 mx-auto flex flex-wrap lg:flex-row flex-col items-center justify-center">
    <div className="flex flex-col flex-wrap lg:py-6 -mb-10 lg:w-1/2 sm:w-full w-full mb-6 lg:pl-12 lg:text-left text-center">
      <div className="flex flex-col mb-10 lg:items-start sm:items-center text-center lg:text-left">
        <div className="inline-block space-x-5 pb-3">
          <i className="fa-brands fa-html5"></i>
          <i className="fa-brands fa-css3"></i>
          <i className="fa-brands fa-react"></i>
          <i className="fa-brands fa-js"></i>
          <i className="fa-solid fa-p"></i>
        </div>
        <div className="flex-grow">
          <h2 className="text-gray-900 text-lg sm:text-xl title-font font-medium mb-3">Frontend</h2>
          <p className="leading-relaxed text-base">Use of HTML, CSS, React, JavaScript, Tailwind and Photoshop to create web pages.</p>
          <a className="mt-3 text-indigo-500 inline-flex items-center">
            Learn More
            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </a>
        </div>
      </div>
      <div className="flex flex-col mb-10 lg:items-start sm:items-center text-center lg:text-left">
        <div className="inline-block space-x-5 pb-3">
          <i className="fa-brands fa-java"></i>
          <i className="fa-solid fa-leaf"></i>
        </div>
        <div className="flex-grow">
          <h2 className="text-gray-900 text-lg sm:text-xl title-font font-medium mb-3">Backend</h2>
          <p className="leading-relaxed text-base">Using Java and Spring Boot to send information to the server.</p>
          <a className="mt-3 text-indigo-500 inline-flex items-center">
            Learn More
            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </a>
        </div>
      </div>
      <div className="flex flex-col mb-10 lg:items-start sm:items-center text-center lg:text-left">
        <div className="inline-block space-x-5 pb-3">
          <i className="fa-brands fa-github"></i>
          <i className="fa-brands fa-git-alt"></i>
        </div>
        <div className="flex-grow">
          <h2 className="text-gray-900 text-lg sm:text-xl title-font font-medium mb-3">Version control</h2>
          <p className="leading-relaxed text-base">Using version control, such as Git and GitHub, to manage changes to a project's source code.</p>
          <a className="mt-3 text-indigo-500 inline-flex items-center">
            Learn More
            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </a>
        </div>
      </div>
    </div>
    <div className="lg:w-1/2 sm:w-full mb-10 lg:mb-0 rounded-lg overflow-hidden mt-7">
      <img className="object-cover object-center w-full rounded-full" alt="feature" src={Img02} />
    </div>
  </div>
</section>


    </div>

  )
};

export default Home;
