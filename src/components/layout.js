import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';

import Header from './header';
import { Page, Main, Footer } from './layout.styles';
import './layout.css';

function Layout({ children }) {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <Page>
      <Header siteTitle={data.site.siteMetadata.title} />
      <Main>{children}</Main>
      <Footer>
        <div className="content">
          © {new Date().getFullYear()}
          {` `}Carl Huffmeier
        </div>
      </Footer>
    </Page>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
