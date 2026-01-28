import { useState } from "react";
import SearchBar from "./components/SearchBar";
import ResultCard from "./components/ResultCard";
import Loader from "./components/Loader";
import "./styles/App.css";

function App() {
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  return (
    <div className="app">
      <div className="card">
        <h1>🛒 ShopSmart</h1>
        <p className="subtitle">
          Find the best time to buy products using AI 📉
        </p>

        <SearchBar
          setResult={setResult}
          setLoading={setLoading}
          setError={setError}
        />

        {loading && <Loader />}
        {error && <p className="error">{error}</p>}
        {result && <ResultCard result={result} />}
      </div>
    </div>
  );
}

export default App;
