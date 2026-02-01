# テンプレートショーケースサイト更新 HANDOFF

## 概要

`/mnt/c/sing-hp-template/` を更新し、新しい7つのテンプレートを表示できるようにする。

## 現在の状態

### 既存テンプレート（旧）
- story-type（ストーリー型）
- data-driven（データ訴求型）
- simple（シンプル型）
- visual（ビジュアル型）
- qa-type（Q&A解決型）

### 新テンプレート（/mnt/c/hp-template/ に存在）
| ID | 日本語名 | ページ数 | リポジトリ |
|---|---|---|---|
| standard | 標準テンプレート | 6 | template-standard |
| fullorder | フルオーダー | 0 | template-fullorder |
| recruit-magazine | 採用サイト（マガジン形式） | 7 | template-recruit-magazine |
| leadgen-minimal | リード獲得型（ミニマル） | 4 | template-leadgen-minimal |
| leadgen-visual | 地域密着型（ビジュアル） | 5 | template-leadgen-visual |
| trust-visual | 信頼構築型（ビジュアル） | 6 | template-trust-visual |
| authority-minimal | 権威性訴求（ミニマル） | 8 | template-authority-minimal |

---

## 実装タスク

### Phase 1: 準備作業

#### 1-1. 各テンプレートにプロンプトを保存
各テンプレートフォルダ（`/mnt/c/hp-template/template-*/`）に `docs/prompt.md` を作成。
このプロンプトは「このテンプレートで作るサンプルサイトの設定」を生成するためのもの。

#### 1-2. サンプル企業データを作成
各テンプレート用に、リアリティのある架空企業を設定する。

| テンプレート | サンプル企業 | 業種 | 特徴 |
|---|---|---|---|
| standard | 中部建設株式会社 | 建設業 | 創業40年の地域密着型建設会社 |
| recruit-magazine | 株式会社ネクストステージ | IT/SaaS | 急成長中のHRテック企業 |
| leadgen-minimal | スカイリフォーム株式会社 | 住宅リフォーム | 屋根・外壁塗装専門 |
| leadgen-visual | 三河精密工業株式会社 | 精密金属加工 | 自動車部品の精密加工 |
| trust-visual | あおぞら法律事務所 | 法律事務所 | 相続・企業法務専門 |
| authority-minimal | 株式会社テックフロンティア | ITコンサルティング | DX支援・システム開発 |
| fullorder | （テンプレートのみ） | - | サンプルなし |

---

### Phase 2: ショーケースサイト更新

#### 2-1. constants.ts 更新
`src/lib/constants.ts` の `templates` 配列を新しい7テンプレートに置き換え。

