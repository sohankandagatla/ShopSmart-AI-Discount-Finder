from flask import Flask, request, jsonify

app = Flask(__name__)

@app.route("/predict", methods=["POST"])
def predict():
    prices = request.json["prices"]
    avg = sum(prices) / len(prices)

    recommendation = "Good time to buy" if prices[-1] < avg else "Wait for discount"

    return jsonify({
        "recommendation": recommendation,
        "confidence": 0.8
    })

app.run(port=6000)
