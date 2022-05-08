import { type } from "@testing-library/user-event/dist/type";
import React from "react";
import { useDrag } from "react-dnd";
import { ItemTypes } from "../constants/itemTypes";

const Card = ({ data }) => {
  // const [{ opacity }, dragRef] = useDrag(() => {
  //   type: ItemTypes.ITEM_CARD;
  // });

  return (
    <>
      <div className="card">
        <div className="row">{data.title}</div>
        <div className="row">{data.content}</div>
      </div>
    </>
  );
};

export default Card;
