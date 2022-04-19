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

const App = () => {
  const { loading, error, data } = useQuery(GET_CANDLES);

  if (loading) return <h1>Loading ...</h1>;
  if (error) return <h1>Error :/</h1>;
  return <div>{JSON.stringify(data)}</div>;
};

export default App;
