import React, { useEffect, useRef } from 'react';
import GithubCalendar from 'github-calendar';

export type options = {
  responsive?: boolean;
  tooltips?: boolean;
  summary_text?: string;
  proxy?: (userName: string) => Promise<JSX.Element>;
  global_stats?: boolean;
  cache?: number;
};

const ReactGithubCalendar = ({
  userName,
  option,
}: {
  userName: string;
  option?: options;
}): JSX.Element => {
  const ref = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    GithubCalendar(ref.current, userName, { ...option });
  }, [option, userName]);
  return <div ref={ref}></div>;
};

export default ReactGithubCalendar;
