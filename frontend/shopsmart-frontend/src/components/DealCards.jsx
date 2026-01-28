function DealCards() {
  const deals = [
    {
      platform: "Amazon",
      price: "₹56,999",
      delivery: "Free Delivery",
      emoji: "🟠"
    },
    {
      platform: "Flipkart",
      price: "₹55,499",
      delivery: "2-Day Delivery",
      emoji: "🔵"
    }
  ];

  return (
    <div className="deal-section">
      <h4 className="deal-title">🛍 Available Deals</h4>

      <div className="deal-cards">
        {deals.map((deal, index) => (
          <div className="deal-card" key={index}>
            <h5>{deal.emoji} {deal.platform}</h5>
            <p className="price">{deal.price}</p>
            <p className="delivery">{deal.delivery}</p>
            <button>View Deal</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DealCards;
