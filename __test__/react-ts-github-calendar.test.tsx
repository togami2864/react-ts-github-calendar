import React from 'react';
import ReactGithubCalendar from '../src/react-ts-github-calendar';
// import { act } from 'react-dom/test-utils';
import { shallow } from 'enzyme';

describe('Before async function is loaded', () => {
  it('should defined', () => {
    expect(ReactGithubCalendar).toBeDefined();
  });
  it('should render correctly ', () => {
    const component = shallow(<ReactGithubCalendar userName="togami2864" />);
    expect(component.text()).toEqual('now loading');
  });
});

// describe('loading async function', () => {
//   const focus = jest.fn();
//   beforeEach(() => {
//     jest.restoreAllMocks();
//     jest.resetAllMocks();
//   });
//   it('should render correctly', () => {
//     const spy = jest
//       .spyOn(ReactGithubCalendar, 'useRef')
//       .mockReturnValueOnce({ current: { focus } });
//     let component;
//     act(() => {
//       component = shallow(<ReactGithubCalendar userName="togami2864" />);
//       console.log(component.debug());
//     });
//   });
// });
