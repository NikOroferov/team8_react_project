import { useState } from 'react';
import Icons from '../../img/svg/sprite.svg';

import s from './TableCashfloMobile.module.css';

const ButtoDelet = data => {
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

export default function TableCashfloMobile({ transactions, fetchDelete }) {
  const [balance, setBalance] = useState(500);

  const onClickDelete = e => {
    const transactionId = e.currentTarget.id;

    if (balance - e.currentTarget.value < 0) {
      console.log(`Не удаляем Балан не может быть "-"`);
      return;
    } else {
      fetchDelete(transactionId);
    }
    console.log(`УДИЛЯЕМ`);
  };

  function dateFormat(date) {
    if (date.month.length < 2) {
      return `0${date.month}`;
    } else {
      return date.month;
    }
  }

  return (
    <ul className={s.boxCashfloo}>
      {transactions &&
        transactions.map(({ _id, subcategory, category, costs, date }) => (
          <li key={_id} id={_id} className={s.item}>
            <div className={s.boxOne}>
              <p className={s.descr}>{subcategory}</p>
              <p className={s.data}>
                {date.day}.{dateFormat(date)}.{date.year}
                <span className={s.category}>{category}</span>
              </p>
            </div>
            <div className={s.boxTwo}>
              <p className={s.costs}>{costs}</p>
              <ButtoDelet click={onClickDelete} idItams={_id} summ={costs} />
            </div>
          </li>
        ))}
    </ul>
  );
}
