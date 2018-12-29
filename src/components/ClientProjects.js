import React, { Component } from "react";
import { Flex, Hidden, Heading, InlineFlex, styled } from "reakit";
import { StaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";
import Waypoint from "react-waypoint";

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
  height: 100%;
  overflow: hidden;
  @media (max-width: 1000px) {
    flex-direction: column;
  }
`;

const StyledLeftContainer = styled(InlineFlex)`
  position: relative;
  max-height: 460px;
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
    max-height: 400rem;
    order: 2;
    padding: 0 4rem 2rem 4rem;
    background-color: ${props => props.theme.colors.green};
  }
`;
const StyledRightContainer = styled(InlineFlex)`
 max-height: 460px;
  padding: 5rem 4rem 5rem 18rem;
  }
  background-color: ${props => props.theme.colors.green};
  @media (max-width: 1000px) {
    padding: 2rem 4rem 0 4rem;
  }
  @media (max-width: 600px) {
    padding: 2rem 2rem 0 2rem;
  p {
      margin-bottom: 1rem;
    }
  }
`;

const StyledGallery = styled(Flex)`
  position: absolute;
  right: 0;
  left: 0;
  margin-right: -320px;
  flex-wrap: wrap;
  max-width: 37rem;
  padding-left: 1rem;
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
    position: static;
    margin-right: 0;
    justify-content: center;
  }
  > div {
    backface-visibility: hidden;
    flex-basis: 150px;
    flex-shrink: 1;
    flex-grow: 1;
  }
  div:hover {
    z-index: 10;
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
  @media (max-width: 1000px) {
    margin-left: 0;
    justify-content: center;
    max-width: 1000rem;
    padding-left: 0;
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
          ref={this.props.passedRef}
        >
          <StyledLeftContainer
            flexGrow={1}
            flexDirection="column"
            minWidth="40%"
          >
            <StaticQuery
              query={graphql`
                query {
                  natour: file(
                    relativePath: { eq: "clientProjects/first.jpg" }
                  ) {
                    childImageSharp {
                      fluid(maxHeight: 500, maxWidth: 300) {
                        ...GatsbyImageSharpFluid_tracedSVG
                      }
                    }
                  }
                  devconnector: file(
                    relativePath: { eq: "clientProjects/second.jpg" }
                  ) {
                    childImageSharp {
                      fluid(maxHeight: 500, maxWidth: 300) {
                        ...GatsbyImageSharpFluid_tracedSVG
                      }
                    }
                  }
                  travelguide: file(
                    relativePath: { eq: "clientProjects/third.jpg" }
                  ) {
                    childImageSharp {
                      fluid(maxHeight: 500, maxWidth: 300) {
                        ...GatsbyImageSharpFluid_tracedSVG
                      }
                    }
                  }
                  trilloHotel: file(
                    relativePath: { eq: "clientProjects/fourth.jpg" }
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
                        slide="left"
                        fade
                        duration="500ms"
                      >
                        <Img
                          style={{
                            height: "250px"
                          }}
                          fluid={data.natour.childImageSharp.fluid}
                        />
                      </Hidden>
                      <Hidden
                        visible={visible}
                        unmount={false}
                        slide="left"
                        fade
                        delay="500ms"
                        duration="500ms"
                      >
                        <Img
                          style={{
                            height: "250px"
                          }}
                          fluid={data.devconnector.childImageSharp.fluid}
                        />
                      </Hidden>
                      <Hidden
                        visible={visible}
                        unmount={false}
                        slide="left"
                        fade
                        delay="1200ms"
                        duration="500ms"
                      >
                        {" "}
                        <Img
                          style={{
                            height: "250px"
                          }}
                          fluid={data.travelguide.childImageSharp.fluid}
                        />
                      </Hidden>
                      <Hidden
                        visible={visible}
                        unmount={false}
                        slide="left"
                        fade
                        delay="1600ms"
                        duration="500ms"
                      >
                        {" "}
                        <Img
                          style={{
                            height: "250px"
                          }}
                          fluid={data.trilloHotel.childImageSharp.fluid}
                        />
                      </Hidden>
                    </StyledGallery>
                  )}
                </Hidden.Container>
              )}
            />
          </StyledLeftContainer>

          <StyledRightContainer flexDirection="column" minWidth="60%">
            {" "}
            <Heading as="h3" fontSize="1rem">
              {" "}
              Client's Project
            </Heading>
            <p>Let's work together and build an awesome website.</p>
          </StyledRightContainer>
        </StyledContentWrapper>
      </StyledWrapper>
    );
  }
}

export default ClientProjects;
