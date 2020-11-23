declare module 'github-calendar' {
  function GithubCalender(
    element: HTMLDivElement | null,
    name: string,
    option?: {
      responsive?: boolean;
      tooltips?: boolean;
      summary_text?: string;
      proxy?: (userName: string) => Promise<JSX.Element>;
      global_stats?: boolean;
      cache?: number;
    },
  ): React.ReactElement;
  export default GithubCalender;
}
