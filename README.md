# Simple API GAS

学習用のシンプルなAPI実装（Google App Script版）
[Simple Basic Web](https://github.com/eizaburo/simple-basic-web)のextension/api-gasブランチとの連携を想定した仕様になっています。

# 動作確認

## 単体

とりえずの動作確認はcurl等で以下のように可能。

```
curl -L -d "title=hoge&email=test@test.local&message=foo" https://script.google.com/macros/s/{デプロイID}/exec
```

>{デプロイID}は各自の環境依存。
>GASで作成したAPIはリダイレクトされるので、-Lが必要。

## Web連携（参考）

Simple Basic Webのextension/api-gasブランチをcloneし、api_url値を適切に変更して実行。

# セットアップ方法

contact.js中のコードを[Googleスプレッドシード]->[拡張機能]->[App Script]のコード中に貼り付けて実行。

> GASのコードの拡張子は.gsだが、ローカルでの取扱やすさのため.jsで保存している。
> 詳細別途説明予定

# Requirements

特になし。

- Google Spread Sheet

# 学習コンテンツとしてのゴール

## 技術系

- （Web）APIとは何かを理解し、説明してみる

## PM系

- APIの仕様書を作成してみる
- 他の技術でAPIを実装、デプロイしてみる

## テスト系（技術・PM共通）

- このAPIのテスト計画書を作成してみる
- このASPに対するテストシナリオを作成してみる
- テストを実行してみる
- テストを自動実行してみる
- テスト結果をまとめみる

# ライセンス

一応MIT licenseとしておきます。

# 関連コンテンツ

随時公開。