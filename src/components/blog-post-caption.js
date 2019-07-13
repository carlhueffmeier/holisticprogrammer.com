import React from 'react';
import PropTypes from 'prop-types';

import { Wrapper, PublishDate } from './blog-post-caption.styles';

function BlogPostCaption({ publishDate, tags }) {
  return (
    <Wrapper>
      <PublishDate>{publishDate}</PublishDate>
      {tags.map(tag => (
        <span key={tag}>{tag}</span>
      ))}
    </Wrapper>
  );
}

BlogPostCaption.propTypes = {
  publishDate: PropTypes.string,
  tags: PropTypes.arrayOf(PropTypes.string),
};

BlogPostCaption.defaultProps = {
  tags: [],
};

export default BlogPostCaption;
