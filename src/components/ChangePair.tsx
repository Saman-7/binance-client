import classNames from "classnames";
import { FC } from "react";
import styled from "styled-components";
import { PAIRS } from "../api/useGetCandles";

const ChangePairContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  & span {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px 0px;
    color: #848e9c;
    border: 1px #252930 solid;
    font-weight: 700;

    &:hover,
    &.active {
      cursor: pointer;
      color: #f0b901;
    }
  }
`;

const ChangePair: FC<{ pair: PAIRS; setPair: Function }> = ({
  pair,
  setPair,
}) => {
  return (
    <ChangePairContainer>
      <span
        className={classNames({ active: pair === PAIRS.BTC_USDT })}
        onClick={() => setPair({ pair: "BTC_USDT" })}
      >
        BTC/USDT
      </span>
      <span
        className={classNames({ active: pair === PAIRS.BTC_BNB })}
        onClick={() => setPair({ pair: "BTC_BNB" })}
      >
        BTC/BNB
      </span>
    </ChangePairContainer>
  );
};

export default ChangePair;
