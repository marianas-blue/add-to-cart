import React from 'react';
import { shallow } from 'enzyme';
import App from './App.jsx';

describe('App Component', () => {
  it('should render', () => {
    const app = shallow(<App />);
    expect(app).toMatchSnapshot();
  });
});
