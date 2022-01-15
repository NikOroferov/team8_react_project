import { Link } from 'react-router-dom';

export default function CashFlowPage() {
  return (
    <>
      <button>
        <Link to="/">Go to Home</Link>
      </button>
      <button>
        <Link to="/reports">Go to ReportsPage</Link>
      </button>
    </>
  );
}
