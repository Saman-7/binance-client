import styled from "styled-components";
import { ReactComponent as SearchLogo } from "../svg/search.svg";
import { ReactComponent as StarLogo } from "../svg/star.svg";
import { ReactComponent as LessThatSign } from "../svg/lessThatSign.svg";
import { randomNumber } from "../utils/randomNumber";

const MarketContainer = styled.div`
  grid-area: market;
  padding-top: 10px;
  background-color: #161a1e;
  border-left: 1px #252930 solid;
`;

const InputHeader = styled.div`
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

const CurrencyHeader = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  color: #848e9c;
  margin-bottom: 7px;

  & p {
    font-size: 12px;
    &.active {
      color: #f0b911;
    }
  }
`;

const TableContainer = styled.table`
  display: block;
  width: 100%;
  border-bottom: 1px #252930 solid;

  & tbody {
    display: block;
    overflow: auto;
    height: 280px;
  }
`;

const ValueHeader = styled.tr`
  color: #848e9c;
  font-size: 12px;

  & th {
    text-align: right;
    padding: 0px 30px 5px 10px;
    width: 100%;
  }

  & th:first-child {
    text-align: left;
  }
`;

const Item = styled.tr`
  padding: 1px 0px;
  color: #adb3bc;
  font-size: 13px;

  & td {
    text-align: right;
    padding: 3px 10px;
    width: 100%;
    span {
      color: white;
    }
  }

  & td:first-child {
    text-align: left;
    display: flex;
  }
`;

const TradesContainer = styled.div`
  display: flex;
  padding-left: 10px;
  & span {
    font-size: 14px;
    padding: 10px 1px;
    margin-right: 25px;
    color: #848e9c;

    &.active {
      font-weight: 600;
      color: #f0b901;
    }
  }
`;

const CurrencyRandomItem = () => {
  const pair = "BNB";
  const price = Math.random().toFixed(5);
  const change = `-${randomNumber(100, 999)}%`;
  return { pair, price, change };
};

const MarketTradesRandomItem = () => {
  const price = randomNumber(39000, 40000);
  const amount = Math.random().toFixed(5);
  const DATE = new Date();
  const time = `${DATE.getHours()}:${DATE.getMinutes()}:${DATE.getSeconds()}`;
  return { price, amount, time };
};

const currencyDataRandom = () => {
  return Array.from({ length: 30 }, () => CurrencyRandomItem());
};

const marketTradedDataRandom = () => {
  return Array.from({ length: 30 }, () => MarketTradesRandomItem());
};

const Market = () => {
  return (
    <MarketContainer>
      {/* Input */}
      <InputHeader>
        <SearchLogo style={{ width: "1.3em" }} />
        <input placeholder="Search" />
      </InputHeader>

      {/* Currency */}
      <CurrencyHeader>
        <StarLogo style={{ width: "15px" }} />
        <p>BUSD</p>
        <p className="active">USDT</p>
        <p>BNB</p>
        <p>BTC</p>
        <p>ALTS</p>
        <p>FIAT</p>
        <LessThatSign style={{ maxWidth: "20px" }} />
      </CurrencyHeader>

      {/* Table Currency */}
      <TableContainer>
        <thead>
          <ValueHeader>
            <th>Pair</th>
            <th>Price</th>
            <th>Change</th>
          </ValueHeader>
        </thead>
        <tbody>
          {currencyDataRandom().map(({ pair, price, change }, index) => (
            <Item key={index}>
              <td>
                <StarLogo style={{ width: "15px" }} />
                <span>{pair}</span>/USDT
              </td>
              <td>{price}</td>
              <td>{change}</td>
            </Item>
          ))}
        </tbody>
      </TableContainer>

      <TradesContainer>
        <span className="active">Market Trades</span>
        <span>My Trades</span>
      </TradesContainer>

      {/* Table Market Trades */}
      <TableContainer>
        <thead>
          <ValueHeader>
            <th>Price(USDT)</th>
            <th>Amount(BTC)</th>
            <th>Time</th>
          </ValueHeader>
        </thead>
        <tbody>
          {marketTradedDataRandom().map(({ price, amount, time }, index) => (
            <Item key={index}>
              <td>
                <StarLogo style={{ width: "15px" }} />
                <span>{price}</span>/USDT
              </td>
              <td>{amount}</td>
              <td>{time}</td>
            </Item>
          ))}
        </tbody>
      </TableContainer>
    </MarketContainer>
  );
};

export default Market;
