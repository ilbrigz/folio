import React, { Component } from "react";
import { Flex, Hidden, Heading, InlineFlex, styled } from "reakit";
import { StaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";
import Waypoint from "react-waypoint";

const StyledDiv = styled.div`
  background: linear-gradient(
    to right,
    ${props => props.theme.colors.orange} 0%,
    ${props => props.theme.colors.orange} 60%,
    ${props => props.theme.colors.lightOrange} 60%,
    ${props => props.theme.colors.lightOrange} 100%
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
  padding: 5rem 4rem;
  padding-right: calc(20% + 4rem);
  background-color: ${props => props.theme.colors.orange};
  @media (max-width: 1000px) {
    padding: 2rem 4rem 0 4rem;
    background-color: ${props => props.theme.colors.lightOrange};
  }
  @media (max-width: 600px) {
    padding: 2rem 2rem 0 2rem;
    p {
      margin-bottom: 1rem;
    }
  }
`;
const StyledRightContainer = styled(InlineFlex)`
  padding: 5rem 4rem;
  padding-right: 0;
  }
  background-color: ${props => props.theme.colors.lightOrange};
  @media (max-width: 1000px) {
    padding: 0 4rem 3rem 4rem;
  }
  /* @media (max-width: 400px) {
    padding: 0 2rem 2rem 2rem;
  } */
`;

const StyledGallery = styled(Flex)`
  margin-left: -320px;
  flex-wrap: wrap;
  > div {
    backface-visibility: hidden;
    flex-basis: 150px;
    flex-shrink: 1;
    flex-grow: 1;
  }
  div:hover {
    z-index: 10;
  }
  @media (max-width: 1000px) {
    margin-left: 0;
    justify-content: center;
  }

  .gatsby-image-wrapper {
    backface-visibility: hidden;
    z-index: 0;
    transition: all 200ms ease-out;
    cursor: pointer;
    width: 100%;
    height: 100%;
    border: 2.5px solid ${props => props.theme.colors.lightBlue};
    border-top-width: 5px;
    border-bottom-width: 5px;
  }
  .gatsby-image-wrapper:hover {
    transform: scale(1.1);
    z-index: 10;
    border: 5px solid ${props => props.theme.colors.lightBlue};
  }
  div:first-of-type .gatsby-image-wrapper {
    border-left-width: 5px;
  }
  div:last-of-type .gatsby-image-wrapper {
    border-right-width: 5px;
  }

  @media (max-width: 835px) {
    div:last-of-type .gatsby-image-wrapper {
      border-top-width: 2.5px;
    }
  }

  @media (max-width: 750px) {
    .gatsby-image-wrapper {
      border: 2.5px solid ${props => props.theme.colors.lightBlue};
      border-top-width: 5px;
      border-bottom-width: 2.5px;
    }
    div:last-of-type .gatsby-image-wrapper {
      border-top-width: 2.5;
      border-right-width: 5px;
      border-left-width: 5px;
      border-bottom-width: 5px;
    }
    div:nth-of-type(3) .gatsby-image-wrapper {
      border-right-width: 5px;
    }
  }

  @media (max-width: 670px) and (min-width: 393px) {
    div:nth-of-type(odd) .gatsby-image-wrapper {
      border-right-width: 2.5px;
      border-left-width: 5px;
    }
    div:nth-of-type(even) .gatsby-image-wrapper {
      border-left-width: 2.5px;
      border-right-width: 5px;
    }
    div:nth-of-type(-n + 2) .gatsby-image-wrapper {
      border-top-width: 5px;
      border-bottom-width: 5px;
    }
    div:nth-last-of-type(-n + 2) .gatsby-image-wrapper {
      border-top-width: 2.5px;
      border-bottom-width: 5px;
    }
  }
  @media (max-width: 392px) {
    .gatsby-image-wrapper {
      border-left-width: 5px;
      border-right-width: 5px;
      border-top-width: 2.5px;
      border-bottom-width: 2.5px;
    }
    div:last-of-type .gatsby-image-wrapper {
      border-bottom-width: 5px;
    }
    div:first-of-type .gatsby-image-wrapper {
      border-top-width: 5px;
    }
  }
`;

class TechAndServices extends Component {
  render() {
    return (
      <StyledDiv id="projects">
        <StyledContentWrapper
          maxWidth="1200px"
          flexShrink={1}
          flexGrow={2}
          margin="0 auto"
        >
          <StyledLeftContainer
            flexGrow={1}
            flexDirection="column"
            minWidth="60%"
          >
            {" "}
            <Heading as="h3" fontSize="1rem">
              {" "}
              Personal Projects
            </Heading>
            <p>
              These websites were made by following courses in{" "}
              <a
                style={{
                  color: "white",
                  textShadow: "none"
                }}
                href="http://www.udemy.com"
              >
                Udemy
              </a>{" "}
              for the purpose of learning the basics. They are not in
              production.
            </p>
          </StyledLeftContainer>

          <StyledRightContainer flexDirection="column" minWidth="40%">
            <StaticQuery
              query={graphql`
                query {
                  natour: file(
                    relativePath: { eq: "personal-projects/natours.png" }
                  ) {
                    childImageSharp {
                      fluid(maxHeight: 800, maxWidth: 500) {
                        ...GatsbyImageSharpFluid_tracedSVG
                      }
                    }
                  }
                  devconnector: file(
                    relativePath: { eq: "personal-projects/devconnector.png" }
                  ) {
                    childImageSharp {
                      fluid(maxHeight: 800, maxWidth: 500) {
                        ...GatsbyImageSharpFluid_tracedSVG
                      }
                    }
                  }
                  travelguide: file(
                    relativePath: { eq: "personal-projects/travelguide.png" }
                  ) {
                    childImageSharp {
                      fluid(maxHeight: 800, maxWidth: 500) {
                        ...GatsbyImageSharpFluid_tracedSVG
                      }
                    }
                  }
                  trilloHotel: file(
                    relativePath: { eq: "personal-projects/trilloHotel.png" }
                  ) {
                    childImageSharp {
                      fluid(maxWidth: 800) {
                        ...GatsbyImageSharpFluid_tracedSVG
                      }
                    }
                  }
                }
              `}
              render={data => (
                <Hidden.Container>
                  {({ visible, show }) => (
                    <StyledGallery>
                      <Waypoint
                        onEnter={() => {
                          show();
                        }}
                      />
                      <Hidden
                        visible={visible}
                        unmount={false}
                        fade
                        duration="600ms"
                      >
                        <a
                          href="https://ilbrigz.github.io/advance-sass-and-css/"
                          alt="natour outdoor site"
                        >
                          <Img
                            style={{
                              height: "250px"
                            }}
                            fluid={data.natour.childImageSharp.fluid}
                          />
                        </a>
                      </Hidden>
                      <Hidden
                        visible={visible}
                        unmount={false}
                        fade
                        delay="600ms"
                        duration="600ms"
                      >
                        <a
                          href="https://fast-ravine-32891.herokuapp.com/"
                          alt="devconnector"
                        >
                          {" "}
                          <Img
                            style={{
                              height: "250px"
                            }}
                            fluid={data.devconnector.childImageSharp.fluid}
                          />
                        </a>
                      </Hidden>
                      <Hidden
                        visible={visible}
                        unmount={false}
                        fade
                        delay="1200ms"
                        duration="600ms"
                      >
                        <a
                          href="https://ilbrigz.github.io/travel-site/"
                          alt="travel site"
                        >
                          <Img
                            style={{
                              height: "250px"
                            }}
                            fluid={data.travelguide.childImageSharp.fluid}
                          />
                        </a>
                      </Hidden>
                      <Hidden
                        visible={visible}
                        unmount={false}
                        fade
                        delay="1500ms"
                        duration="600ms"
                      >
                        <a
                          href="https://ilbrigz.github.io/trillo_flexbox/"
                          alt="trello site"
                        >
                          <Img
                            style={{
                              height: "250px"
                            }}
                            fluid={data.trilloHotel.childImageSharp.fluid}
                          />
                        </a>
                      </Hidden>
                    </StyledGallery>
                  )}
                </Hidden.Container>
              )}
            />
          </StyledRightContainer>
        </StyledContentWrapper>
      </StyledDiv>
    );
  }
}

export default TechAndServices;
