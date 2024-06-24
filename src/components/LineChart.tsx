import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ChartData,
  ChartOptions,
  TooltipItem,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const LineChart: React.FC = () => {
  const data: ChartData<"line"> = {
    labels: [
      "Sep",
      "Oct",
      "Nov",
      "Dec",
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
    ],
    datasets: [
      {
        label: "Visitors",
        data: [200, 250, 300, 200, 230, 290, 350, 310, 320, 280, 270, 260],
        borderColor: "#6AD2FF",
        backgroundColor: "white",
        fill: true,
        tension: 0.4,
        pointRadius: 5,
      },
      {
        label: "Interactions",
        data: [180, 220, 280, 210, 240, 270, 330, 290, 310, 260, 250, 240],
        borderColor: "#4318FF",
        backgroundColor: "#4318FF",
        fill: true,
        tension: 0.4,
        pointRadius: 5,
      },
    ],
  };

  const options: ChartOptions<"line"> = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        callbacks: {
          title: () => "",
          label: function (context: TooltipItem<"line">) {
            return context.raw ? context.raw.toString() : "";
          },
        },
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
        ticks: {
          color: "#9CA3AF",
        },
      },
      y: {
        grid: {
          color: "#E5E7EB",
        },
        ticks: {
          color: "#9CA3AF",
        },
      },
    },
  };

  return (
    <div className="p-4 bg-white rounded-2xl shadow-lg">
      <div className="flex justify-between items-center ">
        <h2 className="text-lg font-semibold text-[#2B3674] mb-3">
          Campaign Visitors
        </h2>
        <img
          src="/bar_chart.svg"
          alt=""
          className="bg-[#F4F7FE] rounded-[50px] p-3"
        />
      </div>
      <div className="text-2xl text-[#2B3674] mb-4">$560.93</div>
      <div className="text-green-500 mb-4">+2.5%</div>
      <Line data={data} options={options} />
    </div>
  );
};

export default LineChart;
