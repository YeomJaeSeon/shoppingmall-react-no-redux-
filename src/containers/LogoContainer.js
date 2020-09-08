import React from "react";
import Logo from "../components/Logo";
import { useDispatch } from "react-redux";
import { showAllAction } from "../modules/items";

export default function LogoContainer() {
  const dispatch = useDispatch();
  const showAll = () => {
    dispatch(showAllAction());
  };
  return <Logo showAll={showAll}></Logo>;
}
