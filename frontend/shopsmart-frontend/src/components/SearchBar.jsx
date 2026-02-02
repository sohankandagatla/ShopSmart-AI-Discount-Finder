import { useState } from "react";

function SearchBar({ setResult, setLoading, setError, setShowResult  }) {
  const [product, setProduct] = useState("");

  const handleSearch = async () => {  // Handles product search - validates input, fetches results, updates state
  if (!product.trim()) {
    setError("Please enter a product name");
    return;
  }

  setError("");
  setLoading(true);

  try {
    /**
     * Sends a POST request to the prediction API with a product name
     * The product name to get predictions for
     * The API response containing prediction data
     */
    const response = await fetch("http://localhost:5000/api/predict", {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({ product }),
    });

    const data = await response.json();
    setResult(data);
    setShowResult(true);    //Triggers display of result card
  } catch (error) {
    setError("Unable to connect to server");
  } finally {
    setLoading(false);
  }
};

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Enter product name (e.g. iPhone 15)"
        value={product}
        onChange={(e) => setProduct(e.target.value)} />
      <button onClick={handleSearch}>Find Best Deal</button>
    </div>
  );
}

export default SearchBar;
