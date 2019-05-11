import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';

import Post from '../models/post';

import Layout from 'components/Layout';

const Template = ({ location, data }) => {
  const post = new Post(data.markdownRemark);

  return (
    <Layout location={location}>
      <article
        className="container article-content"
        itemScope=""
        itemType="http://schema.org/BlogPosting"
      >
        {JSON.stringify(post)}
      </article>
    </Layout>
  );
};

Template.propTypes = {
  location: PropTypes.string,
  data: PropTypes.object
};

export default Template;

export const pageQuery = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
      }
      fields {
        slug
      }
    }
  }
`;
