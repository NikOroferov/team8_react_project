import { useState, useEffect } from 'react';
import getSubcategoryReport from '../../services/api-services';
import styles from './CostsReport.module.css';
import Icons from '../../img/svg/sprite.svg';

function CostsReport({ date, typeReport, handleActiveCategory, handleCategoriesLenght }) {
  const [clicked, setClicked] = useState(false);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const expCategories = [
    {
      id: '1',
      title: 'Продукты',
      icon: '#icon-products',
      sum: 8000,
    },
    {
      id: '2',
      title: 'Алкоголь',
      icon: '#icon-cocktail',
      sum: 80,
    },
    {
      id: '3',
      title: 'Развлечения',
      icon: '#icon-kite',
      sum: 800,
    },
    {
      id: '4',
      title: 'Здоровье',
      icon: '#icon-hands-holding-heart',
      sum: 900,
    },
    {
      id: '5',
      title: 'Транспорт',
      icon: '#icon-car',
      sum: 2000,
    },
    {
      id: '6',
      title: 'Все для дома',
      icon: '#icon-couch',
      sum: '8 000.00',
    },
    {
      id: '7',
      title: 'Техника',
      icon: '#icon-technics',
      sum: 7000,
    },
    {
      id: '8',
      title: 'Коммуналка, связь',
      icon: '#icon-invoice',
      sum: 7000,
    },
    {
      id: '9',
      title: 'Спорт, хобби',
      icon: '#icon-clay',
      sum: 7000,
    },
    {
      id: '10',
      title: 'Образование',
      icon: '#icon-book',
      sum: 7000,
    },
    {
      id: '11',
      title: 'Прочее',
      icon: '#icon-ufo',
      sum: 7000,
    },
  ]; 
    // const queryReports = [date, typeReport];
    // getCategoryReport(queryReports)
    //   .then(resp => 
    setClicked(false);
    setCategories(expCategories);
    // )
      //  .catch(error => {
      //   setError('Hey, Kapusta! We have a problem!');
  }, [
    date,
    typeReport
  ]);

  useEffect(() => {
    if (categories.length) {
      handleCategoriesLenght(true);
      handleActiveCategory(categories[0].title);
    } else {
      handleCategoriesLenght(false);
    }
  }, [categories, handleActiveCategory, handleCategoriesLenght])

  const handleCategory = (title) => {
    setClicked(true);
    handleActiveCategory(title);
  };

  return (
          <section className={styles.sectionCostRep}>
            <div className={styles.container}>
              {categories.length ? (
                <ul className={styles.list} id="categoriesList">
                  {categories.map(item => (
                    <li key={item.id} className={styles.item} id={item.sum}>
                      <button
                        type="submit"
                        onClick={() => handleCategory(item.title)}
                        className={
                          clicked ? 'cat-button' : `cat-button cat-button${item.id}`
                        }
                      >
                        <div className={styles.sum}>{item.sum}</div>
                        <svg width="56" height="56" className="svg">
                          <use
                            href={`${Icons}#icon-oval-expenditure`}
                            className="ellipse"
                          ></use>
                          <use
                            href={`${Icons}${item.icon}`}
                            className="svg-icons"
                          ></use>
                        </svg>
                        <div className={styles.category_title}>{item.title}</div>
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
  )
}

export default CostsReport;
