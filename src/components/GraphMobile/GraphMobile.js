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
  const subcategoriesForMobile = subcategories;

  //Stylish bugfix for recharts library, it not render horizontal BarChart with a single data element
  const dataFilterForBugfix = subcategoriesForMobile => {
    if (subcategoriesForMobile && subcategoriesForMobile.length === 1) {
      return subcategoriesForMobile.push({
        name: '',
        total: '',
        totalLabel: '',
        count: '',
      });
    }
  };

  dataFilterForBugfix(subcategoriesForMobile);

  const renderCustomizedTotalLabel = props => {
    const { x, y, width, value } = props;
    const PositionTotalLabel = () => {
      if (width > 82) {
        return (
          <text className={styles.mobileLabel} x={x + width - 5} y={y - 5}>
            {value}
          </text>
        );
      } else {
        return (
          <text className={styles.mobileLabel} x={x + 82} y={y - 5}>
            {value}
          </text>
        );
      }
    };

    return <PositionTotalLabel />;
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

  let num;

   const calculatedHeight = () => {
    const n = 30;
    const lengthNum = subcategoriesForMobile.length;
    num =  ((5 + lengthNum) + (lengthNum/2.5)) * n;
  };

calculatedHeight()

  const styleWithHeightCalculate = {
    height: `${num}px`
  };

  return (
      <section style={styleWithHeightCalculate}>
        <div className={styles.barContainer}>
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={subcategoriesForMobile}
              layout="vertical"
              margin={{ top: 15, right: 70, left: 0, bottom: 25 }}
          >
            <Legend
                width="100%"
                verticalAlign="top"
                content={<CustomizeLegend />}
                wrapperStyle={{
                  paddingBottom: '40px',
                }}
              ></Legend>
              <XAxis type="number" hide={true} />

              <Bar
                barSize={15}
                dataKey="total"
                radius={[0, 10, 10, 0]}
              >
                {subcategoriesForMobile.map((item, index) => (
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
                  subcategories={subcategoriesForMobile}
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
