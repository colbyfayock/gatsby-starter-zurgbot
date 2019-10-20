import React from 'react';
import PropTypes from 'prop-types';

const Container = ({ children, className }) => {
  return <div className={`container ${className || ''}`}>{ children }</div>;
};

Container.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string
};

export default Container;
