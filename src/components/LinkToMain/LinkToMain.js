import Media from 'react-media';
import { Link } from 'react-router-dom';
import styles from './LinkToMain.module.css';
import Icons from '../../img/svg/sprite.svg';

export default function LinkToMain() {
  return (
    <Link className={styles.container} to="/cashflow">
      <div className={styles.icon}>
        <svg width="24" height="24">
          <use href={`${Icons}#icon-keyboard_backspace-24px-1`}></use>
        </svg>
      </div>
      <Media
        queries={{
          mobile: '(max-width: 767px)',
          tabletDesktop: '(min-width: 768px)',
        }}
      >
        {matches =>
          matches.tabletDesktop ? (
            <p className={styles.text}>Вернуться на главную</p>
          ) : null
        }
      </Media>
    </Link>
  );
}
