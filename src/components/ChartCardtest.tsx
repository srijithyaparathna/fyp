import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title as ChartTitle,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  ChartTitle,
  Tooltip,
  Legend
);

const defaultApiUrl = "http://172.20.10.5:9000/health";

const ChartCard = ({ title, apiUrl = defaultApiUrl, field = "cpu" }) => {
  const [chartData, setChartData] = useState({
    labels: [],
    datasets: [
      {
        label: title || "Chart",
        data: [],
        borderColor: "rgba(75, 192, 192, 1)",
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        fill: true,
      },
    ],
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(apiUrl);
        const data = await res.json();

        const time = new Date(data.timestamp * 1000).toLocaleTimeString(); // convert UNIX timestamp → readable time
        const value = data[field];

        setChartData((prev) => {
          const labels = [...prev.labels, time].slice(-20); // keep last 20 points
          const values = [...prev.datasets[0].data, value].slice(-20);

          return {
            labels,
            datasets: [
              {
                ...prev.datasets[0],
                label: `${field.toUpperCase()} usage`,
                data: values,
              },
            ],
          };
        });
      } catch (err) {
        console.error("Error fetching chart data:", err);
      }
    };

    fetchData();
    const interval = setInterval(fetchData, 5000); // fetch every 5s
    return () => clearInterval(interval);
  }, [apiUrl, field]);

  return (
    <div
      style={{
        width: "700px",
        background: "#fff",
        padding: "20px",
        borderRadius: "10px",
        boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <h3 style={{ marginBottom: "10px" }}>{title}</h3>
      <Line data={chartData} />
    </div>
  );
};

export default ChartCard;
