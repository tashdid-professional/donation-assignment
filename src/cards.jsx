import React, { useState, useEffect } from "react";
import Card from "./Card";
import Banner from "./Banner";
import { Link } from "react-router-dom";

const Cards = () => {
  const [cards, setCards] = useState([]);
  const [filteredCards, setFilteredCards] = useState([]);

  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => {
        setCards(data);
        setFilteredCards(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
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
      <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-5 w-3/4 mx-auto">
        {filteredCards.map((card, index) => (
          <Link
            to={`/donation/details/${card.id}`}
            key={card.id}
            className="card-link"
          >
            <Card card={card} />
          </Link>
        ))}
        
      </div>
    </div>
  );
};

export default Cards;
