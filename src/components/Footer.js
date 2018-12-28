import React from "react";
import { styled, Box } from "reakit";

const StyledDiv = styled.div`
  background-color: ${props => props.theme.colors.darkBlue};
`;

export default function Footer() {
  return <StyledDiv>Footer</StyledDiv>;
}
