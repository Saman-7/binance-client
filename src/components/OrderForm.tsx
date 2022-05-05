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
  InputFormContainer,
  ButtonBuySell,
} from "../style/OrderFormStyled";
import Limit from "./orderForms/Limit";
import Market from "./orderForms/Market";
import StopLimit from "./orderForms/StopLimit";
import classNames from "classnames";
import useMediaQuery from "../utils/useMedia";

interface PropsFormType {
  orderType: string;
  listType: string;
}

const FormType: FC<PropsFormType> = ({ orderType, listType }) => {
  return (
    <div>
      <NameHeader>
        <span>Avbl</span>
        <span>{orderType === "buy" ? "-USDT" : "-BTC"}</span>
      </NameHeader>

      <InputForm>
        {listType === "limit" ? <Limit type={orderType} /> : null}
        {listType === "market" ? <Market type={orderType} /> : null}
        {listType === "stop-limit" ? <StopLimit type={orderType} /> : null}
      </InputForm>

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
    </div>
  );
};

const OrderForm: FC = () => {
  const [orderType, setOrderType] = useState("buy");
  const [listType, setlistType] = useState("limit");

  const isMedia = useMediaQuery("(max-width:1024px)");

  const changeHeader = (type: string) => {
    setlistType(type);
  };

  const changeOrder = (type: string) => {
    setOrderType(type);
  };
  console.log(orderType);

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

      {isMedia ? (
        <ButtonBuySell>
          <div
            className={classNames("buy", { active: orderType === "buy" })}
            onClick={() => changeOrder("buy")}
          >
            BUY
          </div>
          <div
            className={classNames("sell", { active: orderType === "sell" })}
            onClick={() => changeOrder("sell")}
          >
            SELL
          </div>
        </ButtonBuySell>
      ) : null}

      <ValueHeader>
        <span
          className={classNames({ active: listType === "limit" })}
          onClick={() => changeHeader("limit")}
        >
          Limit
        </span>
        <span
          className={classNames({ active: listType === "market" })}
          onClick={() => changeHeader("market")}
        >
          Market
        </span>
        <span
          className={classNames({ active: listType === "stop-limit" })}
          onClick={() => changeHeader("stop-limit")}
        >
          Stop-Limit
        </span>
        <CircleInfo style={{ width: "20px" }} />
      </ValueHeader>

      <InputFormContainer>
        {isMedia ? (
          <FormType orderType={orderType} listType={listType} />
        ) : (
          <>
            <FormType orderType="buy" listType={listType} />
            <FormType orderType="sell" listType={listType} />
          </>
        )}
      </InputFormContainer>
    </OrderTypeForm>
  );
};

export default OrderForm;
