import { FC } from "react";
import { ItemForm } from "../../style/OrderFormStyled";
import { ORDERS } from "../OrderForm";

const StopLimit: FC<{ type: ORDERS }> = ({ type }) => {
  return (
    <>
      {type === ORDERS.BUY ? (
        <>
          <ItemForm>
            <span>Stop</span>
            <input type="number" />
            <span>USDT</span>
          </ItemForm>

          <ItemForm>
            <span>Limit</span>
            <input type="number" defaultValue="37990.86" />
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
            <span>Stop</span>
            <input type="number" />
            <span>USDT</span>
          </ItemForm>

          <ItemForm>
            <span>Limit</span>
            <input type="number" defaultValue="37990.86" />
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

export default StopLimit;
