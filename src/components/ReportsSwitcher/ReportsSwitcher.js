import styles from './ReportsSwitcher.module.css';
import CostsReport from '../CostsReport/CostsReport';
import IncomesReport from '../IncomesReport/IncomesReport';
import { useState } from 'react';

export default function ReportsSwitcher() {
  const [idxActiveReport, setIdxActiveReport] = useState(0);

  const reports = [
    {
      name: 'РАСХОДЫ',
      element: <CostsReport />,
    },
    {
      name: 'ДОХОДЫ',
      element: <IncomesReport />,
    },
  ];

  const handleSwitchReport = value => {
    switch (value) {
      case 'next':
        if (idxActiveReport === reports.length - 1) {
          setIdxActiveReport(0);
        } else {
          setIdxActiveReport(idxActiveReport + 1);
        }
        break;

      case 'prev':
        if (idxActiveReport === 0) {
          setIdxActiveReport(reports.length - 1);
        } else {
          setIdxActiveReport(idxActiveReport - 1);
        }
        break;

      default:
        return;
    }
  };

  return (
    <section className={styles.sections}>
      <div className={styles.reportSwitcher}>
        <button
          className={styles.reportSwitcher__btn}
          type="button"
          onClick={() => handleSwitchReport('prev')}
        ></button>
        <p className={styles.section_title}>{reports[idxActiveReport].name}</p>
        <button
          className={styles.reportSwitcher__btn}
          type="button"
          onClick={() => handleSwitchReport('next')}
        ></button>
      </div>
      <div className={styles.container}>{reports[idxActiveReport].element}</div>
    </section>
  );
}
