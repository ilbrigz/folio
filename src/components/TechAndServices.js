import React, { Component } from "react";
import { Flex, Avatar, Heading, InlineFlex, styled } from "reakit";
import { StaticQuery, graphql } from "gatsby";

const StyledWrapper = styled(Flex)`
  background: linear-gradient(
    to right,
    ${props => props.theme.colors.lightBlue} 0%,
    ${props => props.theme.colors.lightBlue} 42%,
    ${props => props.theme.colors.violet} 42%,
    ${props => props.theme.colors.violet} 100%
  );
  @media (max-width: 600px) {
    background-color: none;
  }
`;
const StyledContentWrapper = styled(Flex)`
  @media (max-width: 600px) {
    flex-direction: column;
  }
`;
const StyledLeftContainer = styled(InlineFlex)`
  padding: 5rem 4rem;
  background-color: ${props => props.theme.colors.lightBlue};
  @media (max-width: 1000px) {
    padding: 3rem 2rem;
  }
`;
const StyledRightContainer = styled(InlineFlex)`
  padding: 5rem 4rem;
  background-color: ${props => props.theme.colors.violet};
  @media (max-width: 1000px) {
    padding: 3rem 2rem;
  }
  @media (max-width: 600px) {
    padding: 2rem 2rem;
  }
`;

const StyledFlexWrap = styled(Flex)`
  flex-wrap: wrap;
`;
class PersonalProjects extends Component {
  render() {
    return (
      <StyledWrapper>
        <StyledContentWrapper
          maxWidth="1200px"
          flexShrink={1}
          flexGrow={2}
          margin="0 auto"
        >
          <StyledLeftContainer
            flexGrow={1}
            flexDirection="column"
            minWidth="40%"
          >
            <Heading as="h3" fontSize="1rem">
              Technologies I love to use
            </Heading>
            <StaticQuery
              query={graphql`
                query {
                  avatars: allFile(
                    filter: { absolutePath: { regex: "/avatars/" } }
                  ) {
                    edges {
                      node {
                        childImageSharp {
                          fixed(width: 100) {
                            src
                            originalName
                          }
                        }
                      }
                    }
                  }
                }
              `}
              render={data => (
                <StyledFlexWrap justifyContent="center" marginTop="1rem">
                  {data.avatars.edges.map(item => (
                    <Avatar
                      border="1px solid white"
                      key={item.node.childImageSharp.fixed.originalName}
                      alt={item.node.childImageSharp.fixed.originalName
                        .split(".")
                        .slice(0, -1)
                        .join(".")}
                      src={item.node.childImageSharp.fixed.src}
                      fontSize={40}
                      margin=".5rem"
                    />
                  ))}
                </StyledFlexWrap>
              )}
            />
          </StyledLeftContainer>

          <StyledRightContainer flexDirection="column" minWidth="60%">
            <Heading as="h3" fontSize="1rem">
              {" "}
              Services I offer
            </Heading>
            <ol>
              <li>
                <p>Build responsive websites with react.</p>
              </li>
              <li>
                <p>
                  Migrate your wordpress site to a react frontend and make it
                  more performant. Keep the WP site so you can still update the
                  contents there.
                </p>
              </li>
              <li>
                <p>Desing/Redesign of your portofio/website. </p>
              </li>
              <li>
                <p>
                  I also teach beginners the basics of Web Development and
                  Photoshop.{" "}
                </p>
              </li>
            </ol>
          </StyledRightContainer>
        </StyledContentWrapper>
      </StyledWrapper>
    );
  }
}

export default PersonalProjects;
