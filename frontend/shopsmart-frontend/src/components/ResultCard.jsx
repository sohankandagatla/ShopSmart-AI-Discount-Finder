import DealCards from "./DealCards";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer
} from "recharts";

function ResultCard({ result }) {

  const data = [
    { day: "Today", price: 62000 },
    { day: "Day 3", price: 60000 },
    { day: "Day 7", price: 58500 },
    { day: "Day 10", price: 57000 },
    { day: "Day 14", price: 56000 }
  ];

  return (
    <div className="result-card">
      <h3>📦 {result.product}</h3>

      <p><strong>Best Time to Buy:</strong> {result.bestTime}</p>
      <p><strong>Expected Discount:</strong> {result.discount}</p>

      <p>
        <strong>AI Confidence:</strong>
        <span className="badge"> {result.confidence}</span>
      </p>

      <div className="confidence-bar">
        <div className="confidence-fill"></div>
      </div>

      <h4 className="chart-title">📉 Price Trend Prediction</h4>

      <ResponsiveContainer width="100%" height={200}>
        <LineChart data={data}>
          <XAxis dataKey="day" stroke="#94a3b8" />
          <YAxis stroke="#94a3b8" />
          <Tooltip />
          <Line
            type="monotone"
            dataKey="price"
            stroke="#22d3ee"
            strokeWidth={3}
          />
        </LineChart>
      </ResponsiveContainer>
      <DealCards />

    </div>
  );
}

export default ResultCard;
