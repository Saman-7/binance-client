import { ReactComponent as BinanceLogo } from "../svg/logo.svg";
import { ReactComponent as Menu } from "../svg/menu.svg";
import { ReactComponent as Question } from "../svg/question.svg";
import { ReactComponent as Setting } from "../svg/setting.svg";
import { HeaderContainer, BoxHeader } from "../style/HeaderStyled";

const Header = () => {
  return (
    <HeaderContainer>
      <BoxHeader className="box-nav">
        <BinanceLogo style={{ width: "120px", margin: "0px 15px" }} />
        <Menu style={{ width: "20px", margin: "0px 10px" }} />
        <span>
          Buy Crypto<span>EUR</span>
        </span>
        <span>Markets</span>
        <span>Trade</span>
        <span>Derivatives</span>
        <span>Earn</span>
        <span>Finance</span>
        <span>
          NFT<span>New</span>
        </span>
      </BoxHeader>
      {/* <div style={{ width: "20%" }} /> */}

      <BoxHeader className="box-set">
        <span>Log in</span>
        <span className="register">Register</span>
        <span>Downloads</span>
        <span>English</span>
        <span>|</span>
        <span>USD</span>
        <Question style={{ width: "25px", margin: "0px 3px" }} />
        <Setting style={{ width: "25px", margin: "0px 3px" }} />
      </BoxHeader>
    </HeaderContainer>
  );
};

export default Header;
