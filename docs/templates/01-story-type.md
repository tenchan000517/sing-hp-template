# テンプレート1: ストーリー型「共感採用サイト」

## コンセプト

社員の成長ストーリーと日常を通じて「ここで働く自分」を具体的にイメージさせ、
感情的なつながりで応募を促進するテンプレート。

## 適合する企業特性

- 社員の定着率が高く、成長事例が豊富な企業
- アットホームな社風を持つ企業
- 未経験者採用を積極的に行っている企業
- 教育制度に自信がある企業

## テーマカラー

```css
--color-primary: #2E7D32;  /* グリーン - 成長・安心 */
--color-accent: #FF6F00;   /* オレンジ */
```

---

## 実装状況

**ステータス**: ✅ 実装済み

### 実装済みファイル

```
src/app/templates/story-type/
├── layout.tsx          # 共通レイアウト
├── page.tsx            # HOME
├── story/page.tsx      # 私たちのストーリー
├── members/page.tsx    # 先輩社員の声
├── daily/page.tsx      # 1日の流れ
├── jobs/page.tsx       # 募集職種
├── environment/page.tsx # はたらく環境
└── apply/page.tsx      # 応募する

src/components/templates/story-type/
├── HeroSection.tsx
├── StatsSection.tsx
├── ValuesSection.tsx
├── GrowthStorySection.tsx
├── JobListSection.tsx
├── CompanyHistory.tsx
├── CEOMessage.tsx
├── BusinessSection.tsx
├── MemberInterview.tsx
├── DailyTimeline.tsx
├── JobDetail.tsx
├── BenefitsSection.tsx
├── OfficeGallery.tsx
├── TrainingSection.tsx
└── ApplicationForm.tsx

src/data/story-type/
└── sample.ts           # サンプルデータ
```

---

## サイト構造

| ページ | パス | 概要 |
|--------|------|------|
| HOME | `/templates/story-type` | ヒーロー、数字、価値観、成長ストーリー、募集職種 |
| 私たちのストーリー | `/templates/story-type/story` | 沿革、代表メッセージ、事業内容 |
| 先輩社員の声 | `/templates/story-type/members` | 3名分のインタビュー |
| 1日の流れ | `/templates/story-type/daily` | 職種別タイムライン |
| 募集職種 | `/templates/story-type/jobs` | 2職種の詳細情報 |
| はたらく環境 | `/templates/story-type/environment` | 福利厚生、オフィス、研修 |
| 応募する | `/templates/story-type/apply` | フォーム |

---

## セクション詳細

### HOME（page.tsx）

1. **HeroSection**: フルスクリーン背景 + CTAボタン
2. **StatsSection**: 4つの数字（設立年数、勤続年数、有給取得率、未経験入社率）
3. **ValuesSection**: 企業理念と価値観（左テキスト + 右画像）
4. **GrowthStorySection**: 3名の社員カード
5. **JobListSection**: 募集職種カード

### 私たちのストーリー（story/page.tsx）

1. **CompanyHistory**: タイムライン形式の沿革
2. **CEOMessage**: 代表写真 + メッセージ
3. **BusinessSection**: 3つの事業紹介

### 先輩社員の声（members/page.tsx）

- **MemberInterview** × 3名
- 各メンバーにQ&A形式のインタビュー（8問）
- 1日のスケジュール

### 1日の流れ（daily/page.tsx）

- **DailyTimeline**: タブ切り替えで職種別表示
- 時間軸に沿ったスケジュール

### 募集職種（jobs/page.tsx）

- **JobDetail** × 2職種
- 仕事内容、募集要項、応募資格、選考フロー

### はたらく環境（environment/page.tsx）

1. **BenefitsSection**: 4カテゴリの福利厚生
2. **OfficeGallery**: 写真ギャラリー + Lightbox
3. **TrainingSection**: 4ステップの研修フロー + 資格支援

### 応募する（apply/page.tsx）

