import { ApexOptions } from "apexcharts";

export const apexOptions: ApexOptions = {
  title: {},
  xaxis: {
    type: "datetime",
  },
  yaxis: {
    tooltip: {
      enabled: true,
    },
  },
  chart: {
    animations: {
      enabled: false,
    },
    zoom: {
      type: "xy",
    },
    background: "#161A1E",
  },
  plotOptions: {
    candlestick: {
      colors: {
        upward: "#0ECB81",
        downward: "#F6465D",
      },
    },
  },
  theme: {
    mode: "dark",
  },
  grid: {
    borderColor: "#ffffff20",
    xaxis: {
      lines: {
        show: true,
      },
    },
    yaxis: {
      lines: {
        show: true,
      },
    },
  },
};
