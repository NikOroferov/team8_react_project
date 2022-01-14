import css from './Balance.module.css';

const Balance = () => {
  return (
    <form className={css.form}>
      <label className={css.label}>
        Баланс: <input className={css.input} type="number" value={'00.00'} />
      </label>
      <button className={css.btn} type="submit">
        подтвердить
      </button>
    </form>
  );
};

export default Balance;
