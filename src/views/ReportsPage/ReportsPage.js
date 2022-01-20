import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import styles from './ReportsPage.module.css';
import getCategoryReport from '../../services/api-services';
import ReportsSwitcher from '../../components/ReportsSwitcher/ReportsSwitcher';
import CurrentDateRaport from '../../components/CurrentDateRaport';
import ExpensesComponent from '../../components/ExpensesComponent';
import CostsReport from '../../components/CostsReport/CostsReport';
import ReportsGraph from '../../components/ReportsGraph/ReportsGraph';
import Background from '../Background/background';
import LinkToMain from '../../components/LinkToMain/LinkToMain';
import Balance from '../../components/Balance/Balance';

export default function ReportsPage() {
  const [typeReport, setTypeReport] = useState(null);
  const [date, setDate] = useState(null);
  const [categories, setCategories] = useState([]);
  const [subcategories, setSubcategories] = useState(null);
  const [firstCategory, setFirstCategory] = useState(null);

  useEffect(() => {
    const queryReports = [date, typeReport];
    // getCategoryReport(queryReports)
    //   .then(resp =>
    // setCategories(categories))

    if (categories.length) {
      setFirstCategory(categories[0].title);
    } else {
      return;
    }
  }, [date, typeReport, categories]);

  const handleDate = newDate => {
    setDate(newDate);
  };

  const handleTypeReport = newTypeReport => {
    setTypeReport(newTypeReport);
  };

  const handleSubcategories = newSubcategories => {
    setSubcategories(newSubcategories);
  };

  return (
    <>
      <Background>
        <div className={styles.sections}>

          <div className={styles.upperBar}>
            <LinkToMain />
            <Balance />
            <CurrentDateRaport handleDate={handleDate} />
          </div>

          <ExpensesComponent />

          <div className={styles.wrapperSection}>
          <ReportsSwitcher
            className={styles.reportSwitcher}
            typeReport={typeReport}
            handleTypeReport={handleTypeReport}
          />
          <CostsReport
            categories={categories}
            firstCategory={firstCategory}
            typeReport={typeReport}
            date={date}
            handleSubcategories={handleSubcategories}
            />
          </div>

          {/* {categories.length ? ( */}
            <ReportsGraph
              subcategories={subcategories}
              typeReport={typeReport}
              date={date}
            />
          {/* ) : null} */}
        </div>
      </Background>

    </>
  );
}
