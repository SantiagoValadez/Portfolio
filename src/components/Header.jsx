// import React from 'react';

// function Header() {
//   return (
//     <header style={headerStyle}>
//       <h1>Mi Nombre</h1>
//       <p>Desarrollador Web | Creativo | Innovador</p>
//     </header>
//   );
// }

// const headerStyle = {
//   textAlign: 'center',
//   padding: '2rem',
//   backgroundColor: '#282c34',
//   color: 'white',
// };

// export default Header;


import React from 'react';
import styles from './Header.module.css';

function Header() {
  return (
    <header className={styles.header}>
      <h1 className={styles.title}>Mi Nombre</h1>
      <p>Desarrollador Web | Creativo | Innovador</p>
    </header>
  );
}

export default Header;

