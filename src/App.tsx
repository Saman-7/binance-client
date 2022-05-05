import "./App.css";
import { FC, lazy, Suspense } from "react";
import Loading from "./components/Loading";
const Header = lazy(() => import("./components/Header"));
const DailyHistory = lazy(() => import("./components/DailyHistory"));
const OrderList = lazy(() => import("./components/OrderList"));
const Chart = lazy(() => import("./components/Chart"));
const OrderForm = lazy(() => import("./components/OrderForm"));
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
        <OrderForm />
        <Market />
        <Details />
        <Footer />
      </Suspense>
    </div>
  );
};

export default App;
