import s from './ExpensesComponent.module.css';

const ExpensesComponent = () => {
  /* const expense = useSelector();
  const income = useSelector(); */
  return (
    <div className={s.wrapper}>
      <div className={s.item}>
        <p className={s.text}>Paсходы:</p>
        <span className={s.sum}>-{/* expense */ 5353} грн.</span>
      </div>
      <span className={s.line}></span>
      <div className={s.item}>
        <p className={s.text}>Доходы:</p>
        <span className={s.sum1}>+{/* income */ 43543} грн</span>
      </div>
    </div>
  );
};

export default ExpensesComponent;
