import React from "react";
import { styled, Box, Button } from "reakit";
import { Link } from "gatsby";

const StyledDiv = styled.div`
  background-color: ${props => props.theme.colors.darkBlue};
`;
const StyledContent = styled(Box)`
  max-width: 1200px;
  margin: 0 auto;
  > h3 {
    margin: 0;
  }
  padding: 5rem 4rem;
  @media (max-width: 1000px) {
    padding: 2rem 4rem;
  }
  @media (max-width: 600px) {
    padding: 2rem 2rem;
  }
`;

export default function AboutMe() {
  return (
    <StyledDiv>
      <StyledContent>
        <h3>About me</h3>
        <br />
        <p>
          Hi! I am Brayn. I am a self-taught programmer. I first tried coding
          two years ago. Since then, I fell in love and I have been learning and
          teaching myself how to code. I have known photoshop, drawing and
          design before that. I am a self-motivated person and I am always
          willing to learn new things.
        </p>

        <p>To know more about me, please check out my blog page.</p>

        <Button>
          <Link
            to="/blogs"
            style={{
              textDecoration: "none",
              backgroundImage: "none",
              textShadow: "none",
              color: "white"
            }}
          >
            Visit My Blog
          </Link>
        </Button>
      </StyledContent>
    </StyledDiv>
  );
}
