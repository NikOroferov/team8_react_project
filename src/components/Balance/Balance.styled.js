import styled from '@emotion/styled';

export const BalanceContainer = styled.form`
  position: relative;
  text-align: center;
  /* background-color: var(--table-color); //временно */
  @media screen and (min-width: 768px) {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 369px;
    margin: 0 auto;
    padding-left: 35px;
  }
`;

export const BalanceTitle = styled.label`
  font-family: Roboto;
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 14px;
  color: var(--balance-text-color);
  margin-bottom: 6px;
  @media screen and (min-width: 768px) {
    margin-bottom: 0px;
  }
`;
export const BalanceAmount = styled.input`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 125px;
  height: 44px;
  background-color: transparent;
  border: 2px solid #ffffff;
  border-radius: 22px 0px 0px 22px;
  font-weight: bold;
  font-size: 12px;
  line-height: 14px;
  letter-spacing: 0.02em;
  text-transform: uppercase;
  color: var(--black-text-color);
  padding: 12px 15px;
  transition: all linear 0.3s;
  &:hover {
    border-color: var(--accent-color);
  }
  &:focus {
    border-color: var(--accent-color);
  }
  &::placeholder {
    color: var(--balance-text-color);
  }
  @media screen and (max-width: 767px) {
    border-right: none;
  }
  @media screen and (min-width: 768px) {
    border-radius: 16px;
    margin-right: 15px;
  }
`;
export const SubmitBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  border: 2px solid #ffffff;
  border-radius: 0px 22px 22px 0px;
  width: 125px;
  height: 44px;
  font-size: 12px;
  line-height: 14px;
  letter-spacing: 0.02em;
  text-transform: uppercase;
  color: var(--balance-text-color);
  transition: all linear 0.3s;
  &:hover {
    background-color: var(--accent-color);
    color: white;
  }
  &:focus {
    background-color: var(--accent-color);
    color: white;
  }

  @media screen and (min-width: 768px) {
    border-radius: 16px;
  }
`;

export const BalanceWrap = styled.div`
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (min-width: 768px) {
    margin: 0;
    margin-left: 21px;
    justify-content: space-between;
  }
`;

export const BalanceModal = styled.div`
z-index: 10;
position: absolute;
top: calc(100% + 18px);
width: 282px;
border-radius: 30px;
background: linear-gradient(117.84deg, #1d346a 2.84%, #031634 67.28%);
box-shadow: 0px 10px 60px rgba(170, 178, 197, 0.2);
color: white;
padding: 30px 25px 15px 25px;
&::before {
content: "";
position: absolute;
top: -24px;
left: 69px;
border: 12px solid transparent; 
border-bottom: 13px solid #162b58;

    @media screen and (min-width: 768px) {
      left: 47px;
    }
  }
  @media screen and (min-width: 768px) {
    margin-top: 7px;
    width: 292px;
  }
`;
export const BalanceText = styled.p`
  font-size: 14px;
  line-height: 20px;
  margin-bottom: 20px;
  text-align: left;
`;
export const BalanceNote = styled.p`
  font-size: 12px;
  line-height: 16px;
  text-align: left;
`;
