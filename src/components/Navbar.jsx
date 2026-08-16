import { Link } from 'react-router-dom';
import { useState } from 'react';
import { Modal, Box, Button, Typography } from '@mui/material';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen((prev) => !prev);

  const handleLinkClick = () => {
    setIsOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="site-header">
      <div className="nav-shell">
        <Link to="/" className="brand" onClick={handleLinkClick}>
          <span>DEVELOPER</span>
        </Link>

        <button
          type="button"
          className="menu-toggle"
          onClick={toggleMenu}
          aria-label="Toggle navigation menu"
        >
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>

        <nav className={`nav-menu ${isOpen ? 'nav-menu-open' : ''}`}>
          <ul>
            <li>
              <Link to="/" onClick={handleLinkClick}>Home</Link>
            </li>
            <li>
              <Link to="/about" onClick={handleLinkClick}>About</Link>
            </li>
            <li>
              <Link to="/experience" onClick={handleLinkClick}>Experience</Link>
            </li>
            <li>
              <Link to="/projects" onClick={handleLinkClick}>Projects</Link>
            </li>
            <li>
              <Link to="/certifications" onClick={handleLinkClick}>Certifications</Link>
            </li>
            <li className="mobile-contact">
              <ModalComponent />
            </li>
          </ul>
        </nav>

        <div className="desktop-contact">
          <ModalComponent />
        </div>
      </div>
    </header>
  );
}

function ModalComponent() {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);

  const modalStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
    borderRadius: '12px',
  };

  return (
    <>
      <Button
        className="contact-button"
        variant="contained"
        onClick={handleOpen}
      >
        Contact
      </Button>

      <Modal
        open={isOpen}
        onClose={handleClose}
        aria-labelledby="contact-modal-title"
        aria-describedby="contact-modal-description"
      >
        <Box sx={modalStyle}>
          <Typography id="contact-modal-title" variant="h6" component="h2">
            Contact
          </Typography>
          <Typography id="contact-modal-description" sx={{ mt: 2 }}>
            Name: Santiago Valadez.
          </Typography>
          <Typography sx={{ mt: 2 }}>
            Phone: +52 3121034713 or +52 5653678194
          </Typography>
          <a href="mailto:saniago1340@gmail.com">
            <Typography sx={{ mt: 2 }} className="modal-email">
              Email: saniago1340@gmail.com
            </Typography>
          </a>
          <Button variant="outlined" onClick={handleClose} sx={{ mt: 2 }}>
            Close
          </Button>
        </Box>
      </Modal>
    </>
  );
}

export default Navbar;

