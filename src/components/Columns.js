import React from 'react';
import PropTypes from 'prop-types';

import ClassName from 'models/ClassName';

const Columns = ({ children, className }) => {
  const componentClass = new ClassName( 'columns' );
  if ( className ) componentClass.add( className );
  return <div className={componentClass.string}>{ children }</div>;
};

Columns.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf( PropTypes.node ), PropTypes.node]).isRequired,
  className: PropTypes.string
};

export default Columns;
