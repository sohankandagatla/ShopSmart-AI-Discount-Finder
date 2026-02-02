from flask import Flask, request, jsonify
from flask_cors import CORS
import sys, os

sys.path.append(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))

from services.predictor import get_prediction

app = Flask(__name__)
CORS(app)

@app.route("/api/predict", methods=["POST"])
def predict():
    try:
        data = request.json
        product = data.get("product")

        if not product:
            return jsonify({"error": "Product name is required"}), 400

        result = get_prediction(product)
        return jsonify(result)

    except Exception as e:
        return jsonify({"error": "Internal server error"}), 500

if __name__ == "__main__":
    app.run(host="127.0.0.1", port=5000, debug=True)
