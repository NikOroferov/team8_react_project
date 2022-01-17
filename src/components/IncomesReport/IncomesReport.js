import styles from './IncomesReport.module.css';
import Icons from '../../img/svg/sprite.svg';

function IncomesReport() {
  const incCategories = [
    {
      id: '100',
      title: 'ЗП',
      icon: '#icon-salary1',
      sum: '45 000.00',
    },
    {
      id: '1001',
      title: 'Доп. доход',
      icon: '#icon-salary2',
      sum: '20 000.00',
    },
  ]; // Временная константа для тестирования

  return (
    <section className={styles.sections}>
      <p className={styles.section_title}>Расходы</p>
      <div className={styles.container}>
        <ul className={styles.list}>
          {incCategories.map(cat => (
            <li key={cat.id} className={styles.item}>
              <div className={styles.sum}>{cat.sum}</div>
              <svg width="56" height="56">
                <use
                  xlinkHref={`${Icons}#icon-oval-expenditure`}
                  className="ellipse"
                ></use>
                <use
                  xlinkHref={`${Icons}${cat.icon}`}
                  className="svg-icons"
                ></use>
              </svg>
              <div className={styles.category_title}>{cat.title}</div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default IncomesReport;
