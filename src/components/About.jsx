import React from 'react';
import styles from './About.module.css';

function About() {
  return (
    <section className="about">
      <img
        src="https://via.placeholder.com/150"
        alt="Mi foto"
        className="about-img"
      />
      <div>
        <h2 className={styles.about01}>Sobre Mí</h2>
        <p className={styles.about}>
          Soy un desarrollador apasionado por el diseño y desarrollo web. Me encanta
          crear experiencias modernas y funcionales para los usuarios.
        </p>
      </div>
    </section>
  );
}

export default About;

