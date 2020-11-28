import React from 'react';
import ReactGithubCalendar from '../src/react-ts-github-calendar';
// import { act } from 'react-dom/test-utils';
import { mount } from 'enzyme';

// describe('Before async function is loaded', () => {
//   it('should defined', () => {
//     expect(ReactGithubCalendar).toBeDefined();
//   });
//   it('should render correctly ', () => {
//     const component = shallow(<ReactGithubCalendar userName="togami2864" />);
//     expect(component.text()).toEqual('now loading');
//   });
// });

// describe('loading async function', () => {
it('test2', () => {
  const ele = mount(<ReactGithubCalendar userName="togami2864" />);
  console.log(ele.debug());
});
// });
