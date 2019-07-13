import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import get from 'lodash/fp/get';

function BlogPost(props) {
  const slug = get('post.slug', props);
  const title = get('post.title', props);

  return (
    <div>
      <h2>
        <Link to={`/blog/${slug}`}>{title}</Link>
      </h2>
    </div>
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
