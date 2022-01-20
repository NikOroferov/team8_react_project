import s from './ButtonGrey.module.css';

export default function ButtonGrey({ name, type, click }) {
  return (
    <button className={s.greyBtn} type={type} onClick={click}>
      {name}
    </button>
  );
}
