# HANDOFF: 三河精密工業株式会社 (standard)

## 1. プロジェクト情報

| 項目 | 説明 |
|------|------|
| 企業名 | 三河精密工業株式会社 |
| ディレクトリ | `src/app/templates/standard` |
| リポジトリ | `https://github.com/tenchan000517/template-standard.git` (クローン元) |
| 作成日 | 2026/02/01 |
| テンプレート | standard (法人リード＋採用のバランス型) |

---

## 2. 企業基本情報 (`src/data/standard/sample.ts`)

| 項目 | 値 |
|------|----|
| 代表者 | 伊藤 正樹 (代表取締役) |
| 設立 | 1973年 (創業52年) |
| 所在地 | 〒444-0802 愛知県岡崎市美合町字並松1-23 |
| 電話番号 | 0564-52-3456 |
| 事業内容 | 精密金属部品加工 |

---

## 3. ロゴ・ブランド定義

| 項目 | 指定内容 | 備考 |
|------|----------|------|
| **メインカラー** | `#1E3A5F` (Deep Blue) | ヘッダー、フッター、見出し。信頼・安定。 |
| **アクセント** | `#F39C12` (Warm Orange) | CTAボタン、アイコン強調。温かみ・行動喚起。 |
| **ベース** | `#FFFFFF` / `#F5F7FA` | 背景。清潔感。 |
| **フォント** | `Noto Sans JP` | ウェイト違いで階層を作る。 |
| **ヘッダー** | ロゴ + ナビ + CTA(お問い合わせ) | 背景: 白 or メインカラー。 |
| **フッター** | 4カラム（ロゴ/会社情報/リンク/CTA） | 背景: `#1E3A5F` |

---

## 4. ページ別セクション構成 & データマッピング

### 1. トップページ (`/`)
*   **Hero**: `hero` オブジェクト。2カラムまたはオーバーレイ。
*   **Strengths**: `strengths` 配列。3項目。
*   **Trust**: `trustLogos` 配列 + ISO認証バッジ。
*   **Recruit**: `recruitTeaser` オブジェクト。
*   **Contact**: 電話 + フォームへの誘導。

### 2. サービス・事業内容 (`/service`)
*   **Overview**: リード文。
*   **Specs**: `specs` 配列。テーブル形式。
*   **QualityFlow**: `qualityFlow` 配列。

### 3. 設備紹介 (`/equipment`)
*   **List**: `equipments` 配列。カテゴリ別。

### 4. 会社概要 (`/company`)
*   **CEO**: `ceoMessage` オブジェクト。
*   **Info**: `companyInfo` 配列。
*   **Map**: Google Map埋め込み設定。

### 5. 採用情報 (`/recruit`)
*   **Message**: コンセプトメッセージ。
*   **Data**: `infographics` 配列。
*   **Interviews**: `interviews` 配列 (3名)。
*   **Jobs**: `jobs` 配列。
*   **Entry**: エントリーフォームへのリンク。

### 6. お問い合わせ (`/contact`)
*   **Form**: `contactForm` 設定。
    *   項目: 会社名, 氏名, Email, TEL, 種別, 内容, 図面添付(任意)。

---

## 5. 素材ファイル一覧 (To Be Created)

`public/images/templates/standard/` に配置。

| ファイル名 (仮) | 用途 | 内容指示 |
|-----------------|------|----------|
| `hero-main.jpg` | Top Hero | 社員が打ち合わせしているシーン（活気、チームワーク） |
| `logo-client-1.png`| Trust | 取引先ロゴ（許諾対応要） |
| `logo-iso.png` | Trust | ISO9001認証ロゴ |
| `recruit-team.jpg`| Recruit | 社員集合写真（笑顔） |
| `interview-tamura.jpg`| Recruit | 田村氏 |
| `interview-sasaki.jpg`| Recruit | 佐々木氏 |
| `interview-yamamoto.jpg`| Recruit | 山本氏 |
| `ceo.jpg` | Company | 代表ポートレート |

---

## 6. 技術スタック注意事項

*   **Anti-AI Design (Standard)**:
    *   **カード**: 強み紹介セクションではカードを使わず、太字見出し＋リード文で表現。
    *   **影**: 極力使わない。使う場合も `rgba(0,0,0,0.05)` 程度の非常に薄いもの。
    *   **ボタン**: アクセントカラー（オレンジ）は主要CTAのみ。二次的なボタンはアウトライン（枠線のみ）。

---
