import { useState, useEffect } from 'react';
import getSubcategoryReport from '../../services/api-services';
import styles from './CostsReport.module.css';
import Icons from '../../img/svg/sprite.svg';

const BASE_URL = 'http://localhost:3001/api/transaction';

async function fetchWithErrorHandling(url = '') {
  const response = await fetch(url, {
    headers: {
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxZTk1NmUxNjVmODdiYWJmYzFhMzcxMiIsImlhdCI6MTY0Mjc1OTU4MCwiZXhwIjoxNjQzOTY5MTgwfQ.dzTDXVdSFwErS6LbyCR8Djn6rs7tL1-WDXx9N2vnrXQ',
    },
  });
  return response.ok
    ? await response.json()
    : Promise.reject(new Error('Not found'));
}

function fetchCategory(date, typeReport) {
  return fetchWithErrorHandling(
    `${BASE_URL}/category-by-month?date=${date}&isIncome=${typeReport}`,
  );
}

function CostsReport({
  date,
  typeReport,
  handleActiveCategory,
  handleCategoriesLenght,
}) {
  const [clicked, setClicked] = useState(false);
  const [categories, setCategories] = useState([]);
  const [firstCategory, setfirstCategory] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    fetchCategory(date, typeReport)
      .then(response => {
        setClicked(false);
        setCategories(response.data.result);
        setfirstCategory(response.data.result[0]._id);
      })
      .catch(error => {
        setError('Hey, Kapusta! We have a problem!');
      });
  }, [date, typeReport]);

  // const queryReports = [date, typeReport];
  // getCategoryReport(queryReports)
  //   .then(resp =>

  // setClicked(false);
  // setCategories(expCategories);
  // )
  //  .catch(error => {
  //   setError('Hey, Kapusta! We have a problem!');
  // }, [
  //   date,
  //   typeReport
  // ]);

  useEffect(() => {
    if (categories.length) {
      handleCategoriesLenght(true);
      handleActiveCategory(categories[0].id);
    } else {
      handleCategoriesLenght(false);
    }
  }, [categories, handleActiveCategory, handleCategoriesLenght]);

  const handleCategory = title => {
    setClicked(true);
    handleActiveCategory(title);
  };

  return (
    <section className={styles.sectionCostRep}>
      <div className={styles.container}>
        {categories.length ? (
          <ul className={styles.list} id="categoriesList">
            {categories.map(category => (
              <li key={category.id} className={styles.item} id={category.id}>
                <button
                  type="submit"
                  onClick={() => handleCategory(category.id)}
                  className={
                    clicked
                      ? 'cat-button'
                      : `cat-button cat-button-${category.id}`
                  }
                >
                  <div className={styles.sum}>{category.totalInCategory}</div>
                  <svg width="56" height="56" className="svg">
                    <use
                      href={`${Icons}#icon-oval-expenditure`}
                      className="ellipse"
                    ></use>
                    <use
                      href={`${Icons}${category.icon}`}
                      className="svg-icons"
                    ></use>
                  </svg>
                  <div className={styles.category_title}>
                    {category.category_title}
                  </div>
                </button>
              </li>
            ))}
          </ul>
        ) : (
          <div>
            {' '}
            {typeReport === true ? (
              <p className={styles.text}>
                За данный период не найдено записей в списке доходов
              </p>
            ) : (
              <p className={styles.text}>
                За данный период не найдено записей в списке расходов
              </p>
            )}
          </div>
        )}
      </div>
    </section>
  );
}

export default CostsReport;
