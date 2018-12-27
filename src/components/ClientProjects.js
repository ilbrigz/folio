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
  right: 0;
  left: 0;
  margin-right: -320px;
  flex-wrap: wrap;
  max-width: 36rem ;
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
    border-top: 5px solid ${props => props.theme.colors.lightBlue};
    border-bottom: 5px solid ${props => props.theme.colors.lightBlue};
  }
  .gatsby-image-wrapper:hover {
    transform:scale(1.1);
    z-index: 10;
    border: 5px solid ${props => props.theme.colors.lightBlue};
  }
  .gatsby-image-wrapper:first-child {
    border-left: 5px solid ${props => props.theme.colors.lightBlue};
  }
  .gatsby-image-wrapper:last-child {
    border-right: 5px solid ${props => props.theme.colors.lightBlue};
  }
  @media (max-width: 1000px) {
    margin-left: 0;
    justify-content: center;
    max-width: 1000rem ;
  }
  @media (max-width: 750px) {
    .gatsby-image-wrapper {
      border: 2.5px solid ${props => props.theme.colors.lightBlue};
      border-top: 5px solid ${props => props.theme.colors.lightBlue};
      border-bottom: 2.5px solid ${props => props.theme.colors.lightBlue};
    }
    .gatsby-image-wrapper:last-child {
      border-top: 2.5px solid ${props => props.theme.colors.lightBlue};
      border-right: 5px solid ${props => props.theme.colors.lightBlue};
      border-left: 5px solid ${props => props.theme.colors.lightBlue};
      border-bottom: 5px solid ${props => props.theme.colors.lightBlue};
    }
    .gatsby-image-wrapper:nth-child(3) {
      border-right: 5px solid ${props => props.theme.colors.lightBlue};
    }
  }
  @media (max-width: 600px) {
    .gatsby-image-wrapper {
      border: 2.5px solid ${props => props.theme.colors.lightBlue};
      border-top: 5px solid ${props => props.theme.colors.lightBlue};
      border-bottom: 2.5px solid ${props => props.theme.colors.lightBlue};
    }
    .gatsby-image-wrapper:last-child {
      border-top: 2.5px solid ${props => props.theme.colors.lightBlue};
      border-right: 5px solid ${props => props.theme.colors.lightBlue};
      border-left: 2.5px solid ${props => props.theme.colors.lightBlue};
      border-bottom: 5px solid ${props => props.theme.colors.lightBlue};
    }
    .gatsby-image-wrapper:nth-child(2) {
      border-right: 5px solid ${props => props.theme.colors.lightBlue};
    }
    .gatsby-image-wrapper:nth-child(3) {
      border-top: 2.5px solid ${props => props.theme.colors.lightBlue};
      border-right: 2.5px solid ${props => props.theme.colors.lightBlue};
      border-left: 5px solid ${props => props.theme.colors.lightBlue};
      border-bottom: 5px solid ${props => props.theme.colors.lightBlue};
    }
  }
  @media (max-width: 435px) {
   .gatsby-image-wrapper {
      border-right: 5px solid ${props => props.theme.colors.lightBlue};
      border-left: 5px solid ${props => props.theme.colors.lightBlue};
      border-top: 2.5px solid ${props => props.theme.colors.lightBlue};
      border-bottom: 2.5px solid ${props => props.theme.colors.lightBlue};
    }
    .gatsby-image-wrapper:first-child {
      border-top: 5px solid ${props => props.theme.colors.lightBlue};
    
    }
    .gatsby-image-wrapper:last-child {
      border-bottom: 5px solid ${props => props.theme.colors.lightBlue};
      border-left: 5px solid ${props => props.theme.colors.lightBlue};
    
    }
    .gatsby-image-wrapper:nth-child(2) {
      border-right: 5px solid ${props => props.theme.colors.lightBlue};
    }
    .gatsby-image-wrapper:nth-child(3) {
      border-bottom: 2.5px solid ${props => props.theme.colors.lightBlue};
      border-right: 5px solid ${props => props.theme.colors.lightBlue};
      border-left: 5px solid ${props => props.theme.colors.lightBlue};
    } */
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
                        fade
                        duration="800ms"
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
                        fade
                        delay="500ms"
                        duration="1300ms"
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
                        fade
                        delay="1200ms"
                        duration="1500ms"
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
                        fade
                        delay="1600ms"
                        duration="1800ms"
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
