import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';

import { Wrapper, Container, SiteTitle } from './header.styles';

const Header = ({ siteTitle }) => (
  <Wrapper>
    <Container>
      <SiteTitle style={{ margin: 0 }}>
        <Link to="/">{siteTitle}</Link>
      </SiteTitle>
    </Container>
  </Wrapper>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
