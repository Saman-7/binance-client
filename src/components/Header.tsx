import { FC } from "react";
import { ReactComponent as BinanceLogo } from "../svg/logo.svg";
import { ReactComponent as Menu } from "../svg/menu.svg";
import { ReactComponent as Question } from "../svg/question.svg";
import { ReactComponent as Setting } from "../svg/setting.svg";
import { HeaderContainer, BoxHeader } from "../style/HeaderStyled";
import { useIsDesktop } from "../utils/useIsDesktop";
import { ReactComponent as MenuMain } from "../svg/menuMain.svg";
import useMediaQuery from "../utils/useMedia";

const Header: FC = () => {
  const isDesktop = useIsDesktop();
  const nemuMedia = useMediaQuery("(max-width:1212px)");

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

      <BoxHeader className="box-set">
        {!nemuMedia ? (
          <>
            <span>Log in</span>
            <span className="register">Register</span>
            <span>Downloads</span>
            <span>English</span>
            <span>|</span>
            <span>USD</span>
          </>
        ) : (
          <>
            {!isDesktop ? (
              <>
                <span>Log in</span>
                <span className="register">Register</span>
              </>
            ) : null}
            <MenuMain style={{ width: "20px", marginRight: "15px" }} />
          </>
        )}

        <Question style={{ width: "25px", marginRight: "10px" }} />
        <Setting style={{ width: "25px", marginRight: "20px" }} />
      </BoxHeader>
    </HeaderContainer>
  );
};

export default Header;
