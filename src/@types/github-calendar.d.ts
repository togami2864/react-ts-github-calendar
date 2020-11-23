declare module 'github-calendar' {
  function GithubCalender(
    element: HTMLDivElement | null,
    name: string,
    option?: options,
  ): React.ReactNode;
  export default GithubCalender;
}

type options = {
  responsive?: boolean;
  tooltips?: boolean;
  summary_text?: string;
  proxy?: boolean;
  global_stats?: boolean;
  cache?: number;
};
