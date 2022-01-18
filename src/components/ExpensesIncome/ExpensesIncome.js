// import { useState } from 'react';
// import { MdBarChart } from 'react-icons/md';

import Balance from '../Balance/Balance';
import { MdBarChart } from 'react-icons/md';
import { FcCalendar } from 'react-icons/fc';
import { BiCalculator } from 'react-icons/bi';

import Button from '../Button/Button';
// import ButtonGrey from '../Button/ButtonGrey';
import LinkToReports from '../LinkToReports/LinkToReports';
import DateCalendar from '../DateCalendar/DateCalendar';
import CashflowDataEntry from '../CashflowDataEntry/CashflowDataEntry';

import TableCashflo from '../TableCashflo/TableCashflo';
import TableMonth from '../TableMonth/TableMonth';

import s from './ExpensesIncome.module.css';

export default function ExpensesIncome() {
  const [category, setСategory] = useState('');
  const [description, setDescription] = useState('');
  const [sum, setSum] = useState([]);
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

  //   const hendleChangeDescription = ({ target: { name, value } }) => {
  //     switch (name) {
  //       case 'balance':
  //         return setBalance(value);
  //       default:
  //         return;
  //     }
  //   };

  return (
    <section className={s.section}>
      <div className={s.boxBalance}>
        <Balance />
        
        <div className={s.reportBox}>

        <LinkToReports />
        {/* <div>
          <a className={s.reportsLink} href="restart">
            Перейти к отчетам
            <span className={s.icon}>
              <MdBarChart />
            </span>
          </a>
        </div> */}
      </div>

      <div className={s.boxBtn}>
        <button className={s.navBtn}>РАСХОД</button>
        <button className={s.navBtn}>ДОХОД</button>
      </div>

      <div className={s.analysis}>
        <div className={s.cashflowInput}>
          <DateCalendar />
          <CashflowDataEntry />
        </div>

        <div className={s.boxTabl}>
          <TableCashflo />
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
    </section>
  );
}
