/**
 * DealCards Component
 *
 * This component displays available deals from different platforms (Amazon and Flipkart) 
 * along with their prices and delivery options. It takes in the prices as props and formats 
 * them for display.
 * @returns {JSX.Element} The rendered DealCards component.
 */
function DealCards({ amazonPrice, flipkartPrice }) {
  const deals = [
    {
      platform: "Amazon",
      price: `₹${amazonPrice?.toLocaleString()}`,
      delivery: "Free Delivery",
      emoji: "🟠"
    },
    {
      platform: "Flipkart",
      price: `₹${flipkartPrice?.toLocaleString()}`,
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

