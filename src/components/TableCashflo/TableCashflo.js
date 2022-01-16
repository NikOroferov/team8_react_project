import { useMemo, useCallback } from 'react';
import { useTable, useBlockLayout } from 'react-table';
import styled from 'styled-components';
import { FixedSizeList } from 'react-window';
import scrollbarWidth from './scrollbarWidth';

import { AiFillDelete } from 'react-icons/ai';

import s from './TableCashflo.module.css';

const Styles = styled.div`
  .table {
    display: inline-block;
    border-spacing: 0;
    width: 760px;
    margin-right: 30px;
    border: solid 2px #f5f6fb;
    border-radius: 16px 16px 0 0;
    border-collapse: collapse;

    .tr {
      :last-child {
        .td {
          border-bottom: 0;
          color: red;
        }
      }
    }

    .th,
    .td {
      margin: 0;
      padding: 0.5rem;
      border-bottom: 1px solid black;
      border-right: 1px solid black;

      :last-child {
        border-right: 1px solid black;
      }
    }
  }
`;

function Table({ columns, data }) {
  //   const defaultColumn = useMemo(
  //     () => ({
  //       width: 148,
  //     }),
  //     [],
  //   );

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
      // defaultColumn,
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
          className={s.trTabLine}
        >
          {row.cells.map(cell => {
            return (
              <div {...cell.getCellProps()} className={s.tdTabLine}>
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
      <div className={s.tablHead}>
        {headerGroups.map(headerGroup => (
          <div {...headerGroup.getHeaderGroupProps()} className={s.trHeadTabl}>
            {headerGroup.headers.map(column => (
              <div {...column.getHeaderProps()} className={s.thHeadTabl}>
                {column.render('Header')}
              </div>
            ))}
          </div>
        ))}
      </div>

      <div {...getTableBodyProps()} className={s.boxLine}>
        <FixedSizeList
          height={400}
          itemCount={rows.length}
          itemSize={35}
          width={totalColumnsWidth + scrollBarSize - 18}
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
        col5: <AiFillDelete width={32} height={32} />,
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
        accessor: 'col1',
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

  return (
    <Styles>
      <Table columns={columns} data={data} />
    </Styles>
  );
}
