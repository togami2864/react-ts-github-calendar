import React from 'react';
import ReactGithubCalendar from '../src/react-ts-github-calendar';
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

/////////////////////// Under Construction ///////////////////////

// import { create, act } from 'react-test-renderer';
// import 'isomorphic-fetch';

// it('test', async () => {
//   console.dir(window.document);
//   console.log(document.createElement('div'));
//   let component;
//   await act(async () => {
//     component = await create(<ReactGithubCalendar userName="togami2864" />, {
//       createNodeMock: (element) => ({
//         ...element,
//       }),
//     });
//     console.log(component.toJSON());
//   });
// });

// TypeError: Cannot read property 'createElement' of null
// In github-calendar, window.document isn't defined.
// For some reason, jsDOM has not been applied
