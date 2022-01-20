import styles from './ReportsSwitcher.module.css';
import { useState, useEffect } from 'react';

export default function ReportsSwitcher({ handleTypeReport }) {
  const [type, setType] = useState(false);
  const [typeName, setTypeName] = useState('РАСХОДЫ');

  useEffect(() => {
    if (type === true) {
      setTypeName('ДОХОДЫ');
      return handleTypeReport(type);
    } else {
      setTypeName('РАСХОДЫ');
      return handleTypeReport(type);
    }
  }, [type, handleTypeReport])

  const handleSwitchReport = value => {
    switch (value) {
      case 'next':
        setType(!type);
        break;

      case 'prev':
        setType(!type);
        break;

      default:
        return;
    }
  };

  return (
    <>
      <div className={styles.reportSwitcher}>
        <button
          className={styles.reportSwitcher__btn}
          type="button"
          onClick={()=>handleSwitchReport('prev')}
        > <svg
          width="7"
          height="12"
          viewBox="0 0 7 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M6 1L2 6L6 11" stroke="#FF751D" strokeWidth="2" />
        </svg></button>
        <p className={styles.section_title}>{typeName}</p>
        <button
          className={styles.reportSwitcher__btn}
          type="button"
          onClick={() => handleSwitchReport('next')}
        ><svg
          width="7"
          height="12"
          viewBox="0 0 7 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M1 1L5 6L1 11" stroke="#FF751D" strokeWidth="2" />
        </svg></button>
      </div>
    </>
  );
}
