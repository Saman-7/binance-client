import { gql, useQuery } from "@apollo/client";
import { PAIRS } from "../__generated__/globalTypes";
import { GetPair, GetPairVariables } from "./__generated__/GetPair";

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
  useQuery<GetPair, GetPairVariables>(GET_PAIRS, {
    variables: {
      pair,
    },
  });
