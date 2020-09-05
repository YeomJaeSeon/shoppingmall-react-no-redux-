import React from "react";
import styled from "styled-components";

const ButtonsContainer = styled.div`
  display: flex;
  align-items: center;
`;
const ButtonStyle = styled.button`
  background-color: transparent;
  border: none;
  outline: none;
  &:hover {
    transform: scale(1.1);
  }
  transition: transform 300ms ease;
  margin: 10px 10px;
`;

const ImgBtn = styled.img`
  width: 60px;
  height: 60px;
`;

const ColorBtn = styled(ButtonStyle)`
  background-color: ${(props) => {
    if (props.blue) return "blue";
    else if (props.yellow) return "yellow";
    else return "pink";
  }};
  padding: 15px;
  font-size: 20px;
  border-radius: 5px;
`;
export default function Buttons({ filtering }) {
  return (
    <ButtonsContainer>
      <ButtonStyle>
        <ImgBtn
          src="../imgs/blue_s.png"
          alt="skirt"
          onClick={() => {
            filtering("skirt");
          }}
        />
      </ButtonStyle>
      <ButtonStyle>
        <ImgBtn
          src="../imgs/blue_t.png"
          alt="tshirt"
          onClick={() => {
            filtering("tshirt");
          }}
        />
      </ButtonStyle>
      <ButtonStyle>
        <ImgBtn
          src="../imgs/blue_p.png"
          alt="pants"
          onClick={() => {
            filtering("pants");
          }}
        />
      </ButtonStyle>
      <ColorBtn
        blue
        onClick={() => {
          filtering("blue");
        }}
      >
        Blue
      </ColorBtn>
      <ColorBtn
        yellow
        onClick={() => {
          filtering("yellow");
        }}
      >
        Yellow
      </ColorBtn>
      <ColorBtn
        pink
        onClick={() => {
          filtering("pink");
        }}
      >
        Pink
      </ColorBtn>
    </ButtonsContainer>
  );
}
