import React from "react";
import { Box, Hidden, Heading, Flex, styled } from "reakit";
import Waypoint from "react-waypoint";
import HeroImage from "./HeroImage.js";

const StyledHero = styled(Flex)`
  padding-top: 3rem !important;
  margin-top: -3px !important;
  background-color: ${props => props.theme.colors.darkestBlue};
  @media (max-width: 950px) {
    flex-direction: column;
    padding-top: 1rem;
  }
`;
const RightHeroContainer = styled(Flex)`
  &&&& {
    @media (max-width: 950px) {
      align-items: center !important;
      padding-left: 0 !important;
      h1 {
        font-size: 1.5rem !important;
      }
      p {
        text-align: center;
      }
    }
    @media (max-width: 400px) {
      h1 {
        font-size: 1.3rem !important;
      }
      p {
        font-size: 1rem;
      }
    }
  }
`;

const LeftHeroContainer = styled(Flex)`
  flex-direction: column;
  margin-bottom: 10.5rem;
  flex-grow: 1;
  align-items: flex-end;
  justify-content: center;
  @media (max-width: 950px) {
    margin-bottom: 1.5rem;
  }
`;

const StyledImageContainer = styled(Box)`
  height: 220px;
  width: 220px;
  @media (max-width: 950px) {
    height: 200px;
    width: 200px;
    align-self: center;
  }
`;

const BraynBrigoliContainer = styled.h1`
  &&&& {
    position: relative;
    margin-top: -6.4rem;
    left: 6.2rem;
    font-size: 1.8rem;
    letter-spacing: -0.29px;
    z-index: 1;
    color: #d4a782;
    transform: rotate(-90deg);
    @media (max-width: 950px) {
      letter-spacing: -1.9px;
      left: 5.7rem;
      margin-top: -6rem;
    }
    @media (max-width: 480px) {
      letter-spacing: 1px;
      margin-top: -6.8rem;
      left: 6.5rem;
    }
  }
`;

const StyledBackground = styled(Box)`
  background-color: ${props => props.theme.colors.darkestBlue};
`;

const LightOrangeSpan = styled.span`
  color: ${props => props.theme.colors.lightOrange};
`;

const LightBlueSpan = styled.span`
  color: ${props => props.theme.colors.lightBlue};
`;

class Hero extends React.Component {
  render() {
    return (
      <StyledBackground width="100vw" relative>
        <StyledHero
          as="section"
          height="30rem"
          alignItems="center"
          justifyContent="space-around"
          maxWidth="1200px"
          margin="0 auto"
        >
          <LeftHeroContainer>
            <StyledImageContainer>
              <HeroImage />
            </StyledImageContainer>
            <BraynBrigoliContainer>Brayn Brigoli</BraynBrigoliContainer>
          </LeftHeroContainer>
          <RightHeroContainer
            flexGrow={1}
            paddingLeft="5rem"
            flexDirection="column"
            alignItems="start"
            marginTop="-.6rem"
          >
            <Hidden.Container>
              {({ visible, show }) => (
                <>
                  <Waypoint
                    onEnter={() => {
                      show();
                    }}
                  />
                  <Hidden
                    visible={visible}
                    unmount={false}
                    fade
                    duration="1000ms"
                  >
                    <h1>Coder | Designer | Freelancer</h1>
                  </Hidden>
                  <Hidden
                    visible={visible}
                    unmount={false}
                    fade
                    delay="500ms"
                    duration="3000ms"
                  >
                    <Heading
                      as="p"
                      fontSize="1rem"
                      fontWeight="500"
                      marginTop="-.5rem"
                    >
                      I build beautiful{" "}
                      <LightOrangeSpan>modern websites</LightOrangeSpan> that
                      <LightBlueSpan> speed</LightBlueSpan> past the
                      competitions.
                    </Heading>
                  </Hidden>
                </>
              )}
            </Hidden.Container>
          </RightHeroContainer>
        </StyledHero>
      </StyledBackground>
    );
  }
}

export default Hero;
