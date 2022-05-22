import { gql, useQuery } from "@apollo/client";

interface CandleOptions {
  candleId: Number;
  pair: String;
  startTime: String;
  open: Number;
  high: Number;
  low: Number;
  close: Number;
  interval: String;
  volume: Number;
}

interface GetPairsData {
  getPair: CandleOptions[];
}

export enum PAIRS {
  BTC_USDT = "BTC_USDT",
  BTC_BNB = "BTC_BNB",
}

interface GetPairsVars {
  pair: PAIRS;
}

const GET_PAIRS = gql`
  query GetPair($pair: PAIRS!) {
    getPair(pair: $pair) {
      candleId
      pair
      startTime
      open
      high
      low
      close
      interval
      volume
    }
  }
`;

export const useGetPairs = (pair: PAIRS) =>
  useQuery<GetPairsData, GetPairsVars>(GET_PAIRS, {
    variables: {
      pair,
    },
  });
