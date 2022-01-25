import { useMemo, useCallback, useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useTable, useBlockLayout } from 'react-table';
import { FixedSizeList } from 'react-window';
import scrollbarWidth from './scrollbarWidth';
// import toast from 'react-hot-toast';

import Styles from './styleTabl';
import getBalance from '../../redux/balance/balance-selectors';
import Icons from '../../img/svg/sprite.svg';
import CommonModal from '../Modal/CommonModal';

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

export default function TableCashflo({
  typeInfo,
  transactions,
  //   fetchDelete,
  deleteTranId,
}) {
  const [dataCash, setDatadCash] = useState([]);
  const [sign, setSign] = useState('-');
  const [isModalOpen, setModalOpen] = useState(false);
  const [idItem, setIdItem] = useState('');

  const balance = useSelector(getBalance);

  const toggleModal = e => {
    setModalOpen(!isModalOpen);
    const transactionId = e.currentTarget.id;
    setIdItem(transactionId);
  };

  useEffect(() => {
    if (typeInfo === 'расход') {
      setSign('-');
    } else {
      setSign('+');
    }
  }, [typeInfo]);

  const onClickDelete = e => {
    setModalOpen(!isModalOpen);
    const transactionId = idItem;
    if (balance - e.currentTarget.value < 0 && typeInfo === 'расход') {
      // toast.error('Не возможно удалить.Вы превышаете свой баланс!');
      return;
    } else {
      //  ТУТ ПОПРАВИТЬ
      // fetchDelete(transactionId);
      deleteTranId(transactionId);
    }
  };

  useEffect(() => {
    if (transactions !== []) {
      function dateFormat(date) {
        const toStringData = String(date.month);
        if (toStringData.length < 2) {
          return `0${toStringData}`;
        } else {
          return toStringData;
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
              <ButtonDelet click={toggleModal} idItams={_id} summ={costs} />
            ),
            transactionType: transactionType,
          };
        },
      );
      setDatadCash(dataCashFoTabl);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [transactions]);

  useEffect(() => {});

  const dataCashFoTablFiter = dataCash.filter(function (e) {
    return e.transactionType === typeInfo;
  });

  const data = useMemo(() => [...dataCashFoTablFiter], [dataCashFoTablFiter]);

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
      {isModalOpen && (
        <CommonModal
          modalText="Вы уверены? Удалить запись?"
          toggleModal={toggleModal}
          logOut={onClickDelete}
        />
      )}
    </Styles>
  );
}
