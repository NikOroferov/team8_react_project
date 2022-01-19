import s from './background.module.css';

const Background = ({ children }) => (
  <>
    <div className={s.background}>{children}</div>
    <div className={s.backgroundImg}></div>
  </>
);

export default Background;
