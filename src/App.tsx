import "./App.css";
import { FC, lazy, Suspense } from "react";
import Loading from "./components/Loading";
const Header = lazy(() => import("./components/Header"));
const DailyHistory = lazy(() => import("./components/DailyHistory"));
const Details = lazy(() => import("./components/Details"));
const Footer = lazy(() => import("./components/Footer"));
const Main = lazy(() => import("./components/Main"));

const App: FC = () => {
  //
  return (
    <div className="app">
      <Suspense fallback={<Loading />}>
        <Header />
        <DailyHistory />
        <Main />
        <Details />
        <Footer />
      </Suspense>
    </div>
  );
};

export default App;
