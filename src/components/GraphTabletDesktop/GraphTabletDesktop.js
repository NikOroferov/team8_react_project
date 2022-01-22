import {
  ResponsiveContainer,
  BarChart,
  CartesianGrid,
  Legend,
  YAxis,
  Tooltip,
  Bar,
  Cell,
  LabelList,
} from 'recharts';
import styles from './GraphTabletDesktop.module.css';

export default function GraphTabletDesktop({
  subcategories,
  barColors,
  formatLabelList,
  CustomizeLegend,
}) {
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

  return (
    <section className={styles.sections}>
    <div className={styles.graphDesktopAndTablet}>
      <div className={styles.barContainer}>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={subcategories}
            margin={{ top: 20, right: 0, left: 0, bottom: 19 }}
          >
            <CartesianGrid vertical={false} />
            <YAxis tickCount={9} hide={true} />

            <Tooltip
              wrapperStyle={tooltipStyle}
              content={<CustomTooltip results={subcategories} />}
            />

            <Bar barSize={38} dataKey="total" radius={[10, 10, 0, 0]}>
              {subcategories.map((item, index) => (
                <Cell
                  className={styles.barCeil}
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
            {/* <Legend
              width="80%"
              verticalAlign="bottom"
              content={<CustomizeLegend />}
            ></Legend> */}
          </BarChart>
        </ResponsiveContainer>
      </div>
      </div>
    </section>
  );
}
