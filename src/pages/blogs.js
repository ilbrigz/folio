import React, { Component } from "react";
import { Flex, Box, styled } from "reakit";
import { graphql, Link } from "gatsby";
import PropTypes from "prop-types";
import Img from "gatsby-image";

import Layout from "../components/Layout";
import Header from "../components/Header";
import Footer from "../components/Footer";

const OuterWrapper = styled(Flex)`
  max-width: 1200px;
  padding: 0 2rem;
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
  margin: 1rem auto;
  min-width: 70%;
  margin-right: 5%;
  background-color: #e5ecf2;
  flex-direction: column;
  @media (max-width: 900px) {
    min-width: 60%;
  }
`;
const SideBarWrapper = styled(Flex)`
  margin: 1rem auto;
  min-width: 25%;
  background-color: orange;
  flex-direction: column;
  @media (max-width: 900px) {
    min-width: 35%;
  }
`;
const BlogContainer = styled(Box)`
  padding: 1rem 2rem;
  background-color: white;
  box-shadow: 0 -1px 1px 1px rgba(0, 0, 0, 0.15);
  margin: 1rem;
  .gatsby-image-wrapper {
    margin: 0 auto;
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
                    <p>{project.node.frontmatter.date}</p>
                    {project.node.frontmatter.cover && (
                      <Img
                        style={{ maxWidth: "400px", maxHeight: "200px" }}
                        fluid={
                          project.node.frontmatter.cover.childImageSharp.fluid
                        }
                      />
                    )}
                  </div>

                  <p>{project.node.excerpt.replace("Description ", "")}</p>
                </div>{" "}
              </Link>
            </BlogContainer>
          );
        })}
      </BlogWrapper>
      <SideBarWrapper>side</SideBarWrapper>
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
