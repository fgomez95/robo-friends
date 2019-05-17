import {shallow, mount, render} from 'enzyme';
import Card from './Card';
import React from 'react';

it('render without crashing', () => {
  expect(shallow(<Card />).length).toEqual(1);
});