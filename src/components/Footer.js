import React from "react";
import { styled, Box } from "reakit";

const StyledDiv = styled.div`
  background-color: ${props => props.theme.colors.darkBlue};
`;
const StyledContent = styled(Box)`
  max-width: 1200px;
  margin: 0 auto;
  > h3 {
    margin: 0;
  }
  padding: 5rem 4rem;
  @media (max-width: 1000px) {
    padding: 2rem 4rem;
  }
  @media (max-width: 600px) {
    padding: 2rem 2rem;
  }
`;

export default function Footer() {
  return <StyledDiv>Footer</StyledDiv>;
}
