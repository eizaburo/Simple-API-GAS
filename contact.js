function doPost(e) {

  //パラメータ取得（設定無しなら""を挿入）
  const title = e.parameter.title || "";
  const email = e.parameter.email || "";
  const message = e.parameter.message || "";

  //バリデーション用の正規表現定義
  const regex_title = /^.{1,10}$/;
  const regex_email = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
  const regex_message = /^.{1,10}$/;


  //各値のチェック。不正値があれば、そこで処理を停止しreturn。
  if (!regex_title.test(title)) {
    return ContentService.createTextOutput("問合せタイトルの値が不正です。");
  }

  if (!regex_title.test(email)) {
    return ContentService.createTextOutput("Emailの値が不正です。");
  }

  if (!regex_title.test(message)) {
    return ContentService.createTextOutput("問合せ内容の値が不正です。");
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
  return ContentService.createTextOutput("受け付けました!");

}