import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { BalanceModal } from '../Modal';
import ButtonGrey from '../Button/ButtonGrey';

import getBalance from '../../redux/balance/balance-selectors';
import balanceOperations from '../../redux/balance/balance-operations';
import authOperations from '../../redux/auth/auth-operations';

import css from './Balance.module.css';

export default function Balance() {
  const initialBalance = useSelector(getBalance);
  const dispatch = useDispatch();

  const [balance, setBalance] = useState(initialBalance);

  const handleChangeInput = e => {
    const newBalance = Number(e.target.value);
    setBalance(newBalance);
  };

  useEffect(() => {
    setBalance(initialBalance);
  }, [initialBalance, dispatch]);

  const handleSubmit = e => {
    e.preventDefault();

    dispatch(balanceOperations.setUserBalance(balance));
    dispatch(authOperations.fetchCurrentUser());
  };

  return (
    <form className={css.form} onSubmit={handleSubmit}>
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
          value={balance !== null ? balance : ''}
          onChange={handleChangeInput}
          disabled={initialBalance === null ? false : true}
        />
      </span>

      <ButtonGrey
        name="Подтвердить"
        type="submit"
        initialBalance={initialBalance}
        className={css.btn}
        disabled={initialBalance === null ? '' : 'disabled'}
      />
      {balance === null && <BalanceModal />}
    </form>
  );
}
