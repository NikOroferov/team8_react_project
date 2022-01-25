import { useState } from 'react';
import styles from './ReportsPage.module.css';
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
  const [activeCategory, setActiveCategory] = useState(null);
  const [isCategoryLenght, setIsCategoryLenght] = useState(true);
  const [firstUserDate, setFirstUserDate] = useState(null);


  const handleDate = newDate => {
    setDate(newDate);
  };

  const handleTypeReport = newTypeReport => {
    setTypeReport(newTypeReport);
  };

  const handleActiveCategory = activeCategory => {
    setActiveCategory(activeCategory);
  };

  const handleCategoriesLenght = lengthBoolean => {
    setIsCategoryLenght(lengthBoolean);
  };

  const handlerFirstDate = firstDate => {
    setFirstUserDate(firstDate)
  };

  return (
    <>
      <Background>
        <div className={styles.sections}>
          <div className={styles.upperBar}>
            <LinkToMain />
            <div className={styles.mobileBar}>
              <Balance />
              <CurrentDateRaport handleDate={handleDate} firstUserDate={firstUserDate}/>
            </div>
          </div>

             <>
              <ExpensesComponent date={date} />

              <div className={styles.wrapperSection}>
                <ReportsSwitcher
                  className={styles.reportSwitcher}
                  typeReport={typeReport}
                  handleTypeReport={handleTypeReport}
                />
                <CostsReport
                  typeReport={typeReport}
                  date={date}
                  handleActiveCategory={handleActiveCategory}
                handleCategoriesLenght={handleCategoriesLenght}
                handlerFirstDate={handlerFirstDate}
                />
              </div>

              {isCategoryLenght ? (
                <ReportsGraph
                  activeCategory={activeCategory}
                  typeReport={typeReport}
                  date={date}
                />
              ) : null}
            </>
        </div>
      </Background>
    </>
  );
}
