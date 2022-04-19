import { gql, useQuery } from "@apollo/client";

const GET_CANDLES = gql`
  {
    getCandles {
      candleId
      pair
      startTime
      endTime
      open
      high
      low
      close
      interval
      volume
      isUpCandle
    }
  }
`;

interface CandleOptions {
  candleId: Number;
  pair: String;
  startTime: String;
  endTime: String;
  open: Number;
  high: Number;
  low: Number;
  close: Number;
  interval: String;
  volume: Number;
  isUpCandle: Boolean;
}

interface GetCandlesQueryType {
  getCandles: CandleOptions[];
}

export const useGetCandles = () => useQuery<GetCandlesQueryType>(GET_CANDLES);
