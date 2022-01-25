import { useState, useMemo, useEffect } from 'react';
import { useTable } from 'react-table';
// import toast from 'react-hot-toast';

import { fetchCostsMouth } from '../../services/cashflooApi';

import Styles from './styleTabMouth';

function Table({ columns, data }) {
  const {
    getTableProps,
    getTableBodyProps,
    // headerGroups,
    rows,
    prepareRow,
  } = useTable({
    columns,
    data,
  });

  return (
    <table {...getTableProps()} className="table">
      <tbody {...getTableBodyProps()}>
        {rows.map((row, i) => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()} className="tr">
              {row.cells.map(cell => {
                return (
                  <td {...cell.getCellProps()} className="td">
                    {cell.render('Cell')}
                  </td>
                );
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default function TableMonth({ typeIncomes, transactions }) {
  const [dataCash, setDatadCash] = useState([]);

  useEffect(() => {
    if (typeIncomes !== [] && transactions !== '') {
      fetchCostsMouth(typeIncomes)
        .then(response => {
          setDatadCash(response.data.result);
        })
        .catch(error => {
          // toast.error('Hey, Kapusta! We have a problem!');
          console.log(error);
        });
    }
  }, [transactions, typeIncomes]);

  const monthName = month => {
    if (month === 1) {
      return 'Январь';
    }
    if (month === 2) {
      return 'Февраль';
    }
    if (month === 3) {
      return 'Март';
    }
    if (month === 4) {
      return 'Апрель';
    }
    if (month === 5) {
      return 'Май';
    }
    if (month === 6) {
      return 'Июнь';
    }
    if (month === 7) {
      return 'Июль';
    }
    if (month === 8) {
      return 'Август';
    }
    if (month === 9) {
      return 'Сентябрь';
    }
    if (month === 10) {
      return 'Октябрь';
    }
    if (month === 11) {
      return 'Ноябрь';
    }
    if (month === 12) {
      return 'Декабрь';
    }
  };

  const dataMonthFoTabl = dataCash.map(({ month, total }) => {
    return {
      col1: monthName(month),
      col2: `${total} грн.`,
    };
  });

  const data = useMemo(() => [...dataMonthFoTabl], [dataMonthFoTabl]);

  const columns = useMemo(
    () => [
      {
        Header: 'СВОДКА',
        columns: [
          {
            width: '115',
            Header: 'Месяц',
            accessor: 'col1',
          },
          {
            width: '115',
            Header: 'Сумма',
            accessor: 'col2',
          },
        ],
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
