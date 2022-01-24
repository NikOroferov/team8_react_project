import { useState, useEffect } from 'react';
import Icons from '../../img/svg/sprite.svg';
// import toast from 'react-hot-toast';
import axios from 'axios';

import s from './TableCashfloMobile.module.css';

const ButtonDelet = data => {
  return (
    <button
      className="buttonDel"
      type="button"
      onClick={data.click}
      id={data.idItams}
      value={data.summ}
    >
      <svg width="18" height="18" className="iconButtonDel">
        <use xlinkHref={`${Icons}#icon-delete-1`} className=""></use>
      </svg>
    </button>
  );
};

// axios.defaults.headers.common = {
//   Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxZWJlMGYxYmM3NjkxNTZlNjBkYTVmMiIsImlhdCI6MTY0Mjg3NDE0OSwiZXhwIjoxNjQ0MDgzNzQ5fQ.XDSTb16DBgzWSLYCWCQTVlJJkGbOEu1AUWzzzrHWK7U`,
// };

export default function TableCashfloMobile({
  fetchDelete,
  deleteTranId,
  //   typeInfo,
}) {
  const [transactionsAll, setTransactionsAll] = useState('');
  const [balance, setBalance] = useState(500);

  useEffect(() => {
    const fetchAll = async () => {
      const response = await axios.get(
        `http://localhost:3001/api/transaction/`,
      );
      setTransactionsAll(response.data.data.transactions);
      return response.data;
    };
    fetchAll();
  }, []);

  const onClickDelete = e => {
    const transactionId = e.currentTarget.id;

    if (balance - e.currentTarget.value < 0) {
      // toast.error('Вы превышаете свой баланс!');
      return;
    } else {
      const dataCashFoTablFiter = transactionsAll.filter(function (e) {
        return e._id !== transactionId;
      });

      fetchDelete(transactionId);
      deleteTranId(transactionId);
      setTransactionsAll(dataCashFoTablFiter);
    }
  };

  function dateFormat(date) {
    const toStringData = String(date.month);
    if (toStringData.length < 2) {
      return `0${toStringData}`;
    } else {
      return toStringData;
    }
  }

  function colorElement(costs, incomes) {
    if (incomes === false) {
      return (
        <p className={s.costs} style={{ color: '#E7192E' }}>
          - {costs} грн.
        </p>
      );
    }
    if (incomes === true) {
      return (
        <p className={s.costs} style={{ color: '#407946' }}>
          + {costs} грн.
        </p>
      );
    }
  }

  return (
    <ul className={s.boxCashfloo}>
      {transactionsAll &&
        transactionsAll.map(
          ({ _id, subcategory, category, costs, date, incomes }) => (
            <li key={_id} id={_id} className={s.item}>
              <div className={s.boxOne}>
                <p className={s.descr}>{subcategory}</p>
                <p className={s.data}>
                  {date.day}.{dateFormat(date)}.{date.year}
                  <span className={s.category}>{category}</span>
                </p>
              </div>
              <div className={s.boxTwo}>
                {colorElement(costs, incomes)}
                <ButtonDelet click={onClickDelete} idItams={_id} summ={costs} />
              </div>
            </li>
          ),
        )}
    </ul>
  );
}
