//
// application/jsonで受け取り、JSONで返す
//
function doPost(e) {

  //パラメータ取得（設定無しなら""を挿入）
  const params = JSON.parse(e.postData.contents);
  const title = params.title || "";
  const email = params.email || "";
  const message = params.message || "";

  //バリデーション用の正規表現定義
  const regex_title = /^.{1,10}$/;
  const regex_email = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
  const regex_message = /^.{1,10}$/;

  //各値のチェック。不正値があれば、そこで処理を停止しreturn。
  if (!regex_title.test(title)) {
    return ContentService.createTextOutput(JSON.stringify({ status: "error", message: "問合せタイトルの値が不正です。" }))
      .setMimeType(ContentService.MimeType.JSON);
  }

  if (!regex_email.test(email)) {
    return ContentService.createTextOutput(JSON.stringify({ status: "error", message: "Emailの値が不正です。" }))
      .setMimeType(ContentService.MimeType.JSON);
  }

  if (!regex_message.test(message)) {
    return ContentService.createTextOutput(JSON.stringify({ status: "error", message: "問合せ内容の値が不正です。" }))
      .setMimeType(ContentService.MimeType.JSON);
  }

  //パラメータに問題が内場合、処理を継続

  //スプレッドシート用意
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const sheet = ss.getSheetByName("シート1");

  //書き込み
  sheet.appendRow([title, email, message, new Date()]);

  //意図的に2秒Sleep（クライアント側で送信中の動作確認のため）
  Utilities.sleep(2000);

  //レスポンス
  return ContentService.createTextOutput(JSON.stringify({ status: "success", message: "受け付けました!" }))
    .setMimeType(ContentService.MimeType.JSON);

}
