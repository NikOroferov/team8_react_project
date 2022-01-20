import { useMemo, useCallback, useState } from 'react';
import { useTable, useBlockLayout } from 'react-table';
import { FixedSizeList } from 'react-window';
import scrollbarWidth from './scrollbarWidth';

import Styles from './styleTabl';
import Icons from '../../img/svg/sprite.svg';

const ButtoDelet = data => {
  return (
    <button
      className="buttonDel"
      type="button"
      onClick={data.click}
      id={data.idItams}
    >
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

export default function TableCashflo({ typeInfo }) {
  const [dataCash, setDatadCash] = useState([
    {
      id: '1',
      date: '12.01.2022',
      category: 'Продукты',
      transactionType: 'расход',
      costs: '10000.00',
      subcategory: 'Описание товара',
    },
    {
      id: '2',
      date: '13.01.2022',
      category: 'Алкоголь',
      transactionType: 'расход',
      costs: '5000.00',
      subcategory: 'Описание товара',
    },
    {
      id: '3',
      date: '14.01.2022',
      category: 'Продукты',
      transactionType: 'расход',
      costs: '10000.00',
      subcategory: 'Описание товара',
    },
    {
      id: '4',
      date: '15.01.2022',
      category: 'Продукты',
      transactionType: 'расход',
      costs: '10000.00',
      subcategory: 'Описание товара',
    },
    {
      id: '11',
      date: '05.01.2022',
      category: 'зп',
      transactionType: 'доход',
      costs: '6000.00',
      subcategory: 'Аренда',
    },
    {
      id: '5',
      date: '16.01.2022',
      category: 'Продукты',
      transactionType: 'расход',
      costs: '10000.00',
      subcategory: 'Описание товара',
    },
    {
      id: '6',
      date: '17.01.2022',
      category: 'Продукты',
      transactionType: 'расход',
      costs: '10000.00',
      subcategory: 'Описание товара',
    },
    {
      id: '7',
      date: '18.01.2022',
      category: 'Продукты',
      transactionType: 'расход',
      costs: '10000.00',
      subcategory: 'Описание товара',
    },
    {
      id: '8',
      date: '17.01.2022',
      category: 'зп',
      transactionType: 'доход',
      costs: '15000.00',
      subcategory: 'Описание товара',
    },
    {
      id: '9',
      date: '17.01.2022',
      category: 'доп.доход',
      transactionType: 'доход',
      costs: '1000.00',
      subcategory: 'Описание товара',
    },
    {
      id: '10',
      date: '18.01.2022',
      category: 'зп',
      transactionType: 'доход',
      costs: '15000.00',
      subcategory: 'Описание товара',
    },
  ]);

  const onClickDelete = e => {
    console.log(`УДИЛИТЬ`);
    console.log(e.currentTarget.id);
  };

  const dataCashFoTabl = dataCash.map(
    ({ id, date, subcategory, category, transactionType, costs }) => {
      // if ((transactionType = 'расход')) {
      return {
        col1: date,
        col2: subcategory,
        col3: category,
        col4: `${costs} грн.`,
        col5: <ButtoDelet click={onClickDelete} idItams={id} />,
        transactionType: transactionType,
      };
      // } else {
      //   return {
      //     col1: date,
      //     col2: subcategory,
      //     col3: category,
      //     col4: `+ ${costs} грн.`,
      //     col5: <ButtoDelet click={onClickDelete} idItams={id} />,
      //     transactionType: transactionType,
      //   };
      // }
    },
  );

  const dataCashFoTablFiter = dataCashFoTabl.filter(function (e) {
    return e.transactionType === typeInfo;
  });

  //   console.log(dataCashFoTabl);

  const data = useMemo(() => [...dataCashFoTablFiter], [dataCashFoTablFiter]);

  const columns = useMemo(
    () => [
      {
        width: '90',
        //   width: '{ }',
        Header: 'Дата',
        accessor: 'col1',
      },
      {
        width: '300',
        // width: '{}',
        Header: 'Описание',
        accessor: 'col2',
      },
      {
        width: '160',
        //  width: '{}',
        Header: 'Категория',
        accessor: 'col3',
      },
      {
        width: '130',
        //   width: '{}',
        Header: 'Сумма',
        accessor: 'col4',
      },
      {
        width: '70',
        //   width: '{}',
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
