import React from "react";
import { Flex, Box, styled } from "reakit";
import { graphql, Link } from "gatsby";
import PropTypes from "prop-types";
import Img from "gatsby-image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMobileAlt,
  faHome,
  faEnvelope
} from "@fortawesome/free-solid-svg-icons";

import Layout from "../components/Layout";
import Header from "../components/Header";
import Footer from "../components/Footer";

const OuterWrapper = styled(Flex)`
  max-width: 1200px;
  padding: 2rem;
  background-color: #e5ecf2;
  margin: 0 auto;
  h1,
  h2,
  h3,
  h4,
  h5,
  span,
  p,
  a,
  li {
    margin: 0;
    color: black;
  }
  @media (max-width: 600px) {
    flex-direction: column;
  }
`;

const BlogWrapper = styled(Flex)`
  margin: 0 auto;
  min-width: 70%;
  margin-right: 2rem;
  background-color: #e5ecf2;
  flex-direction: column;
  @media (max-width: 900px) {
    min-width: 60%;
  }
  @media (max-width: 600px) {
    width: 100%;
    margin-right: 0;
  }
`;
const BlogContainer = styled(Box)`
  padding: 1rem 2rem;
  background-color: white;
  box-shadow: 0 -1px 1px 1px rgba(0, 0, 0, 0.15);
  margin-bottom: 2rem;
  .gatsby-image-wrapper {
    margin: 0 auto;
  }
  &:last-child {
    margin-bottom: 2rem;
  }
`;

const SideBarWrapper = styled(Flex)`
  flex-grow: 1;
  min-width: 25%;
  flex-direction: column;
  @media (max-width: 900px) {
    min-width: 35%;
  }
`;
const SideContact = styled(Flex)`
  justify-content: space-between;
  flex-direction: column;
  background-color: white;
  height: inherit;
  padding: 1rem 2rem;
  align-items: center;
  box-shadow: 0 -1px 1px 1px rgba(0, 0, 0, 0.15);
`;
const NameEmailContainer = styled(Flex)`
  div {
    flex-grow: 1;
  }

    div:first-child {
      margin-right: 0;
    }
  }
`;
const InformationGroup = styled(Flex)`
  flex-grow: 1;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  width: 60%;

  margin: 1rem;
`;
const InfoDetails = styled(Flex)`
  flex-direction: column;
  align-items: center;
  path {
    fill: black;
  }
  h3 {
    margin-top: 0;
    font-size: 1rem;
    margin: 0.4rem;
  }
  p {
    font-size: 0.8rem;
  }
`;

const Blogs = ({
  data: {
    allMarkdownRemark: { edges: projectEdges }
  }
}) => (
  <Layout>
    <Header />
    <OuterWrapper>
      <BlogWrapper>
        {projectEdges.map(project => {
          return (
            <BlogContainer key={project.node.fields.slug}>
              <Link to={project.node.fields.slug}>
                <div>
                  <div>
                    <h3>{project.node.frontmatter.title}</h3>
                    <p style={{ fontSize: ".8rem" }}>
                      {project.node.frontmatter.date}
                    </p>
                    {project.node.frontmatter.cover && (
                      <Img
                        style={{ maxWidth: "400px", maxHeight: "200px" }}
                        fluid={
                          project.node.frontmatter.cover.childImageSharp.fluid
                        }
                      />
                    )}
                  </div>

                  <p style={{ fontSize: ".9rem", marginTop: ".5rem" }}>
                    {project.node.excerpt.replace("Description ", "")}
                  </p>
                </div>{" "}
              </Link>
            </BlogContainer>
          );
        })}
      </BlogWrapper>
      <SideBarWrapper>
        {" "}
        <SideContact>
          <InformationGroup>
            {" "}
            <FontAwesomeIcon
              size="lg"
              style={{ width: "2rem", color: "black" }}
              icon={faMobileAlt}
            />
            <InfoDetails>
              <h3>Mobile</h3>
              <p>09098247797</p>
            </InfoDetails>
          </InformationGroup>

          <InformationGroup>
            <FontAwesomeIcon
              style={{ width: "2rem", color: "black" }}
              size="lg"
              icon={faHome}
            />
            <InfoDetails>
              <h3>Email</h3>
              <p>ilogirb23@yahoo.com</p>
            </InfoDetails>
          </InformationGroup>
          <InformationGroup>
            <FontAwesomeIcon
              style={{ width: "2rem", color: "black" }}
              size="lg"
              icon={faEnvelope}
            />
            <InfoDetails>
              <h3>Address</h3>
              <p>Cebu, Philippines</p>
            </InfoDetails>
          </InformationGroup>
        </SideContact>
      </SideBarWrapper>
    </OuterWrapper>
    <Footer />
  </Layout>
);

export default Blogs;
Blogs.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array.isRequired
    })
  }).isRequired
};

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(
      sort: { fields: [frontmatter___pinned, frontmatter___date], order: ASC }
    ) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            title
            date(formatString: "DD.MM.YYYY")
            service
            cover {
              childImageSharp {
                fluid(
                  maxWidth: 850
                  quality: 90
                  traceSVG: { color: "#f3f3f3" }
                ) {
                  ...GatsbyImageSharpFluid_tracedSVG
                }
              }
            }
          }
        }
      }
    }
  }
`;
