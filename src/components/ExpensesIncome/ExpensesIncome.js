import React, { useState, Fragment, useEffect } from 'react';
import Media from 'react-media';
// import f from '../../services/api-services';
import axios from 'axios';

import Background from '../../views/Background/background.jsx';
import Balance from '../Balance/Balance';
import DateCalendar from '../DateCalendar/DateCalendar';
import LinkToReports from '../LinkToReports/LinkToReports';
import CashflowDataEntry from '../CashflowDataEntry/CashflowDataEntry';
import TableCashflo from '../TableCashflo/TableCashflo';
import TableCashfloTabl from '../TableCashflo/TableCashfloTabl';
import TableMonth from '../TableMonth/TableMonth';
import TableCashfloMobile from '../TableCashflo/TableCashfloMobile';
import Icons from '../../img/svg/sprite.svg';

import s from './ExpensesIncome.module.css';

axios.defaults.headers.common = {
  Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxZWJlMGYxYmM3NjkxNTZlNjBkYTVmMiIsImlhdCI6MTY0Mjg3NDE0OSwiZXhwIjoxNjQ0MDgzNzQ5fQ.XDSTb16DBgzWSLYCWCQTVlJJkGbOEu1AUWzzzrHWK7U`,
};

const idUser = '61ebe0f1bc769156e60da5f2';

export default function ExpensesIncome() {
  const [typeInfo, setTypeInfo] = useState('расход');
  const [typeIncomes, setTypeIncomes] = useState(false);

  const [clicked, setClicked] = useState(false);

  const [сostsMobileBtn, setCostsMobileBtn] = useState(true);
  const [incomeMobileBtn, setIncomeMobileBtn] = useState(true);

  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    if (typeIncomes !== null) {
      const fetchTransaction = async () => {
        const response = await axios.get(
          'http://localhost:3001/api/transaction',
          {
            params: { _id: `${idUser}`, isIncome: `${typeIncomes}` },
          },
        );
        setTransactions(response.data.data.transactions);
      };
      fetchTransaction();
    }
  }, [typeIncomes]);

  const fetchCostsMouth = async (idUser, typeIncomes) => {
    const response = await axios.get(
      'http://localhost:3001/api/transaction/summary',
      {
        params: { _id: `${idUser}`, isIncome: `${typeIncomes}` },
      },
    );
    return response.data.data;
  };

  //   const dataM = fetchCostsMouth(idUser, typeIncomes);
  //   console.log(dataM);

  const fetchOther = async idUser => {
    const response = await axios.get('http://localhost:3001/api/transaction', {
      params: { _id: `${idUser}` },
    });

    return response.data;
  };
  //   console.log(fetchOther(idUser));

  //   const fetchTransaction = async ({ idUser, typeIncomes }) => {
  //     const response = await axios.get('http://localhost:3001/api/transaction', {
  //       params: { _id: `${idUser}`, isIncome: `${typeIncomes}` },
  //     });
  //     return response.data;
  //   };

  //   console.log(fetchTransaction({ idUser, typeIncomes }));

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
    console.log('-');
    setCostsMobileBtn(false);
    setTypeInfo('расход');
  };

  const incomeCostBtnMobile = e => {
    e.preventDefault();
    console.log('+');
    setIncomeMobileBtn(false);
    setTypeInfo('доход');
    //  setRequestType(true);
  };

  const beckHome = e => {
    e.preventDefault();
    setCostsMobileBtn(true);
    setIncomeMobileBtn(true);
    setTypeInfo('расход');
  };

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
                      <CashflowDataEntry typeInfo={typeInfo} />
                    )}
                  </Fragment>
                )}
              </Media>
            </div>

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
                    {matches.small && <></>}
                    {matches.medium && (
                      <TableCashfloTabl
                        typeInfo={typeInfo}
                        transactions={transactions}
                      />
                    )}
                    {matches.large && (
                      <TableCashflo
                        typeInfo={typeInfo}
                        transactions={transactions}
                      />
                    )}
                  </Fragment>
                )}
              </Media>

              <div className={s.monthCashflow}>
                <p className={s.summaryTitle}>СВОДКА</p>
                <TableMonth typeIncomes={typeIncomes} />
              </div>
            </div>
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
                      <TableCashfloMobile transactions={transactions} />
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
            <CashflowDataEntry typeInfo={typeInfo} />
          </div>
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
