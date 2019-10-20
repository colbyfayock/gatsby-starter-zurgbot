import React from 'react';
import { shallow } from 'enzyme';

import Container from 'components/Container';

describe( 'Container', () => {
  const test_class = 'planet-z';
  const test_value = 'Emporer Zurg';
  const test_child = <div className={test_class}>{ test_value }</div>;
  const container = shallow( <Container>{ test_child }</Container> );

  it( 'should render a container with children', () => {
    expect( container.find( `.${test_class}` ).exists()).toEqual( true );
  });
});
