import './LinkToReports.css';
import { Link } from 'react-router-dom';
import ReportsPage from '../../pages/ReportsPage';

export default function LinkToReports() {
  return (
    <div className="linkReport">
      <Link className="linkReport__link" to="/reports" element={<ReportsPage />}>
        <p className="linkReport__text">Перейти к отчетам</p>
        <svg className="linkReport__icon" width="24" height="24">
          <use href="#"></use>
        </svg>
      </Link>
    </div>
  );
}
