import React from "react";
import Items from "../components/Items";
import { useSelector } from "react-redux";

export default function ItemsContainer() {
  const { display } = useSelector((state) => state.itemsReducer);
  return <Items display={display}></Items>;
}
