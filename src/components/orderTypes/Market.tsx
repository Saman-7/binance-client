import { FC } from "react";
import { ItemForm } from "../../style/OrderTypeStyled";

const Market: FC = () => {
  return (
    <>
      <ItemForm className="disabled">
        <span>Price</span>
        <input type="text" value="Market" disabled />
        <span>USDT</span>
      </ItemForm>

      <ItemForm className="disabled">
        <span>Price</span>
        <input type="text" value="Market" disabled />
        <span>USDT</span>
      </ItemForm>

      <ItemForm>
        <span className="market">Total</span>
        <input type="number" />
        <span>USDT</span>
      </ItemForm>

      <ItemForm>
        <span className="market">Amount</span>
        <input type="number" />
        <span>BTC</span>
      </ItemForm>
    </>
  );
};

export default Market;
