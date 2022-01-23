import styles from './ReportsGraph.module.css';
import Media from 'react-media';
import { useState, useEffect } from 'react';
import GraphMobile from '../GraphMobile/GraphMobile';
import GraphTabletDesktop from '../GraphTabletDesktop/GraphTabletDesktop';

export default function ReportsGraph({ date, typeReport, activeCategory }) {
  const [subcategories, setSubcategories] = useState([]);
  const [error, setError] = useState('');
  const BASE_URL = 'http://localhost:3001/api/transaction';

  async function fetchWithErrorHandling(url = '') {
    const response = await fetch(url, {
      headers: {
        Authorization:
          'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxZTk1NmUxNjVmODdiYWJmYzFhMzcxMiIsImlhdCI6MTY0Mjk1NzYyMywiZXhwIjoxNjQ0MTY3MjIzfQ.HPWY_CAoJbTTEl7U5z78zzIPDFpYk-dIeR3Pg1y0-dE',
      },
    });
    return response.ok
      ? await response.json()
      : Promise.reject(new Error('Not found'));
  }

  useEffect(() => {
    if (activeCategory !== null) {
      function fetchSubcategory(date, typeReport, activeCategory) {
        return fetchWithErrorHandling(`
    ${BASE_URL}/subcategory-by-month?date=${date}&isIncome=${typeReport}&category=${activeCategory}`);
      }
      fetchSubcategory(date, typeReport, activeCategory)
        .then(response => {
          setSubcategories(response.data.result.slice(0, 10));
        })
        .catch(error => {
          error.message();
          setError('Hey, Kapusta! We have a problem!');
        });
    } else {
      return;
    }
  }, [activeCategory, date, typeReport]);

  let barColors;
  const currency = 'грн';

  const results = subcategories.map(item => ({
    name: item._id,
    total: item.totalInSubcategory,
    totalLabel: `${item.totalInSubcategory} ${currency}`,
    count: item.count,
  }));

  //Calculation bar color dependly to procent range
  const counts = results.map(item => item.count);

  const barColorsMaker = () => {
    let countsSum = [];

    if (counts.length !== 0) {
      const reducerCounts = (previousValue, currentValue) =>
        previousValue + currentValue;
      countsSum = counts.reduce(reducerCounts);
    }

    const countColors = counts.map(item => {
      const procent = Math.floor((item * 100) / countsSum);

      if (procent < 26) {
        return (item = '#FFDAC0');
      } else if (25 < procent && procent < 51) {
        return (item = '#efa474');
      } else if (50 < procent && procent < 76) {
        return (item = '#fc9b5d');
      } else if (75 < procent && procent < 101) {
        return (item = '#ff751d');
      } else {
        return (item = '#ff751d');
      }
    });

    barColors = countColors;
    return barColors;
  };

  barColorsMaker();

  const formatLabelList = item => {
    if (item.length < 8) {
      return item;
    } else {
      return `${item.substring(0, 8)}...`;
    }
  };

  const CustomizeLegend = () => {
    const minColorItem = {
      height: '10px',
      width: '10px',
      marginRight: '5px',
      backgroundColor: '#FFDAC0',
    };
    const middleOneColorItem = {
      height: '10px',
      width: '10px',
      marginRight: '5px',
      backgroundColor: '#efa474',
    };
    const middleTwoColorItem = {
      height: '10px',
      width: '10px',
      marginRight: '5px',
      backgroundColor: '#fc9b5d',
    };
    const maxColorItem = {
      height: '10px',
      width: '10px',
      marginRight: '5px',
      backgroundColor: '#FF751D',
    };
    const textLegendStyle = {
      fontSize: '11px',
      fill: '#52555F',
      fontWeight: '500',
    };
    const legendDescrContainer = {
      width: '70%',
      display: 'flex',
      justifyContent: 'space-between',
    };
    const legendItemContainer = {
      display: 'flex',
      alignItems: 'center',
    };

    return (
      <>
        <div className={styles.legendStyleContainer}>
          <p style={textLegendStyle}>
            Процент от общего числа записей по категории:
          </p>

          <div style={legendDescrContainer}>
            <div className={styles.itemsStyleContainer}>
              <div style={legendItemContainer}>
                <div style={minColorItem}></div>
                <p style={textLegendStyle}>0% - 25%</p>
              </div>

              <div style={legendItemContainer}>
                <div style={middleOneColorItem}></div>
                <p style={textLegendStyle}>26% - 50%</p>
              </div>
            </div>

            <div className={styles.itemsStyleContainer}>
              <div style={legendItemContainer}>
                <div style={middleTwoColorItem}></div>
                <p style={textLegendStyle}>51% - 75%</p>
              </div>

              <div style={legendItemContainer}>
                <div style={maxColorItem}></div>
                <p style={textLegendStyle}>76% - 100%</p>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  };

  return (
    <>
      {barColors ? (
        <Media
          queries={{
            mobile: '(max-width: 767px)',
            tabletDesktop: '(min-width: 768px)',
          }}
        >
          {matches =>
            matches.tabletDesktop ? (
              <GraphTabletDesktop
                subcategories={results}
                barColors={barColors}
                CustomizeLegend={CustomizeLegend}
                formatLabelList={formatLabelList}
              />
            ) : (
              <GraphMobile
                subcategories={results}
                barColors={barColors}
                CustomizeLegend={CustomizeLegend}
              />
            )
          }
        </Media>
      ) : null}
    </>
  );
}
