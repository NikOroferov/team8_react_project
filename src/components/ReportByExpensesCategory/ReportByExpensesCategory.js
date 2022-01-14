import styles from './ReportByExpensesCategory.module.css';

function ReportByExpensesCategory() {
  const expCategories = []; // Временная переменная, чтоб не было ошибки

  return (
    <section className={styles.sections}>
      <h4 className={styles.section_title}>Расходы</h4>
      <div className={styles.container}>
        <ul className={styles.list}>
          {expCategories.map(cat => (
            <li key={cat.id}>
              <div className={styles.sum}>{cat.sum}</div>
              <div>{cat.icon}</div>
              <div className={styles.category_title}>{cat.title}</div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default ReportByExpensesCategory;
