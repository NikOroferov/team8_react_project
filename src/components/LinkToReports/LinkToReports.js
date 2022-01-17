import { Link } from 'react-router-dom';
import { MdBarChart } from 'react-icons/md';

import s from './LinkToReports.modele.css';

export default function LinkToReports() {
  return (
    <Link className={s.reportsLink} to="/reports">
      <span className={s.text}>Перейти к отчетам</span>
      <span className={s.icon}>
        <MdBarChart />
      </span>
    </Link>
  );
}
