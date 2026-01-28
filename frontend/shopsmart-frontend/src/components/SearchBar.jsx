import { useState } from "react";

function SearchBar({ setResult, setLoading, setError }) {
  const [product, setProduct] = useState("");

  const handleSearch = () => {
    if (!product.trim()) {
      setError("Please enter a product name");
      return;
    }

    setError("");
    setLoading(true);

    // TEMP mock data (later replaced by backend)
    setTimeout(() => {
      setResult({
        product: product,
        bestTime: "Next 10–14 days",
        discount: "18% – 25%",
        confidence: "Very High",
      });
      setLoading(false);
    }, 1500);
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Enter product name (e.g. iPhone 15)"
        value={product}
        onChange={(e) => setProduct(e.target.value)}
      />
      <button onClick={handleSearch}>Find Best Deal</button>
    </div>
  );
}

export default SearchBar;
