import React, { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title as ChartTitle,
  Tooltip,
  Legend
} from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, ChartTitle, Tooltip, Legend);

const processors = {
  temperature: (data) => {
    const labels = data.hourly.time.slice(-10).map(t => t.slice(11, 16)); // HH:MM
    const values = data.hourly.temperature_2m.slice(-10);
    return { labels, values, labelName: 'Temperature (°C)', color: 'rgba(255, 99, 132, 1)' };
  },
  humidity: (data) => {
    const labels = data.hourly.time.slice(-10).map(t => t.slice(11, 16)); // HH:MM
    const values = data.hourly.relativehumidity_2m.slice(-10);
    return { labels, values, labelName: 'Humidity (%)', color: 'rgba(54, 162, 235, 1)' };
  },
  // Add more processors here as needed
};

const defaultApiUrl = 'https://api.open-meteo.com/v1/forecast?latitude=51.5074&longitude=-0.1278&hourly=temperature_2m&current_weather=true';

const ChartCard = ({ title, apiUrl = defaultApiUrl, type = 'temperature' }) => {
  const [chartData, setChartData] = useState({
    labels: [],
    datasets: [{
      label: title || 'Chart',
      data: [],
      borderColor: 'rgba(75, 192, 192, 1)',
      backgroundColor: 'rgba(75, 192, 192, 0.2)',
      fill: true,
    }],
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(apiUrl);
        const data = await res.json();

        const process = processors[type] || processors.temperature;
        const { labels, values, labelName, color } = process(data);

        setChartData({
          labels,
          datasets: [{
            label: labelName || title || 'Chart',
            data: values,
            borderColor: color,
            backgroundColor: color.replace('1)', '0.2)'),
            fill: true,
          }],
        });
      } catch (err) {
        console.error('Error fetching chart data:', err);
      }
    };

    fetchData();
    const interval = setInterval(fetchData, 60000);
    return () => clearInterval(interval);
  }, [apiUrl, type, title]);

  return (
    <div
      style={{
        width: '800px',
        background: '#fff',
        padding: '20px',
        borderRadius: '10px',
        boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
        fontFamily: 'Arial, sans-serif',
      }}
    >
      <h3 style={{ marginBottom: '10px' }}>{title}</h3>
      <Line data={chartData} />
    </div>
  );
};

export default ChartCard;
