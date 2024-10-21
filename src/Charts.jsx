import React, { useState, useEffect, useMemo } from "react";
import { AgCharts } from "ag-charts-react";
import "ag-charts-enterprise";

const numFormatter = new Intl.NumberFormat("en-US");

const tooltip = {
  renderer: ({ title, datum, xKey, yKey }) => ({
    title,
    content: `${datum[xKey]}: ₹${numFormatter.format(datum[yKey])}`,
  }),
};

const Charts = ({ getData, name }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [latestPrice, setLatestPrice] = useState(getData[0].price);

  const lineOptions = useMemo(
    () => ({
      data: getData,
      series: [
        {
          type: "line",
          xKey: "time",
          yKey: "price",
          yName: "Stock Price",
          tooltip,
          marker: {
            enabled: true,
            shape: "circle",
            size: 6,
            fill: "#f5f5f5",
          },
          stroke: "#00ffcc",
        },
      ],
      axes: [
        {
          type: "number",
          position: "bottom",
          title: { text: "Time (min)", fill: "#ffffff" },
          label: {
            color: "#ffffff",
          },
          tick: { stroke: "#ffffff" },
          gridStyle: [{ stroke: "#333333" }],
        },
        {
          type: "number",
          position: "left",
          title: { text: "Stock Price (₹)", fill: "#ffffff" },
          label: {
            color: "#ffffff",
            formatter: (params) => `₹${params.value}`,
          },
          tick: { stroke: "#ffffff" },
          gridStyle: [{ stroke: "#333333" }],
        },
      ],
      background: {
        fill: "#1e1e1e",
      },
      autoSize: false, // Disable auto-sizing
      width: 300, // Set fixed width for the chart
      height: 200,
      padding: {
        top: 10,    // Adjust padding as needed
        right: 10,
        bottom: 10,
        left: 0,
      },
      margin: {
        top: 10,    // Adjust padding as needed
        right: 10,
        bottom: 10,
        left: 0,
      }, // Set fixed height for the chart
      animation: {
        enabled: true,
        duration: 20000,
        easing: "linear",
      },
    }),
    [getData]
  );

  useEffect(() => {
    const updatePrice = () => {
      if (currentIndex < getData.length - 1) {
        setCurrentIndex((prevIndex) => prevIndex + 1);
        setLatestPrice(getData[currentIndex + 1].price);
      }
    };

    const timeout = setTimeout(updatePrice, 1500);

    return () => clearTimeout(timeout);
  }, [currentIndex, getData]);

  return (
    <div className="relative rounded-lg overflow-hidden bg-[#1e1e1e]">
      {/* Custom Title Positioned to the Left */}
      <div className="absolute top-2 left-2 text-white text-xs font-bold z-10 pl-5 py-1">
      {name}
      </div>
      <div className="my-10"></div>

      {/* Chart container with fixed size */}
      <div >
        <AgCharts options={lineOptions} className="rounded-lg" />
      </div>

      {// Stock Price and Time Overlay
      <div className="absolute top-2 right-2 bg-black bg-opacity-50 text-white px-3 py-1 rounded-md z-10">
        <strong> Price:</strong> ₹{numFormatter.format(latestPrice)}
      </div> }
    </div>
  );
};

export default Charts;
