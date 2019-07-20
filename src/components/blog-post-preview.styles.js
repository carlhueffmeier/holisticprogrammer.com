import styled from '@emotion/styled';

export const BlogPostTitle = styled('h2')`
  margin-top: 1.5rem;
  margin-bottom: 3rem;
  & > a {
    text-decoration: none;
    color: inherit;

    &:hover,
    &:focus {
      text-decoration: underline;
    }
  }
`;

export const Excerpt = styled('p')`
  font-size: 1.5rem;
`;
