import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { BalanceModal } from '../Modal';
import ButtonGrey from '../Button/ButtonGrey';

import getBalance from '../../redux/balance/balance-selectors';
import balanceOperations from '../../redux/balance/balance-operations';
import authOperations from '../../redux/auth/auth-operations';
// import authSelectors from '../../redux/auth/auth-selectors';

import css from './Balance.module.css';

export default function Balance() {
  const initialBalance = useSelector(getBalance);
  const dispatch = useDispatch();

  const [balance, setBalance] = useState(initialBalance);
  console.log('old: ', initialBalance);
  console.log('new: ', balance);

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
        />
      </span>

      <ButtonGrey name="Подтвердить" type="submit" className={css.btn} />
      {balance === null && <BalanceModal />}
    </form>
  );
}
