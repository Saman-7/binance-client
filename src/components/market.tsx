import { ReactComponent as SearchLogo } from "../svg/search.svg";
import { ReactComponent as StarLogo } from "../svg/star.svg";
import { ReactComponent as LessThatSign } from "../svg/lessThatSign.svg";
import { randomNumber } from "../utils/RandomNumber";
import { ReactComponent as DoubleArrowTop } from "../svg/doubleArrowTop.svg";
import { ReactComponent as ArrowUp } from "../svg/arrowUp.svg";
import { randomColor } from "../utils/RandomColor";
import {
  MarketContainer,
  InputHeader,
  CurrencyHeader,
  TableContainer,
  ValueHeader,
  Item,
  TradesContainer,
  MarketActivities,
  ItemActivities,
} from "../style/MarketStyled";

const CurrencyRandomItem = () => {
  const pair = "BNB";
  const price = Math.random().toFixed(5);
  const change = `-${randomNumber(100, 999)}%`;
  const color = randomColor();
  return { pair, price, change, color };
};

const MarketTradesRandomItem = () => {
  const price = randomNumber(3900000, 4000000);
  const amount = Math.random().toFixed(5);
  const DATE = new Date();
  const time = `${DATE.getHours()}:${DATE.getMinutes()}:${DATE.getSeconds()}`;
  const color = randomColor();
  return { price, amount, time, color };
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
          {currencyDataRandom().map(({ pair, price, change, color }, index) => (
            <Item key={index}>
              <td>
                <StarLogo style={{ width: "15px" }} />
                <span>{pair}</span>/USDT
              </td>
              <td className={color}>{price}</td>
              <td className={color}>{change}</td>
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
          {marketTradedDataRandom().map(
            ({ price, amount, time, color }, index) => (
              <Item key={index}>
                <td className={color}>{price}</td>
                <td>{amount}</td>
                <td>{time}</td>
              </Item>
            )
          )}
        </tbody>
      </TableContainer>

      <MarketActivities>
        <div>
          <span>Market Activities</span>
          <DoubleArrowTop
            style={{
              width: "25px",
              transform: "rotate(180deg)",
              color: "#5E6673",
            }}
          />
        </div>

        <table style={{ width: "100%" }}>
          <tbody>
            <ItemActivities>
              <td>
                <span>ORN/USDT</span>
                <span>16:28:06</span>
              </td>
              <td>
                <span>-6.88%</span>
                <span>New 24h Low</span>
              </td>
              <td>
                <ArrowUp
                  style={{
                    width: "45px",
                    backgroundColor: "#15342D",
                    color: "#0ecb81",
                    borderRadius: "4px",
                  }}
                />
              </td>
            </ItemActivities>
            <ItemActivities>
              <td>
                <span>ORN/USDT</span>
                <span>16:28:06</span>
              </td>
              <td>
                <span>-6.88%</span>
                <span>New 24h Low</span>
              </td>
              <td>
                <ArrowUp
                  style={{
                    width: "45px",
                    backgroundColor: "#15342D",
                    color: "#0ecb81",
                    borderRadius: "4px",
                  }}
                />
              </td>
            </ItemActivities>
          </tbody>
        </table>
      </MarketActivities>
    </MarketContainer>
  );
};

export default Market;
