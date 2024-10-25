import * as plotly from "plotly.js-dist";
import { range, log2, muliply } from "mathjs";

const numAntennas = 4;
const SNR_dB = range(0, 30, 0.3).toArray(); // Signal-to-noise ratio in dB
const SNR = SNR_dB.map((dB) => Math.pow(10, dB / 10)); // Convert dB to linear scale

// Capacity calculation using the MIMO capacity formula
const capacity = SNR.map((snr) => numAntennas * log2(1 + snr));

// Plotting using Plotly
const trace = {
  x: SNR_dB,
  y: capacity,
  type: "scatter",
  mode: "lines",
  name: "MIMO Capacity",
  line: { color: "blue" },
};

const layout = {
  title: "Capacity of a MIMO Channel vs. SNR",
  xaxis: {
    title: "Signal-to-Noise Ratio (dB)",
    tickvals: range(0, 31, 5).toArray(),
  },
  yaxis: {
    title: "Channel Capacity (bps/Hz)",
    tickvals: range(0, Math.max(...capacity) * 1.1, 5).toArray(),
  },
  shapes: [
    {
      type: "line",
      x0: 0,
      x1: 30,
      y0: 0,
      y1: 0,
      line: { color: "black", width: 0.8, dash: "dash" },
    },
    {
      type: "line",
      x0: 0,
      x1: 0,
      y0: 0,
      y1: Math.max(...capacity) * 1.1,
      line: { color: "black", width: 0.8, dash: "dash" },
    },
  ],
};

Plotly.newPlot("plotDiv", [trace], layout);
