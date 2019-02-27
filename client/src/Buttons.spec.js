import React from 'react';
import { shallow } from 'enzyme';
import Buttons from './Buttons.jsx';

describe('Buttons Component', () => {
  it('should render', () => {
    const buttons = shallow(<Buttons />);
    expect(buttons).toMatchSnapshot();
  });
});