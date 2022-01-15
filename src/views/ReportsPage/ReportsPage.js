import { Link } from 'react-router-dom';
import ReportsSwitcher from '../../components/ReportsSwitcher/ReportsSwitcher';

export default function ReportsPage() {
  return (
    <>
      <button>
        <Link to="/cashflow">Вернуться на главную</Link>
      </button>
      <ReportsSwitcher />
    </>
  );
}
