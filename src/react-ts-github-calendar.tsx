import React, { useRef, useEffect } from 'react';
import GithubCalendar from 'github-calendar';
import './style.css';
import ReactDOM from 'react-dom';

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

export const ReactGithubCalendar: React.FC<props> = ({
  userName,
  option,
}): React.ReactElement => {
  const ref = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    GithubCalendar(ref.current, userName, { ...option });
  }, [option, userName]);
  return <div ref={ref}>now loading</div>;
};

// export default ReactGithubCalendar;

ReactDOM.render(
  <ReactGithubCalendar userName="togami2864" />,
  document.getElementById('root'),
);
