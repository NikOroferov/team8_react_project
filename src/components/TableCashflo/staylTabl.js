import styled from 'styled-components';

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
      height: 38px;
      align-items: center;
      :last-child {
        .td {
          border-bottom: 0;
        }
      }
    }

    .th {
      font-size: 12px;
      line-height: 1.17;
      font-weight: 700;
      text-align: left;
      color: #000000;
      text-transform: uppercase;
    }

    .th,
    .td {
      margin: 0;
      padding: 0.5rem;

      /* border-bottom: 1px solid black; */
      /* border-right: 1px solid black; */

      :last-child {
        /* border-right: 1px solid black; */
      }
    }

    .td {
      font-size: 12px;
      line-height: 1.17;
      font-weight: 400;
      color: #52555f;
      :last-child {
        width: 40px;
        height: 40px;
        :hover {
          color: tomato;
          cursor: pointer;
        }
      }
      :nth-child(4) {
        color: #e7192e;
        font-weight: 700;
      }
    }

    .tablHead {
      background-color: var(--secondaryBackgroundColor);
      border-radius: 16px 16px 0 0;
      padding-left: 20px;
    }

    .boxLine {
      padding-left: 20px;
    }
  }
`;

export default Styles;
