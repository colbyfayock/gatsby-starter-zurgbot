import React from 'react';
import PropTypes from 'prop-types';

import ClassName from 'models/classname';

const Container = ({ children, className }) => {
  const componentClass = new ClassName( 'container' );
  if ( className ) componentClass.add( className );
  return <div className={componentClass.string}>{ children }</div>;
};

Container.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf( PropTypes.node ), PropTypes.node]).isRequired,
  className: PropTypes.string
};

export default Container;
