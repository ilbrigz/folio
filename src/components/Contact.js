import React from "react";
import { styled, Flex } from "reakit";

const StyledHero = styled(Flex)`
  z-index: 99 !important;
  padding-top: 3rem !important;
  margin-top: -3px !important;
  background-color: ${props => props.theme.colors.darkestBlue};
  @media (max-width: 950px) {
    flex-direction: column;
    padding-top: 1rem;
  }
`;
export default function Contact() {
  return (
    <StyledHero>
      {" "}
      <form
        method="POST"
        action="https://formspree.io/braynbrigoli24@gmail.com"
      >
        <input type="text" name="name" />>
        <input type="email" name="_replyto" />
        <input type="submit" value="Send" />
      </form>
    </StyledHero>
  );
}