- **ApplicationForm**: フォーム + 電話/メール応募

---

## コンポーネント詳細

### HeroSection

```tsx
interface HeroSectionProps {
  companyName: string;
  mainCopy: string;      // メインキャッチコピー
  subCopy: string;       // サブコピー
  ctaText: string;       // CTAボタンテキスト
  ctaHref: string;       // CTAリンク先
  backgroundImage?: string;
}
```

### StatsSection

```tsx
interface StatItem {
  value: number;         // 数値
  unit: string;          // 単位（年、%など）
  label: string;         // ラベル
  description: string;   // 説明文
}

interface StatsSectionProps {
  stats: StatItem[];
}
```

### MemberInterview

```tsx
interface Member {
  id: string;
  name: string;
  age: number;
  yearsOfService: number;
  position: string;
  department: string;
  previousJob: string;
  photo: string;
  catchphrase: string;
  interview: {
    reason: string;      // この会社を選んだ理由
    anxiety: string;     // 入社前の不安
    reality: string;     // 実際に働いてみて
    rewarding: string;   // やりがい
    failure: string;     // 失敗談
    growth: string;      // 成長実感
    atmosphere: string;  // 職場の雰囲気
    message: string;     // 応募者へのメッセージ
  };
  schedule: Array<{
    time: string;
    activity: string;
  }>;
}
```

---

## サンプルデータ概要

### 会社情報（株式会社グリーンテック）

- 業種: 環境設備のメンテナンス・施工
- 設立: 2008年
- 従業員: 48名
- 所在地: 愛知県名古屋市中区

### 社員データ（3名）

| 名前 | 年齢 | 入社年 | 職種 | 前職 |
|------|------|--------|------|------|
| 山本 美咲 | 26 | 2022 | 営業アシスタント | アパレル販売員 |
| 鈴木 大輔 | 32 | 2018 | 施工管理 | 飲食店店長 |
| 伊藤 恵理 | 29 | 2020 | 総務・人事 | 新卒入社 |

### 募集職種（2職種）

| 職種 | 給与 | 年間休日 |
|------|------|---------|
| 施工管理スタッフ | 23-35万円 | 120日 |
| 営業サポート | 20-28万円 | 125日 |

---

## ブラッシュアップ候補

### 高優先度

- [ ] 実際の写真に差し替え
- [ ] 社員インタビューの追加（5名程度が理想）
- [ ] フォーム送信のバックエンド実装

### 中優先度

- [ ] 先輩社員ページの個別ページ化（現在はアンカーリンク）
- [ ] 職種詳細ページの個別ページ化
- [ ] よくある質問（FAQ）セクション追加

### 低優先度

- [ ] SNSシェアボタン
- [ ] 最新情報/ニュースセクション
- [ ] 社員ブログ連携

---

## 企業向けヒアリング項目

### 基本情報
- [ ] 企業名・所在地・設立年・従業員数
- [ ] 企業理念・ビジョン・ミッション
- [ ] 主要取引先・実績・受賞歴
- [ ] コーポレートカラー

### 代表・経営層
- [ ] 代表者名・経歴・写真
- [ ] 創業の経緯やエピソード
- [ ] 応募者へのメッセージ

### 社員インタビュー
- [ ] 協力可能な社員3-5名のリストアップ
- [ ] 各社員へのインタビュー実施（30-60分）
- [ ] 業務風景の撮影

### 募集要項
- [ ] 募集職種・雇用形態・給与・勤務地
- [ ] 応募資格・求める人物像
- [ ] 選考フロー・選考期間

### 働く環境
- [ ] 福利厚生・制度の詳細
- [ ] オフィス写真撮影
- [ ] 教育・研修制度の内容
- [ ] 1日のスケジュール（職種別）

### アピールポイント
- [ ] 競合他社との差別化要素
- [ ] 社員が実感しているやりがい
- [ ] 社風を表す言葉
- [ ] 数字で示せる実績
