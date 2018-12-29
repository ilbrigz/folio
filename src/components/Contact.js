import React from "react";
import { styled, Input, Flex } from "reakit";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMobileAlt,
  faHome,
  faEnvelope
} from "@fortawesome/free-solid-svg-icons";

const StyledDiv = styled.div`
  background-color: ${props => props.theme.colors.darkestBlue};
  border-top: 0.1px solid #aaa;
  border-bottom: 0.1px solid #aaa;
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
  border-top: 0.1px solid #aaa;
  border-bottom: 0.1px solid #aaa;
  padding: 5rem 4rem;
  @media (max-width: 1000px) {
    padding: 3rem 3rem;
  }
  @media (max-width: 600px) {
    padding: 2rem 2rem;
    border-right: none;
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
  justify-content: space-between;
  flex-direction: column;
  background-color: ${props => props.theme.colors.darkestBlue};
  min-width: 40%;
  height: inherit;
  padding: 5rem 4rem;
  border-top: 0.1px solid #aaa;
  border-bottom: 0.1px solid #aaa;
  @media (max-width: 1000px) {
    padding: 3rem 1rem;
  }
  @media (max-width: 600px) {
    padding: 2rem 2rem;
  }
  @media (max-width: 540px) {
    padding: 2rem 4rem;
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
const InformationGroup = styled(Flex)`
  flex-grow: 1;
  @media (max-width: 700px) and (min-width: 541px) {
    flex-direction: column;
    align-items: center;
  }
  @media (max-width: 540px) {
    flex-direction: row;
    justify-content: start;
    width: 60%;
  }
`;
const InfoDetails = styled(Flex)`
  flex-direction: column;
  margin-left: 3rem;
  @media (max-width: 800px) {
    margin-left: 1rem;
  }
  @media (max-width: 700px) {
    align-items: center;
    margin-left: 0;
  }
  @media (max-width: 540px) {
    align-items: flex-start;
    margin-left: 2rem;
  }
  h3 {
    margin-top: 0;
    @media (max-width: 700px) {
      margin-top: 1rem;
    }
    @media (max-width: 540px) {
      margin-top: 0;
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
        <RightContainer>
          <InformationGroup>
            {" "}
            <FontAwesomeIcon
              size="lg"
              style={{ width: "2rem" }}
              icon={faMobileAlt}
            />
            <InfoDetails>
              <h3>Mobile</h3>
              <p>09098247797</p>
            </InfoDetails>
          </InformationGroup>

          <InformationGroup>
            <FontAwesomeIcon
              style={{ width: "2rem" }}
              size="lg"
              icon={faHome}
            />
            <InfoDetails>
              <h3>Email</h3>
              <p>ilogirb23@yahoo.com</p>
            </InfoDetails>
          </InformationGroup>
          <InformationGroup>
            <FontAwesomeIcon
              style={{ width: "2rem" }}
              size="lg"
              icon={faEnvelope}
            />
            <InfoDetails>
              <h3>Address</h3>
              <p>Cebu, Philippines</p>
            </InfoDetails>
          </InformationGroup>
        </RightContainer>
      </StyledContent>
    </StyledDiv>
  );
}
