import { useState, Fragment, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Media from 'react-media';

import { fetchEntry } from '../../services/cashflooApi';
import getBalance from '../../redux/balance/balance-selectors';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
// import { styled } from '@mui/material/styles';

import balanceOperations from '../../redux/balance/balance-operations';

import Button from '../Button/Button';
import s from './CashflowDataEntry.module.css';
import Icons from '../../img/svg/sprite.svg';
import toast from 'react-hot-toast';

const styleSelect = {
  color: '#c7ccdc',
  textTransform: 'capitalize',
  ':hover': { color: '#52555f' },
};

export default function CashflowDataEntry({
  typeInfo,
  addTratsInState,
  //   beckHomeInput,
  //   beckHome,
}) {
  const [category, setСategory] = useState('');
  const [description, setDescription] = useState('');
  const [sum, setSum] = useState('');
  const [dataItem, setDataItem] = useState('');

  const balance = useSelector(getBalance);
  const dispatch = useDispatch();

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
    if (balance === null) {
      console.log('Не введен баланс');
    }
    if (typeInfo === 'расход') {
      if (balance - sum < 0) {
        toast.error('Вы превышаете свой баланс!');
        return;
      }
    }

    if (description === '' || category === '' || sum === '') {
      toast.error('Не заполнены все поля для ввода!');
      return;
    }

    if (balance !== null) {
      const data = {
        createdDate: new Date().toISOString(),
        year: new Date().getFullYear(),
        month: new Date().getMonth() + 1,
        day: new Date().getDate(),
        subcategory: description,
        category: category,
        transactionType: typeInfo,
        costs: Number(sum),
        incomes: typeInfoEnty(),
      };
      setDataItem(data);
      setСategory('');
      setDescription('');
      setSum('');
    }
    //  if (attrBtn === 'mobile' && attrBtn !== undefined) {
    // console.log(beckHome);
    //  beckHomeInput();
    // beckHome();
    //  }
  };

  useEffect(() => {
    if (dataItem !== '') {
      fetchEntry(dataItem)
        .then(response => {
          const data = response.data.result;
          addTratsInState(data);
          const newBalance = response.data.balance;

          dispatch(balanceOperations.setUserBalance(newBalance));

          toast.success(
            `Статья добавлена: ${data.category} на сумму ${data.costs}`,
          );
        })
        .catch(error => {
          toast.error('Извините, ошибка соединения. Побробуйте позже.');
        });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
          <MenuItem value="алкоголь" sx={styleSelect}>
            алкоголь
          </MenuItem>
          <MenuItem value="все для дома" sx={styleSelect}>
            все для дома
          </MenuItem>
          <MenuItem value="здоровье" sx={styleSelect}>
            здоровье
          </MenuItem>
          <MenuItem value="коммуналка, связь" sx={styleSelect}>
            коммуналка, связь
          </MenuItem>
          <MenuItem value="образование" sx={styleSelect}>
            образование
          </MenuItem>
          <MenuItem value="продукты" sx={styleSelect}>
            продукты
          </MenuItem>
          <MenuItem value="развлечения" sx={styleSelect}>
            развлечения
          </MenuItem>
          <MenuItem value="спорт, хобби" sx={styleSelect}>
            спорт, хобби
          </MenuItem>
          <MenuItem value="транспорт" sx={styleSelect}>
            транспорт
          </MenuItem>
          <MenuItem value="техника" sx={styleSelect}>
            техника
          </MenuItem>
          <MenuItem value="прочее" sx={styleSelect}>
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
          <MenuItem value="зп" sx={styleSelect}>
            зп
          </MenuItem>
          <MenuItem value="доп. доход" sx={styleSelect}>
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
                  <Button
                    name="ВВОД"
                    type="submit"
                    click={enterData}
                    typebtn="mobile"
                  />
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
