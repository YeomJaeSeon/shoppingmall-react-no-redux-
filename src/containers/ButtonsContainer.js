import React from "react";
import Buttons from "../components/Buttons";
import { useDispatch } from "react-redux";
import {
  selectSkirtAction,
  selectTshirtAction,
  selectPantsAction,
  selectBlueAction,
  selectYellowAction,
  selectPinkAction,
} from "../modules/items";

export default function ButtonsContainer() {
  const dispatch = useDispatch();
  const selectSkirt = () => {
    dispatch(selectSkirtAction());
  };
  const selectTshirt = () => {
    dispatch(selectTshirtAction());
  };
  const selectPants = () => {
    dispatch(selectPantsAction());
  };
  const selectBlue = () => {
    dispatch(selectBlueAction());
  };
  const selectYellow = () => {
    dispatch(selectYellowAction());
  };
  const selectPink = () => {
    dispatch(selectPinkAction());
  };
  return (
    <Buttons
      selectSkirt={selectSkirt}
      selectTshirt={selectTshirt}
      selectPants={selectPants}
      selectBlue={selectBlue}
      selectYellow={selectYellow}
      selectPink={selectPink}
    ></Buttons>
  );
}
