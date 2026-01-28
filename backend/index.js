const express = require("express");
const cors = require("cors");
const axios = require("axios");
const data = require("../data/prices.json");

const app = express();
app.use(cors());
app.use(express.json());

app.post("/api/predict", async (req, res) => {
  const ml = await axios.post("http://localhost:6000/predict", {
    prices: data.prices
  });

  res.json({
    product: req.body.product,
    bestTime: ml.data.recommendation,
    confidence: ml.data.confidence
  });
});

app.listen(5000, () => console.log("Backend running on port 5000"));
