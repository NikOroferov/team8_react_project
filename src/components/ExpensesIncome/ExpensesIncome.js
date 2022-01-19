import { useState } from 'react';
// import { NavLink } from 'react-router-dom';

import Balance from '../Balance/Balance';

import Background from '../../views/Background/background.jsx';

import LinkToReports from '../LinkToReports/LinkToReports';
import DateCalendar from '../DateCalendar/DateCalendar';
import CashflowDataEntry from '../CashflowDataEntry/CashflowDataEntry';

import TableCashflo from '../TableCashflo/TableCashflo';
import TableMonth from '../TableMonth/TableMonth';
// import Icons from '../../img/svg/sprite.svg';

import s from './ExpensesIncome.module.css';

export default function ExpensesIncome() {
  const [typeInfo, setTypeInfo] = useState('расход');
  const [activeCostsBtn, setActiveCostsBtn] = useState(true);
  const [activeIncomeBtn, setActiveIncomeBtn] = useState(false);

  //   const [category, setСategory] = useState('');
  //   const [description, setDescription] = useState('');
  //   const [sum, setSum] = useState([]);

  // const [balance, setBalance] = useState(55000.0);

  //   const handleChange = e => {
  //     setСategory(e.target.value);
  //   };

  //   const clearForm = e => {
  //     e.preventDefault();
  //     console.log(e.target);
  //     setСategory('');
  //     setDescription('');
  //     setSum();
  //   };
  //   const [balance, setBalance] = useState(55000.0);

  const classes = ['navBtn'];
  const classesStr = classes.join(' ');

  if (activeCostsBtn === true) {
    classes.push('active');
  }

  const сostsClick = e => {
    e.preventDefault();
    setTypeInfo('расход');
    setActiveCostsBtn(true);
    setActiveIncomeBtn(false);
  };

  const incomeClick = e => {
    e.preventDefault();
    setTypeInfo('доход');
    setActiveIncomeBtn(true);
    setActiveCostsBtn(false);
  };

  return (
    <Background>
      {/* <section className={s.section}> */}
      <div className={s.boxBalance}>
        <Balance />
        <LinkToReports />
      </div>

      <div className={s.boxBtn}>
        <button className={s.navBtn} type="button" onClick={сostsClick}>
          РАСХОД
        </button>
        <button className={s.navBtn} type="button" onClick={incomeClick}>
          ДОХОД
        </button>
      </div>

      <div className={s.analysis}>
        <div className={s.cashflowInput}>
          <DateCalendar />
          <CashflowDataEntry typeInfo={typeInfo} />
        </div>

        <div className={s.boxTabl}>
          <TableCashflo typeInfo={typeInfo} />
          <div className={s.monthCashflow}>
            <p className={s.summaryTitle}>СВОДКА</p>
            <TableMonth />
          </div>
        </div>
      </div>

      <div className={s.btnForMobil}>
        <button>РАСХОД</button>
        <button>ДОХОД</button>
      </div>
      {/* </section> */}
    </Background>
  );
}
