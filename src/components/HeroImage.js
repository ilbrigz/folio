import React from "react";
import { StaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";

const HeroImage = props => (
  <StaticQuery
    query={graphql`
      query {
        file(relativePath: { eq: "brayn.png" }) {
          childImageSharp {
            fluid(maxWidth: 300) {
              ...GatsbyImageSharpFluid_tracedSVG
            }
          }
        }
      }
    `}
    render={data => {
      return (
        <Img
          style={{ borderRadius: "5px 5px 0 0" }}
          fluid={data.file.childImageSharp.fluid}
          alt="Brayn Brigoli"
          title="Brayn Brigoli Filipino Web Developer"
        />
      );
    }}
  />
);
export default HeroImage;
