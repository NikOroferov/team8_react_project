import s from './ButtonGrey.module.css';

export default function ButtonGrey({
  name,
  type,
  click,
  disabled,
  initialBalance,
}) {
  return (
    <button
      className={initialBalance === null ? s.greyBtn : s.btnDisabled}
      type={type}
      onClick={click}
      disabled={disabled}
    >
      {name}
    </button>
  );
}
