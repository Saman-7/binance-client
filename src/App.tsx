import "./App.css";
import { VFC } from "react";
import Header from "./components/header";
import DailyHistory from "./components/dailyHistory";
import Chart from "./components/useChart";

const App: VFC = () => {
  //
  return (
    <div className="app">
      <Header />
      <DailyHistory />
      <div style={{ gridArea: "price", backgroundColor: "yellow" }} />
      <Chart />
      <div style={{ gridArea: "market", backgroundColor: "orange" }} />
      <div style={{ gridArea: "order", backgroundColor: "red" }} />
    </div>
  );
};

export default App;
