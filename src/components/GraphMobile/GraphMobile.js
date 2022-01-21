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
  formatLabelList,
}) {
  const currency = 'грн';

  const renderCustomizedTotalLabel = props => {
    const { x, y, width, value } = props;
    return (
      <text className={styles.mobileLabel} x={x + width + 55} y={y - 5}>
        {`${value} ${currency}`}
      </text>
    );
  };

  const renderCustomizedNameLabel = props => {
    const { x, y, value } = props;
    const formattingMobileLable = formatLabelList(value);
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
          margin={{ top: 30, right: 0, left: 30, bottom: 0 }}
        >
          <XAxis type="number" hide={true} />
          {/* <Legend
            width="80%"
            verticalAlign="bottom"
            content={<CustomizeLegend />}
          ></Legend> */}

          <Bar barSize={15} dataKey="total" radius={[0, 10, 10, 0]}>
            {subcategories.map((item, index) => (
              <Cell
                className={styles.barCeil}
                key={`cell-${index}`}
                fill={barColors[index]}
              />
            ))}

            <LabelList content={renderCustomizedTotalLabel} position="top" />
            <LabelList
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
