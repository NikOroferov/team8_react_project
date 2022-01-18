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

    .buttonDel {
      width: 32px;
      height: 32px;
      padding: 0;
      display: inline-block;
      border: none;
      background-color: #ffffff;
      border-radius: 16px;
      cursor: pointer;

      :hover {
        background-color: #f5f6fb;
        .iconButtonDel {
          border: solid 4px #f5f6fb;
          border-radius: 16px;
        }
      }
      .iconButtonDel {
        height: 2em;
        width: 2em;
        border: solid 4px #ffffff;
      }
    }

    .tr {
      height: 38px;
      align-items: center;
      border-bottom-style: solid;
      border-bottom-color: #f5f6fb;
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

      :first-child {
        padding-left: 20px;
      }
      :nth-child(3) {
        text-align: center;
      }
      :nth-child(4) {
        text-align: right;
      }
    }

    .th,
    .td {
      margin: 0;
      padding: 0.5rem;
    }

    .td {
      font-size: 12px;
      line-height: 1.17;
      font-weight: 400;
      color: #52555f;
      :first-child {
        padding-left: 20px;
      }
      :nth-child(1) {
        width: 84px;
      }

      :nth-child(2) {
        width: 208px;
      }

      :nth-child(3) {
        text-align: center;
      }

      :nth-child(4) {
        color: #e7192e;
        font-weight: 700;
        text-align: right;
      }
    }

    .tablHead {
      background-color: var(--secondaryBackgroundColor);
      border-radius: 16px 16px 0 0;
    }
  }
`;

export default Styles;
