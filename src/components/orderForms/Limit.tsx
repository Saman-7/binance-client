import { FC } from "react";
import { ItemForm } from "../../style/OrderFormStyled";

const Limit: FC<{ type: string }> = ({ type }) => {
  return (
    <>
      {type === "buy" ? (
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

      {type === "sell" ? (
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
