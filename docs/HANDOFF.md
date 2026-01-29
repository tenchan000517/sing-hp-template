# 採用HPテンプレート - 開発ハンドオフドキュメント

## 目次

1. [プロジェクト概要](#1-プロジェクト概要)
2. [技術スタック](#2-技術スタック)
3. [テンプレート一覧と実装状況](#3-テンプレート一覧と実装状況)
4. [ディレクトリ構造](#4-ディレクトリ構造)
5. [新しいテンプレートの追加方法](#5-新しいテンプレートの追加方法)
6. [コンポーネント設計ガイド](#6-コンポーネント設計ガイド)
7. [デザイントークン](#7-デザイントークン)
8. [SEO/LLMO対策](#8-seollmo対策)
9. [よくある実装パターン](#9-よくある実装パターン)

---

## 1. プロジェクト概要

中小企業向けの採用HPテンプレート集。企業の特性に合わせて5種類のテンプレートから選択可能。

### ターゲットユーザー
- 採用サイトを新規作成したい中小企業
- テンプレートを選んでカスタマイズしたいWeb制作会社

### コンセプト
- **共感採用**: 社員のストーリーで「ここで働く自分」をイメージさせる
- **SEO/LLMO最適化**: 検索エンジン＋AI検索の両方に対応
- **モバイルファースト**: 応募者の70%以上がスマホからアクセス

---

## 2. 技術スタック

| カテゴリ | 技術 | バージョン |
|---------|------|-----------|
| フレームワーク | Next.js | 16.x (App Router) |
| 言語 | TypeScript | 5.x |
| スタイリング | Tailwind CSS | 4.x |
| アニメーション | Framer Motion | 11.x |
| グラフ | Recharts | 2.x |
| アイコン | Lucide React | latest |
| パッケージ管理 | npm | - |

### 主要コマンド

```bash
npm run dev      # 開発サーバー起動（Webpack使用）
npm run build    # ビルド
npm run start    # 本番サーバー起動
npm run lint     # Lint
```

> **Note**: 開発サーバーは`--webpack`フラグを使用しています。これはWSL2からWindowsファイルシステム上で実行する際のTurbopackの互換性問題を回避するためです。

---

## 3. テンプレート一覧と実装状況

| ID | 名称 | 状態 | ページ数 | 特徴 |
|----|------|------|---------|------|
| `story-type` | ストーリー型 | ✅ 実装済 | 7ページ | 社員インタビュー重視、共感採用 |
| `data-driven` | データ訴求型 | ✅ 実装済 | 7ページ | 数字・実績重視、グラフ活用 |
| `visual` | ビジュアル型 | ✅ 実装済 | 9ページ | 写真・動画重視、没入感 |
| `simple` | シンプル型 | ✅ 実装済 | 1ページ | ミニマルデザイン、1ページ完結 |
| `qa-type` | Q&A解決型 | ✅ 実装済 | 7ページ | 不安解消、FAQ重視 |

### story-type（ストーリー型）

| パス | ページ名 |
|------|---------|
| `/templates/story-type` | HOME |
| `/templates/story-type/story` | 私たちのストーリー |
| `/templates/story-type/members` | 先輩社員の声 |
| `/templates/story-type/daily` | 1日の流れ |
| `/templates/story-type/jobs` | 募集職種 |
| `/templates/story-type/environment` | はたらく環境 |
| `/templates/story-type/apply` | 応募する |

### data-driven（データ訴求型）

| パス | ページ名 |
|------|---------|
| `/templates/data-driven` | HOME |
| `/templates/data-driven/company` | 企業データ |
| `/templates/data-driven/workplace` | 数字で見る働きやすさ |
| `/templates/data-driven/career` | キャリアパス |
| `/templates/data-driven/jobs` | 募集要項 |
| `/templates/data-driven/faq` | よくある質問 |
| `/templates/data-driven/apply` | 応募する |

### visual（ビジュアル型）

| パス | ページ名 |
|------|---------|
| `/templates/visual` | HOME |
| `/templates/visual/gallery` | GALLERY（フォトギャラリー） |
| `/templates/visual/people` | PEOPLE（社員紹介） |
| `/templates/visual/people/[id]` | 社員詳細ページ |
| `/templates/visual/office` | OFFICE（オフィス紹介） |
| `/templates/visual/culture` | CULTURE（カルチャー） |
| `/templates/visual/jobs` | JOBS（募集職種） |
| `/templates/visual/jobs/[id]` | 職種詳細ページ |
| `/templates/visual/entry` | ENTRY（応募フォーム） |

### simple（シンプル型）- NEW

**1ページ完結型のミニマルテンプレート**

| セクション | 説明 |
|-----------|------|
| MinimalHero | フルスクリーンヒーロー |
| CompanySection | 会社概要 |
| JobsAccordion | 募集職種（アコーディオン） |
| BenefitsGrid | 福利厚生 |
| FAQAccordion | よくある質問 |
| CEOMessage | 代表メッセージ |
| SimpleForm | 応募フォーム |

**実装済ファイル:**
- `src/data/simple/sample.ts`
- `src/app/templates/simple/layout.tsx`
- `src/app/templates/simple/page.tsx`
- `src/components/templates/simple/` (7コンポーネント)

### qa-type（Q&A解決型）

**求職者の不安を徹底解消するQ&A重視テンプレート**

| パス | ページ名 |
|------|---------|
| `/templates/qa-type` | HOME（不安TOP5） |
| `/templates/qa-type/before-apply` | 応募前の疑問 |
| `/templates/qa-type/selection` | 選考について |
| `/templates/qa-type/after-joining` | 入社後について |
| `/templates/qa-type/workstyle` | 働き方Q&A |
| `/templates/qa-type/jobs` | 募集要項 |
| `/templates/qa-type/contact` | まだ不安がある方へ |

**設計書:** `docs/templates/06-qa-type.md`

**実装済ファイル:**
- `src/data/qa-type/sample.ts`
- `src/app/templates/qa-type/layout.tsx`
- `src/app/templates/qa-type/page.tsx` + 各サブページ
- `src/components/templates/qa-type/` (10コンポーネント)

### テンプレート定義場所
`src/lib/constants.ts` の `templates` 配列と `navigation` オブジェクト

---

## 4. ディレクトリ構造

```
sing-hp-template/
├── docs/
│   ├── HANDOFF.md                 # このファイル
│   └── templates/                 # 各テンプレートの設計書
│       ├── 01-story-type.md
│       ├── 02-data-driven.md
│       ├── 03-simple.md
│       ├── 04-visual.md
│       └── 05-interactive.md
├── public/
│   └── images/
│       └── templates/
│           ├── story-type/
│           ├── data-driven/
│           └── visual/
├── src/
│   ├── app/
│   │   ├── layout.tsx
│   │   ├── page.tsx               # トップページ（テンプレート一覧）
│   │   ├── sitemap.ts
│   │   ├── robots.ts
│   │   └── templates/
│   │       ├── story-type/        # ✅ 実装済
│   │       │   ├── layout.tsx
│   │       │   ├── page.tsx
│   │       │   ├── story/page.tsx
│   │       │   ├── members/page.tsx
│   │       │   ├── daily/page.tsx
│   │       │   ├── jobs/page.tsx
│   │       │   ├── environment/page.tsx
│   │       │   └── apply/page.tsx
│   │       ├── data-driven/       # ✅ 実装済
│   │       │   ├── layout.tsx
│   │       │   ├── page.tsx
│   │       │   ├── company/page.tsx
│   │       │   ├── workplace/page.tsx
│   │       │   ├── career/page.tsx
│   │       │   ├── jobs/page.tsx
│   │       │   ├── faq/page.tsx
│   │       │   └── apply/page.tsx
│   │       ├── visual/            # ✅ 実装済
│   │       │   ├── layout.tsx
│   │       │   ├── page.tsx
│   │       │   ├── gallery/page.tsx
│   │       │   ├── people/page.tsx
│   │       │   ├── people/[id]/page.tsx
│   │       │   ├── office/page.tsx
│   │       │   ├── culture/page.tsx
│   │       │   ├── jobs/page.tsx
│   │       │   ├── jobs/[id]/page.tsx
│   │       │   └── entry/page.tsx
│   │       ├── simple/            # ✅ 実装済（1ページ完結型）
│   │       │   ├── layout.tsx
│   │       │   └── page.tsx
│   │       └── qa-type/           # ✅ 実装済
│   │           ├── layout.tsx
│   │           ├── page.tsx
│   │           ├── before-apply/page.tsx
│   │           ├── selection/page.tsx
│   │           ├── after-joining/page.tsx
│   │           ├── workstyle/page.tsx
│   │           ├── jobs/page.tsx
│   │           └── contact/page.tsx
│   ├── components/
│   │   ├── common/
│   │   │   ├── Button.tsx
│   │   │   ├── Card.tsx
│   │   │   ├── Header.tsx
│   │   │   ├── Footer.tsx
│   │   │   └── SectionTitle.tsx
│   │   ├── animations/
│   │   │   ├── FadeIn.tsx
│   │   │   ├── CountUp.tsx
│   │   │   └── ScrollReveal.tsx
│   │   └── templates/
│   │       ├── story-type/        # ストーリー型専用コンポーネント
│   │       ├── data-driven/       # データ訴求型専用コンポーネント
│   │       │   ├── ImpactHero.tsx
│   │       │   ├── DataDashboard.tsx
│   │       │   ├── GrowthChart.tsx
│   │       │   ├── IndustryComparison.tsx
│   │       │   ├── JobsTable.tsx
│   │       │   ├── FAQSection.tsx
│   │       │   └── ...
│   │       ├── visual/            # ビジュアル型専用コンポーネント
│   │       │   ├── VideoHero.tsx
│   │       │   ├── PhotoGrid.tsx
│   │       │   ├── KeywordSection.tsx
│   │       │   ├── VideoInterview.tsx
│   │       │   ├── CTABanner.tsx
│   │       │   ├── GalleryFilter.tsx
│   │       │   ├── MemberCard.tsx
│   │       │   ├── JobCard.tsx
│   │       │   └── ...
│   │       ├── simple/            # シンプル型専用コンポーネント（✅ 実装済）
│   │       │   ├── MinimalHero.tsx
│   │       │   ├── CompanySection.tsx
│   │       │   ├── JobsAccordion.tsx
│   │       │   ├── BenefitsGrid.tsx
│   │       │   ├── FAQAccordion.tsx
│   │       │   ├── SimpleForm.tsx
│   │       │   ├── CEOMessage.tsx
│   │       │   └── index.ts
│   │       └── qa-type/           # Q&A解決型専用コンポーネント（✅ 実装済）
│   │           ├── AnxietyHero.tsx
│   │           ├── Top5Accordion.tsx
│   │           ├── CategoryNavigation.tsx
│   │           ├── SeniorVoices.tsx
│   │           ├── QASection.tsx
│   │           ├── SelectionFlow.tsx
│   │           ├── OnboardingTimeline.tsx
│   │           ├── ConsultationSection.tsx
│   │           ├── FinalMessage.tsx
│   │           ├── PageHero.tsx
│   │           └── index.ts
│   ├── data/
│   │   ├── story-type/sample.ts
│   │   ├── data-driven/sample.ts
│   │   ├── visual/sample.ts
│   │   ├── simple/sample.ts       # ✅ 実装済
│   │   └── qa-type/sample.ts      # ✅ 実装済
│   └── lib/
│       ├── constants.ts
│       └── seo.tsx
└── package.json
```

---

## 5. 新しいテンプレートの追加方法

### Step 1: constants.tsにテンプレート情報を追加

```typescript
// src/lib/constants.ts
export const templates = [
  // 既存のテンプレート...
  {
    id: "new-template",
    name: "新テンプレート",
    subtitle: "サブタイトル",
    description: "説明文...",
    features: ["特徴1", "特徴2", "特徴3", "特徴4"],
    suitableFor: ["適した企業1", "適した企業2"],
    color: "#FF5722",
    href: "/templates/new-template",
    image: "/images/templates/new-template/thumbnail.jpg",
    status: "available",
  },
];

export const navigation = {
  // ...
  newTemplate: [
    { href: "/templates/new-template", label: "HOME" },
    { href: "/templates/new-template/about", label: "会社について" },
    // ...
  ],
};
```

### Step 2: ディレクトリ作成

```bash
mkdir -p src/app/templates/new-template
mkdir -p src/components/templates/new-template
mkdir -p src/data/new-template
mkdir -p public/images/templates/new-template
```

### Step 3: サンプルデータ作成

```typescript
// src/data/new-template/sample.ts
export const company = {
  name: "サンプル株式会社",
  // ...既存のsample.tsを参考に
};
```

### Step 4: layout.tsx作成

```typescript
// src/app/templates/new-template/layout.tsx
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import { company } from "@/data/new-template/sample";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div data-template="new-template">
      <Header companyName={company.name} templateType="new-template" />
      <main>{children}</main>
      <Footer company={company} />
    </div>
  );
}
```

### Step 5: 各ページを作成

既存テンプレートのページを参考に実装

---

## 6. コンポーネント設計ガイド

### 共通コンポーネント

#### Button
```tsx
import Button from "@/components/common/Button";

<Button href="/path" variant="accent" size="lg">テキスト</Button>
// variant: primary | secondary | accent | outline | ghost
// size: sm | md | lg
```

#### Card
```tsx
import Card from "@/components/common/Card";

<Card href="/link" padding="md" shadow="md" hover={true}>
  コンテンツ
</Card>
```

#### SectionTitle
```tsx
import SectionTitle from "@/components/common/SectionTitle";

<SectionTitle
  title="タイトル"
  subtitle="ENGLISH"
  description="説明文..."
  align="center"
  border={true}
/>
```

### アニメーション

#### FadeIn
```tsx
import FadeIn from "@/components/animations/FadeIn";

<FadeIn direction="up" delay={0.2} duration={0.6}>
  コンテンツ
</FadeIn>
```

#### CountUp
```tsx
import CountUp from "@/components/animations/CountUp";

<CountUp value={85} suffix="%" duration={1.5} />
```

### コンポーネント作成ルール

1. クライアントコンポーネントには `"use client"` を付ける
2. Propsはinterfaceで型定義
3. アニメーションはFramer Motion使用
4. スタイルはCSS変数（`var(--color-xxx)`）使用
5. レスポンシブはTailwindブレイクポイント（`md:`, `lg:`）使用

---

## 7. デザイントークン

### カラーパレット

```css
/* globals.css で定義 */

/* Primary */
--color-primary: #2E7D32;
--color-primary-light: #4CAF50;
--color-primary-dark: #1B5E20;

/* Accent */
--color-accent: #FF6F00;
--color-accent-light: #FF9800;

/* 背景 */
--color-bg-primary: #ffffff;
--color-bg-secondary: #F5F5F5;
--color-bg-tertiary: #FAFAFA;

/* テキスト */
--color-text-primary: #333333;
--color-text-secondary: #666666;
--color-text-muted: #999999;

/* ボーダー */
--color-border: #E0E0E0;
```

### テンプレート別カラー

| テンプレート | Primary | Accent |
|-------------|---------|--------|
| story-type | #2E7D32 (緑) | #FF6F00 (オレンジ) |
| data-driven | #1565C0 (青) | #FFC107 (金) |
| simple | #424242 (グレー) | #000000 (黒) |
| visual | #7B1FA2 (紫) | #E91E63 (ピンク) |
| qa-type | #4CAF50 (緑) | #FF9800 (オレンジ) |

---

## 8. SEO/LLMO対策

### メタデータ

```tsx
// 各ページのpage.tsx
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "ページタイトル",
  description: "120-160文字の説明文...",
};
```

### JSON-LD構造化データ

```tsx
import { generateOrganizationSchema, JsonLd } from "@/lib/seo";

const schema = generateOrganizationSchema({ name: "会社名", ... });
<JsonLd data={schema} />
```

### LLMO対策ポイント

1. robots.tsでAIクローラー許可
2. 構造化データでコンテンツの意味を明確化
3. セマンティックHTML使用
4. 明確な階層構造

---

## 9. よくある実装パターン

### セクション基本構造

```tsx
<section className="py-16 md:py-24 bg-[var(--color-bg-secondary)]">
  <div className="container mx-auto px-4">
    <SectionTitle title="タイトル" subtitle="ENGLISH" align="center" />
    <div className="grid md:grid-cols-3 gap-6 mt-12">
      {/* コンテンツ */}
    </div>
  </div>
</section>
```

### ヒーローセクション

```tsx
<section className="bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-primary-dark)] text-white py-20 md:py-28">
  <div className="container mx-auto px-4">
    <FadeIn direction="up">
      <div className="max-w-3xl mx-auto text-center">
        <span className="text-sm font-medium opacity-80 tracking-wider uppercase mb-4 block">
          ENGLISH
        </span>
        <h1 className="text-3xl md:text-4xl font-bold mb-6">タイトル</h1>
        <p className="text-lg opacity-90">説明文</p>
      </div>
    </FadeIn>
  </div>
</section>
```

### カードグリッド

```tsx
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
  {items.map((item, index) => (
    <motion.div
      key={item.id}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
    >
      <Card href={item.href} padding="lg">
        {/* カード内容 */}
      </Card>
    </motion.div>
  ))}
</div>
```

---

## 付録

### 開発環境セットアップ

```bash
git clone <repo-url>
cd sing-hp-template
npm install
npm run dev
```

### 参考リンク

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [Framer Motion](https://www.framer.com/motion/)
- [Recharts](https://recharts.org/)
- [Lucide Icons](https://lucide.dev/icons/)

---

## 10. 次のセッションへの引き継ぎ (TODO)

### 完了した作業
- [x] ストーリー型（story-type）実装
- [x] データ訴求型（data-driven）実装
- [x] ビジュアル型（visual）実装
- [x] シンプル型（simple）実装
- [x] Q&A解決型（qa-type）実装 ← **今回完了**

### 全テンプレート実装完了

5種類すべてのテンプレートが実装済みです。

```bash
npm run dev
# http://localhost:3000 でテンプレート一覧を確認
# http://localhost:3000/templates/story-type
# http://localhost:3000/templates/data-driven
# http://localhost:3000/templates/visual
# http://localhost:3000/templates/simple
# http://localhost:3000/templates/qa-type
```

### 修正マニュアル

テンプレートの修正方法をケースバイケースでまとめたマニュアルページを用意しています。

```
/manual
```

- **189件**の修正ケースを収録
- カテゴリ別・テンプレート別フィルター機能
- Claude Codeへの指示文をワンクリックでコピー可能
- 作業手順ガイド（VS Code起動、git pull/push）を含む

**関連ファイル:**
- `src/app/manual/page.tsx` - マニュアルページUI
- `src/data/manual/cases.ts` - ケースデータ（189件）

### 今後の改善案（オプション）

1. **画像の追加**: 各テンプレートに実際のサンプル画像を追加
2. **パフォーマンス最適化**: 画像最適化、コード分割の検討
3. **アクセシビリティ**: WCAG対応の強化

---

*最終更新: 2026年1月29日*
