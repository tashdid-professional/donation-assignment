import React, { useState, useEffect } from 'react';
import Card from './Card';
import Banner from './Banner';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

const Cards = () => {
    const [cards, setCards] = useState([]);
    const [filteredCards, setFilteredCards] = useState([]);

    useEffect(() => {
        
        fetch('data.json')
            .then((res) => res.json())
            .then((data) => {
                setCards(data);
                setFilteredCards(data); 
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
            });
    }, []);

    const handleSearch = (searchInput) => {
        const filteredData = cards.filter((card) =>
            card.category.toLowerCase().includes(searchInput.toLowerCase())
        );
        setFilteredCards(filteredData);
    };

    return (
        <div>
            <Banner onSearch={handleSearch} />
            <div className='grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-5 w-3/4 mx-auto'>
                {filteredCards.map((card, index) => (
                    // Add a Link component to navigate to the Donation Details route
                    <Link to={`/donation/details/${index}`} key={index} className="card-link">
                        <Card card={card} />
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default Cards;