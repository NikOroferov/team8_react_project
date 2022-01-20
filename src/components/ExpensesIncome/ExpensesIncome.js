import React, { useState, Fragment } from 'react';
import Media from 'react-media';

// import { useState } from 'react';

import Balance from '../Balance/Balance';

import Background from '../../views/Background/background.jsx';

import LinkToReports from '../LinkToReports/LinkToReports';
import DateCalendar from '../DateCalendar/DateCalendar';
import CashflowDataEntry from '../CashflowDataEntry/CashflowDataEntry';

import TableCashflo from '../TableCashflo/TableCashflo';
import TableCashfloTabl from '../TableCashflo/TableCashfloTabl';
import TableMonth from '../TableMonth/TableMonth';
import TableCashfloMobile from '../TableCashflo/TableCashfloMobile';
import Icons from '../../img/svg/sprite.svg';

import s from './ExpensesIncome.module.css';

export default function ExpensesIncome() {
  const [typeInfo, setTypeInfo] = useState('расход');
  const [сostsMobileBtn, setCostsMobileBtn] = useState(true);
  const [incomeMobileBtn, setIncomeMobileBtn] = useState(true);

  const [activeCostsBtn, setActiveCostsBtn] = useState(true);
  const [activeIncomeBtn, setActiveIncomeBtn] = useState(false);

  //   const classes = ['navBtn'];
  //   const classesStr = classes.join(' ');

  //   if (activeCostsBtn === true) {
  //     classes.push('active');
  //   }

  const сostsClick = e => {
    e.preventDefault();
    setTypeInfo('расход');
    setActiveCostsBtn(true);
    setActiveIncomeBtn(false);
  };

  const incomeClick = e => {
    e.preventDefault();
    setTypeInfo('доход');
    setActiveIncomeBtn(true);
    setActiveCostsBtn(false);
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
            <button className={s.navBtn} type="button" onClick={сostsClick}>
              РАСХОД
            </button>
            <button className={s.navBtn} type="button" onClick={incomeClick}>
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
                    {matches.medium && <TableCashfloTabl typeInfo={typeInfo} />}
                    {matches.large && <TableCashflo typeInfo={typeInfo} />}
                  </Fragment>
                )}
              </Media>

              <div className={s.monthCashflow}>
                <p className={s.summaryTitle}>СВОДКА</p>
                <TableMonth />
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
                      <TableCashfloMobile />
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
          <button onClick={beckHome}>
            <svg width="18" height="18" className="">
              <use
                xlinkHref={`${Icons}#icon-keyboard_backspace-24px-1`}
                //  className=""
              ></use>
            </svg>
          </button>
          <div className={s.cashflowInput}>
            <CashflowDataEntry typeInfo={typeInfo} />
          </div>
        </Background>
      )}

      {incomeMobileBtn === false && (
        <Background>
          <button onClick={beckHome}>
            <svg width="18" height="18" className="">
              <use
                xlinkHref={`${Icons}#icon-keyboard_backspace-24px-1`}
                //  className=""
              ></use>
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
