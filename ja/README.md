# react-ts-github-calendar

[github-calendar](https://github.com/IonicaBizau/github-calendar) のラッパーコンポーネント(TypeScript 対応)です。

# :cloud:Installation

他のライブラリと同じように**yarn**でインストールできます。

```sh
yarn add -D @togami2864/react-ts-github-calendar
```

または **npm**

```sh
npm install --save @togami2864/react-ts-github-calendar
```

# :books:使用方法

## 使用例

他に特別なセットアップはいりません。

```js
// App.tsx
import React from 'react';
import ReactGitHubCalendar from '@togami2864/react-ts-github-calendar';

// 任意の名前
export const App: React.FC = () => {
  return <ReactGitHubCalendar userName="YOUR ACCOUNT NAME" />;
};
```

・ 必ずコンポーネントに**userName**を渡してください。

## 必須

| Name     | Type   | Description             | Default 値                             |
| -------- | ------ | ----------------------- | -------------------------------------- |
| userName | String | GitHub のユーザーネーム | &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'' |

## Options

| Name         | Type     | Description                                                                                                               | Default 値                                                                        |
| ------------ | -------- | ------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- |
| responsive   | Boolean  | `true` の場合、要素にはカスタム CSS が適用され、レスポンシブ対応されます。                                                | false                                                                             |
| tooltips     | Boolean  | `true` の場合、カレンダーの日付にカーソルを合わせた際に、ツールチップスが表示されます。                                   | false                                                                             |
| global_stats | Boolean  | `false` の場合、グローバル統計（合計 contribution 数、最長のストリーク、現在のストリーク）は計算されず、表示されません。  | true                                                                              |
| summary_text | String   | カレンダーの下に表示されるテキスト                                                                                        | "Summary of pull requests, issues opened, and commits made by USERNAME"           |
| cache        | Number   | 秒単位のキャッシュ時間                                                                                                    | (24 \* 60 \* 60) \*1000                                                           |
| proxy        | Function | 引数として userName を受け取り、投稿ページの HTML コンテンツを解決するプロミスを返す関数です。CORS 対策のため、必要です。 | デフォルトでは [@Bloggify's ](https://github.com/Bloggify)の API を使っています。 |

### Example

```js
<ReactGitHubCalendar tooltips responsive/>
// tooltips = true, responsive = true

<ReactGitHubCalendar global_stats={false} cache={(12 * 60 * 60)*1000}/>
```

## With Next.js

このコンポーネントを Next.js で使うときは, SSR を回避するために dynamic import を使用する必要があります。

```js
const ReactGitHubCalendar = dynamic(() => import('react-ts-github-calendar'), {
  ssr: false,
});
```

これをしないと、以下のようなエラーが発生します。

```
window is not defined

or

document is not defined
```

# :rotating_light:注意

ストリーク数と Contribution 数がうまく表示されない(すべて 0 と表示される)ときがあります。<br/>
数日置く(変更が反映されるのに時間がかかる時があるため)、もしくはキャッシュを削除して再読み込みするとなおる可能性があります。
