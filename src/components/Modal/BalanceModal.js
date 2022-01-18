import css from './BalanceModal.module.css';

export default function BalanceModal() {
  return (
    <div className={css.backdrop}>
      <div className={css.modalContainer}>
        <p className={css.title}>
          Привет! Для начала работы внеси текущий баланс своего счета!
        </p>
        <p className={css.tagline}>
          Ты не можешь тратить деньги пока их у тебя нет
        </p>
      </div>
    </div>
  );
}
