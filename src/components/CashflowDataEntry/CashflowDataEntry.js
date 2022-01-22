import { useState, Fragment } from 'react';
import Media from 'react-media';
import axios from 'axios';

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';

import Button from '../Button/Button';
import s from './CashflowDataEntry.module.css';
import Icons from '../../img/svg/sprite.svg';
// import categoryData from '../../json/categoryCosts.json';

axios.defaults.headers.common = {
  Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxZWJlMGYxYmM3NjkxNTZlNjBkYTVmMiIsImlhdCI6MTY0Mjg3NDE0OSwiZXhwIjoxNjQ0MDgzNzQ5fQ.XDSTb16DBgzWSLYCWCQTVlJJkGbOEu1AUWzzzrHWK7U`,
};

const idUser = '61ebe0f1bc769156e60da5f2';

export default function CashflowDataEntry({ typeInfo }) {
  const [category, setСategory] = useState('');
  const [description, setDescription] = useState('');
  const [sum, setSum] = useState('');

  const [dataItem, setDataItem] = useState('');

  const fetchEntry = async data => {
    const response = await axios.post(
      'http://localhost:3001/api/transaction',
      data,
      {
        params: { _id: `${idUser}` },
      },
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

  const enterData = e => {
    setDataItem({
      created_at: new Date().toISOString(),
      year: new Date().getFullYear(),
      month: new Date().getMonth() + 1,
      day: new Date().getDate(),
      subcategory: description,
      category: category,
      transactionType: typeInfo,
      costs: sum,
      incomes: typeInfoEnty(),
    });
    setСategory('');
    setDescription('');
    setSum([]);
    fetchEntry(dataItem);
  };

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

      <InputLabel
        id="demo-simple-select-label"
        //   placeholder="Описание товара"
      ></InputLabel>

      {typeInfo === 'расход' && (
        <Select
          className={s.category}
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={category}
          onChange={handleChange}
          required
        >
          <MenuItem value="алкоголь" className={s.categoryItamMenu}>
            алкоголь
          </MenuItem>
          <MenuItem value="все для дома" className={s.categoryItamMenu}>
            все для дома
          </MenuItem>
          <MenuItem value="здоровье" className={s.categoryItamMenu}>
            здоровье
          </MenuItem>
          <MenuItem value="коммуналка, связь" className={s.categoryItamMenu}>
            коммуналка, связь
          </MenuItem>
          <MenuItem value="образование" className={s.categoryItamMenu}>
            образование
          </MenuItem>
          <MenuItem value="продукты" className={s.categoryItamMenu}>
            продукты
          </MenuItem>
          <MenuItem value="развлечения" className={s.categoryItamMenu}>
            развлечения
          </MenuItem>
          <MenuItem value="спорт, хобби" className={s.categoryItamMenu}>
            спорт, хобби
          </MenuItem>
          <MenuItem value="транспорт" className={s.categoryItamMenu}>
            транспорт
          </MenuItem>
          <MenuItem value="техника" className={s.categoryItamMenu}>
            техника
          </MenuItem>
          <MenuItem value="прочее" className={s.categoryItamMenu}>
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
          <MenuItem value="зп" className={s.categoryItamMenu}>
            зп
          </MenuItem>
          <MenuItem value="доп. доход" className={s.categoryItamMenu}>
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
