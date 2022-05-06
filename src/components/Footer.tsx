import { FC } from "react";
import { ReactComponent as SignalLogo } from "../svg/signal.svg";
import { ReactComponent as RangeSetting } from "../svg/rangeSetting.svg";
import { ReactComponent as CookieLogo } from "../svg/cookie.svg";
import { ReactComponent as DownloadLogo } from "../svg/download.svg";
import { ReactComponent as SupportLogo } from "../svg/support.svg";
import {
  FooterContainer,
  LeftFooter,
  RightFooter,
} from "../style/FooterStyled";
import { useIsDesktop } from "../utils/useIsDesktop";

const Footer: FC = () => {
  const isDesktop = useIsDesktop();

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
        {!isDesktop ? (
          <>
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
          </>
        ) : null}
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
