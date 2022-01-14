import './ReportByExpensesCategory.css';

function ReportCategoryExpenses() {
  const expCategories = []; // Временная переменная, чтоб не было ошибки

  return (
    <section className="Expenses_icons">
      <h4 className="Expenses_icons_title">Расходы</h4>
      <div className="Icons_container">
        <ul className="Category_list">
          {expCategories.map(cat => (
            <li key={cat.id} className="Category_item">
              <div className="Category_sum">{cat.sum}</div>
              <div>{cat.icon}</div>
              <div className="Category_title">{cat.title}</div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default ReportCategoryExpenses;
