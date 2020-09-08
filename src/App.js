import React, { useState } from "react";
import Logo from "./components/Logo";
import Buttons from "./components/Buttons";
import Items from "./components/Items";
import styled, { createGlobalStyle } from "styled-components";
import data from "./data/data.json";

const GlobalStyle = createGlobalStyle`
body{
  background-color:#3f454d;
}
button{
  background-color:transparent;
  border:none;
  outline:none;
  transition: transform 300ms ease;
  margin-right:20px;
  cursor:pointer;
}
button:hover{
  transform: scale(1.1);
}
ul{
  list-style:none;
}
`;

const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export default function App() {
  const [items, setItems] = useState(data.items);

  const filtering = (filterValue) => {
    if (filterValue === "all") setItems(data.items);
    else if (filterValue === "skirt")
      setItems(data.items.filter((item) => item.type === filterValue));
    else if (filterValue === "tshirt")
      setItems(data.items.filter((item) => item.type === filterValue));
    else if (filterValue === "pants")
      setItems(data.items.filter((item) => item.type === filterValue));
    else if (filterValue === "blue")
      setItems(data.items.filter((item) => item.color === filterValue));
    else if (filterValue === "yellow")
      setItems(data.items.filter((item) => item.color === filterValue));
    else setItems(data.items.filter((item) => item.color === filterValue));
  };

  return (
    <div>
      <GlobalStyle />
      <Container>
        <Logo filtering={filtering}></Logo>
        <Buttons filtering={filtering}></Buttons>
        <Items items={items}></Items>
      </Container>
    </div>
  );
}
