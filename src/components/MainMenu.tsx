import { FC } from "react";
import { useIsMobile } from "../utils/useIsMobile";
import { ReactComponent as CloseMenuLogo } from "../svg/closeMenu.svg";
import { ReactComponent as CryptoLogo } from "../svg/mainMenu/crypto.svg";
import { ReactComponent as MarketsLogo } from "../svg/mainMenu/markets.svg";
import { ReactComponent as TradeLogo } from "../svg/mainMenu/trade.svg";
import { ReactComponent as DerivativesLogo } from "../svg/mainMenu/derivatives.svg";
import { ReactComponent as EarnLogo } from "../svg/mainMenu/earn.svg";
import { ReactComponent as FinanceLogo } from "../svg/mainMenu/finance.svg";
import { ReactComponent as NFTLogo } from "../svg/mainMenu/nft.svg";
import { ReactComponent as GuideLogo } from "../svg/mainMenu/guide.svg";
import { ReactComponent as ProductsLogo } from "../svg/mainMenu/products.svg";
import { ReactComponent as DownloadsLogo } from "../svg/mainMenu/downloads.svg";
import { ReactComponent as EnglishLogo } from "../svg/mainMenu/english.svg";
import { ReactComponent as USDLogo } from "../svg/mainMenu/usd.svg";
import {
  CloseMenuContainer,
  MainMenuContainer,
  MenuItem,
  MenuLogin,
} from "../style/MainMenuStyled";

const MainMenu: FC<{ showMenu: Function }> = ({ showMenu }) => {
  const isMobile = useIsMobile();

  return isMobile ? (
    <MainMenuContainer>
      {/* Close Menu */}
      <CloseMenuContainer>
        <CloseMenuLogo
          style={{ width: "25px", cursor: "pointer" }}
          onClick={() => showMenu(false)}
        />
      </CloseMenuContainer>

      {/* Login */}
      <MenuLogin>
        <span>Log In</span>
        <span>Register</span>
      </MenuLogin>

      {/* Menu Item */}
      <MenuItem>
        <CryptoLogo />
        <span>Buy Crypto</span>
      </MenuItem>
      <MenuItem>
        <MarketsLogo />
        <span>Markets</span>
      </MenuItem>
      <MenuItem>
        <TradeLogo />
        <span>Trade</span>
      </MenuItem>
      <MenuItem>
        <DerivativesLogo />
        <span>Derivatives</span>
      </MenuItem>
      <MenuItem>
        <EarnLogo />
        <span>Earn</span>
      </MenuItem>
      <MenuItem>
        <FinanceLogo />
        <span>Finance</span>
      </MenuItem>
      <MenuItem>
        <NFTLogo />
        <span>NFT</span>
      </MenuItem>
      <MenuItem>
        <GuideLogo />
        <span>Guide</span>
      </MenuItem>
      <MenuItem>
        <ProductsLogo />
        <span>Products</span>
      </MenuItem>
      <MenuItem>
        <DownloadsLogo />
        <span>Downloads</span>
      </MenuItem>
      <MenuItem>
        <EnglishLogo />
        <span>English</span>
      </MenuItem>
      <MenuItem>
        <USDLogo />
        <span>USD</span>
      </MenuItem>
    </MainMenuContainer>
  ) : null;
};

export default MainMenu;