```typescript
export const templates = [
  {
    id: 'standard',
    name: '標準テンプレート',
    subtitle: '企業HP標準',
    description: '企業HPの標準構成。会社概要、サービス、採用、お問い合わせなど基本ページを網羅。',
    features: ['6ページ構成', '汎用性が高い', 'SEO対策済み', 'どの業種にも対応'],
    suitableFor: ['初めてHPを作る企業', '標準的な情報発信をしたい企業', 'コストを抑えたい企業'],
    color: '#1a2744',
    href: '/templates/standard',
    image: '/images/templates/standard/thumbnail.jpg',
    status: 'available',
    repo: 'template-standard',
    pages: 6,
  },
  {
    id: 'recruit-magazine',
    name: '採用サイト（マガジン形式）',
    subtitle: '読ませるエディトリアル',
    description: '採用特化のマガジン形式。社員インタビュー、働く環境、キャリアパスを深く伝える。',
    features: ['7ページ構成', 'インタビュー重視', 'Magazine表現', '余白で語るデザイン'],
    suitableFor: ['採用に力を入れている企業', '社員の魅力を伝えたい企業', '文章で訴求したい企業'],
    color: '#2d3748',
    href: '/templates/recruit-magazine',
    image: '/images/templates/recruit-magazine/thumbnail.jpg',
    status: 'available',
    repo: 'template-recruit-magazine',
    pages: 7,
  },
  {
    id: 'leadgen-minimal',
    name: 'リード獲得型（ミニマル）',
    subtitle: 'CV最短ルート設計',
    description: 'コンバージョン最優先のミニマル設計。余白とタイポグラフィで信頼感を演出。',
    features: ['4ページ構成', 'CV導線最適化', 'ミニマルデザイン', 'フォーム重視'],
    suitableFor: ['問い合わせを増やしたい企業', 'リード獲得が目的の企業', 'シンプルなサイトを好む企業'],
    color: '#4a5568',
    href: '/templates/leadgen-minimal',
    image: '/images/templates/leadgen-minimal/thumbnail.jpg',
    status: 'available',
    repo: 'template-leadgen-minimal',
    pages: 4,
  },
  {
    id: 'leadgen-visual',
    name: '地域密着型（ビジュアル）',
    subtitle: '地域商圏×SEO',
    description: '地域密着型ビジネス向け。施工実績ギャラリー、エリア情報、地域SEOに最適化。',
    features: ['5ページ構成', '施工実績重視', '地域SEO対応', 'ビジュアル豊富'],
    suitableFor: ['地域密着のサービス業', '施工実績を見せたい企業', 'エリア限定のビジネス'],
    color: '#2563eb',
    href: '/templates/leadgen-visual',
    image: '/images/templates/leadgen-visual/thumbnail.jpg',
    status: 'available',
    repo: 'template-leadgen-visual',
    pages: 5,
  },
  {
    id: 'trust-visual',
    name: '信頼構築型（ビジュアル）',
    subtitle: '社会的証明の最大化',
    description: '実績・資格・メディア掲載など社会的証明を前面に。写真・動画で信頼感を醸成。',
    features: ['6ページ構成', '実績・資格重視', 'メディア掲載', '権威性の可視化'],
    suitableFor: ['専門性をアピールしたい企業', '実績が豊富な企業', '士業・コンサル'],
    color: '#059669',
    href: '/templates/trust-visual',
    image: '/images/templates/trust-visual/thumbnail.jpg',
    status: 'available',
    repo: 'template-trust-visual',
    pages: 6,
  },
  {
    id: 'authority-minimal',
    name: '権威性訴求（ミニマル）',
    subtitle: '専門性・実績で説得',
    description: '専門性と実績を論理的に訴求。ミニマルデザインで品格と信頼感を表現。',
    features: ['8ページ構成', '専門性重視', '論理的構成', 'ミニマルデザイン'],
    suitableFor: ['コンサルティング企業', 'BtoB企業', '専門サービス業'],
    color: '#7c3aed',
    href: '/templates/authority-minimal',
    image: '/images/templates/authority-minimal/thumbnail.jpg',
    status: 'available',
    repo: 'template-authority-minimal',
    pages: 8,
  },
  {
    id: 'fullorder',
    name: 'フルオーダー',
    subtitle: '完全カスタム',
    description: 'ページ構成なしの完全カスタムテンプレート。自由にページを追加して構築可能。',
    features: ['ページ数自由', '完全カスタム', 'site.jsonで管理', '柔軟な構成'],
    suitableFor: ['独自の構成が必要な企業', '特殊な業種', 'オリジナリティを重視する企業'],
    color: '#6b7280',
    href: '/templates/fullorder',
    image: '/images/templates/fullorder/thumbnail.jpg',
    status: 'available',
    repo: 'template-fullorder',
    pages: 0,
  },
];
```

#### 2-2. navigation 更新
各テンプレートのナビゲーション構成を追加。

#### 2-3. サンプルデータ作成
`src/data/{template-id}/sample.ts` を各テンプレート用に作成。

---

### Phase 3: 各テンプレートページ作成

#### ディレクトリ構造
```
src/app/templates/
├── standard/           # 標準テンプレート
│   ├── page.tsx
│   ├── about/
│   ├── service/
│   ├── recruit/
│   ├── contact/
│   └── privacy/
├── recruit-magazine/   # 採用サイト
│   ├── page.tsx
│   ├── about/
│   ├── work/
│   ├── people/
│   ├── culture/
│   ├── recruit/
│   └── entry/
├── leadgen-minimal/    # リード獲得型
│   ├── page.tsx
│   ├── service/
│   └── contact/
├── leadgen-visual/     # 地域密着型
│   ├── page.tsx
│   ├── about/
│   ├── works/
│   └── contact/
├── trust-visual/       # 信頼構築型
│   ├── page.tsx
│   ├── about/
│   ├── service/
│   ├── case/
│   └── contact/
├── authority-minimal/  # 権威性訴求
│   ├── page.tsx
│   └── ...
└── fullorder/          # フルオーダー（説明ページのみ）
    └── page.tsx
```

