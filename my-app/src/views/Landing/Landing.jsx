import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Landing.module.css';
import title from '../../assets/Doc2Home-Sin-fondo.png'

const Landing = () => {
  return (
    <div className={styles.pageContainer}>
      <div className={styles.homeContainer}>
        <img className={styles.img} src={title} alt="" />
        <div className={styles.card}>
        <h1>¡Conéctate con doctores desde casa!</h1>
        <p className={styles.compactParagraph}>
            Nuestra aplicación te ofrece atención médica de calidad desde la comodidad de tu hogar. Con acceso instantáneo a doctores expertos las 24 horas del día, los 7 días de la semana, podrás recibir la atención que necesitas sin esperas ni desplazamientos. Descarga nuestra app ahora y cuida tu salud de manera fácil y conveniente.
          </p>
          
          <div className={styles.selectorsContainer}>
            <div className={styles.languageSelector}>
              <select>
                <option value="english">English</option>
                <option value="spanish">Español</option>
              </select>
            </div>
            <div className={styles.currencySelector}>
              <select>
                <option value="USD">USD</option>
                <option value="ARG">ARG</option>
              </select>
            </div>
          </div>

          <div className={styles.buttonContainer}>
            <Link to="/home" className={styles.loginButton}>Login</Link>
            <Link to="/register" className={styles.registerButton}>Register</Link>
          </div>
        </div>
        </div>
      </div>
  );
}

export default Landing;
