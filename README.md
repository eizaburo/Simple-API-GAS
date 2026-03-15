# simple-api-gas

学習用のシンプルなAPI実装（Google App Script版）
simple-web-*シリーズとの連携を想定。

## ファイル解説

以下、２つのパターンのファイルが存在。

- contact_urlencoded.js
  - application/x-www-form-urlencodedを想定
- contact_json.js
  - application/jsonを想定



## 動作確認

### 単体

とりえずの動作確認はcurl等で以下のように可能。

#### application/json

```bash
curl -L \
-d '{"title":"foo"}' \
-H "Content-type: application/json" \
https://script.google.com/macros/s/<デプロイID>/exec
```


#### application/x-www-form-urlencoded

```bash
curl -L \
-d "title=hoge&email=test@test.local&message=foo" \
-H "Content-type: application/x-www-form-urlencoded" \
https://script.google.com/macros/s/{デプロイID}/exec
```

#### curl実行時の注意点

- GASはリダイレクトされる仕様なので、リダイレクトに対応してないcurlで利用する際は-Lをしていする。なお、-X POSTは**つけてはダメ**なのがポイント。


## セットアップ方法

contact_json.jsもしくはcontact_urlencoded.js中のコードを[Googleスプレッドシード]->[拡張機能]->[App Script]のコード中に貼り付けて実行。

> GASのコードの拡張子は.gsだが、ローカルでの取扱やすさのため.jsで保存している。

## ライセンス

一応MIT licenseとしておきます。

## 関連コンテンツ

随時公開。