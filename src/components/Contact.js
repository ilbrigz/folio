import React from "react";
import { styled, Input, Flex } from "reakit";

const StyledDiv = styled.div`
  background-color: ${props => props.theme.colors.darkestBlue};
`;
const StyledContent = styled(Flex)`
  max-width: 1200px;
  margin: 0 auto;
  @media (max-width: 600px) {
    flex-direction: column;
  }
`;

const LeftContainer = styled(Flex)`
  background-color: ${props => props.theme.colors.darkestBlue};
  min-width: 60%;
  min-height: 25rem;
  border-right: 0.1px solid #aaa;
  padding: 5rem 4rem;
  @media (max-width: 1000px) {
    padding: 3rem 3rem;
  }
  @media (max-width: 600px) {
    padding: 2rem 2rem;
  }
  form {
    width: 100%;
    textarea,
    input {
      color: white;
      background-color: ${props => props.theme.colors.darkBlue};
      border-radius: 0;
      border: none;
      margin-top: 1rem;
      margin-bottom: 1rem;
      @media (max-width: 1000px) {
        margin-top: .5rem;
    }
    }
    textarea {
      height: 8rem;
    }
    label {
    }
    input[type="submit"] {
      background-color: white;
      color:  ${props => props.theme.colors.darkestBlue};
      padding: 5px 16px;
  }
`;
const RightContainer = styled(Flex)`
  background-color: ${props => props.theme.colors.darkestBlue};
  min-width: 40%;
  height: 20rem;
  padding: 5rem 4rem;

  @media (max-width: 1000px) {
    padding: 2rem 4rem;
  }
  @media (max-width: 600px) {
    padding: 2rem 2rem;
  }
`;
const NameEmailContainer = styled(Flex)`
  div {
    flex-grow: 1;
  }
  div:first-child {
    margin-right: 1rem;
  }
  @media (max-width: 1000px) {
    flex-direction: column;
    input {
      width: 100%;
    }
    div:first-child {
      margin-right: 0;
    }
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
            <NameEmailContainer>
              <div>
                <label>Name</label>
                <Input type="text" name="name" />
              </div>
              <div>
                <label>Your Email</label>
                <Input type="email" name="_replyto" />
              </div>
            </NameEmailContainer>
            <Flex flexDirection="column">
              <label>Message</label>
              <textarea type="text" name="message" />
            </Flex>

            <input type="submit" value="Send Message" />
          </form>
        </LeftContainer>
        <RightContainer>Right Container</RightContainer>
      </StyledContent>
    </StyledDiv>
  );
}
