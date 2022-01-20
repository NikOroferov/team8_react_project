import { useState, useEffect } from 'react';
import getSubcategoryReport from '../../services/api-services';
import styles from './CostsReport.module.css';
import Icons from '../../img/svg/sprite.svg';

function CostsReport({ handleSubcategories, categories, date, typeReport, firstCategory }) {
  const [clicked, setClicked] = useState(false);
  const [activeCategory, setActiveCategory] = useState(firstCategory);

  useEffect(() => {
    const queryReports = [date, typeReport, activeCategory];
  
    // getSubcategoryReport(queryReports)
    //   .then(resp => {
    //     handleSubcategories(resp))}
    // .catch(error => {
    //     setError('Hey, Kapusta! We have a problem!');
      }, [activeCategory, date, typeReport, handleSubcategories])

  const handleCategory = (e, title) => {
    e.preventDefault();
    setClicked(true);
    setActiveCategory(title)
  };

  return (  
        <section className={styles.sections}>
          <div className={styles.container}>
        
        {categories.length ? (
          <ul className={styles.list} id="categoriesList">
            {categories.map(item => (
              <li
                key={item.id}
                className={styles.item}
                id={item.sum}
              >
                <button
                  type="submit"
                  onClick={() => handleCategory(item.title)}
                  className={clicked ? 'cat-button' : `cat-button cat-button${item.id}`}
                >
                  <div className={styles.sum}>{item.sum}</div>
                  <svg width="56" height="56" className="svg">
                    <use
                      xlinkHref={`${Icons}#icon-oval-expenditure`}
                      className="ellipse"
                    ></use>
                    <use
                      xlinkHref={`${Icons}#icon-${item.id}`}
                      className="svg-icons"
                    ></use>
                  </svg>
                  <div className={styles.category_title}>{item.id}</div>
                </button>
              </li>))}
          </ul>) : (<div> {typeReport === true ? <p className={styles.text}>За данный период не найдено записей в списке доходов</p> : <p className={styles.text}>За данный период не найдено записей в списке расходов</p>}</div>)}

          </div>
        </section>
  );
}

export default CostsReport;
