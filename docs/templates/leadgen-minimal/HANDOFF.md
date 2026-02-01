# HANDOFF: 三河精密工業株式会社 (leadgen-minimal)

## 1. プロジェクト情報

| 項目 | 説明 |
|------|------|
| 企業名 | 三河精密工業株式会社 |
| ディレクトリ | `src/app/templates/leadgen-minimal` (新規作成想定) |
| 作成日 | 2026/02/01 |
| テンプレート | leadgen-minimal (リード獲得特化ミニマルモデル) |

---

## 2. 企業基本情報 (`src/data/leadgen-minimal/sample.ts`)

以下は `export const company = { ... }` に設定する値です。

| 項目 | 値 |
|------|----|
| 代表者 | 伊藤 正樹 (代表取締役) |
| 設立 | 1973年 (創業52年) |
| 所在地 | 〒444-0802 愛知県岡崎市美合町字並松1-23 |
| 電話番号 | 0564-52-3456 |
| 事業内容 | 精密金属部品加工 (NC旋盤・マシニング複合加工) |
| 許可・認定 | ISO9001 (2005年取得), 大手自動車部品メーカー認定サプライヤー |

---

## 3. ロゴ・ブランド定義

| 項目 | 指定内容 | 備考 |
|------|----------|------|
| **メインカラー** | `#1A2B4C` (ディープネイビー) | テキスト、引き締め色として使用。 |
| **アクセント** | `#00B5E2` (ブライトシアン) | **CTAボタン専用色**。他の装飾には極力使用しない。 |
| **ベースカラー** | `#FFFFFF` / `#F8F9FA` | 極力白ベース。清潔感と余白を重視。 |
| **フォント** | `Noto Sans JP` | 太字と余白で階層を作る。 |
| **ヘッダー** | ロゴ + 「無料見積もり」(Btn: #00B5E2) | 追従型。CVへの最短ルートを確保。 |
| **フッター** | シンプルな3カラム + 著作権表記 | 背景: #1A2B4C (メインカラー) |

---

## 4. ページ別セクション構成 & データマッピング

各ページのセクションと、それに対応するデータ構造（`sample.ts` 等）の指示です。

### 1. トップページ (`/`)
*   **Hero**: `hero` オブジェクト。静止画背景。キャッチ「0.005mmの約束。」
*   **TrustBar**: `trustLogos` 配列。ISO, 取引先ロゴ一覧。
*   **Solutions**: `solutions` 配列。リスト形式。「難加工」「短納期」「全数検査」。
*   **Works**: `works` 配列。横スクロール(Carousel)推奨。スペック記載のシンプル画像。
*   **Recruit**: `recruitBanner` オブジェクト。写真＋主要データ（データ訴求）。
*   **Closing**: `closingCta` オブジェクト。フォーム直結ボタン。

### 2. サービス・事業内容 (`/service`)
*   **Specs**: `specs` 配列。加工対応表。
*   **Quality**: `quality` オブジェクト。検査体制図。

### 3. 設備紹介 (`/equipment`)
*   **List**: `equipments` 配列。シンプルなリスト表示。

### 4. 会社概要 (`/company`)
*   **Info**: `companyInfo` 配列。

### 5. 採用情報 (`/recruit`)
*   **Jobs**: `jobs` 配列。
*   **Entry**: 簡易エントリーフォーム (CTA)。

### 6. お問い合わせ (`/contact`)
*   **Form**: `contactForm` 設定。
    *   *必須項目*: 会社名, 氏名, Email, 図面添付。
    *   *特徴*: ファーストビューにフォームを配置しても良い（Leadgen特化）。

---

## 5. 素材ファイル一覧 (To Be Created)

`public/images/templates/leadgen-minimal/` に配置。

| ファイル名 (仮) | 用途 | 内容指示 |
|-----------------|------|----------|
| `hero-minimal.jpg` | Top Hero | 金属部品のマクロ撮影（静謐、余白あり） |
| `logo-iso.png` | Trust Bar | ISO9001ロゴ |
| `sol-icon-1.svg` | Solution | 難加工アイコン |
| `sol-icon-2.svg` | Solution | 短納期（時計）アイコン |
| `sol-icon-3.svg` | Solution | 品質（チェック）アイコン |
| `work-car.jpg` | Works | 自動車部品 |
| `recruit-smile.jpg`| Recruit | 社員の笑顔（自然な横顔） |
| `equip-main.jpg` | Equipment | 主要設備（NC旋盤） |

---

## 6. 技術スタック注意事項

*   **Anti-AI Design (Minimal)**:
    *   **No Cards**: コンテンツを矩形で囲まない。地続きの背景＋余白で区切る。
    *   **Typography**: 見出しのフォントサイズを通常より大きく(3.5rem〜)し、ジャンプ率を高める。
    *   **Asymmetry**: 画像とテキスト配置を左右交互、あるいはオフセットさせることでリズムを作る。
*   **Performance**:
    *   Leadgenのため、LCP (Largest Contentful Paint) を最優先。ヒーロー画像は軽量化必須。

---
