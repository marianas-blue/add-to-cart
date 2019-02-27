import React from 'react';
import { shallow } from 'enzyme';
import Dates from './Dates.jsx';

describe('Dates Component', () => {
  it('should render', () => {
    const dates = shallow(<Dates />);
    expect(dates).toMatchSnapshot();
  });
});