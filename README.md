# Simple API GAS

Google App Script用のシンプルなAPI。

# 動作確認

APIのURLに対し、以下で動作確認可能。

```
curl -L -d "title=hoge&email=test@test.local&message=foo" https://script.google.com/macros/s/{デプロイID}/exec
```

>{デプロイID}は各自の環境依存。
>GASで作成したAPIはリダイレクトされるので、-Lが必要。

# セットアップ方法

contact.js中のコードを[Googleスプレッドシード]->[拡張機能]->[App Script]のコード中に貼り付けて実行。

> GASのコードの拡張子は.gsだが、ローカルでの取扱やすさのため.jsで保存している。
> 詳細別途説明予定

# Requirements

特になし。

- Google Spread Sheet

# 学習コンテンツとしてのゴール

## 技術系

- （Web）APIとは何かを理解、説明できるようにする

## PM系

- APIの仕様書を作成してみる
- 他の技術でAPIを実装、デプロイしてみる

# ライセンス

一応MIT licenseとしておきます。

# 関連コンテンツ

随時公開。