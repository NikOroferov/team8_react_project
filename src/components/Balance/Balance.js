import { useEffect, useState } from 'react';
// import { useSelector } from 'react-redux';

import { BalanceModal } from '../Modal';

// import { getBalance } from '../../redux/balance/balance-selectors';

import css from './Balance.module.css';

export default function Balance() {
  // const initialBalance = useSelector(getBalance);

  const initialBalance = '00.00';

  const [input, setInput] = useState(initialBalance);

  const handleChange = e => {
    setInput(e.target.value);
  };

  useEffect(() => {
    setInput(initialBalance);
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
          pattern="^[ 0-9]+$"
          title="Пожалуйста, вводите только цифры"
          type="number"
          value={input}
          onChange={handleChange}
        />
      </span>

      <button type="button" className={css.btn} onClick={null}>
        Подтвердить
      </button>
      {initialBalance === '00.00' && <BalanceModal />}
    </form>
  );
}
