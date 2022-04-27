import styled from "styled-components";

export const DailyHostoryContainer = styled.div`
  grid-area: daily;
  padding: 10px 0px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #161a1e;
  color: white;
  border-bottom: 1px #252930 solid;

  & div div p {
    margin: 5px 0px;
    font-size: 12px;
  }
`;

export const SectionDaily = styled.div`
  &.left {
    display: flex;
    justify-content: space-around;
    align-items: center;

    & div {
      margin: 0px 15px;
      & .red {
        color: #f6465d;
      }
    }

    & h1 {
      margin: 0px 15px;
      font-size: 20px;
      font-weight: 500;
    }
    & div .bitcoin-price {
      text-decoration: underline;
      font-size: 13px;
      color: #848e9c;
    }
    & div .price {
      margin: 0px;
      font-size: 16px;
      font-weight: 500;
      color: #0ecb81;
    }
    & div .head {
      color: #848e9c;
    }
  }

  &.right div {
    display: flex;
    color: #848e9c;
  }
`;
