# HP制作 実装ガイド

このガイドは、構成案からHPを完成させるまでの手順を説明します。

---

## 1. 全体ワークフロー

```
┌─────────────────────────────────────────────────────────────────┐
│  フェーズ1: 営業・提案                                           │
│  ┌─────────┐    ┌─────────┐    ┌─────────┐                     │
│  │ヒアリング│ → │ 構成案  │ → │ クライアント │                     │
│  │ 実施    │    │ 作成    │    │ 承認     │                     │
│  └─────────┘    └─────────┘    └─────────┘                     │
└─────────────────────────────────────────────────────────────────┘
                              ↓
┌─────────────────────────────────────────────────────────────────┐
│  フェーズ2: セットアップ（セットアップセッション）                  │
│  ┌─────────────────────────────────────────────────────────┐   │
│  │ HP_CLAUDE_CODE_PROMPT_TEMPLATE を実行                    │   │
│  │  ↓                                                       │   │
│  │ /mnt/c/hp-projects/{企業名}/ ディレクトリ作成            │   │
│  │  ├── data/hearing.json     # ヒアリングJSON              │   │
│  │  ├── data/composition.md   # 構成案全文                  │   │
│  │  └── HANDOFF.md            # 進捗管理                    │   │
│  └─────────────────────────────────────────────────────────┘   │
└─────────────────────────────────────────────────────────────────┘
                              ↓
┌─────────────────────────────────────────────────────────────────┐
│  フェーズ3: 実装（実装セッション）                               │
│  ┌─────────────────────────────────────────────────────────┐   │
│  │ 1. HANDOFF.md を読む                                     │   │
│  │ 2. テンプレートをコピー                                   │   │
│  │ 3. placeholder.ts → data.ts に変換                       │   │
│  │ 4. 構成案の内容で【】を置換                               │   │
│  │ 5. 動作確認・調整                                         │   │
│  │ 6. HANDOFF.md の進捗を更新                                │   │
│  └─────────────────────────────────────────────────────────┘   │
└─────────────────────────────────────────────────────────────────┘
                              ↓
┌─────────────────────────────────────────────────────────────────┐
│  完成: 構成案通りのHPが完成                                      │
└─────────────────────────────────────────────────────────────────┘
```

---

## 2. プレースホルダーファイルの仕組み

### 2.1 プレースホルダーの形式

各テンプレートには `placeholder.ts` ファイルがあり、以下の形式でプレースホルダーが定義されています：

```typescript
// 【】で囲まれた部分が置換対象
company: {
  name: "【企業名】",
  tagline: "【キャッチコピー】",
  employees: 0, // 【従業員数（数値）】
}
```

### 2.2 プレースホルダーファイルの場所

| テンプレート | プレースホルダーファイル |
|------------|------------------------|
| simple | `src/data/simple/placeholder.ts` |
| story-type | `src/data/story-type/placeholder.ts` |
| qa-type | `src/data/qa-type/placeholder.ts` |
| data-driven | `src/data/data-driven/placeholder.ts` |
| visual | `src/data/visual/placeholder.ts` |

### 2.3 サンプルファイルとの違い

| ファイル | 用途 |
|---------|------|
| `sample.ts` | デモ用のサンプルデータ（架空企業のデータ入り） |
| `placeholder.ts` | 実装用のテンプレート（プレースホルダーのみ） |

**重要**: 実装時は必ず `placeholder.ts` を使用してください。`sample.ts` を使うとサンプル文言が混入するリスクがあります。

---

## 3. 実装セッションの作業手順

### ステップ1: 環境準備

```bash
# 企業プロジェクトディレクトリに移動
cd /mnt/c/hp-projects/{企業名}

# Claude Code起動
claude
```

### ステップ2: HANDOFF.mdを読む

```
HANDOFFを読んで指示に従って作業を開始してください
```

HANDOFFには以下が記載されています：
- 使用テンプレート
- 参照ファイル（hearing.json, composition.md）
- 実装状況

### ステップ3: テンプレートをコピー

```bash
# テンプレートリポジトリから必要なファイルをコピー
cp -r /mnt/c/sing-hp-template/src/app/templates/{テンプレート名}/* ./src/app/
cp -r /mnt/c/sing-hp-template/src/components/templates/{テンプレート名}/* ./src/components/
cp /mnt/c/sing-hp-template/src/data/{テンプレート名}/placeholder.ts ./src/data/data.ts
```

### ステップ4: データファイルを作成

1. `placeholder.ts` を `data.ts` としてコピー
2. `data/composition.md`（構成案）を開く
3. 【】で囲まれた部分を構成案の内容で置換

**置換のルール**:
- 文字列: `"【企業名】"` → `"株式会社ABC"`
- 数値: `0 // 【従業員数】` → `48`
- 配列: 構成案に合わせて要素を増減

### ステップ5: 動作確認

```bash
npm run dev
```

確認ポイント:
- 【】が残っていないか（ブラウザで確認）
- 構成案と内容が一致しているか
- 画像パスが正しいか

### ステップ6: 進捗更新

HANDOFF.mdの「実装状況」を更新：

```markdown
| ページ | 状態 | 備考 |
|--------|------|------|
| TOP | 完了 | |
| 会社概要 | 完了 | |
| サービス | 作業中 | 画像待ち |
```

