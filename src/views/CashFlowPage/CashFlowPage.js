import { Link } from 'react-router-dom';
import ExpensesIncome from '../../components/ExpensesIncome/ExpensesIncome';
// import Balance from '../../components/Balance/Balance';

export default function CashFlowPage() {
  return (
    <>
      <button>
        <Link to="/">Go to Home</Link>
      </button>
      <button>
        <Link to="/reports">Go to ReportsPage</Link>
      </button>
      {/* <Container> */}
      <ExpensesIncome />
      {/* <Balance /> */}
      {/* </Container> */}
    </>
  );
}
