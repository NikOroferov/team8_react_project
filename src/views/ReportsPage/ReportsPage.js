import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import ReportsSwitcher from '../../components/ReportsSwitcher/ReportsSwitcher';
import CurrentDateRaport from '../../components/CurrentDateRaport';
import ExpensesComponent from '../../components/ExpensesComponent';
export default function ReportsPage() {
  const [date, setDate] = useState('');

  useEffect(() => console.log(date), [date]);
  const handleDate = newDate => {
    setDate(newDate);
   };


  return (
    <>
      <button>
        <Link to="/cashflow">Вернуться на главную</Link>
      </button>
      <CurrentDateRaport handleDate={handleDate}/>
      <ExpensesComponent />
      <ReportsSwitcher />
    </>
  );
}
