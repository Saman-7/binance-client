import styled from "styled-components";

export const OrderListContainer = styled.div`
  grid-area: orderList;
  background-color: #161a1e;
  padding: 0px 20px;
  font-size: 12px;
  border-right: 1px #252930 solid;

  @media (max-width: 767px) {
    border-bottom: 7px #14151a solid;
  }
`;

export const HeaderLogo = styled.div`
  display: flex;
  justify-content: space-between;
  height: 25px;
  color: #838d9b;
  margin: 10px 0px;

  & .logos {
    display: flex;
    width: 50%;
    justify-content: space-around;
  }

  & .menu {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 25%;
    p {
      color: white;
    }
    .dot-menu {
      height: 70%;
    }
  }

  @media (max-width: 767px) {
    & .logos {
      width: 70%;
    }
    & .menu {
      justify-content: center;
      & p {
        font-size: 14px;
      }
    }
  }
`;

export const Lists = styled.div`
  @media (max-width: 767px) {
    display: flex;
    flex-direction: row-reverse;
  }
`;

export const TableContainer = styled.table`
  width: 100%;

  & .header-list {
    color: #848e9c;
    & th {
      text-align: right;
      padding-bottom: 10px;
      &:first-child {
        text-align: left;
      }
      &:nth-child(3) {
        padding-left: 40px;
      }
    }
  }

  @media (max-width: 767px) {
    margin: 0px 5px;
  }
`;

export const Item = styled.tr`
  color: #adb3bc;

  & td {
    text-align: right;
    padding: 2px 5px;

    &:first-child {
      text-align: left;
    }
  }

  &.sell .price {
    color: #dc4156;
  }
  &.buy .price {
    color: #0fbe79;
  }
`;

export const PriceContainer = styled.div`
  color: #848e9c;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 10px 0px;

  & div {
    display: flex;
    align-items: center;
    p:nth-child(1) {
      font-size: 20px;
      color: white;
      margin-right: 10px;
    }
  }
`;
