import classNames from "classnames";
import { useState } from "react";
import { MainContainer } from "../style/MainStyled";
import { useIsMobile } from "../utils/useIsMobile";
import Chart from "./Chart";
import Market from "./MarketTrades";
import OrderForm from "./OrderForm";
import OrderList from "./OrderList";

enum TABS {
  CHART,
  ORDER_BOOK,
  TRADES,
}

const Main = () => {
  const [selectedTab, setSelectedTab] = useState<TABS>(TABS.CHART);

  const isMobile = useIsMobile();

  return !isMobile ? (
    <>
      <Chart />
      <OrderList />
      <Market />
      <OrderForm />
    </>
  ) : (
    <>
      <MainContainer>
        <span
          className={classNames({ active: selectedTab === TABS.CHART })}
          onClick={() => setSelectedTab(TABS.CHART)}
        >
          Chart
        </span>
        <span
          className={classNames({ active: selectedTab === TABS.ORDER_BOOK })}
          onClick={() => setSelectedTab(TABS.ORDER_BOOK)}
        >
          OrderBook
        </span>
        <span
          className={classNames({ active: selectedTab === TABS.TRADES })}
          onClick={() => setSelectedTab(TABS.TRADES)}
        >
          Trades
        </span>
      </MainContainer>

      {selectedTab === TABS.CHART && <Chart />}
      {selectedTab === TABS.ORDER_BOOK && <OrderList />}
      {selectedTab === TABS.TRADES && <Market />}
    </>
  );
};

export default Main;
