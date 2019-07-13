import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import get from 'lodash/fp/get';

import BlogPostCaption from './blog-post-caption';

function BlogPost(props) {
  const slug = get('post.slug', props);
  const publishDate = get('post.publishDate', props);
  const tags = get('post.tags', props);
  const title = get('post.title', props);
  const excerpt = get('post.body.childMarkdownRemark.excerpt', props);

  return (
    <article>
      <h2>
        <Link to={`/blog/${slug}`}>{title}</Link>
      </h2>
      <BlogPostCaption publishDate={publishDate} tags={tags} />
      <p>{excerpt}</p>
    </article>
  );
}

BlogPost.propTypes = {
  post: PropTypes.shape({
    id: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }),
};

BlogPost.defaultProps = {
  post: {},
};

export default BlogPost;
