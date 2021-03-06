import styled from "styled-components";

export const MarketContainer = styled.div`
  grid-area: trade;
  padding-top: 10px;
  background-color: #161a1e;
  border-left: 1px #252930 solid;

  @media (max-width: 767px) {
    grid-area: container;
  }
`;

export const InputHeader = styled.div`
  height: 24px;
  display: flex;
  align-items: center;
  background-color: #2b3139;
  border-radius: 5px;
  color: #5e6673;
  margin: 5px 10px 12px;

  & input {
    background-color: inherit;
    color: white;
    border: none;
    outline: none;
  }
`;

export const CurrencyHeader = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  color: #848e9c;
  margin-bottom: 7px;

  & p {
    font-size: 12.5px;
    &.active {
      color: #f0b911;
    }
    &:hover {
      color: #f0aa17;
      cursor: pointer;
    }
  }
`;

export const TableContainer = styled.table`
  display: block;
  border-bottom: 1px #252930 solid;

  & tbody {
    display: block;
    overflow: auto;
    height: 280px;
  }

  & thead {
    display: block;
  }
`;

export const ValueHeader = styled.tr`
  color: #848e9c;
  font-size: 12px;
  display: block;

  & th {
    text-align: right;
    padding: 0px 20px 5px 10px;
    display: inline-block;
    width: calc(100% / 3);
  }

  & th:first-child {
    text-align: left;
  }
`;

export const Item = styled.tr`
  padding: 1px 0px;
  color: #adb3bc;
  font-size: 12px;
  display: block;

  & td {
    text-align: right;
    padding: 3px 10px;
    display: inline-block;
    width: calc(100% / 3);
    span {
      color: white;
    }
  }

  & td:first-child {
    text-align: left;
    display: inline-flex;
  }

  & td.green {
    color: #0ecb81;
  }
  & td.red {
    color: #f6465d;
  }

  &:hover {
    background-color: #2b3139;
    cursor: pointer;
  }
`;

export const HeaderTrades = styled.div`
  display: flex;
  padding-left: 10px;
  & span {
    font-size: 14px;
    padding: 10px 1px;
    margin: 5px 25px 7px 0px;
    color: #b7bdc6;

    &.active {
      font-weight: 600;
      color: #f0b901;
    }

    &:hover {
      color: #f0aa17;
      cursor: pointer;
    }
  }
`;

export const MarketActivities = styled.div`
  & div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 15px;
  }
  & div span {
    font-weight: 600;
    color: white;
  }
`;

export const ItemActivities = styled.tr`
  font-size: 12px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #848e9c;
  border-bottom: 1px #252930 solid;
  padding: 3px 12px;

  & td {
    display: flex;
    flex-direction: column;
  }

  & td span {
    margin-bottom: 3px;
  }
`;
