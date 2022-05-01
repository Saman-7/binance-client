import { FC } from "react";
import { ItemForm } from "../../style/OrderTypeStyled";

const Limit: FC = () => {
  return (
    <>
      <ItemForm>
        <span>Price</span>
        <input type="number" defaultValue="39615.09" />
        <span>USDT</span>
      </ItemForm>

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

      <ItemForm>
        <span>Amount</span>
        <input type="number" />
        <span>BTC</span>
      </ItemForm>
    </>
  );
};

export default Limit;
