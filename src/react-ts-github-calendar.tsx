import React, { useRef, useEffect } from 'react';
import GithubCalendar from 'github-calendar';
import './style.css';

export type props = {
  userName: string;
  responsive?: boolean;
  tooltips?: boolean;
  summary_text?: string;
  proxy?: (userName: string) => Promise<JSX.Element>;
  global_stats?: boolean;
  cache?: number;
};

const ReactGithubCalendar: React.FC<props> = (props) => {
  const {
    userName,
    responsive = false,
    tooltips = false,
    summary_text,
    proxy,
    global_stats = true,
    cache,
  } = props;
  const ref = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    GithubCalendar(ref.current, userName, {
      responsive,
      tooltips,
      summary_text,
      proxy,
      global_stats,
      cache,
    });
  }, []);
  return <div ref={ref}>now loading</div>;
};

export default ReactGithubCalendar;
