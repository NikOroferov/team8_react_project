import { Link } from "react-router-dom";
import styles from "./LinkToMain.css";
import Icons from '../../img/svg/sprite.svg';

export default function LinkToMain() {
    
    return (
        <div className={styles.container}>
            <button>
                <svg className={styles.icon} width="18" height="12">
                    <use
                      href={`${Icons}#icon-keyboard_backspace-24px-1`}
                    ></use>
                </svg>
                <Link to="/cashflow">Вернуться на главную</Link>
                
            </button>
        </div>
    )
}