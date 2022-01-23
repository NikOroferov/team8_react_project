import { useMemo, useCallback, useState, useEffect } from 'react';
import { useTable, useBlockLayout } from 'react-table';
import { FixedSizeList } from 'react-window';
import scrollbarWidth from './scrollbarWidth';
import axios from 'axios';
import toast from 'react-hot-toast';

import Styles from './styleTabl';
import Icons from '../../img/svg/sprite.svg';

axios.defaults.headers.common = {
  Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxZWJlMGYxYmM3NjkxNTZlNjBkYTVmMiIsImlhdCI6MTY0Mjg0ODU2OSwiZXhwIjoxNjQ0MDU4MTY5fQ.dTjoLjfhdOIpYVxubsVGGC41l7iDtBkZO0Rw0P7pvPg`,
};

const idUser = '61ebe0f1bc769156e60da5f2';

const ButtoDelet = data => {
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

export default function TableCashfloTabl({
  typeInfo,
  transactions,
  fetchDelete,
  deleteTranId,
}) {
  const [dataCash, setDatadCash] = useState([]);
  const [balance, setBalance] = useState(800);

  const onClickDelete = e => {
    const transactionId = e.currentTarget.id;

    if (balance - e.currentTarget.value < 0 && typeInfo === 'расход') {
      toast.error('Вы превышаете свой баланс!');

      return;
    } else {
      fetchDelete(transactionId);
      deleteTranId(transactionId);
    }
    console.log(`УДИЛЯЕМ`);
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
            col4: `${costs} грн.`,
            col5: (
              <ButtoDelet click={onClickDelete} idItams={_id} summ={costs} />
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
        width: '90',
        marginLeft: '20',
        Header: '',
        accessor: 'col5',
      },
    ],
    [],
  );

  const fetchDel = async data => {
    const response = await axios.delete(
      'http://localhost:3001/api/transaction',
      data,
      {
        params: { _id: `${idUser}` },
      },
    );
    return response.data;
  };

  return (
    <Styles>
      <Table columns={columns} data={data} />
    </Styles>
  );
}
