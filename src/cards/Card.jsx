import React from "react";
import { useDrag } from "react-dnd";
import { ItemTypes } from "../constants/itemTypes";
import { VideoCameraIcon } from "@heroicons/react/solid";

const Card = ({ data }) => {
  // Update isDragging state
  const [{ isDragging }, dragRef] = useDrag(() => ({
    type: ItemTypes.ITEM_CARD,
    item: { id: data.card_id },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  }));

  return (
    <>
      <div
        ref={dragRef}
        className={`card p-3 my-5 shadow-lg rounded ${
          isDragging
            ? "border-2 border-blue-500/100"
            : "border-2 border-blue-500/10"
        }`}
      >
        <VideoCameraIcon
          className="h-10 w-10 text-blue-400"
          id={data.card_id}
        />
        <div className="row">{data.title}</div>
        <div className="row">{data.content}</div>
      </div>
    </>
  );
};

export default Card;
