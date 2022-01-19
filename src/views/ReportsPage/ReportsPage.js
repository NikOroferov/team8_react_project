import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import styles from './ReportsPage.module.css';
import ReportsSwitcher from '../../components/ReportsSwitcher/ReportsSwitcher';
import CurrentDateRaport from '../../components/CurrentDateRaport';
import ExpensesComponent from '../../components/ExpensesComponent';
import CostsReport from '../../components/CostsReport/CostsReport';
import ReportsGraph from '../../components/ReportsGraph/ReportsGraph';

export default function ReportsPage() {
  const [typeReport, setTypeReport] = useState('');
  const [date, setDate] = useState('');
  const [categories, setCategories] = useState('');
  const [subcategories, setSubcategories] = useState('');

  const queryReports = [date, typeReport];

  useEffect(() => console.log(typeReport)
    // // getReportsByDateAndType(queryReports)
    //   .then(resp =>
    //     setCategories(resp.data.categories))
    , [date, typeReport]);

  const handleDate = newDate => {
    setDate(newDate);
   };

  const handleTypeReport = newTypeReport => {
    setTypeReport(newTypeReport);
  };
  
const handleSubcategories = (newSubcategories) => { 
    setSubcategories(newSubcategories);
  };

  return (
    <>
      <button>
        <Link to="/cashflow">Вернуться на главную</Link>
      </button>

      <CurrentDateRaport handleDate={handleDate}/>
      <ExpensesComponent />
      <ReportsSwitcher className={styles.reportSwitcher} typeReport={typeReport} handleTypeReport={handleTypeReport}
      />
      <CostsReport categories={categories} typeReport={typeReport} date={date} handleSubcategories={handleSubcategories} />
      <ReportsGraph subcategories={subcategories} typeReport={typeReport} date={date}
      />
    </>
  );
}
