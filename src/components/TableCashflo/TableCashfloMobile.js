import { useState } from 'react';

import s from './TableCashfloMobile.module.css';

import Icons from '../../img/svg/sprite.svg';

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

export default function TableCashfloMobile({ typeInfo }) {
  // eslint-disable-next-line no-unused-vars
  const [dataCash, setDatadCash] = useState([
    {
      id: '1',
      date: '12.01.2022',
      category: 'Продукты',
      transactionType: 'расход',
      costs: '10000.00',
      subcategory: 'Описание товара',
    },
    {
      id: '2',
      date: '13.01.2022',
      category: 'Алкоголь',
      transactionType: 'расход',
      costs: '5000.00',
      subcategory: 'Описание товара',
    },
    {
      id: '3',
      date: '14.01.2022',
      category: 'Продукты',
      transactionType: 'расход',
      costs: '10000.00',
      subcategory: 'Описание товара',
    },
    {
      id: '4',
      date: '15.01.2022',
      category: 'Продукты',
      transactionType: 'расход',
      costs: '10000.00',
      subcategory: 'Описание товара',
    },
    {
      id: '11',
      date: '05.01.2022',
      category: 'зп',
      transactionType: 'доход',
      costs: '6000.00',
      subcategory: 'Аренда',
    },
    {
      id: '5',
      date: '16.01.2022',
      category: 'Продукты',
      transactionType: 'расход',
      costs: '10000.00',
      subcategory: 'Описание товара',
    },
    {
      id: '6',
      date: '17.01.2022',
      category: 'Продукты',
      transactionType: 'расход',
      costs: '10000.00',
      subcategory: 'Описание товара',
    },
    {
      id: '7',
      date: '18.01.2022',
      category: 'Продукты',
      transactionType: 'расход',
      costs: '10000.00',
      subcategory: 'Описание товара',
    },
    {
      id: '8',
      date: '17.01.2022',
      category: 'зп',
      transactionType: 'доход',
      costs: '15000.00',
      subcategory: 'Описание товара',
    },
    {
      id: '9',
      date: '17.01.2022',
      category: 'доп.доход',
      transactionType: 'доход',
      costs: '1000.00',
      subcategory: 'Описание товара',
    },
    {
      id: '10',
      date: '18.01.2022',
      category: 'зп',
      transactionType: 'доход',
      costs: '15000.00',
      subcategory: 'Описание товара',
    },
  ]);

  const onClickDelete = e => {
    console.log(`УДИЛИТЬ`);
    console.log(e.currentTarget.id);
  };

  return (
    <ul className={s.boxCashfloo}>
      {dataCash &&
        dataCash.map(({ id, date, subcategory, category, costs }) => (
          <li key={id} id={id} className={s.item}>
            <div className={s.boxOne}>
              <p className={s.descr}>{subcategory}</p>
              <p className={s.data}>
                {date} <span className={s.category}>{category}</span>
              </p>
            </div>
            <div className={s.boxTwo}>
              <p className={s.costs}>{costs}</p>
              <ButtoDelet click={onClickDelete} idItams={id} />
            </div>
          </li>
        ))}
    </ul>
  );
}
