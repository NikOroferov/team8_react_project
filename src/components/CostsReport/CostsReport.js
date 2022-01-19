import { useState, useEffect } from 'react';

//import { NavLink, Route, Routes } from 'react-router-dom';

import styles from './CostsReport.module.css';
import Icons from '../../img/svg/sprite.svg';
//import Temporary from '../TemporaryComponent/temporary';

const expCategories = [
  {
    title: 'Продукты',
    icon: '#icon-products',
  },
  {
    title: 'Алкоголь',
    icon: '#icon-cocktail',
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
]; // Временная константа для тестирования

const BASE_URL = 'http://localhost:3000/api/transactions';

async function fetchWithErrorHandling(url = '') {
  const response = await fetch(url, {
    headers: {
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxZTUyZGRhODM5ZTdlYTU3MGJkYTk1ZCIsImlhdCI6MTY0MjU0ODA5MCwiZXhwIjoxNjQyNTU4ODkwfQ.gVi4dO3klazzlCjL0UpucOy6J6JljAzcaarrRWusdIc',
    },
  });
  return response.ok
    ? await response.json()
    : Promise.reject(new Error('Not found'));
}

function fetchCategory(date, isIncome) {
  return fetchWithErrorHandling(
    `${BASE_URL}/category-by-month?date=${date}&isIncome=${isIncome}`,
  );
}

function CostsReport({ date, isIncome }) {
  const [cat, setCat] = useState(null);
  const [status, setStatus] = useState('idle');
  const [error, setError] = useState('');
  const [catTitle, setCatTitle] = useState(null);
  //const [activeBtn, setActiveBtn] = useState(null)

  useEffect(() => {
    setStatus('pending');

    fetchCategory(date, isIncome)
      .then(response => {
        setCat(response.data.result);
        setCatTitle(response.data.result[0]._id);
        setStatus('resolved');
      })
      .catch(error => {
        setError('Something went wrong');
        setStatus('rejected');
      });
  }, [date, isIncome]);

  // const idx = cat[0].totalInCategory;
  // console.log(idx);

  const onGoGraph = event => {
    // event.preventDefault();
    setCatTitle(event.currentTarget.lastChild.textContent);
  };

  const handleSubmit = () => {};

  return (
    <>
      {status === 'pending' && <div>ЗАГРУЖАЕМ</div>}

      {status === 'rejected' && (
        <div className={styles.error}>UPS! {error}</div>
      )}

      {status === 'resolved' && (
        <section className={styles.sections}>
          <p className={styles.section_title}>Доходы</p>
          <div className={styles.container}>
            <ul className={styles.list} id="categoriesList">
              {cat.map(item => (
                <li
                  key={item._id}
                  className={styles.item}
                  id={item.totalInCategory}
                >
                  <button
                    type="submit"
                    onClick={onGoGraph}
                    onSubmit={handleSubmit}
                    className="cat-button"
                  >
                    <div className={styles.sum}>{item.totalInCategory}</div>
                    <svg width="56" height="56" className="svg">
                      <use
                        xlinkHref={`${Icons}#icon-oval-expenditure`}
                        className="ellipse"
                      ></use>
                      <use
                        xlinkHref={`${Icons}#icon-${item._id}`}
                        className="svg-icons"
                      ></use>
                    </svg>
                    <div className={styles.category_title}>{item._id}</div>
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      {/* <Routes>
        <Route path=":category" element={<Temporary />} />
      </Routes> */}
    </>
  );
}

export default CostsReport;
