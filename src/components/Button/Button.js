import css from './Button.module.css';

export default function Button(data) {
  return (
    <button className={css.button} type="button" onClick={data.click}>
      {data.name}
    </button>
  );
}
