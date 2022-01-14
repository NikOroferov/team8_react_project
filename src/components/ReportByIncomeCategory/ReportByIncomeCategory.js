import './ReportByIncomeCategory.css';

function ReportCategoryIncome() {
  const incCategories = []; // Временная переменная, чтоб не было ошибки
  return (
    <section className="Income_icons">
      <h4 className="Income_icons_title">Доходы</h4>
      <div className="Income_icons_container">
        <ul className="Category_list">
          {incCategories.map(cat => (
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

export default ReportCategoryIncome;