---

## サンプル企業詳細設定

### 1. 標準テンプレート: 中部建設株式会社

```
企業名: 中部建設株式会社
英語名: Chubu Construction Co., Ltd.
業種: 総合建設業
設立: 1984年4月
代表者: 山田 誠一（やまだ せいいち）
従業員数: 128名
所在地: 愛知県岡崎市康生町561-1
電話: 0564-XX-XXXX
資本金: 8,000万円
年商: 45億円（2024年度）
事業内容:
  - 住宅新築・リフォーム
  - 公共施設建築
  - 商業施設建築
強み:
  - 創業40年の実績と信頼
  - 地域密着で迅速な対応
  - 一級建築士8名在籍
沿革:
  - 1984年: 岡崎市にて創業
  - 1992年: 一級建築士事務所登録
  - 2005年: 本社ビル新築移転
  - 2015年: ISO9001認証取得
  - 2024年: 創業40周年
```

### 2. 採用サイト: 株式会社ネクストステージ

```
企業名: 株式会社ネクストステージ
英語名: NextStage Inc.
業種: HRテック（SaaS）
設立: 2018年6月
代表者: 鈴木 健太郎（すずき けんたろう）
従業員数: 87名
所在地: 東京都渋谷区道玄坂1-12-1
電話: 03-XXXX-XXXX
資本金: 1億5,000万円
シリーズ: シリーズB（累計調達額15億円）
事業内容:
  - 採用管理システム「TalentFlow」の開発・運営
  - 人事データ分析サービス
強み:
  - 導入企業数1,200社突破
  - 平均年齢29歳の若い組織
  - リモートワーク率80%
  - 有給取得率92%
沿革:
  - 2018年: 創業、シードラウンド調達
  - 2020年: TalentFlow正式リリース
  - 2022年: シリーズA調達（5億円）
  - 2024年: シリーズB調達（10億円）
  - 2025年: 導入企業1,000社突破
```

### 3. リード獲得型: スカイリフォーム株式会社

```
企業名: スカイリフォーム株式会社
英語名: Sky Reform Co., Ltd.
業種: 住宅リフォーム（屋根・外壁塗装専門）
設立: 2010年3月
代表者: 高橋 一郎（たかはし いちろう）
従業員数: 32名
所在地: 愛知県名古屋市緑区鳴海町字山下88
電話: 052-XXX-XXXX
資本金: 2,000万円
施工エリア: 名古屋市、豊田市、岡崎市、刈谷市、安城市
事業内容:
  - 屋根塗装・葺き替え
  - 外壁塗装
  - 防水工事
強み:
  - 施工実績3,000件以上
  - 最長15年保証
  - 自社職人による施工
  - 見積り無料・即日対応
```

### 4. 地域密着型: 三河精密工業株式会社

```
企業名: 三河精密工業株式会社
英語名: Mikawa Precision Industry Co., Ltd.
業種: 精密金属加工
設立: 1975年8月
代表者: 加藤 正明（かとう まさあき）
従業員数: 156名
所在地: 愛知県豊田市トヨタ町1番地
電話: 0565-XX-XXXX
資本金: 5,000万円
年商: 28億円（2024年度）
事業内容:
  - 自動車部品の精密加工
  - 産業機械部品の製造
  - 試作品開発
強み:
  - 創業50年の技術蓄積
  - ミクロン単位の加工精度
  - 大手自動車メーカーとの直接取引
  - 最新5軸加工機を12台保有
```

### 5. 信頼構築型: あおぞら法律事務所

