import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import Icons from '../../img/svg/sprite.svg';
import toast from 'react-hot-toast';

import { fetchAll } from '../../services/cashflooApi';

import getBalance from '../../redux/balance/balance-selectors';
import CommonModal from '../Modal/CommonModal';
import s from './TableCashfloMobile.module.css';

const ButtonDelet = data => {
  return (
    <button
      className="buttonDel"
      type="button"
      onClick={data.click}
      id={data.idItams}
      value={data.summ}
    >
      <svg width="18" height="18" className="iconButtonDel">
        <use xlinkHref={`${Icons}#icon-delete-1`} className=""></use>
      </svg>
    </button>
  );
};

export default function TableCashfloMobile({ deleteTranId }) {
  const [transactionsAll, setTransactionsAll] = useState('');
  const [isModalOpen, setModalOpen] = useState(false);
  const [idItem, setIdItem] = useState('');

  const balance = useSelector(getBalance);

  const toggleModal = e => {
    setModalOpen(!isModalOpen);
    const transactionId = e.currentTarget.id;
    setIdItem(transactionId);
  };

  useEffect(() => {
    fetchAll()
      .then(response => {
        setTransactionsAll(response.data.transactions);
      })
      .catch(error => {
        toast.error('Извините, ошибка соединения. Побробуйте позже.');
      });
  }, []);

  const onClickDelete = e => {
    setModalOpen(!isModalOpen);
    const transactionId = idItem;

    if (balance - e.currentTarget.value < 0) {
      toast.error('Не возможно удалить.Вы превышаете свой баланс!');

      return;
    } else {
      const dataCashFoTablFiter = transactionsAll.filter(function (e) {
        return e._id !== transactionId;
      });
      deleteTranId(transactionId);
      setTransactionsAll(dataCashFoTablFiter);
    }
  };

  function dateFormat(date) {
    const toStringData = String(date.month);
    if (toStringData.length < 2) {
      return `0${toStringData}`;
    } else {
      return toStringData;
    }
  }

  function dayFormat(date) {
    const toStringDay = String(date.day);
    if (toStringDay.length < 2) {
      return `0${toStringDay}`;
    } else {
      return toStringDay;
    }
  }

  function colorElement(costs, incomes) {
    if (incomes === false) {
      return (
        <p className={s.costs} style={{ color: '#E7192E' }}>
          - {costs} грн.
        </p>
      );
    }
    if (incomes === true) {
      return (
        <p className={s.costs} style={{ color: '#407946' }}>
          + {costs} грн.
        </p>
      );
    }
  }

  return (
    <>
      <ul className={s.boxCashfloo}>
        {transactionsAll &&
          transactionsAll.map(
            ({ _id, subcategory, category, costs, date, incomes }) => (
              <li key={_id} id={_id} className={s.item}>
                <div className={s.boxOne}>
                  <p className={s.descr}>{subcategory}</p>
                  <p className={s.data}>
                    {dayFormat(date)}.{dateFormat(date)}.{date.year}
                    <span className={s.category}>{category}</span>
                  </p>
                </div>
                <div className={s.boxTwo}>
                  {colorElement(costs, incomes)}
                  <ButtonDelet click={toggleModal} idItams={_id} summ={costs} />
                </div>
              </li>
            ),
          )}
      </ul>
      {isModalOpen && (
        <CommonModal
          modalText="Вы уверены? Удалить запись?"
          toggleModal={toggleModal}
          logOut={onClickDelete}
        />
      )}
    </>
  );
}
