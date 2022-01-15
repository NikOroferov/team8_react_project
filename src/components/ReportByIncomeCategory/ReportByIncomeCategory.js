import styles from './ReportByIncomeCategory.module.css';

function ReportByIncomeCategory() {
  const incCategories = []; // Временная переменная, чтоб не было ошибки
  return (
    <section className={styles.section}>
      <h4 className={styles.section_title}>Доходы</h4>
      <div className={styles.container}>
        <ul className={styles.list}>
          {incCategories.map(cat => (
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

export default ReportByIncomeCategory;
