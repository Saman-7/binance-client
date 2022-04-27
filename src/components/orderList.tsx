import { randomNumber } from "../utils/RandomNumber";
import { ReactComponent as SellBuyLogo } from "../svg/sell-buyFormat.svg";
import { ReactComponent as BuyLogo } from "../svg/sellFormat.svg";
import { ReactComponent as SellLogo } from "../svg/buyFormat.svg";
import { ReactComponent as DotMenu } from "../svg/dotMenu.svg";

import {
  OrderListContainer,
  HeaderLogo,
  TableContainer,
  Item,
  PriceContainer,
} from "../style/OrderListStyled";

const randomItem = () => {
  const price = randomNumber(41000, 42000);
  const amount = Math.random().toFixed(5);
  const total = randomNumber(1000000000, 5000000000);
  return { price, amount, total };
};

const sellDataRandom = () => {
  return Array.from({ length: 17 }, () => randomItem());
};
const buyDataRandom = () => {
  return Array.from({ length: 17 }, () => randomItem());
};

const OrderList = () => {
  return (
    <OrderListContainer>
      {/* Header Logo */}
      <HeaderLogo>
        <div className="logos">
          <SellBuyLogo />
          <SellLogo />
          <BuyLogo />
        </div>
        <div className="menu">
          <p>0.01</p>
          <DotMenu className="dot-menu" />
        </div>
      </HeaderLogo>

      <TableContainer>
        {/* List */}
        <thead>
          <tr className="header-list">
            <th>Price(USDT)</th>
            <th>Amount(BTC)</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          {sellDataRandom().map(({ price, amount, total }, index) => (
            <Item key={index} className="sell">
              <td>{price}</td>
              <td>{amount}</td>
              <td>{total}</td>
            </Item>
          ))}
        </tbody>
      </TableContainer>

      {/* Price */}
      <PriceContainer>
        <div>
          <p>40,476.85</p>
          <p>$40,456.34</p>
        </div>
        <p>More</p>
      </PriceContainer>

      <table style={{ width: "100%" }}>
        <tbody>
          {buyDataRandom().map(({ price, amount, total }, index) => (
            <Item key={index} className="buy">
              <td>{price}</td>
              <td>{amount}</td>
              <td>{total}</td>
            </Item>
          ))}
        </tbody>
      </table>
    </OrderListContainer>
  );
};

export default OrderList;
