import { useMemo, useCallback, useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useTable, useBlockLayout } from 'react-table';
import { FixedSizeList } from 'react-window';
import scrollbarWidth from './scrollbarWidth';
// import toast from 'react-hot-toast';

import Styles from './styleTabl';
import getBalance from '../../redux/balance/balance-selectors';
import Icons from '../../img/svg/sprite.svg';

const ButtonDelet = data => {
  return (
    <button
      className="buttonDel"
      type="button"
      onClick={data.click}
      id={data.idItams}
      value={data.summ}
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
            style,
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
          height={347}
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

export default function TableCashfloTabl({
  typeInfo,
  transactions,
  fetchDelete,
  deleteTranId,
}) {
  const [dataCash, setDatadCash] = useState([]);
  const [sign, setSign] = useState('-');
  //   const [color, setColor] = useState({ color: '#E7192E' });

  const balance = useSelector(getBalance);

  useEffect(() => {
    if (typeInfo === 'расход') {
      setSign('-');
      // setColor({ color: '#E7192E' });
    } else {
      setSign('+');
      // setColor({ color: '#407946' });
    }
  }, [typeInfo]);

  const onClickDelete = e => {
    const transactionId = e.currentTarget.id;

    if (balance - e.currentTarget.value < 0 && typeInfo === 'расход') {
      // toast.error('Не возможно удалить.Вы превышаете свой баланс!');

      return;
    } else {
      fetchDelete(transactionId);
      deleteTranId(transactionId);
    }
  };

  useEffect(() => {
    if (transactions !== []) {
      function dateFormat(date) {
        if (date.month.length < 2) {
          return `0${date.month}`;
        } else {
          return date.month;
        }
      }
      const dataCashFoTabl = transactions.map(
        ({ _id, subcategory, category, transactionType, costs, date }) => {
          return {
            col1: `${date.day}.${dateFormat(date)}.${date.year}`,
            col2: subcategory,
            col3: category,
            col4: `${sign} ${costs} грн.`,
            col5: (
              <ButtonDelet click={onClickDelete} idItams={_id} summ={costs} />
            ),
            transactionType: transactionType,
          };
        },
      );
      setDatadCash(dataCashFoTabl);
    }
  }, [transactions]);

  const dataCashFoTablFiter = dataCash.filter(function (e) {
    return e.transactionType === typeInfo;
  });

  const data = useMemo(() => [...dataCashFoTablFiter], [dataCashFoTablFiter]);

  const columns = useMemo(
    () => [
      {
        width: '84',
        Header: 'Дата',
        accessor: 'col1',
      },
      {
        width: '192',
        Header: 'Описание',
        accessor: 'col2',
      },
      {
        width: '114',
        Header: 'Категория',
        accessor: 'col3',
      },
      {
        width: '124',
        Header: 'Сумма',
        accessor: 'col4',
      },
      {
        width: '83',
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
