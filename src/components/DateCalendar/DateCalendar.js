import { FcCalendar } from 'react-icons/fc';
import s from './DateCalendar.module.css';

export default function DateCalendar() {
  return (
    <div className={s.boxDate}>
      <span className={s.iconBox}>
        <FcCalendar className={s.iconCalendar} />
      </span>
      <span className={s.dateNowe}>{new Date().toLocaleDateString()}</span>
    </div>
  );
}
