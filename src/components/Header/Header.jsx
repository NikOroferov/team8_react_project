import React from 'react';
import styles from './Header.module.css';
import Logo from '../Logo/Logo';

function Header() {
    const isLoggedIn = true;
  return (
    <header>
      <div className={styles.header}>
         <Logo />
        <p>Хеадер</p>
         {/* {isLoggedIn && <UserMenu />}  */}
      </div>
    </header>
  );
}

export default Header;