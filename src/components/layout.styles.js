import styled from '@emotion/styled';

export const Page = styled('div')`
  position: relative;
  min-height: 100vh;
`;

export const Main = styled('main')`
  margin: 0 auto;
  max-width: 960px;
  padding: 0px 1.0875rem 3.45rem;
`;

export const Footer = styled('footer')`
  position: absolute;
  bottom: 0;
  height: 2rem;
  width: 100%;
  background: white;

  & > .content {
    margin: 0 auto;
    max-width: 960px;
    text-align: center;
    font-size: 0.7rem;
    font-family: sans-serif;
  }
`;
