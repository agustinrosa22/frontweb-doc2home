import React from 'react';
import styles from './sideBar.module.css';
import { useNavigate } from "react-router-dom";

const Sidebar = () => {
  const navigate = useNavigate();
  return (
    <aside className={styles.sidebar}>
      <ul className={styles.links}>
        <li><a href="/">Mi Perfil</a></li>
        <li><a href="/">Mis Consultas</a></li>
        <li><a href="/">Pagos</a></li>
        <li><a href="/">Mi Billetera</a></li>
        <li><a href="/">Consultas en curso</a></li>
        <li><a href="/">Contacto de Emergencia</a></li>
        <li><a href="/">Invitar Amigos</a></li>
        <li><a href="/">Ayuda</a></li>

        
      </ul>
      <button onClick={() => navigate("/")} className={styles.butonBack}>Salir</button>
    </aside>
  );
}

export default Sidebar;
