import { Navigate } from 'react-router-dom';
import ExpensesIncome from '../../components/ExpensesIncome/ExpensesIncome';
// import Balance from '../../components/Balance/Balance';
import { useSelector } from 'react-redux';
import { authSelectors } from '../../redux/auth';

export default function CashFlowPage() {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  if (!isLoggedIn) {
    return <Navigate to="/home" />;
  }

  return (
    <>
      <ExpensesIncome />
    </>
  );
}
