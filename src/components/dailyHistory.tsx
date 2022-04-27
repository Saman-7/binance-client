import { ReactComponent as Play } from "../svg/play.svg";
import { ReactComponent as Notebook } from "../svg/notebook.svg";
import {
  DailyHostoryContainer,
  SectionDaily,
} from "../style/DailyHistoryStyled";

const DailyHistory = () => {
  return (
    <DailyHostoryContainer>
      <SectionDaily className="left">
        <div style={{ borderRight: "1px #252930 solid" }}>
          <h1>BTC/USDT</h1>
          <div style={{ display: "flex", alignItems: "center" }}>
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
          <p className="red">737.26 +1.81%</p>
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
      </SectionDaily>

      <SectionDaily className="right">
        <div>
          <Play style={{ width: "1.2em", marginRight: "5px" }} />
          <p>Spot Tutorial</p>
        </div>
      </SectionDaily>
    </DailyHostoryContainer>
  );
};

export default DailyHistory;
