import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  TooltipItem,
  ChartData,
  ChartOptions,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const options: ChartOptions<"bar"> = {
  responsive: true,
  plugins: {
    legend: {
      display: false,
    },
    title: {
      display: false,
    },
    tooltip: {
      backgroundColor: "#333",
      titleColor: "#fff",
      bodyColor: "#fff",
      borderColor: "#6C63FF",
      borderWidth: 1,
      callbacks: {
        title: () => "",
        label: function (context: TooltipItem<"bar">) {
          return (context.raw as number).toString();
        },
      },
      position: "nearest" as "nearest",
      yAlign: "top",
      caretPadding: 10,
    },
  },
  scales: {
    x: {
      grid: {
        display: false,
      },
    },
    y: {
      grid: {
        display: false,
      },
      ticks: {
        beginAtZero: true,
      } as any,
    },
  },
};

const labels = ["M", "T", "W", "T", "F", "S", "S"];

const data: ChartData<"bar"> = {
  labels,
  datasets: [
    {
      data: [200, 150, 300, 250, 200, 150, 250],
      backgroundColor: "#6C63FF",
      borderColor: "#6C63FF",
      borderWidth: 1,
      borderRadius: 10,
      barThickness: 20,
    },
  ],
};

const BarChart: React.FC = () => {
  return (
    <div className="p-4 bg-white shadow-lg rounded-xl w-full">
      <div className="flex justify-between items-center mb-2">
        <h2 className="text-lg font-semibold text-[#2B3674] pb-5">
          Campaign Visitors
        </h2>
        <span className="text-[#EE5D50] text-sm">-1.5%</span>
      </div>
      <h1 className="text-3xl font-bold text-[#2B3674] mb-2">784k</h1>
      <p className="text-[#A3AED0] text-xs mb-4 pb-2">
        Last Campaign Performance
      </p>
      <div className="h-48">
        <Bar options={options} data={data} />
      </div>
    </div>
  );
};

export default BarChart;
