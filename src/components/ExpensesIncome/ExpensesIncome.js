import { useState } from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';

import { MdBarChart } from 'react-icons/md';
import { FcCalendar } from 'react-icons/fc';
import { BiCalculator } from 'react-icons/bi';

import Button from '../Button/Button';
import ButtonGrey from '../Button/ButtonGrey';
import TableCashflo from '../TableCashflo/TableCashflo';

import s from './ExpensesIncome.module.css';

export default function ExpensesIncome() {
  const [category, setСategory] = useState('');
  const [description, setDescription] = useState('');
  const [sum, setSum] = useState([]);
  const [balance, setBalance] = useState(55000.0);

  const hendleChangeDescription = ({ target: { name, value } }) => {
    switch (name) {
      case 'description':
        return setDescription(value);
      case 'category':
        return setСategory(value);
      case 'sum':
        return setSum(value);
      case 'balance':
        return setBalance(value);
      default:
        return;
    }
  };

  const handleChange = e => {
    setСategory(e.target.value);
  };

  const clearForm = e => {
    e.preventDefault();
    console.log(e.target);
    setСategory('');
    setDescription('');
    setSum();
  };

  return (
    <section className={s.section}>
      {/* <div className={s.hero}> */}
      <div className={s.boxBalance}>
        <div className={s.balance}>
          <form>
            <label>
              <span className={s.text}>Баланс:</span>
              <input
                className={s.Summ}
                type="number"
                name="balance"
                value={balance}
                pattern="/^\s*-?[1-9]\d*(\.\d{1,2})?\s*$/"
                onChange={hendleChangeDescription}
              />
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
          <div className={s.boxDate}>
            <span>
              <FcCalendar className={s.iconCaltndar} />
            </span>
            <span className={s.dateNowe}>
              {new Date().toLocaleDateString()}
            </span>
          </div>

          <form className={s.formCashflow}>
            <label>
              <input
                className={s.description}
                //  mask={maskMap[locale]}
                type="text"
                placeholder="Описание товара"
                name="description"
                value={description}
                onChange={hendleChangeDescription}
              />
            </label>

            <InputLabel id="demo-simple-select-label"></InputLabel>
            <Select
              className={s.category}
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={category}
              onChange={handleChange}
            >
              <MenuItem value="Алкоголь">Алкоголь</MenuItem>
              <MenuItem value="Все для дома">Все для дома</MenuItem>
              <MenuItem value="Здоровье">Здоровье</MenuItem>
              <MenuItem value="Коммуналка, связь">Коммуналка, связь</MenuItem>
              <MenuItem value="Образование">Образование</MenuItem>
              <MenuItem value="Продукты">Продукты</MenuItem>
              <MenuItem value="Развлечения">Развлечения</MenuItem>
              <MenuItem value="Спорт, хобби">Спорт, хобби</MenuItem>
              <MenuItem value="Транспорт">Транспорт</MenuItem>
              <MenuItem value="Техника">Техника</MenuItem>
              <MenuItem value="Прочее">Прочее</MenuItem>
            </Select>

            <label className={s.boxCalculator}>
              <input
                className={s.calculator}
                type="number"
                placeholder="0,00"
                name="sum"
                value={sum}
                onChange={hendleChangeDescription}
              />

              <BiCalculator className={s.calcIcon} />
            </label>

            <div className={s.btn}>
              <Button name="ВВОД" />
            </div>
            <Button name="ОЧИСТИТЬ" type="submit" click={clearForm} />
          </form>
        </div>

        <div className={s.boxTabl}>
          {/* <div className={s.tabCashflow}>
            <p>ТАБЛИЦА- ДОХОДЫ РАСХОДЫ</p>
          </div> */}
          <TableCashflo />
          {/* <TestTab /> */}
          <div className={s.monthCashflow}>
            <p>ТАБЛИЦА - СВОДКА</p>
          </div>
        </div>

        <div className={s.btnForMobil}>
          <button>РАСХОД</button>
          <button>ДОХОД</button>
        </div>
      </div>
      {/* </div> */}
      <div className={s.hero}></div>
    </section>
  );
}
