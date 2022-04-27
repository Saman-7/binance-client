import { ReactComponent as DotMenu } from "../svg/dotMenu.svg";
import { ReactComponent as CircleInfo } from "../svg/circleInfo.svg";
import {
  OrderTypeForm,
  ItemHeader,
  ValueHeader,
  NameHeader,
  InputForm,
  ItemForm,
  RadioForm,
  ButtonLogin,
} from "../style/OrderTypeStyled";

const OrderType = () => {
  return (
    <OrderTypeForm>
      <ItemHeader>
        <div className="spot">Spot</div>
        <div className="margin">
          <span>Margin</span>
          <span>5x</span>
          <DotMenu
            style={{ width: "20px", color: "#848e9c", margin: "0px 15px" }}
          />
        </div>
      </ItemHeader>

      <ValueHeader>
        <span>Limit</span>
        <span>Market</span>
        <span>Stop-Limit</span>
        <CircleInfo style={{ width: "20px" }} />
      </ValueHeader>

      <InputForm>
        <NameHeader>
          <span>Avbl</span>
          <span>-USDT</span>
        </NameHeader>
        <NameHeader>
          <span>Avbl</span>
          <span>-BTC</span>
        </NameHeader>

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

        <RadioForm>
          <div className="line">
            <label>
              <input type="radio" name="usdt" readOnly checked />
              <div />
            </label>
            <label>
              <input type="radio" name="usdt" />
              <div />
            </label>
            <label>
              <input type="radio" name="usdt" />
              <div />
            </label>
            <label>
              <input type="radio" name="usdt" />
              <div />
            </label>
            <label>
              <input type="radio" name="usdt" />
              <div />
            </label>
          </div>
        </RadioForm>
        <RadioForm>
          <div className="line">
            <label>
              <input type="radio" name="btc" readOnly checked />
              <div />
            </label>
            <label>
              <input type="radio" name="btc" />
              <div />
            </label>
            <label>
              <input type="radio" name="btc" />
              <div />
            </label>
            <label>
              <input type="radio" name="btc" />
              <div />
            </label>
            <label>
              <input type="radio" name="btc" readOnly />
              <div />
            </label>
          </div>
        </RadioForm>

        <ButtonLogin>
          <span>Log In</span>
          or
          <span>Register Now</span>
        </ButtonLogin>
        <ButtonLogin>
          <span>Log In</span>
          or
          <span>Register Now</span>
        </ButtonLogin>
      </InputForm>
    </OrderTypeForm>
  );
};

export default OrderType;
