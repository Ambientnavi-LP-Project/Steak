# Halal Wagyu Steak & Burger LP

業態: **Halal Wagyu Steak & Burger**
ドメイン: `steak.halal-food-wagyu.com`
GTMコンテナID: `GTM-5DGT9H6L`（GA4への送信はGTM側で設定）

Eleventy(11ty)製の静的サイト。1つのテンプレ + 店舗データから、全店舗ページを自動生成する。

## ⚠️ 重要: 画像フォルダ名は `assets/`(他業態は `image/`)

この業態だけ、画像配置先は `src/assets/` です。テンプレ内も全部 `/assets/...` を参照しています。
他業態(`japanese-burger`, `sandwich`)は `src/image/` を使うので混同しないように。

## ディレクトリ

```
.
├── .eleventy.js              ← Eleventy設定
├── package.json
├── vercel.json               ← Vercel設定
├── src/
│   ├── _data/stores.js       ← 業態設定と店舗データ
│   ├── store.njk             ← 全店舗共通のページテンプレ
│   └── assets/               ← 画像・動画(配信)
└── _site/                    ← ビルド成果物
```

## ローカルで動かす

```bash
npm install
npm run dev
# → http://localhost:8080/tokyo/ginzatsukiji/
```

## 店舗を追加する手順

`src/_data/stores.js` の `stores` 配列に1つオブジェクトを追加するだけ。

## 計測イベント一覧

このLPで実際に実装しているイベント。
計測は **GTM コンテナ `GTM-5DGT9H6L`** 1本に集約している。

| イベント名 | 発火する場所 | 実装 |
|---|---|---|
| `reserve_click` | ヒーロー／アクセス欄／フッターの「Reserve a Table」「RESERVATION」（TableCheckへの外部リンク） | `data-ga-event="reserve_click"` |
| `tel_click` | ヒーロー／アクセス欄／フッターの電話予約ボタン（`tablecheck_url` が空の店舗で表示） | `data-ga-event="tel_click"` |
| `map_click` | ヒーロー／地図下「OPEN IN MAPS」／アクセス欄／フッターの Googleマップリンク | `data-ga-event="map_click"` |
| `scroll_depth` | ページのスクロール到達率 | GTM組み込みトリガー（コード実装なし） |

### 仕組み

計測方式は **1つだけ**。計測したい要素に `data-ga-event="イベント名"` を付けると、
ページ末尾の委譲リスナー1本が `dataLayer` に push する。

```js
window.dataLayer.push({ event: el.getAttribute('data-ga-event') });
```

店舗名・エリアなどの**パラメータはコード側で組み立てない**。
GTM 側で URL（ホスト名／パス）から解決する。
そのため `stores.js` に店舗を追加しても、計測用の設定を書き足す必要はない。

### 実装していないもの

- **地図の埋め込み（iframe）**は計測対象外。ブラウザの仕様上、iframe 内部のクリックは
  親ページの JavaScript では検知できない。地図の反応は「OPEN IN MAPS」リンクで見る。
- `outbound_click` は外部SNSリンク用だが、このLPには Instagram 等のリンクがない。
- `reservation_form_submit` / `final_check_view` は自社予約フォームを使うLP用。このLPは対象外。
- `course_select` はコース選択UIがあるLP用。このLPにはコース選択UIがない。

## UTM付きURL

**Googleマップのプロフィール用:**
```
https://steak.halal-food-wagyu.com/tokyo/ginzatsukiji/?utm_source=google-maps-hp&utm_medium=organic&utm_campaign=profile
```

**Google広告のウェブサイトボタン用:**
```
https://steak.halal-food-wagyu.com/tokyo/ginzatsukiji/?utm_source=google-ads-website&utm_medium=cpc&utm_campaign=store
```

