import { useEffect, useState, FC } from "react";
import { useGetCandles } from "../api/useGetCandles";
import ApexCharts from "react-apexcharts";
import { ApexOptions } from "apexcharts";
import { apexOptions } from "../utils/ApexOptions";
import Loading from "./Loading";
import styled from "styled-components";

const ChartContainer = styled.div`
  grid-area: chart;

  @media (max-width: 767px) {
    grid-area: container;
  }
`;

const Chart: FC = () => {
  //
  const { loading, error, data } = useGetCandles();
  const [series, setSeries] = useState<ApexOptions["series"]>([]);

  useEffect(() => {
    if (data) {
      const arrayCandles = data.getCandles.map((candle) => {
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
  if (error) return <h1>Error :/</h1>;
  return (
    <ChartContainer>
      <ApexCharts series={series} options={apexOptions} type="candlestick" />
    </ChartContainer>
  );
};

export default Chart;
