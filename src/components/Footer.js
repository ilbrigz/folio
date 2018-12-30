import React from "react";
import { styled, Box } from "reakit";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faFacebookSquare,
  faLinkedin
} from "@fortawesome/free-brands-svg-icons";

const StyledDiv = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 3rem;
  background-color: ${props => props.theme.colors.darkBlue};
  flex-direction: column;
  justify-items: center;
  padding: 2rem 2rem;
  margin-top: auto;
  a {
    text-decoration: none;
    color: white;
    margin-right: 1rem;
    background-image: none;
  }
  p {
    margin-bottom: 0;
    margin-top: 0.5rem;
    font-size: 0.9rem;
  }
  a:last-child {
    margin-right: 0;
  }
`;

export default function Footer() {
  return (
    <StyledDiv>
      <Box>
        <a href="https://github.com/ilbrigz">
          <FontAwesomeIcon icon={faGithub} />
        </a>
        <a href="https://www.facebook.com/ilbrigz101">
          <FontAwesomeIcon icon={faFacebookSquare} />
        </a>
        <a href="https://www.linkedin.com/in/brayn-brigoli-210565147/">
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
      </Box>
      <p>Made by BrigzDev &copy; 2018</p>
    </StyledDiv>
  );
}
