def predict_price(product_name):
    product = product_name.lower()

    if "iphone" in product or "mobile" in product:
        return {
            "best_time": "During festival sales (Diwali / Big Billion Days)",
            "discount": "10–20%",
            "advice": "Wait for major sale events",
            "confidence": "High",
            "amazon_price": 56999,
            "flipkart_price": 55499,
            "price_trend": [
                {"day": "Today", "price": 62000},
                {"day": "Day 3", "price": 60500},
                {"day": "Day 7", "price": 59000},
                {"day": "Day 10", "price": 57500},
                {"day": "Day 14", "price": 56000}
            ]
        }

    elif "headphone" in product or "earbuds" in product:
        return {
            "best_time": "Flash sales & combo offers",
            "discount": "30–50%",
            "advice": "Check lightning deals frequently",
            "confidence": "High",
            "amazon_price": 2999,
            "flipkart_price": 2699,
            "price_trend": [
                {"day": "Today", "price": 3200},
                {"day": "Day 3", "price": 3100},
                {"day": "Day 7", "price": 3000},
                {"day": "Day 10", "price": 2900},
                {"day": "Day 14", "price": 2700}
            ]
        }

    elif "laptop" in product or "macbook" in product:
        return {
            "best_time": "End of financial year (March)",
            "discount": "15–25%",
            "advice": "Look for clearance & exchange offers",
            "confidence": "Medium",
            "amazon_price": 74999,
            "flipkart_price": 72999,
            "price_trend": [
                {"day": "Today", "price": 82000},
                {"day": "Day 3", "price": 80500},
                {"day": "Day 7", "price": 79000},
                {"day": "Day 10", "price": 77000},
                {"day": "Day 14", "price": 75000}
            ]
        }

    else:
        return {
            "best_time": "Seasonal sales",
            "discount": "5–15%",
            "advice": "Compare prices across platforms",
            "confidence": "Low",
            "amazon_price": 1999,
            "flipkart_price": 1899,
            "price_trend": [
                {"day": "Today", "price": 2200},
                {"day": "Day 7", "price": 2100},
                {"day": "Day 14", "price": 2000}
            ]
        }
