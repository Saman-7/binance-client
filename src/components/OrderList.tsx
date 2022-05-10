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
  Lists,
} from "../style/OrderListStyled";
import { FC, useEffect, useState } from "react";
import { randomColor } from "../utils/RandomColor";
import { useIsDesktop } from "../utils/useIsDesktop";
import { useIsMobile } from "../utils/useIsMobile";

const randomItem = () => {
  const price = randomNumber(41000, 42000);
  const amount = Number(Math.random().toFixed(5));
  const total = randomNumber(1000000000, 5000000000);
  return { price, amount, total };
};

const sellDataRandom = () => {
  return Array.from({ length: 17 }, () => randomItem());
};
const buyDataRandom = () => {
  return Array.from({ length: 17 }, () => randomItem());
};

const OrderList: FC = () => {
  const [sellData, setSellData] = useState(sellDataRandom());
  const [buyData, setBuyData] = useState(buyDataRandom());
  const [price, setPrice] = useState({
    value: randomNumber(39000, 40000),
    color: randomColor(),
  });

  const isDesktop = useIsDesktop();
  const isMobile = useIsMobile();

  //Sell
  useEffect(() => {
    const id = setInterval(() => {
      const newArray = sellData.slice(1).concat(randomItem());
      setSellData(newArray);
    }, 2000);
    return () => clearInterval(id);
  }, [sellData]);

  //Buy
  useEffect(() => {
    const id = setInterval(() => {
      const newArray = buyData.slice(1).concat(randomItem());
      setBuyData(newArray);
    }, 2000);
    return () => clearInterval(id);
  }, [buyData]);

  //Price
  useEffect(() => {
    const id = setInterval(() => {
      const value = randomNumber(39000, 40000);
      const color = value > price.value ? "#0ecb81" : "#f6465d";
      setPrice({ value, color });
    }, 1000);
    return () => clearInterval(id);
  }, [price]);

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
          {!isMobile && <DotMenu className="dot-menu" />}
        </div>
      </HeaderLogo>

      <Lists>
        {/* List */}
        <TableContainer>
          <thead>
            <tr className="header-list">
              <th>Price(USDT)</th>
              <th>Amount(BTC)</th>
              {!isMobile && <th>Total</th>}
            </tr>
          </thead>
          <tbody>
            {isDesktop && !isMobile
              ? sellData.slice(0, 5).map(({ price, amount, total }, index) => (
                  <Item key={index} className="sell">
                    <td className="price">{price}</td>
                    <td>{amount}</td>
                    <td>{total}</td>
                  </Item>
                ))
              : sellData.map(({ price, amount, total }, index) => (
                  <Item key={index} className="sell">
                    <td className="price">{price}</td>
                    <td>{amount}</td>
                    {!isMobile && <td>{total}</td>}
                  </Item>
                ))}
          </tbody>
        </TableContainer>

        {/* Price */}
        {!isMobile && (
          <PriceContainer>
            <div>
              <p style={{ color: price.color }}>{price.value}.75</p>
              <p>${price.value}.75</p>
            </div>
            <p>More</p>
          </PriceContainer>
        )}

        <TableContainer>
          {isMobile && (
            <thead>
              <tr className="header-list">
                <th>Amount(BTC)</th>
                <th>Price(USDT)</th>
              </tr>
            </thead>
          )}
          <tbody>
            {isDesktop && !isMobile
              ? buyData.slice(0, 5).map(({ price, amount, total }, index) => (
                  <Item key={index} className="buy">
                    <td className="price">{price}</td>
                    <td>{amount}</td>
                    <td>{total}</td>
                  </Item>
                ))
              : buyData.map(({ price, amount, total }, index) => (
                  <Item key={index} className="buy">
                    {!isMobile ? (
                      <>
                        <td className="price">{price}</td>
                        <td>{amount}</td>
                        <td>{total}</td>
                      </>
                    ) : (
                      <>
                        <td>{amount}</td>
                        <td className="price">{price}</td>
                      </>
                    )}
                  </Item>
                ))}
          </tbody>
        </TableContainer>
      </Lists>
    </OrderListContainer>
  );
};

export default OrderList;
