def get_prediction(product_name):
    product = product_name.lower()

    if "iphone" in product:
        return {
            "product": product_name,
            "bestTime": "During festival sales (Diwali / Big Billion Days)",
            "discount": "10–20%",
            "confidence": "High",
            "advice": "Wait for major sales events",
            "amazon_price": 56999,
            "flipkart_price": 55499,
            "image": "/assets/products/iphone.png",
            "price_trend": [
                {"day": "Today", "price": 62000},
                {"day": "Day 3", "price": 60000},
                {"day": "Day 7", "price": 58500},
                {"day": "Day 10", "price": 57000},
                {"day": "Day 14", "price": 56000},
            ]
        }

    elif "laptop" in product or "macbook" in product:
        return {
            "product": product_name,
            "bestTime": "End of financial year (March)",
            "discount": "15–25%",
            "advice": "Look for clearance & exchange offers",
            "confidence": "High",
            "amazon_price": 74999,
            "flipkart_price": 72999,
            "image": "/assets/products/laptop.png",
            "price_trend": [
                {"day": "Today", "price": 78000},
                {"day": "Day 3", "price": 76500},
                {"day": "Day 7", "price": 75000},
                {"day": "Day 10", "price": 73500},
                {"day": "Day 14", "price": 72000},
            ]
        }

    elif "headphone" in product or "earbuds" in product:
        return {
            "product": product_name,
            "bestTime": "Flash sales & combo offers",
            "discount": "30–50%",
            "confidence": "High",
            "advice": "Check lightning deals frequently",
            "amazon_price": 2999,
            "flipkart_price": 2699,
            "image": "/assets/products/headphones.png",
            "price_trend": [
                {"day": "Today", "price": 3500},
                {"day": "Day 3", "price": 3300},
                {"day": "Day 7", "price": 3100},
                {"day": "Day 10", "price": 2900},
                {"day": "Day 14", "price": 2700},
            ]
        }

    elif "tv" in product or "television" in product:
        return {
        "product": product_name,
        "bestTime": "New model launches (April–May)",
        "discount": "20–35%",
        "advice": "Older models get heavy discounts",
        "confidence": "Medium",
        "amazon_price": 45999,
        "flipkart_price": 43999,
        "image": "/assets/products/tv.png",
        "price_trend": [
            {"day": "Today", "price": 48000},
            {"day": "Day 3", "price": 46500},
            {"day": "Day 7", "price": 45000},
            {"day": "Day 10", "price": 43500},
            {"day": "Day 14", "price": 42000}
        ]
    }

    else:
        return {
            "product": product_name,
            "bestTime": "Seasonal sales",
            "discount": "5–15%",
            "confidence": "Low",
            "advice": "Compare prices across platforms",
            "amazon_price": 1999,
            "flipkart_price": 1899,
            "image": "/assets/products/default.png",
            "price_trend": []
        }
