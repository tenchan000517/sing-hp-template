# HANDOFF: 三河精密工業株式会社 (recruit-magazine)

## 1. プロジェクト情報

| 項目 | 説明 |
|------|------|
| 企業名 | 三河精密工業株式会社 |
| ディレクトリ | `src/app/templates/recruit-magazine` (新規作成想定) |
| 作成日 | 2026/02/01 |
| テンプレート | recruit-magazine (読み物・メディア型採用サイト) |

---

## 2. 企業基本情報 (`src/data/recruit-magazine/sample.ts`)

| 項目 | 値 |
|------|----|
| 代表者 | 伊藤 正樹 (代表取締役) |
| 設立 | 1973年 (創業52年) |
| 所在地 | 〒444-0802 愛知県岡崎市美合町字並松1-23 |
| 事業内容 | 精密金属部品加工 |

---

## 3. ロゴ・ブランド定義（Magazine Mode）

| 項目 | 指定内容 | 備考 |
|------|----------|------|
| **ベースカラー** | `#FAF9F6` (Ecru/生成り) | 紙の質感を意識したオフホワイト。 |
| **テキスト** | `#2C3E50` (Dark Slate) | 真っ黒ではない、読みやすいグレー。 |
| **アクセント** | `#E74C3C` (Editorial Red) | 雑誌のロゴや強調に使う赤。 |
| **フォント** | `Noto Serif JP` (明朝) + `Noto Sans JP` | 見出しは明朝で知的に、本文はゴシックで読みやすく。 |
| **ヘッダー** | ハンバーガーメニュー主体 | コンテンツへの没入を妨げない設計。 |

---

## 4. ページ別セクション構成 & データマッピング

**特徴**: 通常のセクション分割に加え、CMS的な「記事データ」の構造が必要になります。

### 1. データ構造の拡張 (`src/data/recruit-magazine/articles.ts`)
以下のような記事データ構造を想定してください。
```typescript
interface Article {
  id: string;
  category: 'PEOPLE' | 'WORKS' | 'CULTURE' | 'DATA';
  title: string;
  subtitle?: string;
  thumbnail: string;
  tags: string[];
  content: string; // Markdown or HTML
}
```

### 2. トップページ (`/`)
*   **Cover**: `coverFeature` オブジェクト。最新の特集記事（田村氏インタビュー）へのリンク。
*   **Pickups**: `pickupArticles` 配列。グリッドレイアウトで記事を表示。
*   **Infographics**: `companyData`。数字とイラストで表現。
*   **CEO**: `ceoProfile`。"裏"履歴書風コンテンツ。

### 3. 先輩社員インタビュー (`/article/tamura`)
*   **Content**: 記事本文。リード、見出し、本文、写真（キャプション付き）。
*   **Sidebar**: `profileCard`。プロフ、スケジュール。

### 4. 会社概要 (`/company`)
*   **History**: `historyEvents` 配列。年表＋エピソード。

### 5. 採用情報一覧 (`/jobs`)
*   **JobList**: `jobs` 配列。
    *   *追加項目*: `recommendFor` (こんな人におすすめ), `hardPoint` (きついところ)。

---

## 5. 素材ファイル一覧 (To Be Created)

`public/images/templates/recruit-magazine/` に配置。
**※「現場のリアル」「人間味」を重視したスナップショット風の写真を推奨。**

| ファイル名 (仮) | 用途 | 内容指示 |
|-----------------|------|----------|
| `cover-main.jpg` | Top Cover | 田村氏と山本部長が談笑している自然なカット（目線外し） |
| `pickup-sasaki.jpg`| Pickup | 佐々木さんのヨガ教室（またはデスクでの笑顔） |
| `pickup-fail.jpg` | Pickup | 失敗した部品の山（モノクロ等で雰囲気あり） |
| `pickup-bbq.jpg` | Pickup | BBQ大会での社長の笑顔 |
| `icon-clock.svg` | Info | 時計（手書き風） |
| `icon-plane.svg` | Info | 飛行機（手書き風） |
| `icon-tree.svg` | Info | 年輪（手書き風） |

---

## 6. 技術スタック注意事項

*   **Anti-AI Design (Magazine)**:
    *   **Typography**: 縦書き (`writing-mode: vertical-rl`) を見出しの一部に取り入れる。
    *   **Grid**: `CSS Grid` を使い、PinterestのようなMasonryレイアウトや、あえて空白を作った配置を行う。
    *   **Texture**: 背景にほんの少しの紙のテクスチャ（ノイズ）を入れると完成度が上がる。

---
