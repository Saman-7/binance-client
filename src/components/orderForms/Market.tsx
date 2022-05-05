import { FC } from "react";
import { ItemForm } from "../../style/OrderFormStyled";

const Market: FC<{ type: string }> = ({ type }) => {
  return (
    <>
      {type === "buy" ? (
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

      {type === "sell" ? (
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
