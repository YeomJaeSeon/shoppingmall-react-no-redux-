import React from "react";
import styled from "styled-components";

const LogoImg = styled.img`
  &:hover {
    transform: scale(1.1);
  }
  transition: transform 300ms ease;
  margin-bottom: 20px;
`;

export default function Logo({ filtering }) {
  return (
    <LogoImg
      src="../imgs/logo.png"
      alt="logo"
      onClick={() => {
        filtering("all");
      }}
    />
  );
}
