import React from 'react';
import { useState } from 'react';
import styles from './Header.module.css';
import Logo from '../Logo/Logo';
import Icons from '../../img/svg/sprite.svg';
import { useSelector, useDispatch } from 'react-redux';
import { authSelectors, authOperations } from '../../redux/auth';
import CommonModal from '../Modal/CommonModal';

function Header() {
  const dispatch = useDispatch();
  const [isModalOpen, setModalOpen] = useState(false);
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

  const toggleModal = () => {
    setModalOpen(!isModalOpen);
  };

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
              onClick={toggleModal}
              className={styles.logOutBtn}
            >
              <svg width="16" height="16" className={styles.iconLogout}>
                <use xlinkHref={`${Icons}#icon-logout`} />
              </svg>
            </button>
            <button className={styles.logOutTextBtn} onClick={toggleModal}>
              Выйти
            </button>
            {/* {isModalOpen && (
              <Modal
                title="Вы действительно хотите выйти?"
                onNo={toggleModal}
                onYes={() => dispatch(authOperations.logout())}
              />
            )} */}
            {isModalOpen && (
              <CommonModal
                modalText="Вы действительно хотите выйти?"
                toggleModal={toggleModal}
                logOut={() => dispatch(authOperations.logOut())}
              />
            )}
          </div>
        )}
      </div>
    </header>
  );
}

export default Header;
