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
import { useIsDesktop } from "../utils/useIsDesktop";

export enum ORDERS {
  BUY,
  SELL,
}

enum FORMS {
  LIMIT,
  MARKET,
  STOP_LIMIT,
}

interface PropsFormType {
  orderType: ORDERS;
  listType: FORMS;
}

const FormType: FC<PropsFormType> = ({ orderType, listType }) => {
  return (
    <div>
      <NameHeader>
        <span>Avbl</span>
        <span>{orderType === ORDERS.BUY ? "-USDT" : "-BTC"}</span>
      </NameHeader>

      <InputForm>
        {listType === FORMS.LIMIT ? <Limit type={orderType} /> : null}
        {listType === FORMS.MARKET ? <Market type={orderType} /> : null}
        {listType === FORMS.STOP_LIMIT ? <StopLimit type={orderType} /> : null}
      </InputForm>

      <RadioForm>
        <div className="line">
          <label>
            <input type="radio" name={String(orderType)} readOnly checked />
            <div />
          </label>
          {Array.from({ length: 4 }, (_, index) => (
            <label key={index}>
              <input type="radio" name={String(orderType)} />
              <div />
            </label>
          ))}
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
  const [orderType, setOrderType] = useState<ORDERS>(ORDERS.BUY);
  const [listType, setlistType] = useState<FORMS>(FORMS.LIMIT);

  const isMedia = useIsDesktop();

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
            className={classNames("buy", { active: orderType === ORDERS.BUY })}
            onClick={() => setOrderType(ORDERS.BUY)}
          >
            BUY
          </div>
          <div
            className={classNames("sell", {
              active: orderType === ORDERS.SELL,
            })}
            onClick={() => setOrderType(ORDERS.SELL)}
          >
            SELL
          </div>
        </ButtonBuySell>
      ) : null}

      <ValueHeader>
        <span
          className={classNames({ active: listType === FORMS.LIMIT })}
          onClick={() => setlistType(FORMS.LIMIT)}
        >
          Limit
        </span>
        <span
          className={classNames({ active: listType === FORMS.MARKET })}
          onClick={() => setlistType(FORMS.MARKET)}
        >
          Market
        </span>
        <span
          className={classNames({ active: listType === FORMS.STOP_LIMIT })}
          onClick={() => setlistType(FORMS.STOP_LIMIT)}
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
            <FormType orderType={ORDERS.BUY} listType={listType} />
            <FormType orderType={ORDERS.SELL} listType={listType} />
          </>
        )}
      </InputFormContainer>
    </OrderTypeForm>
  );
};

export default OrderForm;
