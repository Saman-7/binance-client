import { useEffect, useState, VFC } from "react";
import { useGetCandles } from "../api/useGetCandles";
import ApexCharts from "react-apexcharts";
import { ApexOptions } from "apexcharts";
import { apexOptions } from "../utils/apexOptions";

const Chart: VFC = () => {
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

  if (loading) return <h1>Loading ...</h1>;
  if (error) return <h1>Error :/</h1>;
  return (
    <div>
      <ApexCharts series={series} options={apexOptions} type="candlestick" />
    </div>
  );
};

export default Chart;
