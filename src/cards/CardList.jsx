import React from "react";
import Card from "./Card";
import { cardData } from "../data/cardData";

const CardList = () => {
  return (
    <div>
      <div>
        {cardData.map((data) => (
          <Card key={data.card_id} data={data} />
        ))}
      </div>
    </div>
  );
};

export default CardList;
