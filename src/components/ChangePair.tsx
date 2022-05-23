import classNames from "classnames";
import { FC } from "react";
import styled from "styled-components";
import { ChangePairContainer } from "../style/ChangePairStyled";
import { PAIRS } from "../__generated__/globalTypes";

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
