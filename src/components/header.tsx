import styled from "styled-components";
import { ReactComponent as BinanceLogo } from "../svg/logo.svg";
import { ReactComponent as Menu } from "../svg/menu.svg";
import { ReactComponent as Question } from "../svg/question.svg";
import { ReactComponent as Setting } from "../svg/setting.svg";

const HeaderContainer = styled.header`
  grid-area: header;
  height: 64px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: #161a1e;
  color: white;
  border-bottom: 1px #3d3d3d solid;
`;

const Header = () => {
  return (
    <HeaderContainer>
      <BinanceLogo style={{ maxWidth: "120px" }} />
      <Menu style={{ maxWidth: "20px" }} />

      <div>Buy Crypto</div>
      <div>Trade</div>
      <div>Markets</div>
      <div>Derivatives</div>
      <div>Earn</div>
      <div>Finance</div>
      <div>NFT</div>
      <div>Log in</div>
      <div>Register</div>
      <div>Downloads</div>
      <div>English</div>
      <div>USD</div>

      <Question style={{ maxWidth: "25px" }} />
      <Setting style={{ maxWidth: "25px" }} />
    </HeaderContainer>
  );
};

export default Header;
