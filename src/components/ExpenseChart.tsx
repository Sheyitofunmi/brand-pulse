import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale,
  Tooltip,
} from "chart.js";

ChartJS.register(
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale,
  Tooltip
);

const ExpenseChart: React.FC = () => {
  // Chart data and options
  const data = {
    labels: ["SEP", "OCT", "NOV", "DEC", "JAN"],
    datasets: [
      {
        label: "Expenses",
        data: [40, 70, 98, 50, 80, 70],
        borderColor: "#4318FF",
        backgroundColor: "white",
        borderWidth: 2,
        fill: true,
        tension: 0.4,
      },
      {
        label: "Projections",
        data: [35, 65, 80, 45, 75, 65],
        borderColor: "#6AD2FF",
        backgroundColor: "white",
        borderWidth: 2,
        fill: true,
        tension: 0.4,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      tooltip: {
        enabled: true,
      },
    },
    scales: {
      x: {
        display: true,
        grid: {
          display: false,
        },
      },
      y: {
        display: false,
      },
    },
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md w-full ">
      <div className="flex justify-between items-center pb-4">
        <div className="text-[#A3AED0] bg-[#F4F7FE] flex px-2 py-1 rounded-xl text-center mb-2 gap-1">
          <img src="/calendar_today.svg" className="w-4 h-4" alt="" />
          <p className="text-[10px]">This month</p>
        </div>
        <div className=" cursor-pointer bg-[#F4F7FE] rounded-[50px] p-2">
          <img src="/bar_chart.svg" alt="" />
        </div>
      </div>
      <div className="flex justify-between items-center mb-4 pb-4">
        <div>
          <div className="text-2xl font-bold">$37.5K</div>
          <div className="text-green-500 text-sm">+2.45%</div>
          <div className="flex items-center mt-2 pb-4">
            <span className="text-green-500 w-3 h-3 rounded-full mr-2 bg-green-500" />
            <span className="text-[#05CD99] text-sm">On track</span>
          </div>
        </div>
      </div>
      {/* 📊 */}
      <div>
        <Line data={data} options={options} className="w-full" />
      </div>
    </div>
  );
};

export default ExpenseChart;
