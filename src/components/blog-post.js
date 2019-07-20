import React from 'react';
import { graphql } from 'gatsby';
import get from 'lodash/fp/get';

import Layout from './layout';
import SEO from './seo';
import { PublishDate, BlogPostTitle } from './blog-post.styles';

function BlogPost(props) {
  const title = get('data.contentfulBlogPost.title', props);
  const publishDate = get('data.contentfulBlogPost.publishDate', props);
  const body = get('data.contentfulBlogPost.body.childMarkdownRemark.html', props);

  return (
    <Layout>
      <SEO title={title} />
      <BlogPostTitle>{title}</BlogPostTitle>
      <PublishDate>{publishDate}</PublishDate>
      <div
        dangerouslySetInnerHTML={{
          __html: body,
        }}
      />
    </Layout>
  );
}

export const query = graphql`
  query BlogPostBySlug($slug: String!) {
    contentfulBlogPost(slug: { eq: $slug }) {
      title
      tags
      publishDate(formatString: "MMMM YYYY")
      heroImage {
        sizes(maxWidth: 1180, background: "rgb:000000") {
          ...GatsbyContentfulSizes_withWebp
        }
      }
      body {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`;

export default BlogPost;
