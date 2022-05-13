import { FC, useState } from "react";
import { ReactComponent as BinanceLogo } from "../svg/logo.svg";
import { ReactComponent as Menu } from "../svg/menu.svg";
import { ReactComponent as Question } from "../svg/question.svg";
import { ReactComponent as Setting } from "../svg/setting.svg";
import { HeaderContainer, BoxHeader } from "../style/HeaderStyled";
import { useIsDesktop } from "../utils/useIsDesktop";
import { ReactComponent as MainMenuLogo } from "../svg/mainMenu.svg";
import useMediaQuery from "../utils/useMediaQuery";
import { useIsMobile } from "../utils/useIsMobile";
import MainMenu from "./MainMenu";

const Header: FC = () => {
  const [isMenuMain, setIsMenuMain] = useState<boolean>(false);

  const isDesktop = useIsDesktop();
  const menuMedia = useMediaQuery("(max-width:1212px)");
  const hiddenHeader = useMediaQuery("(max-width:950px)");
  const isMobile = useIsMobile();

  return (
    <HeaderContainer>
      <BoxHeader className="box-nav">
        <BinanceLogo style={{ width: "120px", margin: "0px 15px" }} />
        {!hiddenHeader && (
          <>
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
          </>
        )}
      </BoxHeader>

      <BoxHeader className="box-set">
        {!menuMedia ? (
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
            {!isDesktop && (
              <>
                <span>Log in</span>
                <span className="register">Register</span>
              </>
            )}
            {!isMenuMain ? (
              <MainMenuLogo
                style={{
                  width: "20px",
                  marginRight: "15px",
                  cursor: "pointer",
                }}
                onClick={() => setIsMenuMain(true)}
              />
            ) : (
              <MainMenu showMenu={setIsMenuMain} />
            )}
          </>
        )}

        {!isMobile && (
          <>
            <Question style={{ width: "25px", marginRight: "10px" }} />
            <Setting style={{ width: "25px", marginRight: "20px" }} />
          </>
        )}
      </BoxHeader>
    </HeaderContainer>
  );
};

export default Header;
