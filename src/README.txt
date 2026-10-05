銀座築地 新デザイン ＋ 共通ファビコン アップロード手順
====================================================

このフォルダの中身を、リポジトリの「今あるファイルと同じ場所」に置いてください。
（フォルダ構成はリポジトリと同じ並びにしてあります）

■ 上書きするファイル（2つ）
  store.njk
    → 今の store.njk と同じ場所に上書き
    変更点：①ファビコンの読み込み4行を追加（全店舗共通）
            ②生成対象を stores.stores → stores.stores_default に変更
              （銀座築地を共通デザインから外すため）

  stores.js
    → 今の stores.js と同じ場所（_data フォルダ等）に上書き
    変更点：①銀座築地に layout_variant: "ginza" を1行追加
            ②末尾に stores_default / stores_ginza の振り分けを追加
    ※ 店舗情報（住所・予約URLなど）は一切変えていません

■ 新しく追加するファイル（1つ）
  store-ginza.njk
    → store.njk と同じフォルダに追加
    銀座築地専用のデザイン。URLは今と同じ /tokyo/ginzatsukiji/
    GTM・クリック計測・acq-forward（予約リンクへのutm転記）は今と同じ仕組みです

■ 画像（assets フォルダにそのまま追加）
  assets/favicon.ico            ファビコン（全店舗共通）
  assets/favicon-32.png         〃
  assets/favicon-192.png        〃
  assets/apple-touch-icon.png   iPhoneホーム画面用（全店舗共通）
  assets/brand/                 和牛ロゴ（白・黒・丸）、牛アイコン
  assets/ginzatsukiji/          銀座築地の写真（ヒーロー・メニュー・内観・入口）

  ※ 既存の画像は1枚も上書き・削除しません

■ 変更しないファイル
  partials/acq-forward.njk など、ここに入っていないファイルはそのままでOK

■ 確認ポイント（アップ後）
  1. /tokyo/ginzatsukiji/ が新デザインで表示される
  2. 他の9店舗は今までと同じデザインのまま
  3. ブラウザのタブに牛のアイコンが出る
  4. 予約ボタンを押すと TableCheck が開く

■ 他の店舗も新デザインにしたくなったら
  stores.js でその店舗に layout_variant: "ginza" を足すだけで切り替わります
  （ただしラーメンのメニューと銀座築地の写真がそのまま出るので、店舗別に調整が必要）
