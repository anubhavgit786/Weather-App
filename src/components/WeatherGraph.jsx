import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Legend,
  Tooltip,
} from "chart.js";

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement, Legend, Tooltip);

const WeatherGraph = ({ data, isDarkMode }) => {
  const chartData = {
    labels: data.dates,
    datasets: [
      {
        label: "Max Temp (°C)",
        data: data.maxTemps,
        borderColor: "rgba(255, 99, 132, 1)",
        backgroundColor: "rgba(255, 99, 132, 0.2)",
        borderWidth: 2,
        fill: true,
      },
      {
        label: "Min Temp (°C)",
        data: data.minTemps,
        borderColor: "rgba(54, 162, 235, 1)",
        backgroundColor: "rgba(54, 162, 235, 0.2)",
        borderWidth: 2,
        fill: true,
      },
      {
        label: "Mean Temp (°C)",
        data: data.meanTemps,
        borderColor: "rgba(75, 192, 192, 1)",
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        borderWidth: 2,
        fill: true,
      },
      {
        label: "Max Apparent Temp (°C)",
        data: data.maxApparentTemps,
        borderColor: "rgba(255, 159, 64, 1)",
        backgroundColor: "rgba(255, 159, 64, 0.2)",
        borderWidth: 2,
        fill: true,
      },
      {
        label: "Min Apparent Temp (°C)",
        data: data.minApparentTemps,
        borderColor: "rgba(153, 102, 255, 1)",
        backgroundColor: "rgba(153, 102, 255, 0.2)",
        borderWidth: 2,
        fill: true,
      },
      {
        label: "Mean Apparent Temp (°C)",
        data: data.meanApparentTemps,
        borderColor: "rgba(255, 206, 86, 1)",
        backgroundColor: "rgba(255, 206, 86, 0.2)",
        borderWidth: 2,
        fill: true,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: "top",
        labels: {
          font: {
            size: 12,
          },
        },
      },
      tooltip: {
        enabled: true,
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: "Dates",
          font: {
            size: 14,
          },
          color: isDarkMode ? 'white' : 'black',
        },
        ticks: {
          color: isDarkMode ? 'white' : 'black',
        },
        grid: {
          color: isDarkMode ? 'rgba(255, 255, 255, 0.2)' : 'rgba(0, 0, 0, 0.1)',
        },
      },
      y: {
        title: {
          display: true,
          text: "Temperature (°C)",
          font: {
            size: 14,
          },
          color: isDarkMode ? 'white' : 'black',
        },
        ticks: {
          color: isDarkMode ? 'white' : 'black',
        },
        grid: {
          color: isDarkMode ? 'rgba(255, 255, 255, 0.2)' : 'rgba(0, 0, 0, 0.1)',
        },
      },
    },
  };

  return (
    <div className="p-4">
      <h2 className={`text-xl font-bold mb-4 text-center ${isDarkMode ? 'text-white' : 'text-black'}`}>Weather Trends</h2>
      <Line data={chartData} options={chartOptions} />
    </div>
  );
};

export default WeatherGraph;