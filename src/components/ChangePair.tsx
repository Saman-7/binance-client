import classNames from "classnames";
import { FC } from "react";
import styled from "styled-components";
import { PAIRS } from "../__generated__/globalTypes";

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

interface IChangePairProps {
  setPair: (pair: PAIRS) => void;
  pair: PAIRS;
}
const ChangePair: FC<IChangePairProps> = ({ pair, setPair }) => {
  return (
    <ChangePairContainer>
      <span
        className={classNames({ active: pair === PAIRS.BTC_USDT })}
        onClick={() => setPair(PAIRS.BTC_USDT)}
      >
        BTC/USDT
      </span>
      <span
        className={classNames({ active: pair === PAIRS.BTC_BNB })}
        onClick={() => setPair(PAIRS.BTC_BNB)}
      >
        BTC/BNB
      </span>
    </ChangePairContainer>
  );
};

export default ChangePair;
