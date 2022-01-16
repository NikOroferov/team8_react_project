import { useMemo, useCallback } from 'react';
import { useTable, useBlockLayout } from 'react-table';
// import styled from 'styled-components';
import { FixedSizeList } from 'react-window';
import scrollbarWidth from './scrollbarWidth';

import { AiFillDelete } from 'react-icons/ai';

import s from './TableCashflo.module.css';

// const Styles = styled.div`
//   /* padding: 1rem; */

//   .table {
//     display: inline-block;
//     border-spacing: 0;
//     /* border: 1px solid black; */

//     .tr {
//       :last-child {
//         .td {
//           border-bottom: 0;
//         }
//       }
//     }

//     .th,
//     tableBox .td {
//       margin: 0;
//       padding: 0.5rem;
//       border-bottom: 1px solid black;
//       border-right: 1px solid black;

//       :last-child {
//         border-right: 1px solid black;
//       }
//     }
//   }
// `;

function Table({ columns, data }) {
  const defaultColumn = useMemo(
    () => ({
      width: 150,
    }),
    [],
  );

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
      defaultColumn,
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
      <div>
        {headerGroups.map(headerGroup => (
          <div {...headerGroup.getHeaderGroupProps()} className="tr">
            {headerGroup.headers.map(column => (
              <div {...column.getHeaderProps()} className={s.thHeadTabl}>
                {column.render('Header')}
              </div>
            ))}
          </div>
        ))}
      </div>

      <div {...getTableBodyProps()}>
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

  //   const defaultColumn = useMemo(
  //     () => ({
  //       width: 100,
  //     }),
  //     [],
  //   );

  //   const tableInstance = useTable({ columns, data, defaultColumn });

  //   const scrollBarSize = useMemo(() => scrollbarWidth(), []);

  //   const {
  //     getTableProps,
  //     getTableBodyProps,
  //     headerGroups,
  //     rows,
  //     prepareRow,
  //     totalColumnsWidth,
  //   } = tableInstance;

  //   const RenderRow = useCallback(
  //     ({ index, style }) => {
  //       const row = rows[index];
  //       prepareRow(row);
  //       return (
  //         <div
  //           {...row.getRowProps({
  //             style,
  //           })}
  //           className="tr"
  //         >
  //           {row.cells.map(cell => {
  //             return (
  //               <div {...cell.getCellProps()} className="td">
  //                 {cell.render('Cell')}
  //               </div>
  //             );
  //           })}
  //         </div>
  //       );
  //     },
  //     [prepareRow, rows],
  //   );

  return (
    //   <Styles>

    <Table columns={columns} data={data} />
    // {
    /* <div {...getTableProps()} className="table">
        <div>
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

        <div {...getTableBodyProps()}>
          <FixedSizeList
            height={400}
            itemCount={rows.length}
            itemSize={35}
            width={totalColumnsWidth + scrollBarSize}
          >
            {RenderRow}
          </FixedSizeList>
        </div>
      </div> */
    // }
    /* </Styles> */
  );

  //   return (
  //     <div className={s.tabCashflow}>
  //       <Styles>
  //         <FixedSizeList
  //           height={300}
  //           itemCount={rows.length}
  //           itemSize={35}
  //           width={totalColumnsWidth + scrollBarSize}
  //         >
  //           {RenderRow}
  //         </FixedSizeList>
  //         <table className={s.tableBox} {...getTableProps()}>
  //           <thead className={s.headTabl}>
  //             {headerGroups.map(headerGroup => (
  //               <tr {...headerGroup.getHeaderGroupProps()}>
  //                 {headerGroup.headers.map(column => (
  //                   <th {...column.getHeaderProps()}>
  //                     {
  //                       // Render the header
  //                       column.render('Header')
  //                     }
  //                   </th>
  //                 ))}
  //               </tr>
  //             ))}
  //           </thead>

  //           <tbody {...getTableBodyProps()}>
  //             {rows.map(row => {
  //               prepareRow(row);
  //               return (
  //                 <tr className={s.lineBox} {...row.getRowProps()}>
  //                   {row.cells.map(cell => {
  //                     return (
  //                       <td className={s.line} {...cell.getCellProps()}>
  //                         {cell.render('Cell')}
  //                       </td>
  //                     );
  //                   })}
  //                 </tr>
  //               );
  //             })}
  //           </tbody>
  //         </table>
  //       </Styles>
  //     </div>
  //   );
}
