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
        ></button>
        <p className={styles.section_title}>{typeName}</p>
        <button
          className={styles.reportSwitcher__btn}
          type="button"
          onClick={() => handleSwitchReport('next')}
        ></button>
      </div>
    </>
  );
}
