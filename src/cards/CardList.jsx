import React, { useState } from "react";
import Card from "./Card";
import { cardData } from "../data/cardData";
import { useDrop } from "react-dnd";

const CardList = () => {
  const [cardBoard, setCardBoard] = useState([]);

  // Update the state of the draggable item and monitor isOver state
  // accept takes acceptable item types, get item id so it can be used to add it to the board list
  const [{ isOver }, dropRef] = useDrop(() => ({
    accept: "card",
    drop: (item) => addCardToBoard(item.id),
    collect: (monitor) => ({
      isOver: monitor.isOver(),
    }),
  }));

  // Once useDrop is triggered then filter items and to the board state
  const addCardToBoard = (id) => {
    console.log("card id:", id);

    const boardList = cardData.filter((card) => {
      return id === card.card_id;
    });

    console.log("baordList", boardList);
    // Update the board
    setCardBoard((board) => [...board, boardList[0]]);
  };

  return (
    <div className="container mx-auto rounded">
      <div className="">
        {cardData.map((data) => (
          <Card key={data.card_id} data={data} />
        ))}
      </div>
      <div className="row font-bold">Board</div>
      <div
        ref={dropRef}
        className="board border-2 border-blue-500/25 h-96 h-full"
      >
        {cardBoard.map((data) => (
          <Card key={data.card_id} data={data} />
        ))}
      </div>
    </div>
  );
};

export default CardList;
