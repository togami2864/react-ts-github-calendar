import React, { useRef, useEffect } from 'react';
import GithubCalendar from 'github-calendar';
import './style.css';

type option = {
  userName: string;
  responsive?: boolean;
  tooltips?: boolean;
  summary_text?: string;
  proxy?: (userName: string) => Promise<HTMLElement>;
  global_stats?: boolean;
  cache?: number;
};

const ReactGithubCalendar: React.FC<option> = (props) => {
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
      cache,
      global_stats,
      proxy,
      responsive,
      summary_text,
      tooltips,
    });
  }, [
    cache,
    global_stats,
    proxy,
    responsive,
    summary_text,
    tooltips,
    userName,
  ]);
  return (
    <div ref={ref} id="github-container">
      now loading
    </div>
  );
};

export default ReactGithubCalendar;
