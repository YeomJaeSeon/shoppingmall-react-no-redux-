import React, { memo, useState, useEffect } from "react";
import styled from "styled-components";
import data from "../data/data.json";

const ItemsContainer = styled.ul`
  width: 60%;
  height: 60%;
  list-style: none;
  padding-left: 0px;
  overflow-y: scroll;
`;
const ItemContainer = styled.li`
  background-color: white;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  padding: 10px;
`;

const ItemImg = styled.img`
  width: 60px;
  height: 60px;
  margin-right: 20px;
`;

const ItemDescription = styled.span`
  font-size: 20px;
`;

function Items({ item1 }) {
  const [item, setItem] = useState([]);
  console.log(item);
  useEffect(() => {
    setItem(item1);
  }, [item1]);

  useEffect(() => {
    setItem(data.items);
  }, []);

  return (
    <ItemsContainer>
      {item.map((value) => {
        return (
          <div key={value.id}>
            <ItemContainer>
              <ItemImg src={value.image} alt={value.type} />
              <ItemDescription>
                {value.gender}, {value.size} size
              </ItemDescription>
            </ItemContainer>
          </div>
        );
      })}
    </ItemsContainer>
  );
}

export default memo(Items);
