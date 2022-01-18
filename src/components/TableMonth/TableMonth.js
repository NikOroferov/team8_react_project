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
      {/* <thead>
        {headerGroups.map(headerGroup => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map(column => (
              <th {...column.getHeaderProps()}>{column.render('Header')}</th>
            ))}
          </tr>
        ))}
      </thead> */}
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
      col1: 'Декабрь',
      col2: '10 000.00',
    },
    {
      col1: 'Ноябрь',
      col2: '15 000.00',
    },
    {
      col1: 'Октябрь',
      col2: '20 000,00',
    },
    {
      col1: 'Сентябрь',
      col2: '2 000,00',
    },
    {
      col1: 'Август',
      col2: '7 000,00',
    },
    {
      col1: 'Июль',
      col2: '10 000,00',
    },
  ]);

  const data = useMemo(
    () => [
      {
        col1: 'Декабрь',
        col2: '10 000.00',
      },
      {
        col1: 'Ноябрь',
        col2: '15 000.00',
      },
      {
        col1: 'Октябрь',
        col2: '20 000,00',
      },
      {
        col1: 'Сентябрь',
        col2: '2 000,00',
      },
      {
        col1: 'Август',
        col2: '7 000,00',
      },
      {
        col1: 'Июль',
        col2: '10 000,00',
      },
    ],
    [],
  );

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

      // {
      //   Header: 'Месяц',
      //   accessor: 'col1',
      // },
      // {
      //   Header: 'Сумма',
      //   accessor: 'col2',
      // },
    ],
    [],
  );

  return (
    <Styles>
      <Table columns={columns} data={data} />
    </Styles>
  );
}
