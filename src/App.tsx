import { VFC } from "react";
import Header from "./components/header";
import DailyHistory from "./components/dailyHistory";
import Chart from "./components/useChart";

const App: VFC = () => {
  //
  return (
    <>
      <Header />
      <DailyHistory />
      <Chart />
    </>
  );
};

export default App;
