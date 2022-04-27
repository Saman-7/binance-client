import styled from "styled-components";
import { ReactComponent as SignalLogo } from "../svg/signal.svg";
import { ReactComponent as RangeSetting } from "../svg/rangeSetting.svg";
import { ReactComponent as CookieLogo } from "../svg/cookie.svg";
import { ReactComponent as DownloadLogo } from "../svg/download.svg";
import { ReactComponent as SupportLogo } from "../svg/support.svg";

const FooterContainer = styled.div`
  grid-area: footer;
  background-color: #161a1e;
  border-top: 1px #252930 solid;
  padding: 2px 10px;
  display: flex;
  justify-content: space-between;
  position: fixed;
  width: 100%;
  bottom: 0;
`;

const LeftFooter = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  font-size: 12px;
  color: #b7bdc6;

  & div {
    border-right: 1px #474d57 solid;
    display: flex;
    align-items: center;
  }

  & div span {
    margin: 5px;
    &.green {
      color: #0ecb81;
    }
    &.red {
      color: #f6465d;
    }
  }
`;

const RightFooter = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  font-size: 12px;
  color: #b7bdc6;

  & div {
    border-left: 1px #474d57 solid;
    display: flex;
    align-items: center;
    padding: 0px 10px;
  }

  & div span {
    margin-left: 7px;
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <LeftFooter>
        <div>
          <SignalLogo />
          <span style={{ margin: "0px 20px 0px 10px", color: "#0ecb81" }}>
            Stable connection
          </span>
        </div>
        <div>
          <RangeSetting
            style={{
              width: "15px",
              margin: "0px 10px 0px 10px",
              color: "#848E9C",
            }}
          />
          <span>BTCBUST</span>
          <span className="green">+3.74</span>
          <span>39271.76</span>
        </div>
        <div>
          <span>GMTBUSD</span>
          <span className="red">-1.26</span>
          <span>3.27048</span>
        </div>
        <div>
          <span>ETHBUSD</span>
          <span className="green">+0.95</span>
          <span>2976.93</span>
        </div>
        <div>
          <span>SOLBUSD</span>
          <span className="red">-0.14</span>
          <span>100.26</span>
        </div>
        <div>
          <span>SHIBBUSD</span>
          <span className="green">+1.80</span>
          <span>0.0000243</span>
        </div>
      </LeftFooter>

      <RightFooter>
        <div>
          <CookieLogo style={{ width: "20px" }} />
          <span>Cookie Preferences</span>
        </div>
        <div>
          <DownloadLogo style={{ width: "20px" }} />
          <span>Download</span>
        </div>
        <div>
          <SupportLogo style={{ width: "20px" }} />
          <span>Online Support</span>
        </div>
      </RightFooter>
    </FooterContainer>
  );
};

export default Footer;
