import { useState, useEffect } from 'react';
import * as reportsAPI from '../../services/reports-api';
import styles from './CostsReport.module.css';
import Icons from '../../img/svg/sprite.svg';
import Loader from '../../components/Loader/Loader';

function CostsReport({
  date,
  typeReport,
  handleActiveCategory,
  handleCategoriesLenght,
  handlerFirstDate
}) {
  const [clicked, setClicked] = useState(false);
  const [categories, setCategories] = useState([]);
  const [firstCategory, setFirstCategory] = useState(null);
  const [activeCategory, setActiveCategory] = useState(null);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    setIsLoading(true);
    if (date && typeReport !== null) {
      setTimeout(() => {
        reportsAPI
        .fetchCategoryByMonth(date, typeReport)
          .then(response => {
          setIsLoading(false);
            setClicked(false);
            handlerFirstDate(response.data.firstDate[0].date);
          setCategories(response.data.result);
          setFirstCategory(response.data.result[0].id);
        })
        .catch(error => {
          setError('Hey, Kapusta! We have a problem!');
        });
      }, 300); 
    } else {
      return;
    }
  }, [date, typeReport]);

  useEffect(() => {
    if (firstCategory) {
      setActiveCategory(firstCategory);
      setFirstCategory(null);
    }
    handleActiveCategory(activeCategory);
  }, [activeCategory, handleActiveCategory, firstCategory]);

  useEffect(() => {
    if (categories.length) {
      handleCategoriesLenght(true);
    } else {
      handleCategoriesLenght(false);
    }
  }, [categories, handleCategoriesLenght]);

  const handleCategory = title => {
    setClicked(true);
    setActiveCategory(title);
  };

  return (
    <>{isLoading ? <Loader /> :
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
                        : `cat-button cat-button-${categories.indexOf(category)}`
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
    }
    </>
  );
}

export default CostsReport;
