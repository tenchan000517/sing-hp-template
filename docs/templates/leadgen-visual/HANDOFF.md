# HANDOFF: 三河精密工業株式会社 (leadgen-visual)

## 1. プロジェクト情報

| 項目 | 説明 |
|------|------|
| 企業名 | 三河精密工業株式会社 |
| ディレクトリ | `src/app/templates/leadgen-visual` (新規作成想定) |
| 作成日 | 2026/02/01 |
| テンプレート | leadgen-visual (ビジュアルインパクト重視モデル) |

---

## 2. 企業基本情報 (`src/data/leadgen-visual/sample.ts`)

`src/data/simple/sample.ts` 等を参考に、以下のデータを定義してください。

| 項目 | 値 |
|------|----|
| 代表者 | 伊藤 正樹 (代表取締役) |
| 設立 | 1973年 (創業52年) |
| 所在地 | 〒444-0802 愛知県岡崎市美合町字並松1-23 |
| 電話番号 | 0564-52-3456 |
| 事業内容 | 精密金属部品加工 (NC旋盤・マシニング複合加工) |

---

## 3. ロゴ・ブランド定義（Visual Mode）

| 項目 | 指定内容 | 備考 |
|------|----------|------|
| **ベースモード** | `Dark Mode` (#0F172A) | 基本背景はダークネイビー。白文字。 |
| **アクセント** | `#06B6D4` (Neon Cyan) | **発光表現(Glow)** を伴うCTAボタンに使用。 |
| **サブカラー** | `#F8FAFC` (Off-white) | テキスト色。 |
| **フォント** | `Noto Sans JP` + `Montserrat`(英数字) | 英語見出しを大きく使い、デザイン性を高める。 |
| **ヘッダー** | 透過(Overlay) -> スクロールで黒背景 | ロゴは白抜き必須。 |

---

## 4. ページ別セクション構成 & データマッピング

### 1. トップページ (`/`)
*   **Hero**: `hero` オブジェクト。**動画背景(mp4)必須**。キャッチ「美しさは、精度の証明。」
*   **Works**: `works` 配列。パララックス配置。高品質画像。
*   **About**: `aboutMovie` オブジェクト。動画背景＋テキストオーバーレイ。
*   **Recruit**: `recruitVisual` オブジェクト。分割レイアウト。
*   **Contact**: `contactOverlay`。背景画像＋フォーム。

### 2. その他のページ
各ページとも、ファーストビュー（FV）には必ず「高画質画像」を設定する構造にすること。
*   **Service**: `serviceFeatures` (パララックス背景)。
*   **Equipment**: `equipmentCards` (画像主体カード)。
*   **Company**: `ceoPortrait` (ポートレート写真)。
*   **Recruit**: `interviewMovie` (ショート動画)。

---

## 5. 素材ファイル一覧 (To Be Created)

`public/images/templates/leadgen-visual/` に配置。
**※このテンプレートは「画像が命」です。最高品質のものを用意してください。**

| ファイル名 (仮) | 用途 | 内容指示 |
|-----------------|------|----------|
| `hero-movie.mp4` | Top Hero | 切削の瞬間（スローモーション）、切り粉の輝き。ダークトーン仕上げ。 |
| `work-01.jpg` | Top Works | 自動車部品（黒背景、ライティング強め） |
| `work-02.jpg` | Top Works | 油圧シャフト（鏡面反射） |
| `about-bg.mp4` | Top About | 工場内ドローン空撮またはジンバル歩き撮り（ボケ味あり） |
| `recruit-model.jpg`| Top Recruit | 若手社員のスタイリッシュな横顔（シネマティック） |
| `contact-bg.jpg` | Contact | 設計図面（青焼き）のボケ画像 |
| `equip-bg-1.jpg` | Service | マシニングセンタ内部（機械的信頼感） |

---

## 6. 技術スタック注意事項

*   **Anti-AI Design (Visual)**:
    *   **Layout**: 左右対称のグリッドを避ける。要素を重ねる（CSS Grid / Negative Margin）。
    *   **Motion**: スクロール連動のパララックス効果（`framer-motion` の `useScroll` 推奨）。
    *   **Shadow**: CSS `box-shadow` は使わず、画像自体の陰影で立体感を出す。
*   **Tailwind Config**:
    *   `colors`: `{ visual: { dark: '#0F172A', neon: '#06B6D4' } }`
    *   `backgroundImage`: テクスチャオーバーレイ用のパターン定義推奨。

---
