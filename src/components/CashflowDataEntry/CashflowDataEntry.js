import { useState, Fragment } from 'react';
import Media from 'react-media';

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';

import Button from '../Button/Button';
import s from './CashflowDataEntry.module.css';
import Icons from '../../img/svg/sprite.svg';
// import categoryData from '../../json/categoryCosts.json';

export default function CashflowDataEntry({ typeInfo }) {
  const [category, setСategory] = useState('');
  const [description, setDescription] = useState('');
  const [sum, setSum] = useState([]);
  // eslint-disable-next-line no-unused-vars
  const [dataItem, setDataItem] = useState('');

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
    setSum([]);
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
      created_at: new Date().toLocaleDateString(),
      Year: new Date().getFullYear(),
      Month: new Date().getMonth() + 1,
      Day: new Date().getDate(),
      subcategory: description,
      category: category,
      transactionType: typeInfo,
      costs: sum,
      incomes: typeInfoEnty(),
    });
    setСategory('');
    setDescription('');
    setSum([]);
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
        placeholder="Описание товара"
      ></InputLabel>

      {typeInfo === 'расход' && (
        <Select
          className={s.category}
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={category}
          onChange={handleChange}
          //  placeholder="Описание товара"
          required
        >
          <MenuItem value="Алкоголь" className={s.categoryItamMenu}>
            Алкоголь
          </MenuItem>
          <MenuItem value="Все для дома" className={s.categoryItamMenu}>
            Все для дома
          </MenuItem>
          <MenuItem value="Здоровье" className={s.categoryItamMenu}>
            Здоровье
          </MenuItem>
          <MenuItem value="Коммуналка, связь" className={s.categoryItamMenu}>
            Коммуналка, связь
          </MenuItem>
          <MenuItem value="Образование" className={s.categoryItamMenu}>
            Образование
          </MenuItem>
          <MenuItem value="Продукты" className={s.categoryItamMenu}>
            Продукты
          </MenuItem>
          <MenuItem value="Развлечения" className={s.categoryItamMenu}>
            Развлечения
          </MenuItem>
          <MenuItem value="Спорт, хобби" className={s.categoryItamMenu}>
            Спорт, хобби
          </MenuItem>
          <MenuItem value="Транспорт" className={s.categoryItamMenu}>
            Транспорт
          </MenuItem>
          <MenuItem value="Техника" className={s.categoryItamMenu}>
            Техника
          </MenuItem>
          <MenuItem value="Прочее" className={s.categoryItamMenu}>
            Прочее
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
            value="ЗП"
            // classes={s.categoryItamMenu}
            className={s.categoryItamMenu}
          >
            ЗП
          </MenuItem>
          <MenuItem value="Допдоход" className={s.categoryItamMenu}>
            Доп.доход
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
