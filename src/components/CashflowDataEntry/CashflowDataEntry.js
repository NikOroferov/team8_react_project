import { useState } from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';

import { BiCalculator } from 'react-icons/bi';

import Button from '../Button/Button';
import s from './CashflowDataEntry.module.css';
import Icons from '../../img/svg/sprite.svg';

export default function CashflowDataEntry() {
  const [category, setСategory] = useState('');
  const [description, setDescription] = useState('');
  const [sum, setSum] = useState([]);

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

  const enterData = e => {
    console.log(e);
  };

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
        {/* <BiCalculator className={s.calcIcon} /> */}
        <svg width="56" height="56" className={s.calcIcon}>
          <use xlinkHref={`${Icons}#icon-calculator`} className=""></use>
        </svg>
      </label>

      <div className={s.btn}>
        <Button name="ВВОД" type="submit" click={enterData} />
      </div>
      <Button name="ОЧИСТИТЬ" type="submit" click={clearForm} />
    </form>
  );
}
