import style from './Error.module.scss';
import Logo from '../Logo/Logo';

const NotFound = () => (
  <div className={style.container_error}>
    <div className={style.box}>
      <div className={style.error}>
        <img
          className={style.image}
          src="../../Logo/Logo.svg"
          alt="imgur"
        />
        <h1 className={style.notFound}>500</h1>
        <p className={style.text}>
          Извините, сайт временно не работает. Пожалуйста, зайдите сюда через некоторое время.
          <Link className={style.link} to="/">
            <AiOutlineLeft /> Вернуться на сайт
          </Link>
        </p>
      </div>
    </div>
  </div>
);

export default NotFound;
