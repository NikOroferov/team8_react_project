import { useState, Fragment } from 'react';
import Media from 'react-media';

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';

import Button from '../Button/Button';
import s from './CashflowDataEntry.module.css';
import Icons from '../../img/svg/sprite.svg';
import categoryData from '../../json/categoryCosts.json';

export default function CashflowDataEntry({ typeInfo }) {
  const [category, setСategory] = useState('');
  const [description, setDescription] = useState('');
  const [sum, setSum] = useState([]);
  const [dataItem, setDataItem] = useState([]);
  //   const [dataCategory, setDataItem] = useState([]);

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
      return true;
    } else {
      return false;
    }
  };

  const enterData = e => {
    setDataItem({
      created_at: Date.now(),
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

  const dataCategoryFoTabl = categoryData.map(({ id, category }) => {
    return {
      item: <MenuItem value={id}> {category}</MenuItem>,
    };
  });

  const fff = dataCategoryFoTabl.forEach(data => {
    //  console.log(data.item);
    return data.item;
  });

  //   console.log(dataCategoryFoTabl);
  //   console.log(fff);

  return (
    <form className={s.formCashflow}>
      <label>
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
      <Select
        className={s.category}
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={category}
        onChange={handleChange}
        placeholder="Описание товара"
        required
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
          step="0.01"
          min="0"
          onChange={hendleChangeDescription}
          required
        />
        <svg width="56" height="56" className={s.calcIcon}>
          <use xlinkHref={`${Icons}#icon-calculator`} className=""></use>
        </svg>
      </label>

      <div className={s.btn}>
        <Button name="ВВОД" type="submit" click={enterData} />
      </div>
      <Button name="ОЧИСТИТЬ" type="submit" click={clearForm} />

      {/* <Media
        queries={{
          small: '(min-width: 320px) and (max-width: 767px)',
          medium: '(min-width: 768px) and (max-width: 1279px)',
          large: '(min-width: 1280px)',
        }}
      >
        {matches => (
          <Fragment>
            {matches.small && <></>}
            {matches.medium && <TableCashfloTabl typeInfo={typeInfo} />}
            {matches.large && <TableCashflo typeInfo={typeInfo} />}
          </Fragment>
        )}
      </Media> */}
    </form>
  );
}
