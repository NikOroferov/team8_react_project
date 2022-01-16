import styles from './CostsReport.module.css';
import Icons from '../../img/svg/sprite.svg';

function CostsReport() {
  const expCategories = [
    {
      id: '1',
      title: 'Продукты',
      icon: '#icon-products',
      sum: '5 000.00',
    },
    {
      id: '2',
      title: 'Алкоголь',
      icon: '#icon-cocktail',
      sum: '200.00',
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
      sum: 7000,
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

  return (
    <ul className={styles.list}>
      {expCategories.map(cat => (
        <li key={cat.id} className={styles.item}>
          <div className={styles.sum}>{cat.sum}</div>
          <svg width="56" height="56">
            <use xlinkHref={`${Icons}#icon-oval-expenditure`}></use>
            <use xlinkHref={`${Icons}${cat.icon}`}></use>
          </svg>
          <div className={styles.category_title}>{cat.title}</div>
        </li>
      ))}
    </ul>
  );
}

export default CostsReport;
