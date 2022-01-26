import React, { useState, Fragment, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import Media from 'react-media';
import { fetchTransactions, fetchDelete } from '../../services/cashflooApi';

import Background from '../../views/Background/background.jsx';
import Loader from '../Loader/Loader';
import Balance from '../Balance/Balance';
import DateCalendar from '../DateCalendar/DateCalendar';
import LinkToReports from '../LinkToReports/LinkToReports';
import CashflowDataEntry from '../CashflowDataEntry/CashflowDataEntry';
import TableCashflo from '../TableCashflo/TableCashflo';
import TableCashfloTabl from '../TableCashflo/TableCashfloTabl';
import TableMonth from '../TableMonth/TableMonth';
import TableCashfloMobile from '../TableCashflo/TableCashfloMobile';
import Icons from '../../img/svg/sprite.svg';
import toast from 'react-hot-toast';

import balanceOperations from '../../redux/balance/balance-operations';
import s from './ExpensesIncome.module.css';

export default function ExpensesIncome() {
  const [typeInfo, setTypeInfo] = useState('расход');
  const [typeIncomes, setTypeIncomes] = useState(false);
  const [clicked, setClicked] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [сostsMobileBtn, setCostsMobileBtn] = useState(true);
  const [incomeMobileBtn, setIncomeMobileBtn] = useState(true);
  const [transactions, setTransactions] = useState([]);

  const dispatch = useDispatch();

  useEffect(() => {
    setIsLoading(true);
    if (typeIncomes !== null) {
      setTimeout(() => {
        fetchTransactions(typeIncomes)
          .then(response => {
            setIsLoading(false);
            setTransactions(response.data.transactions);
          })
          .catch(error => {
            toast.error('Hey, Kapusta! We have a problem!');
            console.log(error);
          });
      }, 300);
    }
  }, [typeIncomes]);

  const сostsClick = e => {
    e.preventDefault();
    setTypeInfo('расход');
    setClicked(false);
    setTypeIncomes(false);
  };

  const incomeClick = e => {
    e.preventDefault();
    setTypeInfo('доход');
    setClicked(true);
    setTypeIncomes(true);
  };

  const clicCostBtnMobile = e => {
    e.preventDefault();
    setCostsMobileBtn(false);
    setTypeInfo('расход');
  };

  const incomeCostBtnMobile = e => {
    e.preventDefault();
    setIncomeMobileBtn(false);
    setTypeInfo('доход');
  };

  const beckHome = e => {
    e.preventDefault();
    setCostsMobileBtn(true);
    setIncomeMobileBtn(true);
  };

  function deleteTranId(data) {
    setIsLoading(true);
    setTimeout(() => {
      fetchDelete(data)
        .then(response => {
          setIsLoading(false);
          const newBalance = response.data.balance;
          dispatch(balanceOperations.setUserBalance(newBalance));
        })
        .catch(error => {
          toast.error('Hey, Kapusta! We have a problem!');
          console.log(error);
        });

      const dataCashFoTablFiter = transactions.filter(function (e) {
        return e._id !== data;
      });

      setTransactions(dataCashFoTablFiter);
    }, 300);
  }

  function addTratsInState(data) {
    const newTran = [data, ...transactions];
    setTransactions(newTran);
  }

  return (
    <>
      {сostsMobileBtn && incomeMobileBtn && (
        <Background>
          <div className={s.boxBalance}>
            <div className={s.balBtnform}>
              <Balance />
            </div>
            <LinkToReports />
          </div>

          <div className={s.boxBtn}>
            <button
              className={clicked ? 'navBtn' : `navBtnActive`}
              type="button"
              onClick={сostsClick}
            >
              РАСХОД
            </button>
            <button
              className={clicked ? 'navBtnActive' : `navBtn`}
              type="button"
              onClick={incomeClick}
            >
              ДОХОД
            </button>
          </div>

          <div className={s.analysis}>
            <div className={s.cashflowInput}>
              <Media
                queries={{
                  small: '(min-width: 320px)',
                  medium: '(min-width: 768px)',
                }}
              >
                {matches => (
                  <Fragment>
                    {matches.small && <DateCalendar />}
                    {matches.medium && (
                      <CashflowDataEntry
                        typeInfo={typeInfo}
                        addTratsInState={addTratsInState}
                      />
                    )}
                  </Fragment>
                )}
              </Media>
            </div>

            {isLoading ? (
              <Loader />
            ) : (
              <div className={s.boxTabl}>
                <Media
                  queries={{
                    small: '(min-width: 320px) and (max-width: 767px)',
                    medium: '(min-width: 768px) and (max-width: 1279px)',
                    large: '(min-width: 1280px)',
                  }}
                >
                  {matches => (
                    <Fragment>
                      {matches.small && <>аап</>}
                      {matches.medium && (
                        <TableCashfloTabl
                          typeInfo={typeInfo}
                          transactions={transactions}
                          // fetchDelete={fetchDelete}
                          deleteTranId={deleteTranId}
                        />
                      )}
                      {matches.large && (
                        <TableCashflo
                          typeInfo={typeInfo}
                          transactions={transactions}
                          // fetchDelete={fetchDelete}
                          deleteTranId={deleteTranId}
                        />
                      )}
                    </Fragment>
                  )}
                </Media>

                <div className={s.monthCashflow}>
                  <p className={s.summaryTitle}>СВОДКА</p>
                  <TableMonth
                    typeIncomes={typeIncomes}
                    transactions={transactions}
                  />
                </div>
              </div>
            )}
          </div>

          <div className={s.conteinerMobileBtn}>
            <Media
              queries={{
                small: '(min-width: 320px) and (max-width: 767px)',
              }}
            >
              {matches => (
                <Fragment>
                  {matches.small && (
                    <div className={s.btnForMobil}>
                      <TableCashfloMobile
                        // transactions={transactions}
                        // fetchDelete={fetchDelete}
                        deleteTranId={deleteTranId}
                        // typeInfo={typeInfo}
                      />
                      <button
                        className={s.btvExpense}
                        onClick={clicCostBtnMobile}
                      >
                        РАСХОД
                      </button>
                      <button
                        className={s.btvIncome}
                        onClick={incomeCostBtnMobile}
                      >
                        ДОХОД
                      </button>
                    </div>
                  )}
                </Fragment>
              )}
            </Media>
          </div>
        </Background>
      )}

      {сostsMobileBtn === false && (
        <Background>
          <button className={s.btnBeck} onClick={beckHome}>
            <svg width="18" height="18">
              <use xlinkHref={`${Icons}#icon-keyboard_backspace-24px-1`}></use>
            </svg>
          </button>
          <div className={s.cashflowInput}>
            <CashflowDataEntry
              typeInfo={typeInfo}
              addTratsInState={addTratsInState}
            />
          </div>
          <div className={s.btnForMobil}></div>
        </Background>
      )}

      {incomeMobileBtn === false && (
        <Background>
          <button className={s.btnBeck} onClick={beckHome}>
            <svg width="24" height="24">
              <use xlinkHref={`${Icons}#icon-keyboard_backspace-24px-1`}></use>
            </svg>
          </button>
          <div className={s.cashflowInput}>
            <CashflowDataEntry typeInfo={typeInfo} />
          </div>
        </Background>
      )}
    </>
  );
}
