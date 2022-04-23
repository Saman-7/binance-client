import "./App.css";
import { VFC } from "react";
import Header from "./components/header";
import DailyHistory from "./components/dailyHistory";
import OrderList from "./components/orderList";
import Chart from "./components/useChart";
import Market from "./components/market";

const App: VFC = () => {
  //
  return (
    <div className="app">
      <Header />
      <DailyHistory />
      <OrderList />
      <Chart />
      <Market />
      <div style={{ gridArea: "order", backgroundColor: "red" }} />
    </div>
  );
};

export default App;
