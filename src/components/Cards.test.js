import {shallow} from 'enzyme';
import Cards from './Cards';
import React from 'react';

const robots = [
  {
    id: 1,
    name: 'john snow',
    email: 'jsnow@gmail',
  }
]
it('render without crashing', () => {
  expect(shallow(<Cards data={robots}/>)).toMatchSnapshot();
});