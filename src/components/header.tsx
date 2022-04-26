import styled from "styled-components";
import { ReactComponent as BinanceLogo } from "../svg/logo.svg";
import { ReactComponent as Menu } from "../svg/menu.svg";
import { ReactComponent as Question } from "../svg/question.svg";
import { ReactComponent as Setting } from "../svg/setting.svg";

const HeaderContainer = styled.header`
  grid-area: header;
  height: 64px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #161a1e;
  color: white;
  border-bottom: 1px #252930 solid;
`;

const BoxHeader = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;

  &.box-nav {
    width: 50%;

    & div span {
      font-size: 12px;
      padding: 1px;
      background-color: #fcd535;
      color: black;
      border-radius: 4px;
      margin-left: 5px;
    }
  }

  &.box-set {
    width: 30%;
  }

  & .register {
    background-color: #fcd535;
    color: black;
    padding: 6px 12px;
    border-radius: 4px;
  }
`;

const Header = () => {
  return (
    <HeaderContainer>
      <BoxHeader className="box-nav">
        <BinanceLogo style={{ maxWidth: "120px" }} />
        <Menu style={{ maxWidth: "20px" }} />
        <div>
          Buy Crypto<span>EUR</span>
        </div>
        <div>Markets</div>
        <div>Trade</div>
        <div>Derivatives</div>
        <div>Earn</div>
        <div>Finance</div>
        <div>
          NFT<span>New</span>
        </div>
      </BoxHeader>
      <div style={{ width: "20%" }} />
      <BoxHeader className="box-set">
        <div>Log in</div>
        <div className="register">Register</div>
        <div>Downloads</div>
        <div>English</div>
        <span>|</span>
        <div>USD</div>
        <Question style={{ maxWidth: "25px" }} />
        <Setting style={{ maxWidth: "25px" }} />
      </BoxHeader>
    </HeaderContainer>
  );
};

export default Header;
