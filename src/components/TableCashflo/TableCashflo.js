import { useMemo, useCallback } from 'react';
import { useTable, useBlockLayout } from 'react-table';
import { FixedSizeList } from 'react-window';
import scrollbarWidth from './scrollbarWidth';

import Styles from './styleTabl';
import Icons from '../../img/svg/sprite.svg';

const ButtoDelet = data => {
  return (
    <button className="buttonDel" type="button" onClick={data.click}>
      <svg width="18" height="18" className="iconButtonDel">
        <use xlinkHref={`${Icons}#icon-delete-1`} className=""></use>
      </svg>
    </button>
  );
};

function Table({ columns, data }) {
  const scrollBarSize = useMemo(() => scrollbarWidth(), []);

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    totalColumnsWidth,
    prepareRow,
  } = useTable(
    {
      columns,
      data,
    },
    useBlockLayout,
  );

  const RenderRow = useCallback(
    ({ index, style }) => {
      const row = rows[index];
      prepareRow(row);
      return (
        <div
          {...row.getRowProps({
            // style,
          })}
          className="tr"
        >
          {row.cells.map(cell => {
            return (
              <div {...cell.getCellProps()} className="td">
                {cell.render('Cell')}
              </div>
            );
          })}
        </div>
      );
    },
    [prepareRow, rows],
  );

  return (
    <div {...getTableProps()} className="table">
      <div className="tablHead">
        {headerGroups.map(headerGroup => (
          <div {...headerGroup.getHeaderGroupProps()} className="tr">
            {headerGroup.headers.map(column => (
              <div {...column.getHeaderProps()} className="th">
                {column.render('Header')}
              </div>
            ))}
          </div>
        ))}
      </div>

      <div {...getTableBodyProps()} className="boxLine">
        <FixedSizeList
          height={400}
          itemCount={rows.length}
          itemSize={35}
          width={totalColumnsWidth + scrollBarSize}
        >
          {RenderRow}
        </FixedSizeList>
      </div>
    </div>
  );
}

export default function TableCashflo() {
  const onClickDelete = () => {
    console.log(`УДИЛИТЬ`);
  };

  const data = useMemo(
    () => [
      {
        col1: '15.01.2022',
        //   col2: 'Купил что то очень дорогое и длинное еще длинееееееееее ееееее йййй йййййй ййййй йййй ывывывыв вывывыв ывывыв вы ы ыв  ывыввв',
        col2: 'Купил что то очень дорогое',
        col3: 'Прочее',
        col4: '-10 000.00 грн.',
        col5: <ButtoDelet click={onClickDelete} />,
      },

      {
        col1: '15.01.2022',
        col2: 'Купил опять',
        col3: 'Прочее',
        col4: '-20 000',
        col5: <ButtoDelet />,
      },
      {
        col1: '15.01.2022',
        col2: 'Потратил',
        col3: 'Прочее',
        col4: '-2 000',
        col5: <ButtoDelet />,
      },
      {
        col1: '15.01.2022',
        col2: 'Потратил',
        col3: 'Прочее',
        col4: '-2 000',
        col5: <ButtoDelet />,
      },
      {
        col1: '15.01.2022',
        col2: 'Потратил',
        col3: 'Прочее',
        col4: '-2 000',
        col5: <ButtoDelet />,
      },
      {
        col1: '15.01.2022',
        col2: 'Потратил',
        col3: 'Прочее',
        col4: '-2 000',
        col5: <ButtoDelet />,
      },
      {
        col1: '15.01.2022',
        col2: 'Потратил',
        col3: 'Прочее',
        col4: '-2 000',
        col5: <ButtoDelet />,
      },
      {
        col1: '15.01.2022',
        col2: 'Потратил',
        col3: 'Прочее',
        col4: '-2 000',
        col5: <ButtoDelet />,
      },
      {
        col1: '15.01.2022',
        col2: 'Потратил',
        col3: 'Прочее',
        col4: '-2 000',
        col5: <ButtoDelet />,
      },
      {
        col1: '15.01.2022',
        col2: 'Потратил',
        col3: 'Прочее',
        col4: '-2 000',
        col5: <ButtoDelet />,
      },
      {
        col1: '15.01.2022',
        col2: 'Потратил',
        col3: 'Прочее',
        col4: '-2 000',
        col5: <ButtoDelet />,
      },
      {
        col1: '15.01.2022',
        col2: 'Потратил',
        col3: 'Прочее',
        col4: '-2 000',
        col5: <ButtoDelet />,
      },
      {
        col1: '15.01.2022',
        col2: 'Потратил',
        col3: 'Прочее',
        col4: '-2 000',
        col5: <ButtoDelet />,
      },
    ],
    [],
  );

  const columns = useMemo(
    () => [
      {
        width: '90',
        Header: 'Дата',
        accessor: 'col1',
      },
      {
        width: '300',
        Header: 'Описание',
        accessor: 'col2',
      },
      {
        width: '160',
        Header: 'Категория',
        accessor: 'col3',
      },
      {
        width: '130',
        Header: 'Сумма',
        accessor: 'col4',
      },
      {
        width: '70',
        marginLeft: '20',
        Header: '',
        accessor: 'col5',
      },
    ],
    [],
  );

  return (
    <Styles>
      <Table columns={columns} data={data} />
    </Styles>
  );
}
