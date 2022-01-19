import styled from 'styled-components';

const Styles = styled.div`
  .table {
    /* display: none; */
    border-spacing: 0;
    /* width: 760px; */
    margin-right: 30px;
    border: solid 2px #f5f6fb;
    border-radius: 16px 16px 0 0;
    border-collapse: collapse;

    @media screen and (min-width: 768px) {
      width: 605px;
    }

    @media screen and (min-width: 1280px) {
      display: inline-block;
      border-spacing: 0;
      width: 760px;
      margin-right: 30px;
      border: solid 2px #f5f6fb;
      border-radius: 16px 16px 0 0;
      border-collapse: collapse;
    }

    .tablHead {
      background-color: var(--secondaryBackgroundColor);
      border-radius: 16px 16px 0 0;
    }

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
        @media screen and (min-width: 768px) {
          width: 84px;
        }
        @media screen and (min-width: 1280px) {
          width: 90px;
        }
      }
      :nth-child(2) {
        @media screen and (min-width: 768px) {
          width: 188px;
        }
        @media screen and (min-width: 1280px) {
          width: 300px;
        }
      }

      :nth-child(3) {
        text-align: center;
        @media screen and (min-width: 768px) {
          width: 144px;
        }
        @media screen and (min-width: 1280px) {
          width: 160px;
        }
      }
      :nth-child(4) {
        text-align: right;
        @media screen and (min-width: 768px) {
          width: 124px;
        }
        @media screen and (min-width: 1280px) {
          width: 130px;
        }
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
        /* width: 90px; */
        @media screen and (min-width: 768px) {
          width: 84px;
        }
        @media screen and (min-width: 1280px) {
          width: 90px;
        }
      }

      :nth-child(2) {
        /* width: 208px; */
        @media screen and (min-width: 768px) {
          width: 188px;
        }
        @media screen and (min-width: 1280px) {
          width: 300px;
        }
      }

      :nth-child(3) {
        text-align: center;
        @media screen and (min-width: 768px) {
          width: 144px;
        }
        @media screen and (min-width: 1280px) {
          width: 160px;
        }
      }

      :nth-child(4) {
        color: #e7192e;
        font-weight: 700;
        text-align: right;
        @media screen and (min-width: 768px) {
          width: 124px;
        }
        @media screen and (min-width: 1280px) {
          width: 130px;
        }
      }

      :nth-child(5) {
        @media screen and (min-width: 768px) {
          width: 70px;
        }
        @media screen and (min-width: 1280px) {
          width: 70px;
        }
      }
    }

    .tr {
      .td {
        :first-child {
          @media screen and (min-width: 768px) {
          }
          @media screen and (min-width: 1280px) {
          }
        }
      }
    }
  }
`;

export default Styles;
