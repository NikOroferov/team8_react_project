import styles from './ReportsGraph.module.css';
import Media from 'react-media';
import { useState, useEffect } from 'react';
import GraphMobile from '../GraphMobile/GraphMobile';
import GraphTabletDesktop from '../GraphTabletDesktop/GraphTabletDesktop';
import * as reportsAPI from '../../services/reports-api';

export default function BarGraph({ date, typeReport, activeCategory }) {
  const [subcategories, setSubcategories] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    if (activeCategory !== null) {
      reportsAPI
        .fetchSubcategoryByMonth(date, typeReport, activeCategory)
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

  const currency = 'грн';

  const results = subcategories.map(item => ({
    name: item._id,
    total: item.totalInSubcategory,
    totalLabel: `${item.totalInSubcategory} ${currency}`,
    count: item.count,
  }));

  //Calculation bar color dependly to procent range
  let barColors;
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
    </>
  );
}
