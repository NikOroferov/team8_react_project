// import { useState } from 'react';
// import { MdBarChart } from 'react-icons/md';

import Balance from '../Balance/Balance';
import LinkToReports from '../LinkToReports/LinkToReports';
// import ButtonGrey from '../Button/ButtonGrey';
import DateCalendar from '../DateCalendar/DateCalendar';
import CashflowDataEntry from '../CashflowDataEntry/CashflowDataEntry';

import TableCashflo from '../TableCashflo/TableCashflo';
import TableMonth from '../TableMonth/TableMonth';

import s from './ExpensesIncome.module.css';

export default function ExpensesIncome() {
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
