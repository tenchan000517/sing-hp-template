# HANDOFF: あおぞら法律事務所 (trust-visual)

## 1. プロジェクト情報

| 項目 | 説明 |
|------|------|
| 事務所名 | あおぞら法律事務所 (Aozora Law Office) |
| ディレクトリ | `src/app/templates/trust-visual` (新規作成想定) |
| 作成日 | 2026/02/01 |
| テンプレート | trust-visual (信頼構築・士業向けモデル) |

---

## 2. 企業基本情報 (`src/data/trust-visual/sample.ts`)

| 項目 | 値 |
|------|----|
| 代表者 | 田中 裕子 (代表弁護士) |
| 設立 | 2008年4月1日 (創業16年) |
| 所在地 | 〒460-0003 愛知県名古屋市中区錦3-6-29 錦三丁目ビル8F |
| 電話番号 | 052-265-9900 |
| 事業内容 | 法律事務所 (相続、企業法務、不動産、離婚等) |

---

## 3. ロゴ・ブランド定義（Trust Mode）

| 項目 | 指定内容 | 備考 |
|------|----------|------|
| **メインカラー** | `#1a365d` (Noble Navy) | 信頼・知性・厳格さを表すネイビー。 |
| **アクセント** | `#38a169` (Peace Green) | 安心感、解決、調和を表すグリーン。 |
| **サブカラー** | `#f7fafc` / `#edf2f7` | 清潔感のあるライトグレー。 |
| **フォント** | `Noto Serif JP` (明朝) + `Lato` | 見出しは明朝体で「先生」感を出す。 |
| **ヘッダー** | ロゴ + 予約フリーダイヤル + CTA | 「初回無料相談」を目立たせる。 |
| **フッター** | 地図・アクセス情報・全リンク | 背景: `#1a365d` |

---

## 4. ページ別セクション構成 & データマッピング

### 1. トップページ (`/`)
*   **Hero**: `hero` オブジェクト。高画質ポートレート写真。
*   **Achievements**: `achievements` (実績カウンター: 5000件+ など)。
*   **Reasons**: `reasons` 配列 (選ばれる理由4つ)。
*   **Services**: `services` 配列 (取扱分野)。
*   **Cases**: `cases` 配列 (解決事例ピックアップ)。
*   **Media**: `media` 配列 (掲載実績)。
*   **Contact**: 電話 + フォームへの誘導。

### 2. 事務所概要 (`/about`)
*   **Message**: `ceoMessage` オブジェクト (田中弁護士)。
*   **Info**: `officeInfo` (住所、設立、所属弁護士会)。
*   **Access**: Google Map設定。

### 3. 専門分野 (`/service`)
*   **List**: `serviceDetails` 配列。各分野の詳細、料金表(`fees`)。

### 4. 弁護士紹介 (`/lawyers`)
*   **List**: `lawyers` 配列 (3名)。
    *   項目: 名前、役職、経歴(`history`)、資格、メッセージ。

### 5. 解決事例 (`/case`)
*   **List**: `caseStudies` 配列。
    *   項目: タイトル、概要、解決策、結果、お客様の声。

### 6. お問い合わせ (`/contact`)
*   **Form**: `contactForm` 設定。
    *   項目: お名前, 電話番号, メール, 希望日時, 相談内容。

---

## 5. 素材ファイル一覧 (To Be Created)

`public/images/templates/trust-visual/` に配置。
**※弁護士の「顔」が見えることが信頼の鍵です。**

| ファイル名 (仮) | 用途 | 内容指示 |
|-----------------|------|----------|
| `hero-main.jpg` | Top Hero | 田中弁護士が窓際で微笑む（自然光、背景ボケ、信頼感） |
| `lawyer-tanaka.jpg`| Lawyers | 田中弁護士プロフィール写真 |
| `lawyer-yamamoto.jpg`| Lawyers | 山本弁護士プロフィール写真 |
| `lawyer-suzuki.jpg`| Lawyers | 鈴木弁護士プロフィール写真 |
| `office-meeting.jpg`| About | 相談室での打ち合わせ風景（手元や後ろ姿） |
| `office-entrance.jpg`| About | エントランス（清潔感、明るさ） |
| `media-chunichi.jpg`| Media | 中日新聞掲載記事のキャプチャ |

---

## 6. 技術スタック注意事項

*   **Anti-AI Design (Trust)**:
    *   **Serif Font**: 見出しに明朝体 (`font-serif`) を効果的に使う。
    *   **Whitespace**: 余白をたっぷりと取り、窮屈さを感じさせない（＝余裕を感じさせる）。
    *   **Icons**: 線が細く、洗練されたアイコンを使用（`lucide-react` の細いウェイト推奨）。

---
