import React from "react";
import styled from "styled-components";

const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 20px 0px;
`;

const ImgButton = styled.img`
  width: 60px;
  height: 60px;
`;

const ColorButton = styled.button`
  background-color: ${(props) => {
    if (props.blue) return "blue";
    else if (props.yellow) return "yellow";
    else return "pink";
  }};
  font-size: 15px;
  padding: 13px;
  border-radius: 5px;
`;
export default function Buttons({ filtering }) {
  return (
    <ButtonContainer>
      <button>
        <ImgButton
          src="../imgs/blue_s.png"
          alt="skirt"
          onClick={() => {
            filtering("skirt");
          }}
        />
      </button>
      <button>
        <ImgButton
          src="../imgs/blue_t.png"
          alt="tshirt"
          onClick={() => {
            filtering("tshirt");
          }}
        />
      </button>
      <button>
        <ImgButton
          src="../imgs/blue_p.png"
          alt="pants"
          onClick={() => {
            filtering("pants");
          }}
        />
      </button>
      <ColorButton
        blue
        onClick={() => {
          filtering("blue");
        }}
      >
        Blue
      </ColorButton>
      <ColorButton
        yellow
        onClick={() => {
          filtering("yellow");
        }}
      >
        Yellow
      </ColorButton>
      <ColorButton
        pink
        onClick={() => {
          filtering("pink");
        }}
      >
        Orange
      </ColorButton>
    </ButtonContainer>
  );
}
