import { useEffect, useState, FC } from "react";
import { PAIRS, useGetPairs } from "../api/useGetCandles";
import ApexCharts from "react-apexcharts";
import { ApexOptions } from "apexcharts";
import { apexOptions } from "../utils/ApexOptions";
import Loading from "./Loading";
import styled from "styled-components";
import ChangePair from "./ChangePair";

const ChartContainer = styled.div`
  grid-area: chart;

  @media (max-width: 767px) {
    grid-area: container;
  }
`;

const Chart: FC = () => {
  const [pair, setPair] = useState<PAIRS>(PAIRS.BTC_USDT);

  const { loading, error, data } = useGetPairs(pair);

  const [series, setSeries] = useState<ApexOptions["series"]>([]);

  useEffect(() => {
    if (data) {
      const arrayCandles = data.getPair.map((candle) => {
        const { startTime, open, high, low, close } = candle;
        return [Number(startTime), [open, high, low, close]] as [
          number,
          number[]
        ];
      });

      setSeries([{ type: "candlestick", data: arrayCandles }]);
    }
  }, [data]);

  if (loading) return <Loading />;
  if (error) console.log(error);
  return (
    <ChartContainer>
      <ChangePair pair={pair} setPair={setPair} />
      <ApexCharts series={series} options={apexOptions} type="candlestick" />
    </ChartContainer>
  );
};

export default Chart;
