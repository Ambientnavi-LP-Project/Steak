/**
 * 店舗データ定義(steak業態)
 * 新しい店舗を追加するときは、この配列に store オブジェクトを追加するだけ。
 * Eleventy が自動で /{region}/{slug}/index.html を生成します。
 *
 * 地図キーは maps_embed / maps_link（ramen業態と統一）。
 * maps_embed は <iframe> の src= の中身（URL文字列）のみを入れること。
 */
module.exports = {
  brand: {
    domain: "steak.halal-food-wagyu.com",
    ga4_id: "G-HQ62CMRJKR",
    brand_name: "Halal Wagyu Steak & Burger",
    brand_slug: "steak"
  },
  stores: [
    {
      // ===== URL/識別 =====
      region: "tokyo",
      slug: "ginzatsukiji",
      // ===== 店名 =====
      name_full_en: "Japanese Food Wagyu Restaurant (Halal) Steak & Burger · 5W-Tokyo-Ginza",
      name_cn: "5W-東京-銀座",
      hero_place: "Tokyo's Ginza",
      // ===== 立地 =====
      city: "Ginza, Tokyo",
      station_en: "Ginza Station",
      address_en: "The Forme Ginza B1, 8-18-4 Ginza, Chuo-ku, Tokyo",
      address_postal: "104-0061",
      // ===== 連絡先 =====
      tel_display: "",
      tel_raw: "",
      // ===== 営業 =====
      hours: "10:00 – 1:00",
      hours_note: "Open Daily",
      // ===== 予約・地図 =====
      reserve_system: "tablecheck",  // "tablecheck" | "form"
      tablecheck_url: "https://www.tablecheck.com/en/halal-steak-ginzatsukiji-5w-tokyo/reserve/message",
      maps_link: "https://maps.app.goo.gl/7NtBgFuTmbDSjf2r8",
      maps_embed: "",              // 未設定 → 埋め込み地図は非表示
      // ===== 評価 =====
      rating: "4.7",
      rating_count: "",
      rating_source: "Google Review"
    },
    {
      region: "osaka",
      slug: "ohatsu-tenjin",
      name_full_en: "Wagyu Steak & Hamburger (Halal Gluten Free) Osaka Station Restaurant",
      name_cn: "",
      hero_place: "Osaka's Umeda",
      city: "Umeda, Osaka",
      station_en: "Higashi-Umeda Station",
      address_en: "MK Sonezaki Bldg. 1F, 2-14-5 Sonezaki, Kita-ku, Osaka",
      address_postal: "530-0057",
      tel_display: "090-2411-0668",
      tel_raw: "+819024110668",
      hours: "11:00 – 23:00",
      hours_note: "Open Daily",
      reserve_system: "tablecheck",  // "tablecheck" | "form"
      tablecheck_url: "https://www.tablecheck.com/en/halal-wagyu-ohatsutennjin/reserve/message",
      maps_link: "https://maps.app.goo.gl/nGkUcbYJDwVXLnSJ8",
      maps_embed: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d244.25082538630375!2d135.501323!3d34.7009307!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6000e737d3d79fad%3A0x34aa836911c15bd3!2sWagyu%20Steak%20%26%20Hamburger%20(Halal%20Gluten%20Free)%20Osaka%20Station%20Restaurant!5e0!3m2!1sja!2sjp!4v1780407564711!5m2!1sja!2sjp",
      rating: "4.7",
      rating_count: "1,224",
      rating_source: "Google Review"
    },
    {
      region: "tokyo",
      slug: "higashi-ginza",
      name_full_en: "Japanese Food Wagyu Beef (Halal) Ramen Hamburger Ginza Restaurant 5W-Tokyo (东京和牛拉麺)",
      name_cn: "",
      hero_place: "Tokyo's Ginza",
      city: "Ginza, Tokyo",
      station_en: "Higashi-ginza Station",
      address_en: "3-12-16 Ginza, Chuo-ku, Tokyo",
      address_postal: "104-0061",
      tel_display: "03-6278-7139",
      tel_raw: "+81362787139",
      hours: "11:00 – 1:00",
      hours_note: "Open Daily",
      reserve_system: "tablecheck",  // "tablecheck" | "form"
      tablecheck_url: "https://www.tablecheck.com/en/halal-wagyu-ginza-5w-tokyo/reserve/message",
      maps_link: "https://maps.app.goo.gl/4EfmHFrLB2qsBVn88",
      maps_embed: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7956332.37488466!2d132.3809798!3d35.1867375!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188b8a1b1f7ca7%3A0x8d81bba28006abf!2zSmFwYW5lc2UgRm9vZCBXYWd5dSBCZWVmIChIYWxhbCkgUmFtZW4gSGFtYnVyZ2VyIEdpbnphIFJlc3RhdXJhbnQgNVctVG9reW8gKOS4nOS6rOWSjOeJm-aLiem6uik!5e0!3m2!1sja!2sjp!4v1780407684524!5m2!1sja!2sjp",
      rating: "4.8",
      rating_count: "4,965",
      rating_source: "Google Review"
    },
    {
      region: "tokyo",
      slug: "shinokubo",
      name_full_en: "Wagyu Steak Burger Halal Kobe Beef Vegan Gluten Free Kabuki Restaurant 和牛餐厅",
      name_cn: "",
      hero_place: "Tokyo's Shin-Okubo",
      city: "Shin-Okubo, Tokyo",
      station_en: "Shin-Okubo Station",
      address_en: "1F, 1-1-28 Hyakunincho, Shinjuku-ku, Tokyo",
      address_postal: "169-0073",
      tel_display: "090-2265-7102",
      tel_raw: "+819022657102",
      hours: "11:00 – 1:00",
      hours_note: "Open Daily",
      reserve_system: "tablecheck",  // "tablecheck" | "form"
      tablecheck_url: "https://www.tablecheck.com/en/halal-wagyu-shinokubo-5w-tokyo/reserve/message",
      maps_link: "https://maps.app.goo.gl/Cs2KYxwjL2ScCbga6",
      maps_embed: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d930.2740956358768!2d139.7020532!3d35.698213!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188d0a84c996ff%3A0xa473959440d7db81!2zV2FneXUgU3RlYWsgJiBIYW1idXJnZXIgUGl6emEgKEhhbGFsIFZlZ2FuIEdsdXRlbiBGcmVlKSBLYWJ1a2kgU2hpbiBPa3VibyBSZXN0YXVyYW50IOaWsOWuvyDlkozniZsg5ouJ6Z2iIOmkkOWOhQ!5e0!3m2!1sja!2sjp!4v1784012090545!5m2!1sja!2sjp",
      rating: "4.9",
      rating_count: "1,273",
      rating_source: "Google Review"
    },
    {
      // ===== URL/識別 =====
      region: "kyoto",
      slug: "nishikiichiba",
      // ===== 店名 =====
      name_full_en: "Halal Wagyu Kobe Beef Steak Nishiki Market Kawaramachi Food Restaurant 神户牛肉餐厅",
      name_cn: "",
      hero_place: "Kyoto's Nishiki Market",
      // ===== 立地 =====（ラーメン錦市場と同じ建物 / steakは3F）
      city: "Nishiki Market, Kyoto",
      station_en: "Kyoto-Kawaramachi Station",
      address_en: "3F, 501 Umeyacho, Nakagyo-ku, Kyoto",
      address_postal: "604-8057",
      // ===== 連絡先 =====
      tel_display: "090-9084-4251",
      tel_raw: "+819090844251",
      // ===== 営業 =====
      hours: "11:00 – 23:00",
      hours_note: "Open Daily",
      // ===== 予約・地図 =====（予約は電話案内・地図は非表示）
      reserve_system: "tablecheck",  // "tablecheck" | "form"
      tablecheck_url: "",          // 空 → 予約ボタンを電話案内に
      maps_link: "",               // 非表示
      maps_embed: "",              // 非表示
      // ===== 評価 =====（口コミ非表示）
      rating: "",
      rating_count: "",
      rating_source: ""
    },
    {
      // ===== URL/識別 =====
      region: "tokyo",
      slug: "ueno",
      // ===== 店名 =====
      name_full_en: "Wagyu Hamburger Steak Halal Kobe Beef Vegan Gluten Free Ueno Restaurant 上野和牛餐厅",
      name_cn: "",
      hero_place: "Tokyo's Ueno",
      // ===== 立地 =====
      city: "Ueno, Tokyo",
      station_en: "Ueno Station",
      address_en: "D-B UenoⅡ 5F, 6-16-7 Ueno, Taito-ku, Tokyo",
      address_postal: "110-0005",
      // ===== 連絡先 =====
      tel_display: "090-5616-1151",
      tel_raw: "+819056161151",
      // ===== 営業 =====
      hours: "11:00 – 23:00",
      hours_note: "Open Daily",
      // ===== 予約・地図 =====（予約は電話案内 / 地図は表示）
      reserve_system: "tablecheck",  // "tablecheck" | "form"
      tablecheck_url: "",          // 空 → 予約ボタンを電話案内に
      maps_link: "https://maps.app.goo.gl/H7T5dG7vnoravkYk6",
      maps_embed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3433.6702852278413!2d139.7761093!3d35.7107229!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188f668f3a44b1%3A0xb55ce50f2de7691!2zV2FneXUgU3RlYWsgSGFtYnVyZ2VyICYgUmFtZW4gSGFsYWwgVmVnYW4gR2x1dGVuIEZyZWUgVWVubyBSZXN0YXVyYW50IOS4iumHjuWSjOeJm-aLiemdoumkkOWOhQ!5e0!3m2!1sja!2sjp!4v1783587999959!5m2!1sja!2sjp",
      // ===== 評価 =====（口コミ非表示・数値が出たら記入）
      rating: "",
      rating_count: "",
      rating_source: ""
    },
    {
      // ===== URL/識別 =====
      region: "kyoto",
      slug: "kinkakuji",
      // ===== 店名 =====
      name_full_en: "Wagyu Steak Hamburger Halal Kobe Beef Vegan 京都美食 Kinkakuji Temple Restaurant",
      name_cn: "",
      hero_place: "Kyoto's Kinkakuji",
      // ===== 立地 =====
      city: "Kinkakuji, Kyoto",
      station_en: "Kitano-Hakubaicho Station",
      address_en: "13 Kinugasa Somoncho, Kita-ku, Kyoto",
      address_postal: "603-8363",
      // ===== 連絡先 =====
      tel_display: "090-8581-3183",
      tel_raw: "+819085813183",
      // ===== 営業 =====
      hours: "9:00 – 21:00",
      hours_note: "Open Daily",
      // ===== 予約・地図 =====（予約は電話案内・地図は非表示）
      reserve_system: "tablecheck",  // "tablecheck" | "form"
      tablecheck_url: "",          // 空 → 予約ボタンを電話案内に
      maps_link: "",               // 非表示
      maps_embed: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d816.6973276584952!2d135.72979461906752!3d35.0370003685955!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x600107aff1c4952f%3A0x9d293197be795beb!2sWagyu%20Steak%20Hamburger%20Halal%20Kobe%20Beef%20Vegan%20%E4%BA%AC%E9%83%BD%E7%BE%8E%E9%A3%9F%20Kinkakuji%20Temple%20Restaurant!5e0!3m2!1sja!2sjp!4v1788509735338!5m2!1sja!2sjp",
      // ===== 評価 =====（口コミ非表示）
      rating: "",
      rating_count: "",
      rating_source: ""
    },
    {
      // ===== URL/識別 =====
      region: "tokyo",
      slug: "asakusa",
      // ===== 店名 =====
      name_full_en: "Wagyu Hamburger Steak Asakusa Kobe Beef Halal Vegan Restaurant 东京美食",
      name_cn: "",
      hero_place: "Tokyo's Asakusa",
      // ===== 立地 =====
      city: "Asakusa, Tokyo",
      station_en: "Tawaramachi Station",
      address_en: "2F, 2-2-3 Nishiasakusa, Taito-ku, Tokyo",
      address_postal: "111-0035",
      // ===== 連絡先 =====
      tel_display: "090-5668-8674",
      tel_raw: "+819056688674",
      // ===== 営業 =====
      hours: "11:00 – 23:00",
      hours_note: "Open Daily",
      // ===== 予約・地図 =====（予約は電話案内・地図は非表示）
      reserve_system: "tablecheck",  // "tablecheck" | "form"
      tablecheck_url: "",          // 空 → 予約ボタンを電話案内に
      maps_link: "",               // 非表示
      maps_embed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4256.167822784161!2d139.7908243!3d35.7119355!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188f0772c81ab3%3A0x2cc225c1bfd52c74!2sWagyu%20Hamburger%20Steak%20Asakusa%20Kobe%20Beef%20Halal%20Vegan%20Restaurant%20%E4%B8%9C%E4%BA%AC%E7%BE%8E%E9%A3%9F!5e0!3m2!1sja!2sjp!4v1788508449625!5m2!1sja!2sjp",
      // ===== 評価 =====（口コミ非表示）
      rating: "",
      rating_count: "",
      rating_source: ""
    }
  ]
};