---

## 4. テンプレート別 構成案→データ対応表

### 4.1 simple（シンプル型）

| 構成案セクション | データ変数 | 主な項目 |
|-----------------|-----------|---------|
| 企業情報 | `company` | name, tagline, description, address |
| 会社概要 | `companyInfo` | label/value の配列 |
| 募集要項 | `jobs` | 職種ごとの詳細 |
| 福利厚生 | `benefits` | label/value の配列 |
| FAQ | `faqs` | question/answer の配列 |
| 代表メッセージ | `ceoMessage` | name, title, message |

### 4.2 story-type（ストーリー型）

| 構成案セクション | データ変数 | 主な項目 |
|-----------------|-----------|---------|
| 企業情報 | `company` | 基本情報 + values, history, businesses |
| 数字で見る | `stats` | value, unit, label, description |
| 先輩社員 | `members` | 社員情報 + interview + schedule |
| 募集要項 | `jobs` | 職種詳細 + selectionProcess |
| 福利厚生 | `benefits` | vacation, allowances, insurance, others |
| 研修制度 | `training` | steps + certifications |
| オフィス | `office` | name, description, features, images |

### 4.3 qa-type（Q&A解決型）

| 構成案セクション | データ変数 | 主な項目 |
|-----------------|-----------|---------|
| 企業情報 | `company` | 基本情報 |
| 不安TOP5 | `top5Anxieties` | question, answer, data（グラフ用） |
| カテゴリ | `anxietyCategories` | title, description, href |
| 先輩の声 | `seniorVoices` | beforeAnxiety, currentFeelings |
| 応募前Q&A | `beforeApplyQA` | qualification, application |
| 選考Q&A | `selectionQA` | flow + interviewQA |
| 入社後Q&A | `afterJoiningQA` | onboardingTimeline + qa |
| 働き方Q&A | `workstyleQA` | salary, workingHours |
| 募集要項 | `jobs` | 職種詳細 |
| 相談窓口 | `consultation` | phone, email, online |
| 最終メッセージ | `finalMessage` | title, message, signature |

### 4.4 data-driven（データ訴求型）

| 構成案セクション | データ変数 | 主な項目 |
|-----------------|-----------|---------|
| 企業情報 | `company` | 基本情報 + history, offices |
| 成長データ | `growthData` | revenue, employees, projects |
| ダッシュボード | `dashboardData` | 9項目の指標データ |
| 受賞歴 | `awards` | name, year, description |
| 業界比較 | `industryComparison` | company vs industry |
| 労働環境 | `workplaceStats` | workHours, vacation, benefits, diversity |
| 給与モデル | `salaryModels` | ポジション別年収例 |
| 昇進実績 | `promotionStats` | 昇進データ |
| キャリアパス | `careerData` | paths, successStories, trainingPrograms |
| 募集要項 | `jobs` | 職種詳細 |
| FAQ | `faqData` | カテゴリ別Q&A |

### 4.5 visual（ビジュアル型）

| 構成案セクション | データ変数 | 主な項目 |
|-----------------|-----------|---------|
| 企業情報 | `company` | 基本情報 |
| キーワード | `keywords` | keyword, subtext, image |
| ギャラリー | `galleryCategories` + `galleryPhotos` | カテゴリ + 写真データ |
| 社員紹介 | `members` | 社員情報 + gallery + interview |
| オフィス | `officeAreas` | エリア別写真・説明 |
| 設備 | `facilities` | カテゴリ別設備一覧 |
| イベント | `events` | 月別イベント + 写真 |
| 募集要項 | `jobs` | 職種詳細 + 写真 |

---

## 5. チェックリスト

### 実装前チェック

- [ ] HANDOFF.mdを読んだ
- [ ] 使用テンプレートを確認した
- [ ] composition.md（構成案）を通読した
- [ ] hearing.json との整合性を確認した

### 実装中チェック

- [ ] `placeholder.ts` を使用している（`sample.ts` ではない）
- [ ] 【】を全て置換した
- [ ] 数値データは正しい型（number）で入力した
- [ ] 配列の要素数は構成案に合わせた
- [ ] 画像パスは実際のファイルに合わせた

### 実装後チェック

- [ ] ブラウザで【】が残っていないことを確認
- [ ] 全ページを目視確認
- [ ] 構成案の内容と一致している
- [ ] リンク切れがない
- [ ] HANDOFF.mdの進捗を更新した

---

## 6. トラブルシューティング

### 【】が残っている

1. ブラウザで「【」を検索（Ctrl+F）
2. 該当箇所の `data.ts` を修正
3. 開発サーバーを再起動

### 型エラーが発生

```typescript
// 数値が期待される場所に文字列が入っている
employees: "48人",  // ❌ エラー
employees: 48,      // ✅ 正しい
```

### 画像が表示されない

1. 画像ファイルが `/public/images/` に存在するか確認
2. パスが正しいか確認（先頭の `/` を忘れずに）

---

## 7. 参照リンク

- テンプレートリポジトリ: `/mnt/c/sing-hp-template/`
- 技術仕様: `/mnt/c/sing-hp-template/docs/HANDOFF.md`
- 修正マニュアル: https://sing-hp-template.vercel.app/manual
- テンプレート別詳細: `/mnt/c/sing-hp-template/docs/templates/`
