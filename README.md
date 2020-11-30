# react-ts-github-calendar

[github-calendar](https://github.com/IonicaBizau/github-calendar) wrapper component for react + typescript

# :cloud:Installation

You can install it like every other library with **yarn**

```sh
yarn add -D @togami2864/react-ts-github-calendar
```

or with **npm**

```sh
npm install --save @togami2864/react-ts-github-calendar
```

# 📚Usage

## Basic Example

The component work without any additional setup.

```js
// App.tsx
import React from 'react';
import ReactGitHubCalendar from '@togami2864/react-ts-github-calendar';

// your own component name
export const App: React.FC = () => {
  return <ReactGitHubCalendar userName="YOUR ACCOUNT NAME" />;
};
```

You have to pass **userName** to component.

## Required Props

| Name     | Type   | Description         | Default |
| -------- | ------ | ------------------- | ------- |
| userName | String | The GitHub username | ''      |

## Options

| Name         | Type     | Description                                                                                                                                                          | Default                                                                   |
| ------------ | -------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------- |
| responsive   | Boolean  | If true, the graph is changed to scale with the container. Custom CSS should be applied to the element to scale it appropriately.                                    | false                                                                     |
| tooltips     | Boolean  | If true, tooltips will be shown when hovered over calendar days.                                                                                                     | false                                                                     |
| global_stats | Boolean  | If false, the global stats (total, longest and current streaks) will not be calculated and displayed.                                                                | true                                                                      |
| summary_text | String   | The text that appears under the calendar                                                                                                                             | "Summary of pull requests, issues opened, and commits made by <userName>" |
| cache        | Number   | The cache time in seconds.                                                                                                                                           | (24 _ 60 _ 60) \* 1000                                                    |
| proxy        | Function | A function that receives as argument the username (string) and should return a promise resolving the HTML content of the contributions page. We need proxy for CORS. | The default is using [@Bloggify's ](https://github.com/Bloggify)APIs.     |
