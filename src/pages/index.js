import React from 'react';
import { graphql } from 'gatsby';
import get from 'lodash/fp/get';

import Layout from '../components/layout';
import BlogPostPreview from '../components/blog-post-preview';
import SEO from '../components/seo';

export const query = graphql`
  query HomeQuery {
    allContentfulBlogPost(sort: { fields: [publishDate], order: DESC }) {
      edges {
        node {
          id
          slug
          tags
          publishDate(formatString: "MMMM YYYY")
          title
          body {
            childMarkdownRemark {
              excerpt
            }
          }
        }
      }
    }
  }
`;

function IndexPage(props) {
  const posts = get('data.allContentfulBlogPost.edges', props);
  return (
    <Layout>
      <SEO title="Home" />
      {posts ? <BlogPosts posts={posts} /> : 'Loading...'}
    </Layout>
  );
}

function BlogPosts({ posts }) {
  return posts.map(post => <BlogPostPreview key={post.node.id} post={post.node} />);
}

export default IndexPage;
