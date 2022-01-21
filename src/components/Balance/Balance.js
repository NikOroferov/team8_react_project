import { useEffect, useState } from 'react';
// import { useSelector, useDispatch  } from 'react-redux';

import { BalanceModal } from '../Modal';
import ButtonGrey from '../Button/ButtonGrey';

// import { getBalance } from '../../redux/balance/balance-selectors';

import css from './Balance.module.css';

export default function Balance() {
  // const initialBalance = useSelector(getBalance);
  // const dispatch = useDispatch();

  const initialBalance = null;

  const [balance, setBalance] = useState(initialBalance);

  const handleChangeInput = e => {
    setBalance(e.target.value);
  };

  useEffect(() => {
    setBalance(initialBalance);
  }, [initialBalance]);

  return (
    <form className={css.form}>
      <label htmlFor="input" className={css.label}>
        Баланс:
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
          value={balance !== null ? balance : ''}
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
