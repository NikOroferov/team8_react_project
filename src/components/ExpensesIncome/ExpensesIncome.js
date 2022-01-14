import { MdBarChart } from 'react-icons/md';
import { FcCalendar } from 'react-icons/fc';

import Button from '../Button/Button';
import ButtonGrey from '../Button/ButtonGrey';

import s from './ExpensesIncome.module.css';

export default function ExpensesIncome() {
  return (
    <section className={s.section}>
      <div className={s.boxBalance}>
        <div className={s.balance}>
          <form>
            <label>
              <span className={s.text}>Баланс:</span>
              <input className={s.Summ} value="55 000.00 UAH " />
            </label>
            <ButtonGrey name="ПОДТВЕРДИТЬ" />
          </form>
        </div>
        <div>
          <a className={s.reportsLink} href="restart">
            Перейти к отчетам
            <span className={s.icon}>
              <MdBarChart />
            </span>
          </a>
        </div>
      </div>

      <div className={s.boxBtn}>
        <button className={s.navBtn}>РАСХОД</button>
        <button className={s.navBtn}>ДОХОД</button>
      </div>

      <div className={s.analysis}>
        <div className={s.cashflowInput}>
          {/* <div className="boxDataPicKer"> */}
          <span>
            <FcCalendar />
          </span>
          <p>14.01.2022</p>
          {/* </div> */}
          <form className={s.formCashflow}>
            <label>
              <input className={s.description} placeholder="Описание товара" />
            </label>
            <label>
              <input className={s.category} placeholder="Категория товара" />
            </label>
            <label>
              <input className={s.calculator} placeholder="0,00" />
            </label>

            <div className={s.btn}>
              <Button name="ВВОД" />
            </div>
            <Button name="ОЧИСТИТЬ" />
          </form>
        </div>

        <div className={s.boxTabl}>
          <div className={s.tabCashflow}>
            <table>ТАБЛИЦА- ДОХОДЫ РАСХОДЫ</table>
          </div>

          <div className={s.monthCashflow}>
            <table>ТАБЛИЦА - СВОДКА</table>
          </div>
        </div>

        <div className={s.btnForMobil}>
          <button>РАСХОД</button>
          <button>ДОХОД</button>
        </div>
      </div>
    </section>
  );
}
