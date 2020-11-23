import React, { useRef, useEffect } from 'react';
import GithubCalendar from 'github-calendar';
import './style.css';

export type options = {
  responsive?: boolean;
  tooltips?: boolean;
  summary_text?: string;
  proxy?: (userName: string) => Promise<JSX.Element>;
  global_stats?: boolean;
  cache?: number;
};

export type props = {
  userName: string;
  option?: options;
};

const ReactGithubCalendar: React.FC<props> = ({
  userName,
  option,
}): React.ReactElement => {
  const ref = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    GithubCalendar(ref.current, userName, { ...option });
  }, [option, userName]);
  return <div ref={ref}>now loading</div>;
};

export default ReactGithubCalendar;
