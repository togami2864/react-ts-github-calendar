declare module 'github-calendar' {
  function GithubCalender(
    element: HTMLDivElement | null,
    name: string,
    option?: {
      responsive?: boolean;
      tooltips?: boolean;
      summary_text?: string;
      proxy?: (userName: string) => Promise<HTMLElement>;
      global_stats?: boolean;
      cache?: number;
    },
  ): Promise<void>;
  export default GithubCalender;
}
