import {
  ResponsiveContainer,
  BarChart,
  XAxis,
  Legend,
  Bar,
  Cell,
  LabelList,
} from 'recharts';
import styles from './GraphMobile.module.css';
export default function GraphMobile({
  subcategories,
  barColors,
  CustomizeLegend,
}) {
  const renderCustomizedTotalLabel = props => {
    const { x, y, width, value } = props;
    const PositionTotalLabel = () => {
      if (width > 82) {
        return (<text className={styles.mobileLabel} x={x + width - 5} y={y - 5}>
          {value}
        </text>)
      } else {
        return (<text className={styles.mobileLabel} x={x + 82} y={y - 5}>
          {value}
        </text>);
      }
    }
    
    return (
      <PositionTotalLabel />
    );
  };

  const renderCustomizedNameLabel = props => {
    const { x, y, value } = props;
    
    const formatLabelMobileList = item => {
      if (item.length < 12) {
        return item;
      } else {
        return `${item.substring(0, 12)}...`;
      }
    };

    const formattingMobileLable = formatLabelMobileList(value);
    return (
      <text className={styles.mobileLabel} x={x} y={y - 5}>
        {formattingMobileLable}
      </text>
    );
  };

  return (
    <section className={styles.sections}>
      <div className={styles.barContainer}>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={subcategories}
            layout="vertical"
            margin={{ top: 30, right: 70, left: 0, bottom: 20 }}
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
                  className={styles.barCeil}
                  key={`cell-${index}`}
                  fill={barColors[index]}
                />
              ))}

              <LabelList
                dataKey="totalLabel"
                content={renderCustomizedTotalLabel}
                position="top"
              />
              <LabelList
                subcategories={subcategories}
                dataKey="name"
                content={renderCustomizedNameLabel}
                position="top"
              />
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </section>
  );
}
