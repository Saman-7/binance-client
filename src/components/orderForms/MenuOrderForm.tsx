import { useState } from "react";
import { ButtonContainer } from "../../style/MenuOrderFormStyled";
import OrderForm from "../OrderForm";
import { ORDERS } from "../OrderForm";

const MenuOrderForm = () => {
  const [isMenu, setIsMenu] = useState<boolean>(false);
  const [typeMenu, setTypeMenu] = useState<ORDERS>(ORDERS.BUY);

  const showMenu = (type: ORDERS) => {
    setIsMenu(true);
    setTypeMenu(type);
  };

  const closeMenu = () => {
    setIsMenu(false);
  };

  return (
    <>
      {!isMenu ? (
        <ButtonContainer>
          <div className="buy-menu" onClick={() => showMenu(ORDERS.BUY)}>
            Buy
          </div>
          <div className="sell-menu" onClick={() => showMenu(ORDERS.SELL)}>
            Sell
          </div>
        </ButtonContainer>
      ) : (
        <OrderForm defaultType={typeMenu} closeMenu={closeMenu} />
      )}
    </>
  );
};

export default MenuOrderForm;
