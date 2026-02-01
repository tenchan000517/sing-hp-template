# HANDOFF: 三河精密工業株式会社 (fullorder)

## 1. プロジェクト情報

| 項目 | 説明 |
|------|------|
| 企業名 | 三河精密工業株式会社 |
| ディレクトリ | `src/app/templates/fullorder` |
| リポジトリ | `https://github.com/tenchan000517/template-fullorder.git` (クローン元) |
| 作成日 | 2026/02/01 |
| テンプレート | fullorder (フルカスタム・オーダーメイド) |

---

## 2. 企業基本情報 (`src/data/fullorder/sample.ts`)

| 項目 | 値 |
|------|----|
| 代表者 | 伊藤 正樹 (代表取締役) |
| 設立 | 1973年 (創業52年) |
| 所在地 | 〒444-0802 愛知県岡崎市美合町字並松1-23 |
| 電話番号 | 0564-52-3456 |
| 事業内容 | 精密金属部品加工 |

---

## 3. ロゴ・ブランド定義（Fullorder Mode）

| 項目 | 指定内容 | 備考 |
|------|----------|------|
| **メインカラー** | `#2C3E50` (Charcoal Blue) | ヘッダー、フッター、見出し。知性・堅実。 |
| **アクセント** | `#E67E22` (Precision Orange) | CTAボタン、重要な数字の強調。情熱・行動喚起。 |
| **ベース** | `#FFFFFF` / `#F8F9FA` | 背景。清潔感。 |
| **サブ** | `#95A5A6` (Stone Gray) | 補足テキスト、罫線。 |
| **フォント** | `Noto Sans JP` + `Roboto`(英数字) | 階層をウェイトで表現。 |
| **ヘッダー** | ロゴ + フルナビ + CTA | 背景: 白 or メインカラー |
| **フッター** | 4カラム（ロゴ/会社情報/リンク/CTA） | 背景: `#2C3E50` |

---

## 4. ページ別セクション構成 & データマッピング

### 1. トップページ (`/`)
*   **Hero**: `hero` オブジェクト。フルスクリーン背景画像＋オーバーレイ。
*   **Reasons**: `reasons` 配列 (3項目)。
*   **Services**: `services` 配列。アイコン＋テキストグリッド。
*   **Equipment**: `equipmentCarousel` 配列。横スクロール。
*   **Recruit**: `recruitTeaser` オブジェクト。
*   **Contact**: 電話 + フォームへの誘導。

### 2. サービス・事業内容 (`/service`)
*   **Lead**: リード文。
*   **ProcessTypes**: `processTypes` 配列 (NC旋盤, マシニング, 複合加工)。
*   **Specs**: `specs` 配列。テーブル形式。
*   **QualityFlow**: `qualityFlow` 配列。フロー図。

### 3. 設備紹介 (`/equipment`)
*   **List**: `equipments` 配列。カテゴリ別。
    *   含む項目: 写真, 型番, スペック, 導入年。

### 4. 会社概要 (`/company`)
*   **CEO**: `ceoMessage` オブジェクト。
*   **Info**: `companyInfo` 配列。
*   **History**: `history` 配列。
*   **Map**: Google Map埋め込み設定。

### 5. 採用情報 (`/recruit`)
*   **Concept**: コンセプトセクション + リード。
*   **Data**: `infographics` 配列。
*   **Interviews**: `interviews` 配列 (3名: 田村, 佐々木, 山本)。
*   **Jobs**: `jobs` 配列。
*   **Entry**: エントリーフォームへのリンク（カジュアル/正式の2種）。

### 6. お問い合わせ (`/contact`)
*   **Form**: `contactForm` 設定。
    *   項目: 会社名(任意), 氏名(必須), Email(必須), TEL(任意), 種別(必須), 内容(必須), 図面添付(任意)。

---

## 5. 素材ファイル一覧 (To Be Created)

`public/images/templates/fullorder/` に配置。

| ファイル名 (仮) | 用途 | 内容指示 |
|-----------------|------|----------|
| `hero-main.jpg` | Top Hero | 職人がノギスで検査中。被写界深度浅め。 |
| `equip-nc.jpg` | Equipment | NC旋盤 |
| `equip-mc.jpg` | Equipment | マシニングセンター |
| `equip-cmm.jpg`| Equipment | 三次元測定機 |
| `recruit-team.jpg`| Recruit | 社員集合写真（笑顔） |
| `interview-tamura.jpg`| Recruit | 田村氏（作業中のスナップ） |
| `interview-sasaki.jpg`| Recruit | 佐々木氏（オフィスでのスナップ） |
| `interview-yamamoto.jpg`| Recruit | 山本氏（現場で指示を出す姿） |
| `ceo.jpg` | Company | 代表ポートレート |

---

## 6. 技術スタック注意事項

*   **Fullorderの自由度**:
    *   このテンプレートはベースコンポーネントを流用しつつ、レイアウトやセクション構成をゼロから設計できます。
    *   `website_plan.md` で定義された各セクションをページごとに実装してください。
*   **Anti-AI Design (Fullorder)**:
    *   余白はセクション間120px（PC）と広めにとり、高級感を演出。
    *   カードは極力使わず、テキストと写真の直接的な配置で「作り込み感」を出す。
    *   CTAボタンはアクセントカラー（オレンジ）一色で統一し、プライマリ以外はアウトラインスタイル。

---
