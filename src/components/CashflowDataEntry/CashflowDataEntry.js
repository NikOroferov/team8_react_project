import { useState, Fragment, useEffect } from 'react';
import Media from 'react-media';
import axios from 'axios';

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
// import { styled } from '@mui/material/styles';

import Button from '../Button/Button';
import s from './CashflowDataEntry.module.css';
import Icons from '../../img/svg/sprite.svg';
// import toast from 'react-hot-toast';
import { blue, red } from '@mui/material/colors';

axios.defaults.headers.common = {
  Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxZWJlMGYxYmM3NjkxNTZlNjBkYTVmMiIsImlhdCI6MTY0Mjg3NDE0OSwiZXhwIjoxNjQ0MDgzNzQ5fQ.XDSTb16DBgzWSLYCWCQTVlJJkGbOEu1AUWzzzrHWK7U`,
};

const styleSelect = {
  color: '#c7ccdc',
  textTransform: 'capitalize',
  ':hover': { color: '#52555f' },
};
// const expensesValue = [
//   { value: 'алкоголь', label: 'алкоголь' },
//   { value: 'все для дома', label: 'все для дома' },
//   { value: 'здоровье', label: 'здоровье' },
//   { value: 'коммуналка, связь', label: 'коммуналка, связь' },
//   { value: 'образование', label: 'образование' },
//   { value: 'продукты', label: 'продукты' },
//   { value: 'развлечения', label: 'развлечения' },
//   { value: 'спорт, хобби', label: 'спорт, хобби' },
//   { value: 'транспорт', label: 'транспорт' },
//   { value: 'техника', label: 'техника' },
//   { value: 'прочее', label: 'прочее' },
// ];

// const incomeValue = [
//   { value: 'зп', label: 'зп' },
//   { value: 'доп. доход', label: 'доп. доход' },
// ];

export default function CashflowDataEntry({ typeInfo }) {
  const [category, setСategory] = useState('');
  const [description, setDescription] = useState('');
  const [sum, setSum] = useState('');
  const [dataItem, setDataItem] = useState('');
  const [balance, setBalance] = useState(1000);

  const fetchEntry = async data => {
    const response = await axios.post(
      'http://localhost:3001/api/transaction',
      data,
    );
    return response.data;
  };

  const hendleChangeDescription = ({ target: { name, value } }) => {
    switch (name) {
      case 'description':
        return setDescription(value);
      case 'category':
        return setСategory(value);
      case 'sum':
        return setSum(value);
      default:
        return;
    }
  };

  const clearForm = e => {
    e.preventDefault();
    setСategory('');
    setDescription('');
    setSum('');
  };

  const handleChange = e => {
    setСategory(e.target.value);
  };

  const typeInfoEnty = () => {
    if (typeInfo === 'расход') {
      return false;
    } else {
      return true;
    }
  };

  const enterData = () => {
    if (balance === null) {
      console.log('Не введен баланс');
      //  сюда вставить вызов модалки про баланс
    }
    if (typeInfo === 'расход') {
      if (balance - sum < 0) {
        // toast.error('Вы превышаете свой баланс!');
        return;
      }
    }
    if (balance !== null) {
      const objItem = {
        created_at: new Date().toISOString(),
        year: new Date().getFullYear(),
        month: new Date().getMonth() + 1,
        day: new Date().getDate(),
        subcategory: description,
        category: category,
        transactionType: typeInfo,
        costs: sum,
        incomes: typeInfoEnty(),
      };
      setDataItem(objItem);
      setСategory('');
      setDescription('');
      setSum('');
    }
  };

  useEffect(() => {
    if (dataItem !== '') {
      fetchEntry(dataItem);
    }
  }, [dataItem]);

  return (
    <form className={s.formCashflow}>
      <label className={s.labelDescription}>
        <input
          className={s.description}
          type="text"
          placeholder="Описание товара"
          name="description"
          value={description}
          onChange={hendleChangeDescription}
          required
        />
      </label>

      <InputLabel id="demo-simple-select-label" placeholder="Описание товара">
        {/* Описание товара */}
      </InputLabel>

      {typeInfo === 'расход' && (
        <Select
          className={s.category}
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={category}
          onChange={handleChange}
          required
        >
          <MenuItem
            value="алкоголь"
            sx={styleSelect}
            // className={s.categoryItamMenu}
          >
            алкоголь
          </MenuItem>
          <MenuItem
            value="все для дома"
            sx={styleSelect}

            // className={s.categoryItamMenu}
          >
            все для дома
          </MenuItem>
          <MenuItem
            value="здоровье"
            sx={styleSelect}
            // className={s.categoryItamMenu}
          >
            здоровье
          </MenuItem>
          <MenuItem
            value="коммуналка, связь"
            sx={styleSelect}
            // className={s.categoryItamMenu}
          >
            коммуналка, связь
          </MenuItem>
          <MenuItem
            value="образование"
            sx={styleSelect}
            // className={s.categoryItamMenu}
          >
            образование
          </MenuItem>
          <MenuItem
            value="продукты"
            sx={styleSelect}
            // className={s.categoryItamMenu}
          >
            продукты
          </MenuItem>
          <MenuItem
            value="развлечения"
            sx={styleSelect}
            // className={s.categoryItamMenu}
          >
            развлечения
          </MenuItem>
          <MenuItem
            value="спорт, хобби"
            sx={styleSelect}
            // className={s.categoryItamMenu}
          >
            спорт, хобби
          </MenuItem>
          <MenuItem
            value="транспорт"
            sx={styleSelect}
            // className={s.categoryItamMenu}
          >
            транспорт
          </MenuItem>
          <MenuItem
            value="техника"
            sx={styleSelect}
            // className={s.categoryItamMenu}
          >
            техника
          </MenuItem>
          <MenuItem
            value="прочее"
            sx={styleSelect}
            // className={s.categoryItamMenu}
          >
            прочее
          </MenuItem>
        </Select>
      )}

      {typeInfo === 'доход' && (
        <Select
          className={s.category}
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={category}
          onChange={handleChange}
          placeholder="Описание товара"
          required
        >
          <MenuItem
            value="зп"
            sx={styleSelect}
            //   className={s.categoryItamMenu}
          >
            зп
          </MenuItem>
          <MenuItem
            value="доп. доход"
            sx={styleSelect}
            // className={s.categoryItamMenu}
          >
            доп. доход
          </MenuItem>
        </Select>
      )}
      <span className={s.span}>
        <label className={s.boxCalculator}>
          <input
            className={s.calculator}
            type="number"
            placeholder="0,00"
            name="sum"
            value={sum}
            step="0.01"
            min="0"
            onChange={hendleChangeDescription}
            required
          />
          <div className={s.boxIconCalc}>
            <svg width="56" height="56" className={s.calcIcon}>
              <use xlinkHref={`${Icons}#icon-calculator`} className=""></use>
            </svg>
          </div>
        </label>
      </span>

      <Media
        queries={{
          small: '(min-width: 320px) and (max-width: 767px)',
          medium: '(min-width: 768px)',
        }}
      >
        {matches => (
          <Fragment>
            {matches.small && (
              <div className={s.btnBoxSubmit}>
                <div className={s.btn}>
                  <Button name="ВВОД" type="submit" click={enterData} />
                </div>
                <div className={s.btnCleer}>
                  <Button name="ОЧИСТИТЬ" type="submit" click={clearForm} />
                </div>
              </div>
            )}
            {matches.medium && (
              <>
                <div className={s.btn}>
                  <Button name="ВВОД" type="submit" click={enterData} />
                </div>
                <div className={s.btnCleer}>
                  <Button name="ОЧИСТИТЬ" type="submit" click={clearForm} />
                </div>
              </>
            )}
          </Fragment>
        )}
      </Media>
    </form>
  );
}
