import styled from '@emotion/styled';

export const Wrapper = styled('header')`
  margin-bottom: 1.45rem;
`;

export const Container = styled('header')`
  margin: 0 auto;
  max-width: 960px;
  padding: 1.45rem 1.0875rem;
`;

export const SiteTitle = styled('h1')`
  font-size: 1.25rem;
  & > a {
    text-decoration: none;
    color: inherit;

    &:hover,
    &:focus {
      text-decoration: underline;
    }
  }
`;
