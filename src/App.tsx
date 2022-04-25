import "./App.css";
import { VFC } from "react";
import Header from "./components/header";
import DailyHistory from "./components/dailyHistory";
import OrderList from "./components/orderList";
import Chart from "./components/useChart";
import Market from "./components/market";
import Details from "./components/details";

const App: VFC = () => {
  //
  return (
    <div className="app">
      <Header />
      <DailyHistory />
      <OrderList />
      <Chart />
      <Market />
      <Details />
    </div>
  );
};

export default App;
