import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from './LinkToMain.module.css';
import Icons from '../../img/svg/sprite.svg';

export default function LinkToMain() {
  const [isDesktopOrTablet, setIsDesktopOrTablet] = useState(
    window.innerWidth > 773,
  );

  const updateMedia = () => {
    setIsDesktopOrTablet(window.innerWidth > 773);
  };

  useEffect(() => {
    window.addEventListener('resize', updateMedia);
    return () => window.removeEventListener('resize', updateMedia);
  });

  return (
          <Link className={styles.container} to="/cashflow">
      <div className={styles.icon}>
        <svg width="24" height="24">
            <use href={`${Icons}#icon-keyboard_backspace-24px-1`}></use>
              </svg></div>
              {isDesktopOrTablet ? <p className={styles.text}>Вернуться на главную</p> : null}
      </Link>
  );
}
