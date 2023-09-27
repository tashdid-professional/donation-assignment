import React from "react";
import { useParams } from "react-router-dom";

const DonationDetails = ({ cards }) => {
  console.log("🚀 ~ file: DonationDetails.jsx:5 ~ DonationDetails ~ cards:", cards)
  const { id } = useParams();
  

  // Find the card with the matching ID
  const card = cards.find((c) => c.id === id);

  if (!card) {
    return <div>Card Not Found</div>;
  }

  return (
    <div>
      <h2>Donation Details</h2>
      <div>
        <img src={card.picture} alt={card.category} />
        <h3>Category: {card.category}</h3>
        <p>{card.description}</p>
        <p>Price: ${card.price}</p>
      </div>
    </div>
  );
};

export default DonationDetails;
