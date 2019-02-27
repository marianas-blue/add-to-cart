import React from 'react';
import { mount, shallow } from 'enzyme';
import DetailsBox from './DetailsBox.jsx';

describe('Details Component', () => {
  it('should render', () => {
    const details = shallow(<DetailsBox />);
    expect(details).toMatchSnapshot();
  });

  it('should call show message on click', () => {
    const showMessage = jest.spyOn(DetailsBox.prototype, 'showMessage');
    const wrapper = mount(<DetailsBox /> );
    const detailsText = wrapper.find('.details');
    detailsText.simulate('click');
    expect(showMessage).toHaveBeenCalledTimes(1);
    expect(wrapper.find('.message').exists()).toEqual(true);
  })

  it('should set the clicked state to true when details is clicked', () => {
    const wrapper = shallow(<DetailsBox />);
    const detailsText = wrapper.find('.details');
    detailsText.simulate('click');
    expect(wrapper.state().clicked).toEqual(true);
  })

});
