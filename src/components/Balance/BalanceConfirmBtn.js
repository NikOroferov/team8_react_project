import userOperations from 'redux/user/userOperations';
import { useDispatch } from 'react-redux';

import css from './Balance.module.css';

const BalanceConfirmBtn = ({ input }) => {
  const dispatch = useDispatch();

  const addBalance = () => {
    const newBalance = Number(input);

    if (newBalance > 0) {
      dispatch(
        userOperations.handleUpdateUserBalance({ newBalance: newBalance }),
      );
    } else {
      alert('Баланс должен быть положительным');
    }
  };

  return (
    <button type="button" className={css.btn} onClick={addBalance}>
      Подтвердить
    </button>
  );
};

export default BalanceConfirmBtn;
