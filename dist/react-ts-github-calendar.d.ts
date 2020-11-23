/// <reference types="react" />
export declare type options = {
    responsive?: boolean;
    tooltips?: boolean;
    summary_text?: string;
    proxy?: boolean;
    global_stats?: boolean;
    cache?: number;
};
declare const ReactGithubCalendar: ({ userName, option, }: {
    userName: string;
    option?: options | undefined;
}) => JSX.Element;
export default ReactGithubCalendar;
