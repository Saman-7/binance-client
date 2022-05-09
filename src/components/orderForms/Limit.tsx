import { FC } from "react";
import { ItemForm } from "../../style/OrderFormStyled";
import { ORDERS } from "../OrderForm";

const Limit: FC<{ type: ORDERS }> = ({ type }) => {
  return (
    <>
      {type === ORDERS.BUY ? (
        <>
          <ItemForm>
            <span>Price</span>
            <input type="number" defaultValue="39615.09" />
            <span>USDT</span>
          </ItemForm>
          <ItemForm>
            <span>Amount</span>
            <input type="number" />
            <span>BTC</span>
          </ItemForm>
        </>
      ) : null}

      {type === ORDERS.SELL ? (
        <>
          <ItemForm>
            <span>Price</span>
            <input type="number" defaultValue="39615.09" />
            <span>USDT</span>
          </ItemForm>

          <ItemForm>
            <span>Amount</span>
            <input type="number" />
            <span>BTC</span>
          </ItemForm>
        </>
      ) : null}
    </>
  );
};

export default Limit;
