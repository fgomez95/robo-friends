import {shallow} from 'enzyme';
import React from 'react';
import MainPage from './MainPage';

let wrapper;
beforeEach(() => {
  const mockProps = {
    onGetRobots: jest.fn(),
    robots: [],
    searchField: '',
  }
  wrapper = shallow(<MainPage {...mockProps} />);
});

describe('Main Page', () => {
  it('renders without crashing', () => {
    expect(wrapper).toMatchSnapshot();
  });
  it('filter the robots correctly', () => {
    const mockProps2 = {
      onGetRobots: jest.fn(),
      robots: [{
        id: 3,
        name: 'Fernando',
        email: 'fgomez@gmail.com',
      }],
      searchField: 'fuck you',
    }
    const wrapper2 = shallow(<MainPage {...mockProps2}/>);
    expect(wrapper.instance().filterRobots()).toEqual([]);
    expect(wrapper2.instance().filterRobots()).toEqual([]);
  });
  it('filter the robots correctly 2', () => {
    const mockProps3 = {
      onGetRobots: jest.fn(),
      robots: [{
        id: 3,
        name: 'Fernando',
        email: 'fgomez@gmail.com',
      }],
      searchField: 'fer',
    }
    const wrapper3 = shallow(<MainPage {...mockProps3}/>);
    expect(wrapper3.instance().filterRobots()).toEqual(mockProps3.robots);
  });
});