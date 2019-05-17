/**
 * Main component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from 'react';
import PropTypes from 'prop-types';

import './MainLayout.scss';

const Main = ({ children }) => (
  <>

    {/* header */}
    <main>{children}</main>
    {/* footer */}

  </>
);

Main.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Main;
