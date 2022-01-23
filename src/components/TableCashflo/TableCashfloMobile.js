import Icons from '../../img/svg/sprite.svg';

import s from './TableCashfloMobile.module.css';

const ButtoDelet = data => {
  return (
    <button
      className="buttonDel"
      type="button"
      onClick={data.click}
      id={data.idItams}
    >
      <svg width="18" height="18" className="iconButtonDel">
        <use xlinkHref={`${Icons}#icon-delete-1`} className=""></use>
      </svg>
    </button>
  );
};

export default function TableCashfloMobile({ transactions }) {
  console.log(transactions);
  const onClickDelete = e => {
    console.log(`УДИЛИТЬ`);
    console.log(e.currentTarget.id);
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
              <ButtoDelet click={onClickDelete} idItams={_id} />
            </div>
          </li>
        ))}
    </ul>
  );
}
