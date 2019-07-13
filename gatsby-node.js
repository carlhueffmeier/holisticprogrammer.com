const path = require('path');

const ALL_BLOG_POSTS_QUERY = `
{
  allContentfulBlogPost {
    edges {
      node {
        title
        slug
      }
    }
  }
}
`;

async function createPages({ graphql, actions }) {
  const { createPage } = actions;

  const result = await graphql(ALL_BLOG_POSTS_QUERY);
  if (result.errors) {
    // eslint-disable-next-line no-console
    console.error('Error fetching blog posts from Contentful: ', result.errors);
  }

  const posts = result.data.allContentfulBlogPost.edges;
  posts.forEach(post => {
    createPage({
      path: `/blog/${post.node.slug}/`,
      component: path.resolve('./src/components/blog-post.js'),
      context: {
        slug: post.node.slug,
      },
    });
  });
}

exports.createPages = createPages;
