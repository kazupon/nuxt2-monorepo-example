# Monorepo example for Nuxt2 apps project

このレポジトリは、複数の Nuxt2 アプリ間で共有化されたコードを Monorepo を使ってパッケージ管理するための example なものです

## 動作条件

npm v7 が動作する Node.js 環境 (npm の workspaces を利用してるため)

## パッケージ構造

- `app1`
  - Nuxt2 で実装されたアプリ
- `app2`
  - Nuxt2 で実装されたアプリ
- `assets`
  - `app1` 、`app2` で使うために共有化された CSS 等の assets 一式
  - バンドラの alias 機能で定義したパスで import によって参照される example 的なパッケージ
  - この example では、`app1` に参照されている
- `components`
  - `app1` 、`app2` で使うために共有化された Vue コンポーネント
  - バンドラの alias 機能で定義したパスで import によって参照される example 的なパッケージ
  - この example では、`app2` に参照されている
- `composables`
  - `app1` 、`app2` で使うために共有化された Composition API で実装された合成 (composable) 可能な関数郡
  - バンドラの alias 機能で定義したパスで import によって参照される example 的なパッケージ
  - この example では、`app1` に参照されている
- `helpers`
  - `app1` 、`app2` で使うために共有化されたヘルパー一式
  - バンドラの alias 機能で定義したパスで import によって参照される example 的なパッケージ
  - この example では、`app1` に参照されている
- `module1`
  - `app1` 、`app2` で使うために共有化された Nuxt モジュール。Nuxt プラグインが実装されている
  - パッケージマネージャ(npm)を通して参照される example 的なパッケージ
  - この example では、`app1` 、`app2` に参照されている
  - また、`composables` では、 型を参照(解決)したいのため、そのパッケージでも参照している

## セットアップ

以下のコマンドでセットアップします。

```sh
# Monorepo なプロジェクトのセットアップ
npm install
# `module1` のビルド
npm run build -w module1
```

ちなみに、npm の `-w` オプションに workspaces にある対象パッケージを指定するオプションです

## `module1` パッケージ

`module1` は TypeScript で実装されているので、このパッケージのコードを変更したら随時、ビルドが必要です

ですので、開発時は 以下のように watch モードで随時ビルドしておくとよいでしょう

```sh
npm run watch -w module1
```

## Nuxt2 アプリの開発サーバーの起動

`app1` の場合は以下のようにして起動します

```sh
npm run dev -w app1
```

## パッケージのビルド

この example では、 `app1`、`app2`、そして `module1` がビルド可能です

`app2` の場合は以下のようにしてビルドします

```sh
npm run build -w app1
```

## コードのリント

この example では、ESLint によるリントは、workspaces にあるパッケージ単位ではなく、root で行います

```sh
npm run lint
# もし、ESLint で `--fix` したい場合
npm run lint -- --fix
```

## コードのフォーマット

この example では、Prettier によるコードのフォーマットは、workspaces にあるパッケージ単位ではなく、root で行います

```sh
npm run format
```

## Vue コンポーネントの型チェック

vue-tsc を使うと、VUe コンポーネントの template を型チェックすることができます

この example では、`app1`、`app2` そして `components` の Vue コンポーネントの型チェックが可能です

`components` を型チェックしたい場合は以下のようにして実行します

```sh
npm run typecheck -w components
```
