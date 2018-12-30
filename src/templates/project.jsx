import React from "react";
import PropTypes from "prop-types";
import { styled } from "reakit";
import { graphql } from "gatsby";
import Helmet from "react-helmet";
import SEO from "../components/SEO";
import config from "../../config/website";
import Header from "../components/Header";
import Layout from "../components/Layout";
import Footer from "../components/Footer";

const InformationWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
`;

const InfoBlock = styled.div`
  display: flex;
  flex-direction: column;
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
      <Helmet title={`${project.title} | ${config.siteTitle}`} />
      <SEO postPath={slug} postNode={postNode} postSEO />
      <h1 style={{ color: "red" }}>{project.title}</h1>
      <InformationWrapper>
        <InfoBlock>
          <Top>Client</Top>
          <Bottom>{project.client}</Bottom>
        </InfoBlock>
        <InfoBlock>
          <Top>Date</Top>
          <Bottom>{project.date}</Bottom>
        </InfoBlock>
        <InfoBlock>
          <Top>Service</Top>
          <Bottom>{project.service}</Bottom>
        </InfoBlock>
      </InformationWrapper>
      <div>
        <div
          style={{ color: "green" }}
          dangerouslySetInnerHTML={{ __html: postNode.html }}
        />
      </div>
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
