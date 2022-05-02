import { FC, useState } from "react";
import { ReactComponent as DotMenu } from "../svg/dotMenu.svg";
import { ReactComponent as CircleInfo } from "../svg/circleInfo.svg";
import {
  OrderTypeForm,
  ItemHeader,
  ValueHeader,
  NameHeader,
  InputForm,
  RadioForm,
  ButtonLogin,
} from "../style/OrderFormStyled";
import Limit from "./orderForms/Limit";
import Market from "./orderForms/Market";
import StopLimit from "./orderForms/StopLimit";
import classNames from "classnames";

const OrderForm: FC = () => {
  const [typeList, setTypeList] = useState("limit");

  const changeHeader = (type: string) => {
    setTypeList(type);
  };

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
        <span
          className={classNames({ active: typeList === "limit" })}
          onClick={() => changeHeader("limit")}
        >
          Limit
        </span>
        <span
          className={classNames({ active: typeList === "market" })}
          onClick={() => changeHeader("market")}
        >
          Market
        </span>
        <span
          className={classNames({ active: typeList === "stop-limit" })}
          onClick={() => changeHeader("stop-limit")}
        >
          Stop-Limit
        </span>
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

        {typeList === "limit" ? <Limit /> : null}
        {typeList === "market" ? <Market /> : null}
        {typeList === "stop-limit" ? <StopLimit /> : null}

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
              <input type="radio" name="btc" />
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

export default OrderForm;
