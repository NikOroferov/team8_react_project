import { useState, useEffect } from 'react';
import s from './ExpensesComponent.module.css';
import * as reportsAPI from '../../services/reports-api';

const ExpensesComponent = ({ date }) => {
  const [totalReport, setTotalReport] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    reportsAPI
      .fetchTotalReportByMonth(date)
      .then(response => {
        setTotalReport(response.data.result);
      })
      .catch(error => {
        setError('Hey, Kapusta! We have a problem!');
      });
  }, [date]);

  return (
    <div className={s.wrapper}>
      <ul className={s.item}>
        {totalReport.map(item => (
          <li key={item._id} className={s.itemId}>
            {item._id ? (
              <div className={s.sum1}>
                <p className={s.text}>Доходы:</p>+{item.total} грн.
              </div>
            ) : (
              <div className={s.sum}>
                <p className={s.text}>Paсходы:</p>-{item.total} грн.
                <span className={s.line}></span>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};
export default ExpensesComponent;
