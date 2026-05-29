# プロジェクトの作成方法
```
npx create-react-app <プロジェクトの名前>
```
## 注意
* プロジェクトの名前に大文字、スペースは利用できない
* gemini曰くこのプロジェクト作成コマンドは現在(2026/05/23)推奨されていないらしい。今回は、自力で調べて作成するため、参考にしているサイトを参照しながら作成する。

その後、プロジェクトにcdし、以下のコマンドで、プロジェクトのlocalサーバを立ち上げることができる。
```
npm start
```
もし、これでエラーが出る場合は、プロジェクトの中にnode_modules(実行に必要なパッケージ群)がダウンロードされていないことが考えられる。そのときは、以下のコマンドでパッケージをダウンロードする。
```
npm install
```


できるだけシンプルにするために、フォルダー構成を以下のようにする。
```
.
├── node_modules
├── package-lock.json
├── package.json
├── public
│   └── index.html
├── README.md
└── src
    └── index.js
```

# index.htmlについて
index.htmlは、npm startでプロジェクトが起動した際に、最初にブラウザーで実行されるファイル。

index.htmlは通常、Reactコンポーネントをブラウザ画面上に表示するためのコードを配置する役割がある。

コンポーネントとは、画面に表示される部品のことで、表示に必要なデータや処理などを1つのオブジェクトにまとめたもの。コンポーネントを組み合わせることで、より大きなアプリケーションを構築することができる。

```
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="theme-color" content="#000000" />
    <meta
      name="description"
      content="Web site created using create-react-app"
    />
    <title>React App</title>
  </head>
  <body>
    <noscript>You need to enable JavaScript to run this app.</noscript>
    <div id="root"></div>
  </body>
</html>
```

index.htmlの<div>要素には、通常rootというidが指定されている。これは、Reactコンポーネントをブラウザ上で表示させる際に、この<div id="root">要素の中にReactアプリケーションを表示させる意味がある。

# コンポーネントの種類
Reactのコンポーネントは2種類存在する。
* 関数コンポーネント : jsの関数を利用してコンポーネントを定義する。アロー関数や通常の関数を利用してコンポーネントを作成する。
* クラスコンポーネント : クラスを拡張してコンポーネントを作成することができる。

# コンポーネントをブラウザ画面上に表示する5つの手順
1. ReactとReactDOMのライブラリーをインポート(import)すること。
2. index.htmlファイルの<div id="root">要素への参照を取得すること。	
3. Reactにindex.htmlファイルの<div id="root">要素の参照を渡す。
4. コンポーネントを作成する。	
5. index.htmlファイルの<div id="root">要素の中にコンポーネントを表示させる。

これらの手順は、srcフォルダーの中にあるindex.jsの中で行われる。

# index.jsについて
index.jsはReactアプリケーションのエントリーポイントとして機能するファイルである。Reactアプリケーションでは、通常、index.jsからReactコンポーネントをindex.htmlファイルの<div id="root">要素にレンダリングするためのコードを記述する。

# Reactのwebアプリケーションをgithub pagesに公開する方法
以下を実行する。
```
npm install gh-pages --save-dev
```
インストールが終了したら、packege.jsonに設定を書き込む。書き込む箇所は3つである。
```
{
  "name": "number-base-conversion",
  "version": "0.1.0",
  "homepage": "https://<あなたのGitHubのユーザー名>.github.io/<リポジトリ名>",
  // ... (続き)
}
"scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject",
    "predeploy": "npm run build",     // ◀ これを追加
    "deploy": "gh-pages -d build"     // ◀ これを追加
  },
  ```
  その後、githubにファイルをpushする。

  最後に、ターミナルで以下のコマンドを実行する。
  ```
  npm run deploy
  ```



# 参考サイト
* Reactのプロジェクト作成方法 : https://zenn.dev/distinction/books/c9bb47e28d4b01/viewer/a7dc82