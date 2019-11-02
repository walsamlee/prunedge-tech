// react
import React from 'react';

// third-party
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

// component
import Menu from '../';

configure({ adapter: new Adapter() });

describe('Menu component', () => {
  it('should render Menu', () => {
    const wrapper = shallow(
      <Menu />,
    );
    expect(wrapper).toMatchSnapshot();
  });
});
