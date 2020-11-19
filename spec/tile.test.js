import React from 'react';
import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Tile from '../client/src/Tile';

Enzyme.configure({ adapter: new Adapter() });

describe('Tile Component', () => {
  it('should render', () => {
    const wrapper = shallow(<Tile />);
    expect(wrapper.exists()).toBeTruthy();
  });

  // it('should show name of product', () => {
  //   const wrapper = shallow(<Tile product={product} />);
  //   const name = wrapper.find('h3');
  //   expect(name.text()).toBe('Kind Bars, Salted Caramel');
  // });
})