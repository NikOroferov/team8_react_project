import { Link } from 'react-router-dom';

export default function HomePage() {
  return (
    <button>
      <Link to="/cashflow">Go to CashFlowPage</Link>
    </button>
  );
}
