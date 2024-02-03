import React from 'react';
import styles from './navBar.module.css';
import Logo from '../../assets/logo.png'
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}><img className={styles.img} src={Logo} alt="" /></div>
      <ul className={styles.links}>
        <li><a href="/">Home</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/contact">Contact</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
