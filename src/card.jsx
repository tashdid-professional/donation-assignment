import React from "react";
import { Link } from "react-router-dom";

const Card = ({ card, index }) => {
  return (
    <div style={{ backgroundColor: card.card_bg_color }} className="w-[312px] space-y-2">
      <Link to={`/donation/details/${index}`} className="card-link">
        <img src={card.picture} alt="" />
        <p style={{ color: card.text_button_bg_color, backgroundColor: card.category_bg_color }} className="font-medium text-sm w-20 p-2">
          {card.category}
        </p>
        <p style={{ color: card.text_button_bg_color }} className="font-semibold text-xl">
          {card.title}
        </p>
      </Link>
    </div>
  );
};

export default Card;
