import { useState, useEffect } from 'react';
import getSubcategoryReport from '../../services/api-services';
import styles from './CostsReport.module.css';
import Icons from '../../img/svg/sprite.svg';

function CostsReport({ handleSubcategories, categories, date, typeReport, firstCategory }) {
  const [clicked, setClicked] = useState(false);
  const [activeCategory, setActiveCategory] = useState(firstCategory);

  const expCategories = [
    {
    id: '1',
    title: 'Продукты',
      icon: '#icon-products',
    sum: 8000
  },
    {
    id: '2',
    title: 'Алкоголь',
    icon: '#icon-cocktail',
    sum: 80
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
]; // Временная константа для 

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
        <section className={styles.sectionCostRep}>
          <div className={styles.container}>
        
        {expCategories.length ? (
          <ul className={styles.list} id="categoriesList">
            {expCategories.map(item => (
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
              </li>))}
          </ul>) : (<div> {typeReport === true ? <p className={styles.text}>За данный период не найдено записей в списке доходов</p> : <p className={styles.text}>За данный период не найдено записей в списке расходов</p>}</div>)}

          </div>
        </section>
  );
}

export default CostsReport;
