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
          Hi! I am Brayn Brigoli. I am a self-taught Filipino programmer
          currently living in Cebu, Philippines. I am skilled freelance web
          developer. My stack includes but are not limited to html, css,
          javascript, react, nodejs, mongodb, and sql. I am currently into the
          framework called <a href="whttps://www.gatsbyjs.org/">Gatsbyjs</a>.
          With this technogy I make your site load faster than ever and thus
          bringing more traffic to your site.
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
