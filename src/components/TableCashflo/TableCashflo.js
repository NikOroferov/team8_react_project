import { useMemo } from 'react';
import { useTable } from 'react-table';
// import styled from 'styled-components';

import { AiFillDelete } from 'react-icons/ai';

import s from './TableCashflo.module.css';

export default function TableCashflo() {
  const data = useMemo(
    () => [
      {
        col1: '15.01.2022',
        col2: 'Купил что то',
        col3: 'Прочее',
        col4: '-10 000',
        col5: <AiFillDelete />,
      },

      {
        col1: '15.01.2022',
        col2: 'Купил опять',
        col3: 'Прочее',
        col4: '-20 000',
        col5: <AiFillDelete />,
      },
      {
        col1: '15.01.2022',
        col2: 'Потратил',
        col3: 'Прочее',
        col4: '-2 000',
        col5: <AiFillDelete />,
      },
      {
        col1: '15.01.2022',
        col2: 'Потратил',
        col3: 'Прочее',
        col4: '-2 000',
        col5: <AiFillDelete />,
      },
      {
        col1: '15.01.2022',
        col2: 'Потратил',
        col3: 'Прочее',
        col4: '-2 000',
        col5: <AiFillDelete />,
      },
      {
        col1: '15.01.2022',
        col2: 'Потратил',
        col3: 'Прочее',
        col4: '-2 000',
        col5: <AiFillDelete />,
      },
      {
        col1: '15.01.2022',
        col2: 'Потратил',
        col3: 'Прочее',
        col4: '-2 000',
        col5: <AiFillDelete />,
      },
      {
        col1: '15.01.2022',
        col2: 'Потратил',
        col3: 'Прочее',
        col4: '-2 000',
        col5: <AiFillDelete />,
      },
      {
        col1: '15.01.2022',
        col2: 'Потратил',
        col3: 'Прочее',
        col4: '-2 000',
        col5: <AiFillDelete />,
      },
      {
        col1: '15.01.2022',
        col2: 'Потратил',
        col3: 'Прочее',
        col4: '-2 000',
        col5: <AiFillDelete />,
      },
    ],
    [],
  );

  const columns = useMemo(
    () => [
      {
        Header: 'Дата',
        accessor: 'col1', // accessor is the "key" in the data
      },
      {
        Header: 'Описание',
        accessor: 'col2',
      },
      {
        Header: 'Категория',
        accessor: 'col3',
      },
      {
        Header: 'Сумма',
        accessor: 'col4',
      },
      {
        Header: '',
        accessor: 'col5',
      },
    ],
    [],
  );

  const tableInstance = useTable({ columns, data });

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    tableInstance;

  return (
    <div className={s.tabCashflow}>
      {/* <Styles> */}
      <table className={s.tableBox} {...getTableProps()}>
        <thead className={s.headTabl}>
          {
            // Loop over the header rows
            headerGroups.map(headerGroup => (
              // Apply the header row props
              <tr {...headerGroup.getHeaderGroupProps()}>
                {
                  // Loop over the headers in each row
                  headerGroup.headers.map(column => (
                    // Apply the header cell props
                    <th {...column.getHeaderProps()}>
                      {
                        // Render the header
                        column.render('Header')
                      }
                    </th>
                  ))
                }
              </tr>
            ))
          }
        </thead>
        {/* Apply the table body props */}
        <tbody {...getTableBodyProps()}>
          {
            // Loop over the table rows
            rows.map(row => {
              // Prepare the row for display
              prepareRow(row);
              return (
                // Apply the row props
                <tr className={s.lineBox} {...row.getRowProps()}>
                  {
                    // Loop over the rows cells
                    row.cells.map(cell => {
                      // Apply the cell props
                      return (
                        <td className={s.line} {...cell.getCellProps()}>
                          {
                            // Render the cell contents
                            cell.render('Cell')
                          }
                        </td>
                      );
                    })
                  }
                </tr>
              );
            })
          }
        </tbody>
      </table>
      {/* </Styles> */}
    </div>
  );
}
