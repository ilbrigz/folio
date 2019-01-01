import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import { Flex, Box, styled } from "reakit";
import Helmet from "react-helmet";
import SEO from "../components/SEO";
import config from "../../config/website";
import Header from "../components/Header";
import Layout from "../components/Layout";
import Footer from "../components/Footer";

const OuterWrapper = styled(Flex)`
  flex-direction: column;
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
`;

const BlogWrapper = styled(Flex)`
  margin: 0 auto;
  width: 100%;
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
const Top = styled.div`
  font-size: 80%;
  margin-bottom: 0.5rem;
  position: relative;
  text-transform: uppercase;
`;

const Bottom = styled.div`
  font-size: 125%;
`;

const Project = ({
  pageContext: { slug },
  data: { markdownRemark: postNode }
}) => {
  const project = postNode.frontmatter;
  return (
    <Layout>
      <Header />
      <OuterWrapper>
        <Helmet title={`${project.title} | ${config.siteTitle}`} />
        <SEO postPath={slug} postNode={postNode} postSEO />
        <div style={{ textAlign: "center"}}>
          <h1>{project.title}</h1>
          <div>
            <p>{project.date}</p>
          </div>
        </div>
        <br />
        <div>
          <div
            style={{ color: "green" }}
            dangerouslySetInnerHTML={{ __html: postNode.html }}
          />
        </div>
      </OuterWrapper>
      <Footer style={{ positionn: "sticky" }} />
    </Layout>
  );
};

export default Project;

Project.propTypes = {
  pageContext: PropTypes.shape({
    slug: PropTypes.string.isRequired
  }).isRequired,
  data: PropTypes.shape({
    markdownRemark: PropTypes.object.isRequired
  }).isRequired
};

export const pageQuery = graphql`
  query ProjectPostBySlug($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      excerpt
      frontmatter {
        title
        date(formatString: "DD.MM.YYYY")
        client
        service
        cover {
          childImageSharp {
            resize(width: 800) {
              src
            }
          }
        }
      }
      fields {
        slug
      }
    }
  }
`;
