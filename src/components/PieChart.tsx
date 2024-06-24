import React from "react";
import { Pie } from "react-chartjs-2";
import "chart.js/auto";

const PieChart: React.FC = () => {
  const pieData = {
    labels: ["Your files", "System"],
    datasets: [
      {
        data: [63, 25, 12],
        backgroundColor: ["#4A4AFF", "#70A1FF", "#E0E7FF"],
      },
    ],
  };

  return (
    <div className="w-full  p-4 bg-white rounded-lg shadow-md">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold">Your Pie Chart</h2>
        <p className="text-gray-400">Monthly</p>
      </div>
      <Pie data={pieData} />
      <div className="flex justify-center mt-4">
        <div className="flex items-center mr-4">
          <div className="w-3 h-3 bg-blue-700 mr-2"></div>
          <span>Your files 63%</span>
        </div>
        <div className="flex items-center">
          <div className="w-3 h-3 bg-blue-300 mr-2"></div>
          <span>System 25%</span>
        </div>
      </div>
    </div>
  );
};

export default PieChart;
