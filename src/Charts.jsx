import React, { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from "chart.js";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const numFormatter = new Intl.NumberFormat("en-US");

const StockChart = ({ getData, name, range }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [latestPrice, setLatestPrice] = useState(getData[0].price);
  const [dataPoints, setDataPoints] = useState([getData[0].price]);

  const initialPrice = getData[0]?.price || 0;

  useEffect(() => {
    const updateRandomPrice = () => {
      const targetPrice = getData[currentIndex + 1]?.price;
      if (targetPrice !== undefined) {
        const remainingUpdates = 12 - (Math.floor(currentIndex / 5) % 12);
        const difference = (targetPrice - latestPrice) / remainingUpdates;
        const randomFluctuation = difference * (Math.random() * 0.4 - 0.2); // Random fluctuation between -20% and +20% of the required difference

        setLatestPrice((prevPrice) => prevPrice + difference + randomFluctuation);
      }
    };

    const intervalId = setInterval(() => {
      if (currentIndex < getData.length - 1) {
        updateRandomPrice();
      } else {
        clearInterval(intervalId);
      }
    }, 5000);

    const timeoutId = setTimeout(() => {
      setCurrentIndex((prevIndex) => prevIndex + 1);
      setLatestPrice(getData[currentIndex + 1]?.price); // Snap to exact target price at each minute
    }, 60000);

    return () => {
      clearInterval(intervalId);
      clearTimeout(timeoutId);
    };
  }, [currentIndex, getData]);

  // Update data points with each latestPrice change
  useEffect(() => {
    setDataPoints((prevData) => [...prevData, latestPrice]);
  }, [latestPrice]);

  const chartData = {
   labels: dataPoints.map((_, i) => (i * 5)-5 <0 ? null : (i * 5)-5), // Time labels based on the number of data points
    datasets: [
      {
        label: "Stock Price (₹)",
        data: dataPoints,
        borderColor: "#00ffcc",
        backgroundColor: "rgba(0, 255, 204, 0.1)",
        pointRadius: 0,
        borderWidth: 2,
        tension: 0.1, // Smooth curve
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,  // Allow chart to fit the div
    layout: {
      padding: {
        top: 25,
       
        bottom: 10,
      
      },
    },
    scales: {
      x: {
        display: true,
        title: {
          display: true,
          text: "Time (sec)",
          color: "#ffffff",
        },
        ticks: {
          color: "#ffffff",
        },
      },
      y: {
        display: true,
        title: {
          display: true,
          text: "Stock Price (₹)",
          color: "#ffffff",
        },
        ticks: {
          color: "#ffffff",
          callback: (value) => `₹${numFormatter.format(value)}`,
        },
      },
    },
    plugins: {
      legend: {
        display: true,
        labels: {
          color: "#ffffff",
        },
      },
      tooltip: {
        callbacks: {
          label: (context) => `₹${numFormatter.format(context.raw)}`,
        },
      },
    },
  };
  return (
    <div className="relative rounded-lg overflow-hidden bg-[#1e1e1e] p-4 h-[250px]">
      <div className="absolute top-2 left-2 text-white text-xs font-bold z-10 pl-5 py-1">
        {name}
      </div>
      <Line data={chartData} options={options} />
      <div className="absolute top-2 right-2 bg-black bg-opacity-50 text-white px-3 py-1 rounded-md z-10">
        <strong>Price:</strong> ₹{numFormatter.format(latestPrice)}
      </div>
    </div>
  );
};

export default StockChart;
