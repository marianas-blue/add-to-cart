import React from 'react';
import { mount, shallow } from 'enzyme';
import AddToListModal from './AddToListModal.jsx';

describe('AddToList Component', () => {
  it('should render', () => {
    const addToList = shallow(<AddToListModal />);
    expect(addToList).toMatchSnapshot();
  });

  it('should call add to list modal show when clicked and modal should exist', () => {
    const addToListModalShow = jest.spyOn(AddToListModal.prototype, 'addToListModalShow');
    const wrapper = mount(<AddToListModal /> );
    const addButton = wrapper.find('.addButton');
    addButton.simulate('click');
    expect(addToListModalShow).toHaveBeenCalledTimes(1);
    expect(wrapper.find('.list').exists()).toEqual(true);
  });

  it('should set the addToListModalShow state to true when Add To List is clicked', () => {
    const wrapper = shallow(<AddToListModal />);
    const addButton = wrapper.find('.addButton');
    addButton.simulate('click');
    expect(wrapper.state().addToListModalShow).toEqual(true);
  })
 
});