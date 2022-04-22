import styled from "styled-components";
import { randomNumber } from "../utils/randomNumber";
import { ReactComponent as SellBuyLogo } from "../svg/sell-buyFormat.svg";
import { ReactComponent as BuyLogo } from "../svg/sellFormat.svg";
import { ReactComponent as SellLogo } from "../svg/buyFormat.svg";
import { ReactComponent as DotMenu } from "../svg/dotMenu.svg";

const OrderListContainer = styled.table`
  background-color: #161a1e;
  padding: 0px 20px;
  font-size: 12px;
  border-right: 1px #252930 solid;

  & .header-list {
    display: flex;
    justify-content: space-between;
    margin: 10px 0px;
    color: #848e9c;

    th:nth-child(2) {
      margin-right: 17px;
    }
  }
`;

const HeaderLogo = styled.div`
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
`;

const Item = styled.tr`
  display: flex;
  justify-content: space-between;
  padding: 1px 0px;
  color: #adb3bc;

  &.sell :first-child {
    color: #dc4156;
  }
  &.buy :first-child {
    color: #0fbe79;
  }
`;

const PriceContainer = styled.div`
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

const randomItem = () => {
  const price = randomNumber(41000, 42000);
  const amount = Math.random().toFixed(5);
  const total = randomNumber(100000, 500000);
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

      {/* List */}
      <tr className="header-list">
        <th>Price(USDT)</th>
        <th>Amount(BTC)</th>
        <th>Total</th>
      </tr>
      {sellDataRandom().map(({ price, amount, total }, index) => (
        <Item key={index} className="sell">
          <td>{price}</td>
          <td>{amount}</td>
          <td>{total}</td>
        </Item>
      ))}

      {/* Price */}
      <PriceContainer>
        <div>
          <p>40,476.85</p>
          <p>$40,456.34</p>
        </div>
        <p>More</p>
      </PriceContainer>

      {buyDataRandom().map(({ price, amount, total }, index) => (
        <Item key={index} className="buy">
          <td>{price}</td>
          <td>{amount}</td>
          <td>{total}</td>
        </Item>
      ))}
    </OrderListContainer>
  );
};

export default OrderList;
