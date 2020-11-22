import React, { useEffect, useRef } from 'react';
import GithubCalendar from 'github-calendar';

const ReactGithubCalendar = ({
  userName,
}: {
  userName: string;
}): JSX.Element => {
  const ref = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    GithubCalendar(ref.current, userName);
  }, [userName]);
  return <div ref={ref}></div>;
};

export default ReactGithubCalendar;
