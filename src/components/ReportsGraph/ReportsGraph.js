import styles from './ReportsGraph.module.css';
import { useState, useEffect } from 'react';
import GraphMobile from '../GraphMobile/GraphMobile';
import GraphTabletDesktop from '../GraphTabletDesktop/GraphTabletDesktop';

export default function BarGraph({ date, typeReport, activeCategory }) {
  const [subcategories, setSubcategories] = useState([]);
  const [error, setError] = useState('');

  const BASE_URL = 'http://localhost:3001/api/transaction';

  async function fetchWithErrorHandling(url = '') {
    const response = await fetch(url, {
      headers: {
        Authorization:
          'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxZTk1NmUxNjVmODdiYWJmYzFhMzcxMiIsImlhdCI6MTY0Mjc2ODA2NCwiZXhwIjoxNjQzOTc3NjY0fQ.-xnGlU0KqSdnpfM15YTy2yz8OrH5MmXUu6sDGxEdbTk',
      },
    });
    return response.ok
      ? await response.json()
      : Promise.reject(new Error('Not found'));
  }


  //Device screen size listener
  const [isDesktopOrTablet, setIsDesktopOrTablet] = useState(
    window.innerWidth > 767,
  );

  const updateMedia = () => {
    setIsDesktopOrTablet(window.innerWidth > 767);
  };
  useEffect(() => {
    window.addEventListener('resize', updateMedia);
    return () => window.removeEventListener('resize', updateMedia);
  });

  useEffect(() => {
      function fetchSubcategory(date, typeReport, activeCategory) {
    return fetchWithErrorHandling(`
    ${BASE_URL}/subcategory-by-month?date=${date}&isIncome=${typeReport}&category=${activeCategory}`);
    }
    let isMounted = true;  
    fetchSubcategory(date, typeReport, activeCategory)
      .then(response => {
        if (isMounted) {
  setSubcategories(response.data.result);
        } 
        return () => { isMounted = false }
      })
      .catch(error => {
        error.message();
        setError('Hey, Kapusta! We have a problem!');
      })
  }, [activeCategory, date, typeReport]);

  let barColors;
  const currency = 'грн';

  const results = subcategories.map(item => ({
    name: item._id,
    total: item.totalInSubcategory,
    totalLabel: `${item.totalInSubcategory} ${currency}`,
    count: item.count,
  }));

  //Calculation for count range
  const counts = results.map(item => item.count);
  const minCount = Math.min(...counts);
  const maxCount = Math.max(...counts);
  const difference = Math.ceil((maxCount - minCount) / 3);
  const firstRange = `${minCount} - ${minCount + difference}`;
  const secondRange = `${minCount + difference + 1} - ${
    maxCount - difference - 1
  }`;
  const thirdRange = `${maxCount - difference} - ${maxCount}`;

  const barColorsMaker = () => {
    const countColors = counts.map(item => {
      if (item < minCount + difference) {
        return (item = '#FFDAC0');
      } else if (maxCount - difference < item) {
        return (item = '#FF751D');
      } else {
        return (item = '#fc9b5d');
      }
    });
    barColors = countColors;
    return barColors;
  };

  const formatLabelList = item => {
    if (item.length < 8) {
      return item;
    } else {
      return `${item.substring(0, 8)}...`;
    }
  };

  const CustomizeLegend = () => {
    const firstColor = {
      height: '10px',
      width: '10px',
      backgroundColor: '#FFDAC0',
    };

    const secondColor = {
      height: '10px',
      width: '10px',
      backgroundColor: '#fc9b5d',
    };

    const thirdColor = {
      height: '10px',
      width: '10px',
      backgroundColor: '#FF751D',
    };

    const textLegendStyle = {
      fontSize: '12px',
      fontFamily: 'Roboto',
      fill: '#52555F',
      fontWeight: '500',
    };

    const itemLegendStyle = {
      display: 'flex',
      justifyContent: 'space-evenly',
    };

    return (
      <>
        <p style={textLegendStyle}>
          Сколько раз было внесено за текущий месяц:
        </p>
        <div style={itemLegendStyle}>
          <div style={firstColor}></div>
          <p style={textLegendStyle}>{firstRange}</p>
          <div style={secondColor}></div>
          <p style={textLegendStyle}>{secondRange}</p>
          <div style={thirdColor}></div>
          <p style={textLegendStyle}>{thirdRange}</p>
        </div>
      </>
    );
  };

  barColorsMaker();

  return (
    <>
      {isDesktopOrTablet ? (
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
          formatLabelList={formatLabelList}
        />
      )}
    </>
  );
}
