import React from 'react';
import { mount, shallow } from 'enzyme';
import DeliverModal from './DeliverModal.jsx';

describe('Deliver Component', () => {
  it('should render', () => {
    const deliver = shallow(<DeliverModal />);
    expect(deliver).toMatchSnapshot();
  });

  it('should call show modal when clicked and modal should exist', () => {
    const showModal = jest.spyOn(DeliverModal.prototype, 'showModal');
    const wrapper = mount(<DeliverModal /> );
    const zipCode = wrapper.find('.zipCode');
    zipCode.simulate('click');
    expect(showModal).toHaveBeenCalledTimes(1);
    expect(wrapper.find('.delivery').exists()).toEqual(true);
  });

  it('should set the showModal state to true when Deliver To is clicked', () => {
    const wrapper = shallow(<DeliverModal />);
    const zipCode = wrapper.find('.zipCode');
    zipCode.simulate('click');
    expect(wrapper.state().modalShow).toEqual(true);
  })
});