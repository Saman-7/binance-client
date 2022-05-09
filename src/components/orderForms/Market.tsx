import { FC } from "react";
import { ItemForm } from "../../style/OrderFormStyled";
import { ORDERS } from "../OrderForm";

const Market: FC<{ type: ORDERS }> = ({ type }) => {
  return (
    <>
      {type === ORDERS.BUY ? (
        <>
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
        </>
      ) : null}

      {type === ORDERS.SELL ? (
        <>
          <ItemForm className="disabled">
            <span>Price</span>
            <input type="text" value="Market" disabled />
            <span>USDT</span>
          </ItemForm>

          <ItemForm>
            <span className="market">Amount</span>
            <input type="number" />
            <span>BTC</span>
          </ItemForm>
        </>
      ) : null}
    </>
  );
};

export default Market;
