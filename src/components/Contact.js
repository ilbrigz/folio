import React from "react";
import { styled, Flex } from "reakit";

const StyledDiv = styled.div`
  background-color: ${props => props.theme.colors.darkestBlue};
`;
const StyledContent = styled(Flex)`
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
export default function Contact() {
  return (
    <StyledDiv id="contact">
      <StyledContent>
        {" "}
        <form
          method="POST"
          action="https://formspree.io/braynbrigoli24@gmail.com"
        >
          <input type="text" name="name" />>
          <input type="email" name="_replyto" />
          <input type="submit" value="Send" />
        </form>
      </StyledContent>
    </StyledDiv>
  );
}
