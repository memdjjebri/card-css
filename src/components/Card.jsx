import React, { useState } from "react";
import "./Card.css";

function Card({ member }) {
  const [showQuote, setShowQuote] = useState(false);

  const handleClick = () => {
    setShowQuote(!showQuote);
  };

  return (
    <div className="card-container">
      <div className="card">
        <img
          src={member.image}
          alt={`${member.firstName} ${member.lastName}`}
        />
        <div className="card-content">
          <h2>
            {member.firstName} {member.lastName}
          </h2>
          <p>{member.job}</p>
          <button onClick={handleClick}>
            {showQuote ? "Cacher la citation" : "Afficher la citation"}
          </button>
          {showQuote && <p>{member.quote}</p>}
        </div>
      </div>
    </div>
  );
}

export default Card;