```
事務所名: あおぞら法律事務所
英語名: Aozora Law Office
業種: 法律事務所
設立: 2008年4月
代表: 田中 裕子（たなか ゆうこ）弁護士
所属弁護士: 8名
所在地: 愛知県名古屋市中区錦3-6-29
電話: 052-XXX-XXXX
所属: 愛知県弁護士会
専門分野:
  - 相続・遺言
  - 企業法務
  - 不動産取引
  - 労働問題
強み:
  - 相談実績5,000件以上
  - 初回相談無料
  - 土日祝日相談可能
  - 女性弁護士3名在籍
```

### 6. 権威性訴求: 株式会社テックフロンティア

```
企業名: 株式会社テックフロンティア
英語名: TechFrontier Inc.
業種: ITコンサルティング・システム開発
設立: 2012年9月
代表者: 村田 浩二（むらた こうじ）
従業員数: 78名
所在地: 東京都港区六本木6-10-1
電話: 03-XXXX-XXXX
資本金: 1億円
年商: 12億円（2024年度）
事業内容:
  - DXコンサルティング
  - 業務システム開発
  - クラウド移行支援
  - データ分析・AI導入支援
強み:
  - 導入企業150社以上
  - 平均コスト削減率30%
  - AWS/Azure認定パートナー
  - 東証プライム上場企業との取引実績多数
実績:
  - 製造業向けDX支援: 年間売上15%向上
  - 小売業向け在庫管理システム: 在庫ロス40%削減
  - 金融機関向けクラウド移行: 運用コスト50%削減
```

---

## ショーケース作成フロー

**重要**: 以下のフローを厳守してください。セッション内で「やった気」にならず、必ずプロンプトを独立して実行してください。

### 全体フロー図

```
┌─────────────────────────────────────────────────────────────────┐
│ STEP 1: プロンプト実行（外部AI）                                  │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  ┌─────────────────┐    ┌─────────────────┐                    │
│  │ sample-prompt.md │───▶│ 外部AI          │                    │
│  │ を読み込む       │    │ (Claude/ChatGPT) │                    │
│  └─────────────────┘    └─────────────────┘                    │
│         │                        │                              │
│         ▼                        ▼                              │
│  プロンプト内容を              AIがサンプル企業データと           │
│  コピー                       ページ構成を生成                   │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────────┐
│ STEP 2: 実行結果を保存                                           │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  保存先: docs/templates/{template-id}/generated-data.md         │
│                                                                 │
│  例:                                                            │
│  - docs/templates/standard/generated-data.md                    │
│  - docs/templates/recruit-magazine/generated-data.md            │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────────┐
│ STEP 3: ショーケース実装（Claude Code）                          │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  ┌─────────────────┐    ┌─────────────────┐                    │
│  │ generated-data.md│    │ sample-prompt.md │                    │
│  │ (AIの出力結果)   │ +  │ (元の設定)       │                    │
│  └─────────────────┘    └─────────────────┘                    │
│         │                        │                              │
│         └────────┬───────────────┘                              │
│                  ▼                                              │
│  Claude Codeに以下を指示:                                       │
│  1. generated-data.md と sample-prompt.md を読み込む            │
│  2. src/app/templates/{template-id}/ にページを作成              │
│  3. src/data/{template-id}/sample.ts にデータを保存             │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
                              │
                              ▼
                       次のテンプレートへ
                       （STEP 1に戻る）
```

---

### 各テンプレートのsample-prompt.md 一覧

| テンプレート | プロンプトファイル | サンプル企業 |
|-------------|-------------------|-------------|
| standard | `docs/templates/standard/sample-prompt.md` | 中部建設株式会社（建設業） |
| recruit-magazine | `docs/templates/recruit-magazine/sample-prompt.md` | 株式会社ネクストステージ（HRテック） |
| leadgen-minimal | `docs/templates/leadgen-minimal/sample-prompt.md` | スカイリフォーム株式会社（住宅リフォーム） |
| leadgen-visual | `docs/templates/leadgen-visual/sample-prompt.md` | 三河精密工業株式会社（精密金属加工） |
| trust-visual | `docs/templates/trust-visual/sample-prompt.md` | あおぞら法律事務所（法律事務所） |
| authority-minimal | `docs/templates/authority-minimal/sample-prompt.md` | 株式会社テックフロンティア（ITコンサル） |
| fullorder | `docs/templates/fullorder/sample-prompt.md` | サンプルなし（説明ページのみ） |

