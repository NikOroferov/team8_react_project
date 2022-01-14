import s from './Button.css';

export default function Button(data) {
  return (
    <button className={s.button} type={data.type} onClick={data.click}>
      {data.name}
    </button>
  );
}
