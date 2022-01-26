import { Link } from 'react-router-dom';
import { MdBarChart } from 'react-icons/md';

import s from './LinkToReports.module.css';

export default function LinkToReports() {
  return (
    <Link to="/reports" className={s.reportsLink}>
      <span className={s.text}>Перейти к отчетам</span>
      <span className={s.icon}>
        <MdBarChart />
      </span>
    </Link>
  );
}
