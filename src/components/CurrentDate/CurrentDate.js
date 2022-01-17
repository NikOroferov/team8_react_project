import s from "./CurrentDate.module.css";
const months = [
    'январь',
    'февраль',
    'март',
    'апрель',
    'май',
    'июнь',
    'июль',
    'август',
    'сентябрь',
    'октябрь',
    'ноябрь',
    'декабрь',
];
  
const CurrentDate = ({
    month,
    year,
    handleNext,
    handlePrevious,
  }) => {
    const selectedMonth = months[month];
  return (
    <div className={s.container}>
      <p className={s.title}>Текущий период:</p>
          <div className={s.wrapper}>
          <button
        type="button"
        className={s.button}
        onClick={handlePrevious}
      >
          <svg
          width="7"
          height="12"
          viewBox="0 0 7 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M6 1L2 6L6 11" stroke="#FF751D" strokeWidth="2" />
        </svg>
        </button>
        <p className={s.period}>
        <span className={s.month}>{selectedMonth} </span>
        <span className={s.year}>{year}</span>
      </p>
      <button type="button" className={s.button} onClick={handleNext}>
          <svg
          width="7"
          height="12"
          viewBox="0 0 7 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M1 1L5 6L1 11" stroke="#FF751D" strokeWidth="2" />
        </svg>
        </button>
      </div>
    </div>
  );
};

export default CurrentDate;