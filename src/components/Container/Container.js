import s from './Container.module.css';

const Container = ({ children }) => (
  <section className={s.container}>{children}</section>
);

export default Container;
