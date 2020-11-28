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
