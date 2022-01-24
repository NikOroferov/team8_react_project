import { useState, useEffect } from 'react';
import s from './ExpensesComponent.module.css';

const BASE_URL = 'http://localhost:3001/api/transaction';

async function fetchWithErrorHandling(url = '') {
  const response = await fetch(url, {
    headers: {
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxZTk1NmUxNjVmODdiYWJmYzFhMzcxMiIsImlhdCI6MTY0Mjk1NzYyMywiZXhwIjoxNjQ0MTY3MjIzfQ.HPWY_CAoJbTTEl7U5z78zzIPDFpYk-dIeR3Pg1y0-dE',
    },
  });
  return response.ok
    ? await response.json()
    : Promise.reject(new Error('Not found'));
}

function fetchTotalReport(date) {
  return fetchWithErrorHandling(`${BASE_URL}/total-by-month?date=${date}`);
}

const ExpensesComponent = ({ date }) => {
  const [totalReport, setTotalReport] = useState([]);
  const [error, setError] = useState(null);
  console.log(date);
  useEffect(() => {
    fetchTotalReport(date)
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
                <p className={s.text}>Доходы:</p>+{item.total}.00 грн.
              </div>
            ) : (
              <div className={s.sum}>
                <p className={s.text}>Paсходы:</p>-{item.total}.00 грн.
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
