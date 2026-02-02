import DealCards from "./DealCards";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer
} from "recharts";

// PRODUCT IMAGES
import iphoneImg from "../assets/products/iphone.png";
import laptopImg from "../assets/products/laptop.png";
import tvImg from "../assets/products/tv.png";
import headphonesImg from "../assets/products/headphones.png";
import defaultImg from "../assets/products/default.png";

function ResultCard({ result }) {
  const data = result.price_trend || [];

  // ✅ PRODUCT → IMAGE MAPPER (FIXED)
  const getProductType = () => {
  const name = result.product?.toLowerCase() || "";

  if (name.includes("iphone")) return "iphone";
  if (name.includes("laptop") || name.includes("macbook")) return "laptop";
  if (name.includes("tv")) return "tv";
  if (name.includes("headphone") || name.includes("earbud")) return "headphones";

  return "unknown";
};

const productType = getProductType();

const getProductImage = () => {
  if (productType === "iphone") return iphoneImg;
  if (productType === "laptop") return laptopImg;
  if (productType === "tv") return tvImg;
  if (productType === "headphones") return headphonesImg;
  return defaultImg;
};


return (
  <div className="result-card landscape">

    {/* LEFT COLUMN – INFO + GRAPH */}
    {productType !== "unknown" && (
      <div className="product-info">
        <h3>📦 {result.product}</h3>

        <div className="info-row">
          <span className="info-label">Best Time</span>
          <span className="info-value">{result.bestTime}</span>
        </div>

        <div className="info-row">
          <span className="info-label">Discount</span>
          <span className="info-value">{result.discount}</span>
        </div>

        <div className="info-row">
          <span className="info-label">AI Advice</span>
          <span className="info-value">{result.advice}</span>
        </div>

        <div className="info-row">
          <span className="info-label">Confidence</span>
          <span className="badge">{result.confidence}</span>
        </div>

        {data.length > 0 && (
          <>
            <h4 className="chart-title">📉 Price Trend Prediction</h4>

            <ResponsiveContainer width="100%" height={220}>
              <LineChart data={data}>
                <XAxis
                  dataKey="day"
                  stroke="#64748b"
                  tick={{ fontSize: 12 }}
                />
                <YAxis
                  stroke="#64748b"
                  tick={{ fontSize: 12 }}
                />
                <Tooltip
                  contentStyle={{
                    background: "#020617",
                    border: "1px solid #334155",
                    borderRadius: "10px",
                    color: "#e5e7eb"
                  }}
                />
                <Line
                  type="monotone"
                  dataKey="price"
                  stroke="#22d3ee"
                  strokeWidth={3}
                  dot={{ r: 5, fill: "#22d3ee" }}
                  activeDot={{ r: 7 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </>
        )}
      </div>
    )}

    {/* RIGHT COLUMN – IMAGE + DEALS */}
    <div>
      <div className="image-wrapper">
        <img src={getProductImage()} alt="product" />

        {productType === "unknown" && (
          <p className="image-warning">Unable to process</p>
        )}
      </div>

      {productType !== "unknown" && (
        <DealCards
          amazonPrice={result.amazon_price}
          flipkartPrice={result.flipkart_price}
        />
      )}
    </div>

  </div>
);
}

export default ResultCard;