---

### STEP 1: プロンプト実行の詳細

**必ず外部AIで独立して実行すること**

1. `docs/templates/{template-id}/sample-prompt.md` を開く
2. 内容を全てコピー
3. 外部AI（Claude.ai、ChatGPT等）に貼り付けて実行
4. AIの出力結果を取得

**⚠️ 注意事項**:
- Claude Codeのセッション内で「これを実行した」と思い込まないこと
- 必ず外部AIで独立して実行し、実際の出力結果を取得すること
- sample-prompt.md には企業の基本情報は含まれているが、ページごとの詳細コンテンツ（見出し、本文、CTAなど）は外部AIが生成する

---

### STEP 2: 実行結果保存の詳細

**保存先**: `docs/templates/{template-id}/generated-data.md`

**保存する内容**:
- AIが生成した全ての出力結果
- ページごとのセクション構成
- 見出し、本文、CTA文言
- 画像の指示（撮影指示・AI生成指示）

**ファイル形式**:
```markdown
# {テンプレート名} サンプルデータ生成結果

生成日: {YYYY-MM-DD}
生成AI: {使用したAI}

---

## 生成されたコンテンツ

{AIの出力結果をそのまま貼り付け}
```

---

### STEP 3: ショーケース実装の詳細

**Claude Codeへの指示文テンプレート**:

```
以下の2つのファイルを読み込んで、{テンプレート名}のショーケースを実装してください。

1. 元の設定: docs/templates/{template-id}/sample-prompt.md
2. 生成データ: docs/templates/{template-id}/generated-data.md

作成するファイル:
- src/app/templates/{template-id}/page.tsx（TOPページ）
- src/app/templates/{template-id}/{sub-page}/page.tsx（各サブページ）
- src/data/{template-id}/sample.ts（サンプルデータ）
- src/components/templates/{template-id}/（コンポーネント）

実装ルール:
- 既存の他テンプレート（story-type等）の構造を参考にする
- Tailwind CSSを使用
- Framer Motionでアニメーション
- レスポンシブ対応必須
```

---

### 実装順序

1. **standard**（標準テンプレート）から開始
2. **recruit-magazine**（採用サイト）
3. **leadgen-minimal**（リード獲得型）
4. **leadgen-visual**（地域密着型）
5. **trust-visual**（信頼構築型）
6. **authority-minimal**（権威性訴求）
7. **fullorder**（説明ページのみ）

各テンプレートでSTEP 1→2→3を繰り返す。

---

## 参考ファイル

| ファイル | 用途 |
|---------|------|
| `/mnt/c/sing-hp-template/src/lib/constants.ts` | テンプレート一覧定義 |
| `/mnt/c/sing-hp-template/src/data/story-type/sample.ts` | サンプルデータの参考 |
| `/mnt/c/sing-hp-template/src/app/templates/story-type/` | 既存テンプレートページの参考 |
| `/mnt/c/hp-template/template-*/` | 実際のテンプレートリポジトリ |

---

## 技術スタック

- Next.js 15.x（App Router）
- React 19.x
- TypeScript 5.x
- Tailwind CSS 4.x
- Framer Motion 12.x
- Lucide React（アイコン）

---

## 注意事項

1. **サンプルデータはリアリティを重視**
   - 「山田太郎」「田中花子」のような適当な名前は使わない
   - 「〇〇月〇〇日」「△△上場」のような不完全な表記は使わない
   - 実際にありそうな企業・人物設定にする

2. **既存の旧テンプレート（story-type等）は残す**
   - 新テンプレートを追加する形で対応
   - 旧テンプレートは別セクション「レガシーテンプレート」として残すか、削除するかは後で判断

3. **各テンプレートの特徴を明確に**
   - テンプレートごとに異なるデザイン・構成を持つ
   - 単なる色違いにならないよう注意

---

## 更新履歴

| 日付 | 内容 |
|------|------|
| 2026-02-01 | ショーケース作成フロー追加（GASのHP制作フローと同一フローに統一） |
| 2026-02-01 | HANDOFF作成 |
