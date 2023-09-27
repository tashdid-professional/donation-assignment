import React from 'react';
import { useParams } from 'react-router-dom';

const DonationDetails = ({ cards }) => {
    const { index } = useParams();

    // Ensure the index is a valid number and within the range of cards
    const cardIndex = parseInt(index, 10);
    if (isNaN(cardIndex) || cardIndex < 0 || cardIndex >= cards.length) {
        // Handle invalid index, e.g., redirect to an error page
        return <div>Invalid Card Index</div>;
    }

    const card = cards[cardIndex];

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
