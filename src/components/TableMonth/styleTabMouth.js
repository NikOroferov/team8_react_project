import styled from 'styled-components';

const Styles = styled.div`
  .table {
    width: 230px;
    border-collapse: collapse;

    .tr {
      background-color: #f5f6fb;
      border-bottom-style: solid;
      border-bottom-color: #ffffff;

      /* :first-child {
        padding-left: 22px;
      } */

      :last-child {
        .td {
          border-radius: 0px 0 16px 0;
        }
      }

      .td {
        font-size: 12px;
        line-height: 1.17;
        font-weight: 400;
        width: 140px;

        color: #52555f;

        height: 40px;
        :first-child {
          text-transform: uppercase;
          padding-left: 22px;
        }
        :last-child {
          /* align-items: right; */
          /* text-content: right ; */
          text-align: right;
          padding-right: 20px;
        }
      }
    }
  }
`;

export default Styles;
