import React from 'react';
import PropTypes from 'prop-types';

import './MainLayout.css';

const Main = ({ children }) => (
  <div>
    { children }
  </div>
);

Main.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Main;
