import { FC } from "react";
import { ItemForm } from "../../style/OrderFormStyled";

const StopLimit: FC = () => {
  return (
    <>
      <ItemForm>
        <span>Stop</span>
        <input type="number" />
        <span>USDT</span>
      </ItemForm>

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
        <span>Limit</span>
        <input type="number" defaultValue="37990.86" />
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

export default StopLimit;