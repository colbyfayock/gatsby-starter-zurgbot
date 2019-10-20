import React from 'react';
import PropTypes from 'prop-types';

import ClassName from 'models/classname';

const Column = ({ children, className }) => {
  const componentClass = new ClassName( 'column' );
  if ( className ) componentClass.add( className );
  return <div className={componentClass.string}>{ children }</div>;
};

Column.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf( PropTypes.node ), PropTypes.node]).isRequired,
  className: PropTypes.string
};

export default Column;
