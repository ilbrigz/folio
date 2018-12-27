import React, { Component } from "react";
import { Flex, Heading, InlineFlex, styled } from "reakit";

const StyledWrapper = styled(Flex)`
  background: linear-gradient(
    to right,
    ${props => props.theme.colors.lightViolet} 0%,
    ${props => props.theme.colors.lightViolet} 42%,
    ${props => props.theme.colors.green} 42%,
    ${props => props.theme.colors.green} 100%
  );
  @media (max-width: 600px) {
    background-color: none;
  }
`;
const StyledContentWrapper = styled(Flex)`
  @media (max-width: 1000px) {
    flex-direction: column;
  }
`;
const StyledLeftContainer = styled(InlineFlex)`
  position: relative;
  padding: 5rem 4rem;
  padding-right: calc(20% + 4rem);
  background-color: ${props => props.theme.colors.lightViolet};

  img {
    margin-bottom: 0 !important;
    @media (max-width: 1000px) {
      flex-basis: 100px;
      flex-shrink: 1;
      flex-grow: 1;
    }
  }

  @media (max-width: 1000px) {
    order: 2;
    padding: 0 4rem 2rem 4rem;
    background-color: ${props => props.theme.colors.green};
  }
`;
const StyledRightContainer = styled(InlineFlex)`
  padding: 5rem 4rem 5rem 15rem;

  }
  background-color: ${props => props.theme.colors.green};
  @media (max-width: 1000px) {
    padding: 2rem 4rem 0 4rem;
  }
  @media (max-width: 600px) {
    padding: 1rem 2rem 0 2rem;
  p {
      margin-bottom: 1rem;
    }
  }
  
  
`;

const StyledGallery = styled(Flex)`
  position: absolute;
  margin-right: -320px;
  flex-wrap: wrap;
  @media (max-width: 1000px) {
    position: static;
    margin-right: 0;
    justify-content: center;
  }
`;

const StyledFlexWrap = styled(Flex)`
  flex-wrap: wrap;
`;
class ClientProjects extends Component {
  render() {
    return (
      <StyledWrapper>
        <StyledContentWrapper
          maxWidth="1200px"
          flexShrink={1}
          flexGrow={2}
          margin="0 auto"
          minHeight="23rem"
        >
          <StyledLeftContainer
            flexGrow={1}
            flexDirection="column"
            minWidth="40%"
          >
            <StyledGallery>
              {" "}
              <img
                src="https://via.placeholder.com/250/7870ac/000000?Text=First+3+clients+will+be+free"
                alt=""
              />
              <img
                src="https://via.placeholder.com/250/7870ac/000000?Text=First+3+clients+will+be+free"
                alt=""
              />{" "}
              <img
                src="https://via.placeholder.com/250/7870ac/000000?Text=First+3+clients+will+be+free"
                alt=""
              />{" "}
              <img
                src="https://via.placeholder.com/250/7870ac/000000?Text=First+3+clients+will+be+free"
                alt=""
              />
            </StyledGallery>
          </StyledLeftContainer>

          <StyledRightContainer flexDirection="column" minWidth="60%">
            {" "}
            <Heading as="h3" fontSize="1rem">
              {" "}
              Personal Projects
            </Heading>
            <p>
              These websites were made for the purpose of learning the basics.
              They are not in production.
            </p>
          </StyledRightContainer>
        </StyledContentWrapper>
      </StyledWrapper>
    );
  }
}

export default ClientProjects;
