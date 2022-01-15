import React from 'react';
import styles from './Header.module.css';
import Logo from '../Logo/Logo';
import Icons from '../../img/svg/sprite.svg';

const name = 'icon-calculator';

function Header() {
  const isLoggedIn = true;

  return (
    <header>
      <div className={styles.header}>
        <Logo />

        {isLoggedIn && (
          <div className={styles.userMenu}>
            <div className={styles.firstLetter}>U</div>
            <p className={styles.userName}>User Name</p>
            <div className={styles.line}></div>
            <button
              type="button"
              // onClick={toggleModal}
              className={styles.logOutBtn}
            >
              <svg width="18" height="18">
                <use xlinkHref={`${Icons}#icon-logout`} />
              </svg>
              {/* <Icons 
         name='icon-calculator'
    viewBox="0 0 32 32"
         size='32'
         
       /> */}
            </button>
            <button className={styles.logOutTextBtn}>Выйти</button>
          </div>
        )}
      </div>
    </header>
  );
}

export default Header;
