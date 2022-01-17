import { useState } from 'react';
import ButtonGrey from '../Button/ButtonGrey';

import s from './Balance.module.css';

const Balance = () => {
  const [balance, setBalance] = useState('00.00');

  const handleChange = e => {
    setBalance(e.target.value);
  };

  const clickBtn = e => {
    e.preventDefault();
    console.log('Подтвердить');
  };

  return (
    <form className={s.forma}>
      <label>
        <span className={s.text}>Баланс:</span>
        <input
          className={s.summ}
          type="number"
          value={balance}
          pattern="/^\s*-?[1-9]\d*(\.\d{1,2})?\s*$/"
          onChange={handleChange}
        />
      </label>
      <ButtonGrey name="ПОДТВЕРДИТЬ" type="button" click={clickBtn} />
    </form>
  );
};

export default Balance;
