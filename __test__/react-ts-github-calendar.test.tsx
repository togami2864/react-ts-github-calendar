import React from 'react';
import ReactGithubCalendar from '../src/react-ts-github-calendar';
// import { act } from 'react-dom/test-utils';
// import { mount } from 'enzyme';
// import TestRenderer from 'react-test-renderer';
// import { cleanup, logDOM } from '@testing-library/react';
import 'isomorphic-fetch';
import { create, act } from 'react-test-renderer';

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
// afterEach(cleanup);
it('test', async () => {
  console.dir(window.document);
  console.log(document.createElement('div'));
  let component;
  await act(async () => {
    component = await create(<ReactGithubCalendar userName="togami2864" />, {
      createNodeMock: (element) => ({
        ...element,
      }),
    });
    console.log(component.toJSON());
    // console.log(component.rendered.props);
  });
  // expect(console.log(component.toJSON()));
});
// console.log(component.toJSON());
// console.log(component.toJSON());

// });
