import React from "react";
import styled from "styled-components";

const ItemsContainer = styled.ul`
  width: 60%;
  height: 60%;
  padding-left: 0;
  overflow-y: scroll;
`;

const ItemContainer = styled.li`
  background-color: white;
  display: flex;
  align-items: center;
  padding: 13px;
  margin-bottom: 15px;
`;

const ItemImg = styled.img`
  width: 60px;
  height: 60px;
  margin-right: 15px;
`;
const ItemDescription = styled.span`
  font-size: 20px;
`;

export default function Items({ items }) {
  return (
    <ItemsContainer>
      {items.map((item) => {
        return (
          <ItemContainer key={item.id}>
            <ItemImg src={item.image} alt={item.type} />
            <ItemDescription>
              {item.gender}, {item.size} size
            </ItemDescription>
          </ItemContainer>
        );
      })}
    </ItemsContainer>
  );
}
