import React from 'react';
import styles from './navBar.module.css';
import Logo from '../../assets/logo.png'
import User from '../../assets/usuario.png'
import { Link } from 'react-router-dom';

const Navbar = () => {

  const userData = {
    firstName: 'John',
    lastName: 'Doe',
    balance: '$0.00',
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}><img className={styles.img} src={Logo} alt="" /></div>
     <div className={styles.userCard}>
        <img className={styles.userImage} src={User} alt="User" />
        <div className={styles.userInfo}>
          <p>{userData.firstName} {userData.lastName}</p>
          <p>Saldo: {userData.balance}</p>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
