import {
  YAxis,
  XAxis,
  Tooltip,
  BarChart,
  Bar,
  Cell,
  LabelList,
  ResponsiveContainer,
  CartesianGrid,
  Legend,
} from 'recharts';
import style from './ReportsGraph.module.css';
import { useState, useEffect } from 'react';

export default function BarGraph({ date, typeReport, activeCategory }) {
  const [subcategories, setSubcategories] = useState([]);
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
    const sub = {
      status: 'success',
      code: 200,
      data: {
        result: [
          {
            _id: 'свинина',
            totalInSubcategory: 2100,
            count: 3,
          },
          {
            _id: 'молоко',
            totalInSubcategory: 1800,
            count: 30,
          },
          {
            _id: 'Творог',
            totalInSubcategory: 1550,
            count: 3,
          },
          {
            _id: 'Картошка',
            totalInSubcategory: 1400,
            count: 3,
          },
          {
            _id: 'Пицца',
            totalInSubcategory: 1200,
            count: 50,
          },
          {
            _id: 'Красная рыба',
            totalInSubcategory: 900,
            count: 3,
          },
          {
            _id: 'Зелень',
            totalInSubcategory: 800,
            count: 6,
          },
          {
            _id: 'Кулинария',
            totalInSubcategory: 530,
            count: 10,
          },
          {
            _id: 'Торт',
            totalInSubcategory: 440,
            count: 2,
          },
          {
            _id: 'Колбаса',
            totalInSubcategory: 200,
            count: 2,
          },
          {
            _id: 'Овсянка',
            totalInSubcategory: 150,
            count: 8,
          },
          {
            _id: 'Чупа-чупс',
            totalInSubcategory: 50,
            count: 2,
          },
          {
            _id: 'Авокадо',
            totalInSubcategory: 35,
            count: 1,
          },
        ],
      },
    };

    // const queryReports = [date, typeReport, activeCategory];
    // getSubcategoryReport(queryReports)
    //   .then(resp =>
    setSubcategories(sub.data.result);
    //     )
    // .catch(error => {
    //     setError('Hey, Kapusta! We have a problem!');
  }, [activeCategory, date, typeReport]);

  let barColors;
  const currency = 'грн';

  const textStyle = {
    fontSize: '12px',
    fontFamily: 'Roboto',
    textAlign: 'center',
    fill: '#52555F',
  };

  const tooltipStyle = {
    width: '150px',
    minHeight: '30px',
    backgroundImage:
      'linear-gradient(to left, rgba(232, 130, 23, 0.9), rgba(240, 187, 132, 0.9))',
    fontSize: '12px',
    fontFamily: 'Roboto',
    textAlign: 'center',
    fill: '#52555F',
    borderRadius: '10px',
    boxShadow: '0px 5px 5px rgba(8, 11, 32, 0.3)',
    padding: '5px',
  };

  const results = subcategories.map(item => ({
    name: item._id,
    total: item.totalInSubcategory,
    totalLabel: `${item.totalInSubcategory} ${currency}`,
    count: item.count,
  }));

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

  const renderCustomizedTotalLabel = props => {
    const { x, y, width, value } = props;
    return (
      <text className={style.mobileLabel} x={x + width + 55} y={y - 5}>
        {`${value} ${currency}`}
      </text>
    );
  };

  const renderCustomizedNameLabel = props => {
    const { x, y, value } = props;
    const formattingMobileLable = formatLabelList(value);
    return (
      <text className={style.mobileLabel} x={x} y={y - 5}>
        {formattingMobileLable}
      </text>
    );
  };

  const CustomTooltip = ({ active, payload, label, results }) => {
    if (active && payload && payload.length) {
      const formattingTooltipLable = formatLabelList(results[label].name);
      return (
        <div className="custom-tooltip">
          <p className="label">{`${formattingTooltipLable} : ${payload[0].value} ${currency}`}</p>
          <p className="desc">{`За месяц было внесено в список ${results[label].count} раз(а)`}</p>
        </div>
      );
    }
    return null;
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
    <section className={style.sections}>
      {isDesktopOrTablet ? (
        <div className={style.graphDesktopAndTablet}>
          <div className={style.barContainer}>
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={results}
                margin={{ top: 20, right: 0, left: 0, bottom: 19 }}
              >
                <CartesianGrid vertical={false} />
                <YAxis tickCount={9} hide={true} />

                <Tooltip
                  wrapperStyle={tooltipStyle}
                  content={<CustomTooltip results={results} />}
                />

                <Bar barSize={38} dataKey="total" radius={[10, 10, 0, 0]}>
                  {subcategories.map((item, index) => (
                    <Cell
                      className={style.barCeil}
                      key={`cell-${index}`}
                      fill={barColors[index]}
                    />
                  ))}
                  <LabelList
                    dataKey="totalLabel"
                    position="top"
                    style={textStyle}
                  />
                  <LabelList
                    dataKey="name"
                    position="bottom"
                    formatter={formatLabelList}
                    style={textStyle}
                  />
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      ) : (
        <div className={style.barContainer}>
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={results}
              layout="vertical"
              margin={{ top: 30, right: 0, left: 30, bottom: 0 }}
            >
              <XAxis type="number" hide={true} />
              <Legend
                width="80%"
                verticalAlign="bottom"
                content={<CustomizeLegend />}
              ></Legend>

              <Bar barSize={15} dataKey="total" radius={[0, 10, 10, 0]}>
                {subcategories.map((item, index) => (
                  <Cell
                    className={style.barCeil}
                    key={`cell-${index}`}
                    fill={barColors[index]}
                  />
                ))}

                <LabelList
                  content={renderCustomizedTotalLabel}
                  position="top"
                />
                <LabelList
                  dataKey="name"
                  content={renderCustomizedNameLabel}
                  position="top"
                />
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
      )}
    </section>
  );
}
