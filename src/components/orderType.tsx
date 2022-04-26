import styled from "styled-components";
import { ReactComponent as DotMenu } from "../svg/dotMenu.svg";
import { ReactComponent as CircleInfo } from "../svg/circleInfo.svg";

const OrderTypeForm = styled.form`
  background-color: #1e2026;
`;

const ItemHeader = styled.div`
  height: 48px;
  display: flex;
  justify-content: space-between;
  background-color: #161a1e;
  border-bottom: 1px #252930 solid;

  & div.spot {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0px 40px;
    height: 48px;
    font-weight: 700;
    background-color: #1e2026;
    color: white;
    border-top: 3px #f0b90b solid;
    border-right: 1px #252930 solid;
  }

  & div.margin {
    display: flex;
    justify-content: center;
    align-items: center;

    span:nth-child(1) {
      font-size: 14px;
      color: #848e9c;
      text-decoration: underline;
    }

    span:nth-child(2) {
      padding: 0px 4px;
      border-radius: 2px;
      font-size: 12px;
      margin-left: 5px;
      color: #f0b90b;
      background-color: #3c2e10;
    }
  }
`;

const ValueHeader = styled.div`
  display: flex;
  justify-content: start;
  justify-items: center;
  font-size: 14px;
  font-weight: 600;
  padding: 0px 10px;
  color: #848e9c;
  margin-top: 10px;

  & span {
    margin-right: 16px;
    &:first-child {
      color: #f0b90b;
    }
  }
`;

const NameHeader = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 12px;
  font-weight: 600;
  color: #eaece3;

  & span {
    padding-right: 15px;
    &:first-child {
      font-weight: 500;
      color: #848e9c;
    }
  }
`;

const InputForm = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-row-gap: 13px;
  grid-column-gap: 30px;
  padding: 15px;
`;

const ItemForm = styled.div`
  background-color: yellow; //1E2026
  height: 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #eaece3;
  background-color: #2a2d35;
  border-radius: 4px;

  &:focus-within,
  &:hover {
    border: 1px yellow solid;
  }

  & input {
    width: 100%;
    height: 100%;
    border: none;
    outline: none;
    background: #2a2d35;
    color: white;
    text-align: right;
    &::-webkit-inner-spin-button,
    &::-webkit-outer-spin-button {
      -webkit-appearance: none;
    }
    &[type="number"] {
      -moz-appearance: textfield;
    }
  }

  & span {
    padding: 10px;

    &:first-child {
      color: #7e8696;
      font-size: 14px;
    }
  }
`;

const RadioForm = styled.div`
  background-color: #1e2026;
  width: 100%;
  margin: auto;

  & .line {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 5px;
    background-color: #474d57;
    margin: 10px 0px;
  }

  & div label {
    display: flex;
  }

  & div label input {
    appearance: none;
    -webkit-appearance: none;
  }

  & div label div {
    box-sizing: content-box;
    width: 7px;
    height: 7px;
    transform: rotate(45deg);
    background-color: #1e2329;
    border: 3px #474d57 solid;
  }

  & div label input:checked + div {
    width: 8px;
    height: 8px;
    border: 4px #b7bdc6 solid;
    border-radius: 3px;
  }
`;

const ButtonLogin = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #2b3139;
  border-radius: 5px;
  height: 40px;
  color: white;

  & span {
    color: #f0b90b;
    margin: 0px 5px;
    font-size: 14px;
  }
`;

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
