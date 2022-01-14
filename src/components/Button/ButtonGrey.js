import s from './ButtonGrey.module.css';

export default function ButtonGrey(data) {
  return (
    <button className={s.greyBtn} type={data.type} onClick={data.click}>
      {data.name}
    </button>
  );
}
