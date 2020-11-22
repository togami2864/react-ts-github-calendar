import React, { useEffect, useRef } from 'react';
import GithubCalendar from 'github-calendar';

const ReactGithubCalendar = (): JSX.Element => {
  const ref = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    GithubCalendar(ref.current, 'togami2864');
  }, []);
  return <div ref={ref}></div>;
};

export default ReactGithubCalendar;
