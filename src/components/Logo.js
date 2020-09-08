import React, { memo } from "react";
import styled from "styled-components";

const ImgLogo = styled.img`
  &:hover {
    transform: scale(1.1);
  }
  transition: transform 300ms ease;
  cursor: pointer;
`;

function Logo({ filtering }) {
  return (
    <ImgLogo
      src="../imgs/logo.png"
      alt="logo"
      onClick={() => {
        filtering("all");
      }}
    />
  );
}

export default memo(Logo);
