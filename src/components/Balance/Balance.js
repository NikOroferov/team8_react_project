import { useEffect, useState } from 'react';
// import { useSelector } from 'react-redux';

import { BalanceModal } from '../Modal';
import ButtonGrey from '../Button/ButtonGrey';

// import { getBalance } from '../../redux/balance/balance-selectors';

import css from './Balance.module.css';

export default function Balance() {
  // const initialBalance = useSelector(getBalance);

  const initialBalance = 1;

  const [input, setInput] = useState(initialBalance);

  const handleChangeInput = e => {
    setInput(e.target.value);
  };

  useEffect(() => {
    setInput(initialBalance);
  }, [initialBalance]);

  return (
    <form className={css.form}>
      <label htmlFor="input" className={css.label}>
        <span className={css.text}>Баланс:</span>
      </label>

      <span className={css.span}>
        <input
          className={css.input}
          id="input"
          placeholder="00.00"
          pattern="^[ 0-9]+$"
          title="Пожалуйста, вводите только цифры"
          type="number"
          min="1"
          value={input !== 0 ? input : ''}
          onChange={handleChangeInput}
        />
      </span>

      {/* <button type="button" className={css.btn} onClick={null}>
        Подтвердить
      </button> */}
      <ButtonGrey
        name="Подтвердить"
        type="button"
        className={css.btn}
        onClick={null}
      />
      {initialBalance === 0 && <BalanceModal />}
    </form>
  );
}
