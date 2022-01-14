import { MdBarChart } from 'react-icons/md';
import { FcCalendar } from 'react-icons/fc';

import Button from '../Button/Button';

import s from './ExpensesIncome.css';

export default function ExpensesIncome() {
  return (
    <section>
      <div>
        <div className={s.balance}>
          <form>
            <label>
              <span>Баланс:</span>
              <input />
            </label>
            <button>ПОДТВЕРДИТЬ</button>
          </form>
        </div>
        <div>
          <a href="restart">
            Перейти к отчетам
            <span>
              <MdBarChart />
            </span>
          </a>
        </div>
      </div>

      <button>РАСХОД</button>
      <button>ДОХОД</button>

      <div>
        <span>
          <FcCalendar />
        </span>
        <p>14.01.2022</p>
        <form>
          <label>
            <input placeholder="Описание товара" />
          </label>
          <label>
            <input placeholder="Категория товара" />
          </label>
          <Button name="ВВОД" Button />
          <Button name="ОЧИСТИТЬ" />
        </form>
      </div>

      <div>
        <table>ТАБЛИЦА- ДОХОДЫ РАСХОДЫ</table>
        <table>ТАБЛИЦА - СВОДКА</table>
      </div>

      <div>
        <button>РАСХОД</button>
        <button>ДОХОД</button>
      </div>
    </section>
  );
}
