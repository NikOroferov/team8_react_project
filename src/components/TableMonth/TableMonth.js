import { useState, useMemo } from 'react';
import { useTable } from 'react-table';

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

export default function TableMonth() {
  const [dataCash, setDatadCash] = useState([
    {
      month: 'Декабрь',
      costs: '10000.00',
    },
    {
      month: 'Ноябрь',
      costs: '15000.00',
    },
    {
      month: 'Октябрь',
      costs: '20000,00',
    },
    {
      month: 'Сентябрь',
      costs: '2000,00',
    },
    {
      month: 'Август',
      costs: '7000,00',
    },
    {
      month: 'Июль',
      costs: '10000,00',
    },
  ]);

  const dataMonthFoTabl = dataCash.map(({ month, costs }) => {
    return {
      col1: month,
      col2: `${costs} грн.`,
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
