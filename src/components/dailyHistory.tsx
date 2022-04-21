import styled from "styled-components";
import { ReactComponent as Search } from "../svg/search.svg";
import { ReactComponent as Play } from "../svg/play.svg";
import { ReactComponent as Notebook } from "../svg/notebook.svg";

const DailyHostoryContainer = styled.div`
  grid-area: daily;
  height: 50px;
  padding: 10px 0px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: #161a1e;
  color: white;

  & h1 {
    margin: 0px;
    font-size: 20px;
    font-weight: 500;
  }

  & div .bitcoin-price {
    text-decoration: underline;
    font-size: 13px;
    color: #848e9c;
  }

  & div .price {
    margin: 0px;
    font-size: 18px;
    font-weight: 500;
  }

  & div p {
    margin: 5px 0px;
    font-size: 14px;
  }

  & div .head {
    color: #848e9c;
  }
`;

const DailyHistory = () => {
  return (
    <DailyHostoryContainer>
      <div>
        <h1>BTC/USDT</h1>
        <div style={{ display: "inline-flex", alignItems: "center" }}>
          <Notebook style={{ width: "1.2em", color: "#848e9c" }} />
          <p className="bitcoin-price">Bitcoin Price</p>
        </div>
      </div>
      <div>
        <p className="price">41,440.96</p>
        <p>$41,440.96</p>
      </div>
      <div>
        <p className="head">24h Change</p>
        <p>737.26 +1.81%</p>
      </div>
      <div>
        <p className="head">24h High</p>
        <p>41,760.00</p>
      </div>
      <div>
        <p className="head">24h Low</p>
        <p>40,571.00</p>
      </div>
      <div>
        <p className="head">24h Volume(BTC)</p>
        <p>34,941.65</p>
      </div>
      <div>
        <p className="head">24h Volume(USDT)</p>
        <p>1,442,216,580.47</p>
      </div>
      <div style={{ display: "inline-flex" }}>
        <Play style={{ width: "1.2em", marginRight: "5px" }} />
        <p>Spot Tutorial</p>
      </div>
      <div
        style={{
          height: "24px",
          display: "inline-flex",
          alignItems: "center",
          backgroundColor: "#2B3139",
          borderRadius: "5px",
        }}
      >
        <Search style={{ width: "1.3em" }} />
        <input
          style={{
            backgroundColor: "inherit",
            color: "white",
            border: "none",
            outline: "none",
          }}
          placeholder="Search"
        />
      </div>
    </DailyHostoryContainer>
  );
};

export default DailyHistory;
