import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';

import { MdBarChart } from 'react-icons/md';
import { FcCalendar } from 'react-icons/fc';
import { BiCalculator } from 'react-icons/bi';

import Button from '../Button/Button';
import ButtonGrey from '../Button/ButtonGrey';

import s from './ExpensesIncome.module.css';

export default function ExpensesIncome() {
  const [age, setAge] = React.useState('');

  const handleChange = event => {
    setAge(event.target.value);
  };

  const clearForm = e => {
    e.preventDefault();
    console.log(e.target);
  };

  return (
    <section className={s.section}>
      {/* <div className={s.hero}> */}
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
            {/* <label> */}
            {/* <input className={s.category} placeholder="Категория товара" /> */}
            <InputLabel
              id="demo-simple-select-label"
              //   sx={{
              //     color: 'success.main',
              //     '& .MuiInputBase': {
              //       borderRadius: '5px',
              //     },
              //   }}
            ></InputLabel>
            <Select
              className={s.category}
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={age}
              onChange={handleChange}
            >
              <MenuItem value="Транспорт">Транспорт</MenuItem>
              <MenuItem value="Продукты">Продукты</MenuItem>
              <MenuItem value="Здоровье">Здоровье</MenuItem>
              <MenuItem value="Алкоголь">Алкоголь</MenuItem>
              <MenuItem value="Развлечения">Развлечения</MenuItem>
              <MenuItem value="Все для дома">Все для дома</MenuItem>
              <MenuItem value="Техника">Техника</MenuItem>
              <MenuItem value="Коммуналка, связь">Коммуналка, связь</MenuItem>
              <MenuItem value="Спорт, хобби">Спорт, хобби</MenuItem>
              <MenuItem value="Образование">Образование</MenuItem>
              <MenuItem value="Прочее">Прочее</MenuItem>
            </Select>
            {/* </label> */}
            <label className={s.boxCalculator}>
              <input className={s.calculator} placeholder="0,00" />
              {/* <span className={s.calcIcon}> */}
              <BiCalculator className={s.calcIcon} />
              {/* </span> */}
            </label>

            <div className={s.btn}>
              <Button name="ВВОД" />
            </div>
            <Button name="ОЧИСТИТЬ" type="submit" click={clearForm} />
          </form>
        </div>

        <div className={s.boxTabl}>
          <div className={s.tabCashflow}>
            <p>ТАБЛИЦА- ДОХОДЫ РАСХОДЫ</p>
          </div>

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
