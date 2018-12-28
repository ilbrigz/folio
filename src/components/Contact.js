import React from "react";
import { styled, Input, Flex } from "reakit";

const StyledDiv = styled.div`
  background-color: ${props => props.theme.colors.darkestBlue};
`;
const StyledContent = styled(Flex)`
  max-width: 1200px;
  margin: 0 auto;
`;

const LeftContainer = styled(Flex)`
  background-color: ${props => props.theme.colors.darkestBlue};
  max-width: 60%;
  height: 20rem;
  border-right: 0.1px solid #aaa;
  padding: 5rem 4rem;
  textarea,
  input {
    color: white;
    background-color: ${props => props.theme.colors.darkBlue};
    border-radius: 0;
    border: none;
  }
  @media (max-width: 1000px) {
    padding: 2rem 4rem;
  }
  @media (max-width: 600px) {
    padding: 2rem 2rem;
  }
`;
const RightContainer = styled(Flex)`
  background-color: ${props => props.theme.colors.darkestBlue};
  max-width: 40%;
  height: 20rem;
  padding: 5rem 4rem;

  @media (max-width: 1000px) {
    padding: 2rem 4rem;
  }
  @media (max-width: 600px) {
    padding: 2rem 2rem;
  }
`;
const FormContainer = styled(Flex)`
  div:first-child {
    margin-right: 1rem;
  }
`;

export default function Contact() {
  return (
    <StyledDiv id="contact">
      <StyledContent>
        <LeftContainer>
          {" "}
          <form
            method="POST"
            action="https://formspree.io/braynbrigoli24@gmail.com"
          >
            <FormContainer>
              <div>
                <label>Name</label>
                <Input type="text" name="name" />>
              </div>
              <div>
                <label>Your Email</label>
                <Input type="email" name="_replyto" />
              </div>
            </FormContainer>
            <div>
              <label>Message</label>
              <textarea type="text" name="message" />
            </div>

            <input type="submit" value="Send" />
          </form>
        </LeftContainer>
        <RightContainer>Right Container</RightContainer>
      </StyledContent>
    </StyledDiv>
  );
}
