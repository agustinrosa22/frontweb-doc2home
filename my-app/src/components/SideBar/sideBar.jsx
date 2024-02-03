import React from 'react';
import styles from './sideBar.module.css';

const Sidebar = () => {
  return (
    <aside className={styles.sidebar}>
      <ul className={styles.links}>
        <li><a href="/">Dashboard</a></li>
        <li><a href="/profile">Profile</a></li>
        <li><a href="/settings">Settings</a></li>
      </ul>
    </aside>
  );
}

export default Sidebar;
