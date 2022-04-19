import { ApexOptions } from "apexcharts";

export const apexOptions: ApexOptions = {
  title: {
    text: "BTC/USDT",
  },
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
    events: {
      dataPointMouseEnter: function (event, chartContext, config) {
        console.log("event", event);
        console.log("chartContext", chartContext);
        console.log("config", config);
      },
    },
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
