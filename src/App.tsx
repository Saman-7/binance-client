import "./App.css";
import { Suspense, VFC } from "react";
import Header from "./components/Header";
import DailyHistory from "./components/DailyHistory";
import OrderList from "./components/useOrderList";
import Chart from "./components/useChart";
import Market from "./components/Market";
import Details from "./components/Details";
import Footer from "./components/Footer";

const App: VFC = () => {
  //
  return (
    <div className="app">
      <Suspense fallback={<h1>Loading ...</h1>}>
        <Header />
        <DailyHistory />
        <OrderList />
        <Chart />
        <Market />
        <Details />
        <Footer />
      </Suspense>
    </div>
  );
};

export default App;
