import React, { useState, useEffect } from "react";
import Logo from "./components/Logo";
import Buttons from "./components/Buttons";
import Items from "./components/Items";
import styled, { createGlobalStyle } from "styled-components";
import data from "./data/data.json";

const GlobalStyle = createGlobalStyle`
body{
  background-color:#3f454d;
}
`;
const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export default function App() {
  const [item, setItem] = useState([]);

  const filtering = (filterValue) => {
    if (filterValue === "all") {
      setItem(data.items);
    } else if (filterValue === "skirt") {
      setItem(data.items.filter((value) => value.type === "skirt"));
    } else if (filterValue === "tshirt") {
      setItem(data.items.filter((value) => value.type === "tshirt"));
    } else if (filterValue === "pants") {
      setItem(data.items.filter((value) => value.type === "pants"));
    } else if (filterValue === "blue") {
      setItem(data.items.filter((value) => value.color === "blue"));
    } else if (filterValue === "yellow") {
      setItem(data.items.filter((value) => value.color === "yellow"));
    } else {
      setItem(data.items.filter((value) => value.color === "pink"));
    }
  };
  return (
    <Container>
      <GlobalStyle />
      <Logo filtering={filtering}></Logo>
      <Buttons filtering={filtering}></Buttons>
      <Items item1={item}></Items>
    </Container>
  );
}
