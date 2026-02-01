# HANDOFF: 三河精密工業株式会社 (authority-minimal)

## 1. プロジェクト情報

| 項目 | 説明 |
|------|------|
| 企業名 | 三河精密工業株式会社 |
| ディレクトリ | `src/app/templates/authority-minimal` |
| リポジトリ | `https://github.com/tenchan000517/template-authority-minimal.git` (クローン元) |
| 作成日 | 2026/02/01 |
| テンプレート | authority-minimal (権威性・信頼性重視ミニマルモデル) |

---

## 2. 企業基本情報 (`src/data/authority-minimal/sample.ts`)

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
| **メインカラー** | `#1A2B4C` (ディープネイビー) | 信頼、専門性。ヘッダー、フッター、H2見出しに使用。 |
| **アクセント** | `#00B5E2` (ブライトシアン) | 技術、先進性。CTAボタン、リンク、強調アイコンに使用。 |
| **サブカラー** | `#F5F7FA` (クールグレー) | 清潔感。セクション背景に使用。 |
| **フォント** | `Noto Sans JP` | ウェイトを使い分け、明朝体は使用しない。 |
| **ヘッダー** | ロゴ + 「お問い合わせ」(Btn: #00B5E2) | スクロール追従。背景は白または透過。 |
| **フッター** | 4カラム (ロゴ/会社情報/リンク/CTA) | 背景: #1A2B4C (メインカラー) |

---

## 4. ページ別セクション構成 & データマッピング

各ページのセクションと、それに対応するデータ構造（`sample.ts` 等）の指示です。

### 1. トップページ (`/`)
*   **Hero**: 動画/画像背景。「0.005mmの約束。」(キャッチコピー)
*   **Problems**: `problems` 配列。アイコンリスト形式 (Not Card)。
*   **Strengths**: `strengths` 配列。3項目 (Z型レイアウト)。
*   **Works**: `works` 配列。カード/グリッド。6項目。
*   **Recruit**: `recruitTeaser` オブジェクト。背景画像＋メッセージ。

### 2. サービス・事業内容 (`/service`)
*   **Overview**: リード文。
*   **Specs**: `specs` オブジェクト/配列 (表形式用データ)。
    *   加工分類, 対応材質, サイズ, ロット数
*   **Quality**: `qualityFlow` 配列 (工程内検査 -> ダブルチェック -> 全数検査 -> 成績書)。
*   **Flow**: `orderFlow` 配列 (問い合わせ -> 納品)。

### 3. 設備紹介 (`/equipment`)
*   **EquipmentList**: `equipments` 配列 (カテゴリ別)。
    *   NC旋盤 (15台), マシニング (8台), 複合加工機 (3台), 検査設備

### 4. 会社概要 (`/company`)
*   **Message**: `ceoMessage` オブジェクト (タイトル, 本文, 名前, 写真パス)。
*   **Info**: `companyInfo` 配列 (基本情報テーブル)。

### 5. 採用情報 (`/recruit`)
*   **Concept**: メッセージ。
*   **Infographics**: `InfographicsData` 配列 (残業15h, 有給85%, 勤続14.5年, 文系60%)。
*   **Interviews**: `interviews` 配列 (3名: 田村, 佐々木, 山本)。
*   **Jobs**: `jobs` 配列 (職種, 給与, 休日等)。
    *   *要件*: エントリーフォームへの特大ボタン配置。

### 6. お問い合わせ (`/contact`)
*   **Form**: 項目固定 (会社名, 名前, Email, TEL, 用件, 図面添付, 内容)。
    *   *注意*: 図面添付(File Input)必須。

---

## 5. 素材ファイル一覧 (To Be Created)

以下の画像ファイルが必要です。`public/images/templates/authority-minimal/` に配置してください。

| ファイル名 (仮) | 用途 | 内容指示 |
|-----------------|------|----------|
| `hero-bg.mp4` / `.jpg` | Top Hero | マシニングセンタ内、切削液と金属の輝き (スローモーション推奨/暗め) |
| `problem-check.svg` | Top Problem | チェックマークアイコン (シンプル) |
| `strength-precision.jpg`| Top Strength 1| マイクロメーター測定の手元アップ |
| `strength-speed.jpg` | Top Strength 2| 真剣な眼差しの若手社員オペレーター |
| `strength-lot.jpg` | Top Strength 3| 多様な形状の金属部品集合写真 |
| `work-XX.jpg` (x6) | Top Works | 自動車部品、油圧部品等の高品質写真 ×6枚 |
| `recruit-bg.jpg` | Top Recruit | 休憩室での社員談笑シーン (笑顔、アットホーム) |
| `quality-inspection.jpg`| Service Quality | 三次元測定機操作シーン |
| `equip-nc-line.jpg` | Equipment | NC旋盤ライン全景 |
| `equip-maching.jpg` | Equipment | マシニング内部 |
| `ceo-portrait.jpg` | Company | 代表・伊藤正樹氏 (作業着、自然な立ち姿) |
| `interview-tamura.jpg` | Recruit | 田村氏 (21歳) |
| `interview-sasaki.jpg` | Recruit | 佐々木氏 (30代女性) |
| `interview-yamamoto.jpg`| Recruit | 山本部長 (50代) |

---

## 6. 技術スタック注意事項

*   **Anti-AI Design**:
    *   安易なカード型レイアウト(`border: 1px solid #e0e0e0`, `box-shadow`)は避けること。
    *   グラデーションボタンは禁止。ブランドカラー(` #00B5E2`)のフラットまたは微細なホバー変化のみ。
    *   アニメーションは `opacity` と `y` 移動のみのシンプルなものに限定する。
*   **Tailwind Config**:
    *   `website_plan.md` のカラーコードを `tailwind.config.ts` に追加することを推奨。
    *   Example: `colors: { authority: { main: '#1A2B4C', accent: '#00B5E2', gray: '#F5F7FA' } }`

---
