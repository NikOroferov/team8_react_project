import css from './BalanceModal.module.css';

export default function BalanceModal() {
  const titleHello =
    'Привет! Для начала работы внеси текущий баланс своего счета!';
  const titleTagline = 'Ты не можешь тратить деньги пока их у тебя нет :)';
  return (
    <div className={css.backdrop}>
      <div className={css.modalContainer}>
        <p className={css.title}>{titleHello}</p>
        <p className={css.tagline}>{titleTagline}</p>
      </div>
    </div>
  );
}
