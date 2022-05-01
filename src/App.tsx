import "./App.css";
import { FC, lazy, Suspense } from "react";
import Loading from "./components/Loading";
const Header = lazy(() => import("./components/Header"));
const DailyHistory = lazy(() => import("./components/useDailyHistory"));
const OrderList = lazy(() => import("./components/useOrderList"));
const Chart = lazy(() => import("./components/useChart"));
const Market = lazy(() => import("./components/MarketTrades"));
const Details = lazy(() => import("./components/Details"));
const Footer = lazy(() => import("./components/Footer"));

const App: FC = () => {
  //
  return (
    <div className="app">
      <Suspense fallback={<Loading />}>
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
