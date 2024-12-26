import React from 'react';
import styles from './Contact.module.css';

function Contact() {
  return (
    <section className="contact">
      <h2>Contacto</h2>
      <form>
        <label>
          Nombre:
          <input type="text" name="name" className={styles.contact}/>
        </label>
        <label>
          Correo:
          <input type="email" name="email" className={styles.contact}/>
        </label>
        <label>
          Mensaje:
          <textarea name="message" />
        </label>
        <button type="submit" className={styles.contact}>Enviar</button>
      </form>
    </section>
  );
}

export default Contact;
