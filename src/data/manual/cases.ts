// 修正マニュアル - 全ケースデータ

export interface ManualCase {
  id: string;
  category: Category;
  subcategory: Subcategory;
  template: TemplateType;
  title: string;
  description: string;
  targetFiles: string[];
  instruction: string;
  notes?: string[];
  tags: string[];
}

export type Category =
  | "layout"
  | "style"
  | "content"
  | "animation"
  | "responsive"
  | "function"
  | "seo"
  | "navigation";

export type Subcategory =
  | "hero"
  | "header"
  | "footer"
  | "section"
  | "card"
  | "form"
  | "table"
  | "chart"
  | "accordion"
  | "gallery"
  | "timeline"
  | "color"
  | "font"
  | "spacing"
  | "size"
  | "text"
  | "image"
  | "data"
  | "link"
  | "fadein"
  | "scroll"
  | "countup"
  | "hover"
  | "mobile"
  | "tablet"
  | "breakpoint"
  | "filter"
  | "search"
  | "video"
  | "metadata"
  | "schema"
  | "menu"
  | "breadcrumb"
  | "other";

export type TemplateType =
  | "all"
  | "top"
  | "story-type"
  | "data-driven"
  | "visual"
  | "simple"
  | "qa-type";

export const categoryLabels: Record<Category, string> = {
  layout: "レイアウト",
  style: "スタイル",
  content: "コンテンツ",
  animation: "アニメーション",
  responsive: "レスポンシブ",
  function: "機能",
  seo: "SEO/LLMO",
  navigation: "ナビゲーション",
};

export const subcategoryLabels: Record<Subcategory, string> = {
  hero: "ヒーローセクション",
  header: "ヘッダー",
  footer: "フッター",
  section: "セクション全般",
  card: "カード",
  form: "フォーム",
  table: "テーブル",
  chart: "グラフ・チャート",
  accordion: "アコーディオン",
  gallery: "ギャラリー",
  timeline: "タイムライン",
  color: "色",
  font: "フォント",
  spacing: "余白・間隔",
  size: "サイズ",
  text: "テキスト",
  image: "画像",
  data: "データ",
  link: "リンク",
  fadein: "フェードイン",
  scroll: "スクロール",
  countup: "カウントアップ",
  hover: "ホバー",
  mobile: "モバイル",
  tablet: "タブレット",
  breakpoint: "ブレイクポイント",
  filter: "フィルター",
  search: "検索",
  video: "動画",
  metadata: "メタデータ",
  schema: "構造化データ",
  menu: "メニュー",
  breadcrumb: "パンくず",
  other: "その他",
};

export const templateLabels: Record<TemplateType, string> = {
  all: "全テンプレート共通",
  top: "トップページ（一覧）",
  "story-type": "ストーリー型",
  "data-driven": "データ訴求型",
  visual: "ビジュアル型",
  simple: "シンプル型",
  "qa-type": "Q&A解決型",
};

export const manualCases: ManualCase[] = [
  // ================================================================
  // 全テンプレート共通
  // ================================================================

  // --- 色の変更 ---
  {
    id: "all-color-primary",
    category: "style",
    subcategory: "color",
    template: "all",
    title: "プライマリカラーを変更したい",
    description: "サイト全体のメインカラー（緑）を別の色に変更する",
    targetFiles: ["src/app/globals.css"],
    instruction: `globals.cssの--color-primary、--color-primary-light、--color-primary-darkの値を変更してください。

例: 青系に変更する場合
--color-primary: #1565C0;
--color-primary-light: #42A5F5;
--color-primary-dark: #0D47A1;`,
    notes: [
      "3色セットで変更するとグラデーションが綺麗に表示される",
      "テンプレート固有の色は各layout.tsxで上書きされている場合がある",
    ],
    tags: ["色", "プライマリ", "メインカラー", "テーマ"],
  },
  {
    id: "all-color-accent",
    category: "style",
    subcategory: "color",
    template: "all",
    title: "アクセントカラーを変更したい",
    description: "CTAボタンや強調部分のアクセントカラー（オレンジ）を変更する",
    targetFiles: ["src/app/globals.css"],
    instruction: `globals.cssの--color-accent、--color-accent-lightの値を変更してください。

例: 赤系に変更する場合
--color-accent: #E53935;
--color-accent-light: #EF5350;`,
    notes: ["アクセントカラーは目立つ色を選ぶとCTAの効果が高まる"],
    tags: ["色", "アクセント", "CTA", "ボタン"],
  },
  {
    id: "all-color-background",
    category: "style",
    subcategory: "color",
    template: "all",
    title: "背景色を変更したい",
    description: "セクションの背景色を変更する",
    targetFiles: ["src/app/globals.css"],
    instruction: `globals.cssの背景色変数を変更してください。

--color-bg-primary: #ffffff;    // メイン背景
--color-bg-secondary: #F5F5F5;  // セクション背景（交互）
--color-bg-tertiary: #FAFAFA;   // 薄い背景`,
    tags: ["色", "背景", "バックグラウンド"],
  },
  {
    id: "all-color-text",
    category: "style",
    subcategory: "color",
    template: "all",
    title: "テキスト色を変更したい",
    description: "本文や見出しのテキスト色を変更する",
    targetFiles: ["src/app/globals.css"],
    instruction: `globals.cssのテキスト色変数を変更してください。

--color-text-primary: #333333;   // 見出し・本文
--color-text-secondary: #666666; // サブテキスト
--color-text-muted: #999999;     // 補足テキスト`,
    tags: ["色", "テキスト", "文字色"],
  },

  // --- フォントの変更 ---
  {
    id: "all-font-family",
    category: "style",
    subcategory: "font",
    template: "all",
    title: "フォントを変更したい",
    description: "サイト全体のフォントファミリーを変更する",
    targetFiles: ["src/app/globals.css", "src/app/layout.tsx"],
    instruction: `1. globals.cssの--font-sans、--font-serifを変更
2. layout.tsxのGoogleフォントimportを変更

例: 游ゴシックに変更
--font-sans: "游ゴシック", "Yu Gothic", sans-serif;`,
    notes: [
      "Googleフォントを使う場合はlayout.tsxでimportが必要",
      "日本語フォントは表示確認を必ず行う",
    ],
    tags: ["フォント", "書体", "タイポグラフィ"],
  },
  {
    id: "all-font-size-heading",
    category: "style",
    subcategory: "font",
    template: "all",
    title: "見出しのフォントサイズを変更したい",
    description: "h1、h2などの見出しサイズを調整する",
    targetFiles: ["該当コンポーネントのファイル"],
    instruction: `該当する見出しのtext-サイズクラスを変更してください。

Tailwindのサイズ指定:
- text-sm (14px)
- text-base (16px)
- text-lg (18px)
- text-xl (20px)
- text-2xl (24px)
- text-3xl (30px)
- text-4xl (36px)
- text-5xl (48px)

例: <h1 className="text-3xl md:text-4xl"> を <h1 className="text-4xl md:text-5xl"> に変更`,
    tags: ["フォント", "サイズ", "見出し", "h1", "h2"],
  },
  {
    id: "all-font-size-body",
    category: "style",
    subcategory: "font",
    template: "all",
    title: "本文のフォントサイズを変更したい",
    description: "段落や説明文のフォントサイズを調整する",
    targetFiles: ["該当コンポーネントのファイル"],
    instruction: `本文のtext-サイズクラスを変更してください。

例: <p className="text-base"> を <p className="text-lg"> に変更

一括で変更したい場合はglobals.cssにベースサイズを追加:
body { font-size: 18px; }`,
    tags: ["フォント", "サイズ", "本文", "段落"],
  },

  // --- 余白・間隔 ---
  {
    id: "all-spacing-section",
    category: "style",
    subcategory: "spacing",
    template: "all",
    title: "セクション間の余白を変更したい",
    description: "セクションの上下パディングを調整する",
    targetFiles: ["該当コンポーネントのファイル"],
    instruction: `セクションのpy-（パディング）クラスを変更してください。

Tailwindの余白サイズ:
- py-8 (32px)
- py-12 (48px)
- py-16 (64px)
- py-20 (80px)
- py-24 (96px)

例: <section className="py-16 md:py-24"> を <section className="py-20 md:py-32"> に変更`,
    tags: ["余白", "パディング", "セクション", "スペース"],
  },
  {
    id: "all-spacing-container",
    category: "style",
    subcategory: "spacing",
    template: "all",
    title: "コンテナの横幅を変更したい",
    description: "コンテンツエリアの最大幅を調整する",
    targetFiles: ["該当コンポーネントのファイル"],
    instruction: `containerクラスにmax-wを追加、または変更してください。

例:
- max-w-4xl (896px)
- max-w-5xl (1024px)
- max-w-6xl (1152px)
- max-w-7xl (1280px)

<div className="container mx-auto px-4 max-w-6xl">`,
    tags: ["横幅", "コンテナ", "レイアウト"],
  },

  // --- ヘッダー ---
  {
    id: "all-header-logo",
    category: "content",
    subcategory: "header",
    template: "all",
    title: "ヘッダーのロゴ/社名を変更したい",
    description: "ヘッダーに表示される会社名やロゴを変更する",
    targetFiles: ["src/data/[template]/sample.ts"],
    instruction: `該当テンプレートのsample.tsでcompany.nameを変更してください。

ロゴ画像を使いたい場合:
1. public/images/に画像を配置
2. Header.tsxを編集してImageコンポーネントを追加`,
    tags: ["ロゴ", "社名", "ヘッダー"],
  },
  {
    id: "all-header-sticky",
    category: "function",
    subcategory: "header",
    template: "all",
    title: "ヘッダーを固定表示にしたい",
    description: "スクロールしてもヘッダーが上部に固定されるようにする",
    targetFiles: ["src/components/common/Header.tsx"],
    instruction: `Header.tsxのheaderタグにstickyクラスを追加してください。

<header className="sticky top-0 z-50 bg-white shadow-sm">`,
    notes: ["z-50で他の要素より手前に表示される"],
    tags: ["固定", "スティッキー", "ヘッダー"],
  },
  {
    id: "all-header-transparent",
    category: "style",
    subcategory: "header",
    template: "all",
    title: "ヘッダーを透明にしたい",
    description: "ヒーロー上でヘッダー背景を透明にする",
    targetFiles: ["src/components/common/Header.tsx"],
    instruction: `Header.tsxの背景色をtransparentに変更し、スクロール時に色が付くように設定してください。

const [scrolled, setScrolled] = useState(false);

useEffect(() => {
  const handleScroll = () => setScrolled(window.scrollY > 50);
  window.addEventListener('scroll', handleScroll);
  return () => window.removeEventListener('scroll', handleScroll);
}, []);

<header className={\`\${scrolled ? 'bg-white shadow-sm' : 'bg-transparent'} transition-all\`}>`,
    tags: ["透明", "ヘッダー", "背景"],
  },

  // --- フッター ---
  {
    id: "all-footer-content",
    category: "content",
    subcategory: "footer",
    template: "all",
    title: "フッターの会社情報を変更したい",
    description: "フッターに表示される住所、電話番号、メールを変更する",
    targetFiles: ["src/data/[template]/sample.ts"],
    instruction: `該当テンプレートのsample.tsでcompanyオブジェクトを変更してください。

company: {
  address: { full: "新しい住所" },
  phone: "03-xxxx-xxxx",
  email: "info@example.com",
}`,
    tags: ["フッター", "会社情報", "住所", "電話"],
  },
  {
    id: "all-footer-links",
    category: "content",
    subcategory: "footer",
    template: "all",
    title: "フッターのリンクを変更したい",
    description: "フッターのサイトマップリンクを追加・削除・変更する",
    targetFiles: ["src/components/common/Footer.tsx"],
    instruction: `Footer.tsxのリンク配列を編集してください。

const links = [
  { href: "/about", label: "会社概要" },
  { href: "/jobs", label: "採用情報" },
  { href: "/contact", label: "お問い合わせ" },
];`,
    tags: ["フッター", "リンク", "サイトマップ"],
  },
  {
    id: "all-footer-sns",
    category: "function",
    subcategory: "footer",
    template: "all",
    title: "フッターにSNSリンクを追加したい",
    description: "Twitter、Instagram、FacebookなどのSNSアイコンリンクを追加する",
    targetFiles: ["src/components/common/Footer.tsx"],
    instruction: `Footer.tsxにSNSリンクセクションを追加してください。

import { Twitter, Instagram, Facebook } from "lucide-react";

<div className="flex gap-4">
  <a href="https://twitter.com/xxx" target="_blank" rel="noopener noreferrer">
    <Twitter className="w-6 h-6" />
  </a>
  <a href="https://instagram.com/xxx" target="_blank" rel="noopener noreferrer">
    <Instagram className="w-6 h-6" />
  </a>
</div>`,
    tags: ["SNS", "Twitter", "Instagram", "フッター"],
  },

  // --- 共通コンポーネント ---
  {
    id: "all-button-style",
    category: "style",
    subcategory: "other",
    template: "all",
    title: "ボタンのスタイルを変更したい",
    description: "ボタンの角丸、色、サイズを変更する",
    targetFiles: ["src/components/common/Button.tsx"],
    instruction: `Button.tsxのvariantやsizeの定義を変更してください。

角丸を変更: rounded-md → rounded-full
色を変更: variantオブジェクトの各色定義を編集
サイズを変更: sizeオブジェクトのpaddingを編集

例: すべてのボタンを丸くする
className={\`rounded-full ...\`}`,
    tags: ["ボタン", "角丸", "スタイル"],
  },
  {
    id: "all-card-shadow",
    category: "style",
    subcategory: "card",
    template: "all",
    title: "カードの影を変更したい",
    description: "カードコンポーネントの影の強さを調整する",
    targetFiles: ["src/components/common/Card.tsx"],
    instruction: `Card.tsxのshadowプロパティの定義を変更してください。

Tailwindのシャドウ:
- shadow-sm (小さい)
- shadow (標準)
- shadow-md (中)
- shadow-lg (大)
- shadow-xl (特大)

または、hover時の影も調整:
hover:shadow-xl`,
    tags: ["カード", "影", "シャドウ"],
  },

  // --- アニメーション ---
  {
    id: "all-animation-duration",
    category: "animation",
    subcategory: "fadein",
    template: "all",
    title: "アニメーションの速度を変更したい",
    description: "フェードインなどのアニメーション時間を調整する",
    targetFiles: ["src/components/animations/FadeIn.tsx"],
    instruction: `FadeIn.tsxのdurationプロパティを変更してください。

デフォルト: duration={0.6}

遅くする: duration={1.0}
速くする: duration={0.3}

使用箇所で個別に指定も可能:
<FadeIn duration={0.8}>...</FadeIn>`,
    tags: ["アニメーション", "速度", "フェードイン"],
  },
  {
    id: "all-animation-disable",
    category: "animation",
    subcategory: "other",
    template: "all",
    title: "アニメーションを無効にしたい",
    description: "特定のセクションまたは全体のアニメーションを無効化する",
    targetFiles: ["該当コンポーネント"],
    instruction: `方法1: FadeInコンポーネントを削除してdivに置き換え
<FadeIn>...</FadeIn> → <div>...</div>

方法2: motion.divをdivに置き換え
<motion.div ...> → <div>

方法3: アニメーション設定を空にする
initial={{}} animate={{}} transition={{}}`,
    tags: ["アニメーション", "無効", "オフ"],
  },
  {
    id: "all-animation-countup-speed",
    category: "animation",
    subcategory: "countup",
    template: "all",
    title: "数字カウントアップの速度を変更したい",
    description: "統計数字のカウントアップアニメーション時間を調整する",
    targetFiles: ["使用箇所のコンポーネント"],
    instruction: `CountUpコンポーネントのdurationを変更してください。

<CountUp value={85} duration={1.5} />
→ <CountUp value={85} duration={2.5} />  // 遅くする
→ <CountUp value={85} duration={0.8} />  // 速くする`,
    tags: ["カウントアップ", "数字", "アニメーション"],
  },
  {
    id: "all-animation-scroll-trigger",
    category: "animation",
    subcategory: "scroll",
    template: "all",
    title: "スクロールアニメーションの発火タイミングを変更したい",
    description: "要素が画面に入るどの位置でアニメーションを開始するか調整する",
    targetFiles: ["該当コンポーネント"],
    instruction: `whileInViewのviewport設定を変更してください。

viewport={{ once: true, amount: 0.3 }}
- once: true → 一度だけ実行
- amount: 0.3 → 30%見えたら発火（0~1で調整）

早めに発火: amount: 0.1
遅めに発火: amount: 0.5`,
    tags: ["スクロール", "トリガー", "アニメーション"],
  },

  // --- レスポンシブ ---
  {
    id: "all-responsive-breakpoint",
    category: "responsive",
    subcategory: "breakpoint",
    template: "all",
    title: "レスポンシブのブレイクポイントを理解したい",
    description: "Tailwindのブレイクポイントの使い方",
    targetFiles: ["該当コンポーネント"],
    instruction: `Tailwindのブレイクポイント:
- sm: 640px以上
- md: 768px以上
- lg: 1024px以上
- xl: 1280px以上
- 2xl: 1536px以上

使用例:
<div className="text-sm md:text-base lg:text-lg">
  モバイル: 14px / タブレット: 16px / PC: 18px
</div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
  モバイル: 1列 / タブレット: 2列 / PC: 3列
</div>`,
    tags: ["レスポンシブ", "ブレイクポイント", "モバイル"],
  },
  {
    id: "all-responsive-hide-mobile",
    category: "responsive",
    subcategory: "mobile",
    template: "all",
    title: "モバイルで要素を非表示にしたい",
    description: "スマホでは表示せず、PCでのみ表示する",
    targetFiles: ["該当コンポーネント"],
    instruction: `hidden/blockクラスを組み合わせてください。

モバイルで非表示、PCで表示:
<div className="hidden md:block">PC専用コンテンツ</div>

PCで非表示、モバイルで表示:
<div className="block md:hidden">モバイル専用コンテンツ</div>`,
    tags: ["モバイル", "非表示", "レスポンシブ"],
  },
  {
    id: "all-responsive-grid-columns",
    category: "responsive",
    subcategory: "mobile",
    template: "all",
    title: "グリッドの列数をデバイスごとに変えたい",
    description: "カードグリッドの列数をモバイル/タブレット/PCで調整する",
    targetFiles: ["該当コンポーネント"],
    instruction: `grid-colsクラスをブレイクポイントごとに指定してください。

<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
  - モバイル: 1列
  - 小タブレット: 2列
  - PC: 3列
  - 大画面: 4列
</div>`,
    tags: ["グリッド", "列", "レスポンシブ"],
  },

  // --- SEO ---
  {
    id: "all-seo-title",
    category: "seo",
    subcategory: "metadata",
    template: "all",
    title: "ページタイトルを変更したい",
    description: "ブラウザタブや検索結果に表示されるタイトルを変更する",
    targetFiles: ["src/app/templates/[template]/[page]/page.tsx"],
    instruction: `各ページのmetadataオブジェクトを編集してください。

export const metadata: Metadata = {
  title: "新しいタイトル | 会社名",
  description: "120-160文字の説明文",
};`,
    tags: ["タイトル", "SEO", "メタデータ"],
  },
  {
    id: "all-seo-description",
    category: "seo",
    subcategory: "metadata",
    template: "all",
    title: "メタディスクリプションを変更したい",
    description: "検索結果に表示される説明文を変更する",
    targetFiles: ["src/app/templates/[template]/[page]/page.tsx"],
    instruction: `各ページのmetadataオブジェクトのdescriptionを編集してください。

export const metadata: Metadata = {
  description: "この会社で働く魅力を120-160文字で説明...",
};`,
    notes: ["120-160文字が推奨", "キーワードを自然に含める"],
    tags: ["ディスクリプション", "SEO", "検索"],
  },
  {
    id: "all-seo-ogimage",
    category: "seo",
    subcategory: "metadata",
    template: "all",
    title: "OGP画像を変更したい",
    description: "SNSシェア時に表示される画像を変更する",
    targetFiles: ["src/app/templates/[template]/layout.tsx"],
    instruction: `1. public/images/に画像を配置（推奨: 1200x630px）
2. layout.tsxのmetadata.openGraph.imagesを変更

export const metadata: Metadata = {
  openGraph: {
    images: ["/images/og-image.jpg"],
  },
};`,
    tags: ["OGP", "SNS", "シェア", "画像"],
  },
  {
    id: "all-seo-schema",
    category: "seo",
    subcategory: "schema",
    template: "all",
    title: "構造化データを追加したい",
    description: "JSON-LDの構造化データを追加・編集する",
    targetFiles: ["src/lib/seo.tsx", "該当ページ"],
    instruction: `seo.tsxの関数を使用してスキーマを生成してください。

import { generateOrganizationSchema, JsonLd } from "@/lib/seo";

const schema = generateOrganizationSchema({
  name: "会社名",
  url: "https://example.com",
  logo: "https://example.com/logo.png",
});

<JsonLd data={schema} />`,
    tags: ["構造化データ", "JSON-LD", "Schema"],
  },

  // --- ナビゲーション ---
  {
    id: "all-nav-items",
    category: "navigation",
    subcategory: "menu",
    template: "all",
    title: "ナビゲーションメニューを変更したい",
    description: "ヘッダーのメニュー項目を追加・削除・変更する",
    targetFiles: ["src/lib/constants.ts"],
    instruction: `constants.tsのnavigationオブジェクトを編集してください。

export const navigation = {
  storyType: [
    { href: "/templates/story-type", label: "HOME" },
    { href: "/templates/story-type/about", label: "会社について" },
    // 追加・削除・変更
  ],
};`,
    tags: ["ナビゲーション", "メニュー", "ヘッダー"],
  },
  {
    id: "all-nav-order",
    category: "navigation",
    subcategory: "menu",
    template: "all",
    title: "メニューの順番を変更したい",
    description: "ナビゲーションメニューの表示順を入れ替える",
    targetFiles: ["src/lib/constants.ts"],
    instruction: `constants.tsのnavigation配列の順番を入れ替えてください。

// 変更前
{ href: "/jobs", label: "募集職種" },
{ href: "/about", label: "会社について" },

// 変更後（順番入れ替え）
{ href: "/about", label: "会社について" },
{ href: "/jobs", label: "募集職種" },`,
    tags: ["ナビゲーション", "順番", "並び替え"],
  },

  // ================================================================
  // トップページ（一覧ページ）
  // ================================================================
  {
    id: "top-hero-title",
    category: "content",
    subcategory: "hero",
    template: "top",
    title: "トップページのヒーロータイトルを変更したい",
    description: "一覧ページの大見出しを変更する",
    targetFiles: ["src/app/page.tsx"],
    instruction: `page.tsxのヒーローセクション内のh1を編集してください。

<h1 className="text-4xl md:text-5xl font-bold mb-6">
  新しいタイトル
</h1>`,
    tags: ["トップページ", "ヒーロー", "タイトル"],
  },
  {
    id: "top-hero-subtitle",
    category: "content",
    subcategory: "hero",
    template: "top",
    title: "トップページのサブタイトルを変更したい",
    description: "一覧ページのヒーロー下の説明文を変更する",
    targetFiles: ["src/app/page.tsx"],
    instruction: `page.tsxのヒーローセクション内のpタグを編集してください。

<p className="text-xl md:text-2xl opacity-90 max-w-2xl mx-auto">
  新しいサブタイトル
</p>`,
    tags: ["トップページ", "サブタイトル"],
  },
  {
    id: "top-template-card",
    category: "content",
    subcategory: "card",
    template: "top",
    title: "テンプレートカードの情報を変更したい",
    description: "各テンプレートの名前、説明、特徴を変更する",
    targetFiles: ["src/lib/constants.ts"],
    instruction: `constants.tsのtemplates配列を編集してください。

{
  id: "story-type",
  name: "新しい名前",
  subtitle: "新しいサブタイトル",
  description: "新しい説明文...",
  features: ["特徴1", "特徴2", "特徴3", "特徴4"],
  suitableFor: ["適した企業1", "適した企業2"],
  color: "#FF5722",
  href: "/templates/story-type",
}`,
    tags: ["テンプレートカード", "一覧"],
  },
  {
    id: "top-template-order",
    category: "layout",
    subcategory: "section",
    template: "top",
    title: "テンプレートの表示順を変更したい",
    description: "一覧ページでのテンプレート表示順を入れ替える",
    targetFiles: ["src/lib/constants.ts"],
    instruction: `constants.tsのtemplates配列の順番を入れ替えてください。

// 配列の順番がそのまま表示順になります
export const templates = [
  { id: "data-driven", ... },  // 1番目に表示
  { id: "story-type", ... },   // 2番目に表示
  ...
];`,
    tags: ["順番", "並び替え", "一覧"],
  },
  {
    id: "top-template-hide",
    category: "function",
    subcategory: "other",
    template: "top",
    title: "特定のテンプレートを非表示にしたい",
    description: "一覧ページから特定のテンプレートを隠す",
    targetFiles: ["src/lib/constants.ts"],
    instruction: `方法1: statusを変更
{ id: "simple", status: "coming-soon", ... }  // 準備中表示

方法2: 配列から削除
templates配列から該当オブジェクトを削除

方法3: page.tsxでフィルタリング
{templates.filter(t => t.id !== "simple").map(...)}`,
    tags: ["非表示", "テンプレート", "一覧"],
  },
  {
    id: "top-features-section",
    category: "content",
    subcategory: "section",
    template: "top",
    title: "特徴セクションを変更したい",
    description: "トップページの「選ばれる理由」セクションを編集する",
    targetFiles: ["src/app/page.tsx"],
    instruction: `page.tsxのfeatures配列を編集してください。

const features = [
  {
    icon: <CheckCircle className="w-8 h-8" />,
    title: "新しいタイトル",
    description: "新しい説明文",
  },
  // ...
];`,
    tags: ["特徴", "セクション", "トップページ"],
  },

  // ================================================================
  // ストーリー型（story-type）
  // ================================================================
  {
    id: "story-hero-video",
    category: "function",
    subcategory: "hero",
    template: "story-type",
    title: "ヒーローセクションを動画にしたい",
    description: "ストーリー型のヒーローに背景動画を追加する",
    targetFiles: ["src/components/templates/story-type/HeroSection.tsx"],
    instruction: `HeroSection.tsxに動画要素を追加してください。

<section className="relative h-screen overflow-hidden">
  <video
    autoPlay
    muted
    loop
    playsInline
    className="absolute inset-0 w-full h-full object-cover"
  >
    <source src="/videos/hero.mp4" type="video/mp4" />
  </video>
  <div className="absolute inset-0 bg-black/50" /> {/* オーバーレイ */}
  <div className="relative z-10">
    {/* 既存のコンテンツ */}
  </div>
</section>`,
    notes: [
      "動画はpublic/videos/に配置",
      "ファイルサイズは5MB以下推奨",
      "モバイルでは自動再生されない場合がある",
    ],
    tags: ["動画", "ヒーロー", "背景"],
  },
  {
    id: "story-hero-image",
    category: "content",
    subcategory: "hero",
    template: "story-type",
    title: "ヒーローの背景画像を変更したい",
    description: "ストーリー型のヒーロー背景を別の画像に変更する",
    targetFiles: ["src/components/templates/story-type/HeroSection.tsx"],
    instruction: `HeroSection.tsxの背景画像を変更してください。

// 方法1: Imageコンポーネント使用
import Image from "next/image";

<div className="absolute inset-0">
  <Image
    src="/images/templates/story-type/hero.jpg"
    alt="ヒーロー画像"
    fill
    className="object-cover"
    priority
  />
  <div className="absolute inset-0 bg-black/40" />
</div>

// 方法2: CSS背景
<section style={{ backgroundImage: "url('/images/hero.jpg')" }} className="bg-cover bg-center">`,
    tags: ["画像", "ヒーロー", "背景"],
  },
  {
    id: "story-member-add",
    category: "content",
    subcategory: "other",
    template: "story-type",
    title: "社員インタビューを追加したい",
    description: "先輩社員の声ページに新しいメンバーを追加する",
    targetFiles: ["src/data/story-type/sample.ts"],
    instruction: `sample.tsのmembers配列に新しいメンバーを追加してください。

members: [
  // 既存メンバー...
  {
    id: "member-4",
    name: "新しい社員",
    nameKana: "あたらしい しゃいん",
    role: "営業部",
    joinYear: 2023,
    image: "/images/templates/story-type/member-4.jpg",
    story: "入社のきっかけ...",
    message: "求職者へのメッセージ...",
    career: [
      { year: 2023, title: "入社", description: "..." },
    ],
  },
],`,
    tags: ["社員", "インタビュー", "追加"],
  },
  {
    id: "story-timeline-edit",
    category: "content",
    subcategory: "timeline",
    template: "story-type",
    title: "1日の流れを変更したい",
    description: "タイムラインの内容を編集する",
    targetFiles: ["src/data/story-type/sample.ts"],
    instruction: `sample.tsのdailySchedule配列を編集してください。

dailySchedule: [
  { time: "09:00", title: "出社", description: "フレックスなので..." },
  { time: "10:00", title: "朝会", description: "チームでミーティング" },
  { time: "12:00", title: "ランチ", description: "社食で..." },
  // 追加・変更
],`,
    tags: ["タイムライン", "1日の流れ", "スケジュール"],
  },
  {
    id: "story-values-edit",
    category: "content",
    subcategory: "section",
    template: "story-type",
    title: "企業理念・価値観を変更したい",
    description: "ValuesセクションのMission/Vision/Valueを編集する",
    targetFiles: ["src/data/story-type/sample.ts"],
    instruction: `sample.tsのvaluesを編集してください。

values: [
  {
    title: "Mission",
    description: "私たちの使命は...",
    icon: "target",
  },
  {
    title: "Vision",
    description: "目指す未来は...",
    icon: "eye",
  },
  {
    title: "Value",
    description: "大切にする価値観は...",
    icon: "heart",
  },
],`,
    tags: ["理念", "ミッション", "ビジョン", "バリュー"],
  },
  {
    id: "story-jobs-add",
    category: "content",
    subcategory: "other",
    template: "story-type",
    title: "募集職種を追加したい",
    description: "新しい職種の募集要項を追加する",
    targetFiles: ["src/data/story-type/sample.ts"],
    instruction: `sample.tsのjobs配列に追加してください。

jobs: [
  {
    id: "job-new",
    title: "新規事業担当",
    department: "事業開発部",
    employmentType: "正社員",
    location: "東京本社",
    salary: "年収500万円〜800万円",
    description: "新規事業の企画・立ち上げ...",
    requirements: ["3年以上の企画経験", "..."],
    benefits: ["リモートワーク可", "..."],
    applicationUrl: "/templates/story-type/apply",
  },
],`,
    tags: ["募集", "職種", "求人"],
  },
  {
    id: "story-ceo-message",
    category: "content",
    subcategory: "section",
    template: "story-type",
    title: "代表メッセージを変更したい",
    description: "CEOメッセージの内容を編集する",
    targetFiles: ["src/data/story-type/sample.ts"],
    instruction: `sample.tsのcompany.ceoを編集してください。

ceo: {
  name: "山田太郎",
  nameKana: "やまだ たろう",
  title: "代表取締役社長",
  image: "/images/templates/story-type/ceo.jpg",
  message: "新しいメッセージ内容...",
  career: "1990年創業、以来30年...",
},`,
    tags: ["代表", "社長", "メッセージ"],
  },
  {
    id: "story-benefits-edit",
    category: "content",
    subcategory: "section",
    template: "story-type",
    title: "福利厚生を変更したい",
    description: "福利厚生の項目を追加・編集する",
    targetFiles: ["src/data/story-type/sample.ts"],
    instruction: `sample.tsのbenefits配列を編集してください。

benefits: [
  {
    category: "休暇",
    items: ["年間休日125日", "有給休暇", "育児休暇"],
  },
  {
    category: "手当",
    items: ["住宅手当", "通勤手当", "資格手当"],
  },
  {
    category: "制度",
    items: ["フレックス制度", "リモートワーク", "副業OK"],
  },
],`,
    tags: ["福利厚生", "手当", "休暇"],
  },
  {
    id: "story-form-fields",
    category: "function",
    subcategory: "form",
    template: "story-type",
    title: "応募フォームの項目を変更したい",
    description: "フォームの入力項目を追加・削除・変更する",
    targetFiles: ["src/components/templates/story-type/ApplicationForm.tsx"],
    instruction: `ApplicationForm.tsxのフォームフィールドを編集してください。

// 入力欄を追加
<div className="mb-4">
  <label className="block text-sm font-medium mb-2">
    新しい項目 <span className="text-red-500">*</span>
  </label>
  <input
    type="text"
    name="newField"
    required
    className="w-full px-4 py-2 border rounded-lg"
  />
</div>

// セレクトボックスを追加
<select name="category" className="w-full px-4 py-2 border rounded-lg">
  <option value="">選択してください</option>
  <option value="new">新卒</option>
  <option value="mid">中途</option>
</select>`,
    tags: ["フォーム", "応募", "入力欄"],
  },

  // ================================================================
  // データ訴求型（data-driven）
  // ================================================================
  {
    id: "data-stats-values",
    category: "content",
    subcategory: "data",
    template: "data-driven",
    title: "統計データの数値を変更したい",
    description: "ダッシュボードに表示される数値を編集する",
    targetFiles: ["src/data/data-driven/sample.ts"],
    instruction: `sample.tsのdashboardDataを編集してください。

dashboardData: [
  {
    label: "平均年収",
    value: 650,
    unit: "万円",
    description: "業界平均より20%高い",
    trend: "+15%",
    trendDirection: "up",
    industryAverage: 520,
  },
  // ...
],`,
    tags: ["統計", "数値", "データ"],
  },
  {
    id: "data-chart-type",
    category: "function",
    subcategory: "chart",
    template: "data-driven",
    title: "グラフの種類を変更したい",
    description: "棒グラフを折れ線グラフに変更するなど",
    targetFiles: ["該当チャートコンポーネント"],
    instruction: `チャートコンポーネントを切り替えてください。

// 棒グラフ → 折れ線グラフ
import { SimpleLineChart } from "@/components/templates/data-driven";

<SimpleLineChart data={growthData.revenue} />

// 棒グラフ → 円グラフ
import { SimplePieChart } from "@/components/templates/data-driven";

<SimplePieChart data={pieData} />`,
    notes: ["Rechartsライブラリを使用", "データ形式が異なる場合がある"],
    tags: ["グラフ", "チャート", "可視化"],
  },
  {
    id: "data-chart-color",
    category: "style",
    subcategory: "chart",
    template: "data-driven",
    title: "グラフの色を変更したい",
    description: "チャートの配色を変更する",
    targetFiles: ["src/components/templates/data-driven/GrowthChart.tsx"],
    instruction: `RechartsのBar/Line/Areaコンポーネントのfill/strokeを変更してください。

<Bar dataKey="value" fill="var(--color-primary)" />
→ <Bar dataKey="value" fill="#FF6B6B" />

複数の色を使う場合:
const COLORS = ["#FF6B6B", "#4ECDC4", "#45B7D1"];
<Cell fill={COLORS[index % COLORS.length]} />`,
    tags: ["グラフ", "色", "チャート"],
  },
  {
    id: "data-growth-data",
    category: "content",
    subcategory: "chart",
    template: "data-driven",
    title: "成長推移データを変更したい",
    description: "売上や従業員数の推移データを編集する",
    targetFiles: ["src/data/data-driven/sample.ts"],
    instruction: `sample.tsのgrowthDataを編集してください。

growthData: {
  revenue: [
    { year: "2020", value: 100 },
    { year: "2021", value: 150 },
    { year: "2022", value: 200 },
    { year: "2023", value: 280 },
    { year: "2024", value: 350 },
  ],
  employees: [
    { year: "2020", value: 50 },
    // ...
  ],
},`,
    tags: ["成長", "推移", "データ"],
  },
  {
    id: "data-comparison-table",
    category: "content",
    subcategory: "table",
    template: "data-driven",
    title: "業界比較表を変更したい",
    description: "競合他社との比較データを編集する",
    targetFiles: ["src/data/data-driven/sample.ts"],
    instruction: `sample.tsのindustryComparisonを編集してください。

industryComparison: {
  categories: ["年収", "残業時間", "有給取得率", "離職率"],
  ourCompany: [650, 15, 85, 5],
  industryAverage: [520, 30, 60, 15],
},`,
    tags: ["比較", "テーブル", "業界"],
  },
  {
    id: "data-awards-add",
    category: "content",
    subcategory: "other",
    template: "data-driven",
    title: "受賞歴・認定を追加したい",
    description: "表彰や認定の情報を追加する",
    targetFiles: ["src/data/data-driven/sample.ts"],
    instruction: `sample.tsのawards配列に追加してください。

awards: [
  {
    year: 2024,
    title: "働きがいのある会社ベスト100",
    issuer: "GPTW",
    image: "/images/awards/gptw.png",
  },
  {
    year: 2023,
    title: "健康経営優良法人",
    issuer: "経済産業省",
  },
],`,
    tags: ["受賞", "認定", "表彰"],
  },
  {
    id: "data-salary-model",
    category: "content",
    subcategory: "data",
    template: "data-driven",
    title: "給与モデルを変更したい",
    description: "年収例やキャリアパスの給与情報を編集する",
    targetFiles: ["src/data/data-driven/sample.ts"],
    instruction: `sample.tsのsalaryModelを編集してください。

salaryModel: [
  {
    level: "新卒",
    years: "1年目",
    salary: 350,
    description: "基本給 + 賞与",
  },
  {
    level: "リーダー",
    years: "3-5年目",
    salary: 550,
    description: "基本給 + 役職手当 + 賞与",
  },
  {
    level: "マネージャー",
    years: "7年目〜",
    salary: 750,
    description: "基本給 + 管理職手当 + 賞与",
  },
],`,
    tags: ["給与", "年収", "キャリア"],
  },
  {
    id: "data-card-layout",
    category: "layout",
    subcategory: "card",
    template: "data-driven",
    title: "データカードのレイアウトを変更したい",
    description: "統計カードの配置や列数を変更する",
    targetFiles: ["src/app/templates/data-driven/page.tsx"],
    instruction: `page.tsxのグリッドレイアウトを変更してください。

// 3列 → 4列
<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

// 2列に固定
<div className="grid grid-cols-1 md:grid-cols-2 gap-8">

// カード間のgapを調整
gap-4 (16px) / gap-6 (24px) / gap-8 (32px)`,
    tags: ["レイアウト", "カード", "グリッド"],
  },

  // ================================================================
  // ビジュアル型（visual）
  // ================================================================
  {
    id: "visual-hero-video",
    category: "content",
    subcategory: "hero",
    template: "visual",
    title: "ヒーロー動画を変更したい",
    description: "トップページの背景動画を別の動画に変更する",
    targetFiles: [
      "src/components/templates/visual/VideoHero.tsx",
      "public/videos/",
    ],
    instruction: `1. public/videos/に新しい動画を配置
2. VideoHero.tsxのsrcを変更

<video
  autoPlay
  muted
  loop
  playsInline
  className="absolute inset-0 w-full h-full object-cover"
>
  <source src="/videos/new-hero.mp4" type="video/mp4" />
</video>`,
    notes: [
      "動画は5MB以下推奨",
      "mp4形式推奨",
      "モバイルでは自動再生されない場合がある",
    ],
    tags: ["動画", "ヒーロー", "背景"],
  },
  {
    id: "visual-gallery-photos",
    category: "content",
    subcategory: "gallery",
    template: "visual",
    title: "ギャラリー写真を追加したい",
    description: "フォトギャラリーに新しい写真を追加する",
    targetFiles: ["src/data/visual/sample.ts"],
    instruction: `sample.tsのgalleryPhotos配列に追加してください。

galleryPhotos: [
  {
    id: 1,
    src: "/images/templates/visual/gallery/photo-1.jpg",
    alt: "オフィス風景",
    category: "office",
  },
  {
    id: 2,
    src: "/images/templates/visual/gallery/photo-2.jpg",
    alt: "チームミーティング",
    category: "team",
  },
  // 新しい写真を追加
],`,
    tags: ["ギャラリー", "写真", "追加"],
  },
  {
    id: "visual-gallery-categories",
    category: "content",
    subcategory: "gallery",
    template: "visual",
    title: "ギャラリーのカテゴリを変更したい",
    description: "フィルターボタンのカテゴリを追加・変更する",
    targetFiles: ["src/data/visual/sample.ts"],
    instruction: `sample.tsのgalleryCategoriesを編集してください。

galleryCategories: [
  { id: "all", label: "すべて" },
  { id: "office", label: "オフィス" },
  { id: "team", label: "チーム" },
  { id: "event", label: "イベント" },
  { id: "product", label: "製品" },  // 追加
],`,
    tags: ["カテゴリ", "フィルター", "ギャラリー"],
  },
  {
    id: "visual-gallery-columns",
    category: "layout",
    subcategory: "gallery",
    template: "visual",
    title: "ギャラリーの列数を変更したい",
    description: "写真グリッドの列数を調整する",
    targetFiles: ["src/components/templates/visual/PhotoGrid.tsx"],
    instruction: `PhotoGrid.tsxのcolumnsプロパティまたはグリッドクラスを変更してください。

// Propsで指定
<PhotoGrid photos={photos} columns={3} />

// コンポーネント内のデフォルト変更
<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
→ <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">`,
    tags: ["列", "グリッド", "ギャラリー"],
  },
  {
    id: "visual-keywords",
    category: "content",
    subcategory: "section",
    template: "visual",
    title: "キーワードセクションを変更したい",
    description: "3つのキーワードと背景画像を編集する",
    targetFiles: ["src/data/visual/sample.ts"],
    instruction: `sample.tsのkeywordsを編集してください。

keywords: [
  {
    id: 1,
    keyword: "挑戦",
    subtext: "CHALLENGE",
    description: "新しいことへの挑戦を恐れない",
    image: "/images/templates/visual/keyword-1.jpg",
  },
  {
    id: 2,
    keyword: "成長",
    subtext: "GROWTH",
    description: "日々の学びを大切に",
    image: "/images/templates/visual/keyword-2.jpg",
  },
],`,
    tags: ["キーワード", "コンセプト"],
  },
  {
    id: "visual-member-detail",
    category: "content",
    subcategory: "other",
    template: "visual",
    title: "社員詳細ページを編集したい",
    description: "社員個人ページの内容を変更する",
    targetFiles: ["src/data/visual/sample.ts"],
    instruction: `sample.tsのpeople配列の該当メンバーを編集してください。

people: [
  {
    id: "person-1",
    name: "田中花子",
    nameEn: "Hanako Tanaka",
    role: "デザイナー",
    image: "/images/templates/visual/person-1.jpg",
    coverImage: "/images/templates/visual/person-1-cover.jpg",
    bio: "詳細な自己紹介...",
    interview: {
      question1: "入社のきっかけは？",
      answer1: "...",
    },
  },
],`,
    tags: ["社員", "詳細", "インタビュー"],
  },
  {
    id: "visual-cta-banner",
    category: "style",
    subcategory: "section",
    template: "visual",
    title: "CTAバナーのデザインを変更したい",
    description: "応募促進バナーの色やテキストを変更する",
    targetFiles: ["src/components/templates/visual/CTABanner.tsx"],
    instruction: `CTABanner.tsxを編集してください。

// 背景色を変更
<section className="bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-accent)]">
→ <section className="bg-[#1a1a1a]">  // ダーク系

// テキストを変更
<h2>一緒に働きませんか？</h2>
→ <h2>新しいキャッチコピー</h2>`,
    tags: ["CTA", "バナー", "応募"],
  },
  {
    id: "visual-job-detail",
    category: "content",
    subcategory: "other",
    template: "visual",
    title: "職種詳細ページを編集したい",
    description: "個別の募集要項ページの内容を変更する",
    targetFiles: ["src/data/visual/sample.ts"],
    instruction: `sample.tsのjobs配列の該当職種を編集してください。

jobs: [
  {
    id: "designer",
    title: "UIデザイナー",
    department: "デザイン部",
    type: "正社員",
    location: "東京",
    salary: "年収400万〜700万円",
    description: "詳細な仕事内容...",
    requirements: ["Figma経験", "..."],
    niceToHave: ["アプリデザイン経験"],
    benefits: ["フレックス", "..."],
    images: ["/images/job-1.jpg"],
  },
],`,
    tags: ["職種", "詳細", "募集要項"],
  },

  // ================================================================
  // シンプル型（simple）
  // ================================================================
  {
    id: "simple-hero-style",
    category: "style",
    subcategory: "hero",
    template: "simple",
    title: "ヒーローのスタイルを変更したい",
    description: "ミニマルヒーローの背景色やサイズを調整する",
    targetFiles: ["src/components/templates/simple/MinimalHero.tsx"],
    instruction: `MinimalHero.tsxのスタイルを変更してください。

// 背景色を変更
<section className="min-h-screen bg-white">
→ <section className="min-h-screen bg-[#f8f8f8]">

// 高さを変更
min-h-screen → min-h-[80vh]

// テキスト色を変更
<h1 className="text-gray-900">
→ <h1 className="text-[var(--color-primary)]">`,
    tags: ["ヒーロー", "スタイル", "背景"],
  },
  {
    id: "simple-section-order",
    category: "layout",
    subcategory: "section",
    template: "simple",
    title: "セクションの順番を変更したい",
    description: "1ページ内のセクション表示順を入れ替える",
    targetFiles: ["src/app/templates/simple/page.tsx"],
    instruction: `page.tsxのコンポーネント順序を入れ替えてください。

// 変更前
<MinimalHero />
<CompanySection />
<JobsAccordion />
<BenefitsGrid />
<FAQAccordion />
<CEOMessage />
<SimpleForm />

// 変更後（例: CEOMessageを上に）
<MinimalHero />
<CEOMessage />
<CompanySection />
...`,
    tags: ["順番", "セクション", "レイアウト"],
  },
  {
    id: "simple-section-remove",
    category: "layout",
    subcategory: "section",
    template: "simple",
    title: "特定のセクションを削除したい",
    description: "不要なセクションを非表示にする",
    targetFiles: ["src/app/templates/simple/page.tsx"],
    instruction: `page.tsxから該当コンポーネントを削除またはコメントアウトしてください。

// FAQセクションを削除する場合
// <FAQAccordion faqs={faqs} />

import文も削除:
// import { FAQAccordion } from "@/components/templates/simple";`,
    tags: ["削除", "非表示", "セクション"],
  },
  {
    id: "simple-accordion-style",
    category: "style",
    subcategory: "accordion",
    template: "simple",
    title: "アコーディオンのスタイルを変更したい",
    description: "募集職種やFAQのアコーディオンデザインを調整する",
    targetFiles: [
      "src/components/templates/simple/JobsAccordion.tsx",
      "src/components/templates/simple/FAQAccordion.tsx",
    ],
    instruction: `該当コンポーネントのスタイルを変更してください。

// ボーダーを追加
<div className="border-b border-gray-200">

// 背景色を追加
<button className="bg-gray-50 hover:bg-gray-100">

// アイコンを変更
import { Plus, Minus } from "lucide-react";
{isOpen ? <Minus /> : <Plus />}`,
    tags: ["アコーディオン", "スタイル", "デザイン"],
  },
  {
    id: "simple-benefits-columns",
    category: "layout",
    subcategory: "card",
    template: "simple",
    title: "福利厚生グリッドの列数を変更したい",
    description: "BenefitsGridのカード配置を調整する",
    targetFiles: ["src/components/templates/simple/BenefitsGrid.tsx"],
    instruction: `BenefitsGrid.tsxのグリッドクラスを変更してください。

// 3列 → 4列
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
→ <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">`,
    tags: ["グリッド", "列", "福利厚生"],
  },
  {
    id: "simple-form-action",
    category: "function",
    subcategory: "form",
    template: "simple",
    title: "フォームの送信先を変更したい",
    description: "応募フォームのaction URLやAPI連携を設定する",
    targetFiles: ["src/components/templates/simple/SimpleForm.tsx"],
    instruction: `SimpleForm.tsxのフォーム送信処理を変更してください。

// 外部サービス（Formspree等）を使用
<form action="https://formspree.io/f/xxxxx" method="POST">

// API Routeを使用
const handleSubmit = async (e: FormEvent) => {
  e.preventDefault();
  const res = await fetch('/api/apply', {
    method: 'POST',
    body: JSON.stringify(formData),
  });
};`,
    tags: ["フォーム", "送信", "API"],
  },

  // ================================================================
  // Q&A解決型（qa-type）
  // ================================================================
  {
    id: "qa-top5-edit",
    category: "content",
    subcategory: "accordion",
    template: "qa-type",
    title: "TOP5不安を変更したい",
    description: "トップページの「よくある不安TOP5」を編集する",
    targetFiles: ["src/data/qa-type/sample.ts"],
    instruction: `sample.tsのtop5Anxietiesを編集してください。

top5Anxieties: [
  {
    id: 1,
    question: "未経験でも大丈夫？",
    answer: "はい、大丈夫です。充実した研修制度があります...",
    example: "実際に未経験から活躍している社員の例",
    data: "未経験入社率: 70%",
    icon: "user",
  },
  // 追加・変更
],`,
    tags: ["TOP5", "不安", "FAQ"],
  },
  {
    id: "qa-category-add",
    category: "content",
    subcategory: "other",
    template: "qa-type",
    title: "Q&Aカテゴリを追加したい",
    description: "不安カテゴリ（応募前、選考、入社後など）を追加する",
    targetFiles: ["src/data/qa-type/sample.ts", "src/lib/constants.ts"],
    instruction: `1. sample.tsにカテゴリデータを追加
anxietyCategories: [
  {
    id: "new-category",
    title: "新しいカテゴリ",
    description: "説明文",
    href: "/templates/qa-type/new-category",
    color: "#4CAF50",
    icon: "help-circle",
  },
],

2. constants.tsのnavigation.qaTypeに追加
{ href: "/templates/qa-type/new-category", label: "新カテゴリ" },

3. src/app/templates/qa-type/new-category/page.tsxを作成`,
    tags: ["カテゴリ", "追加", "ページ"],
  },
  {
    id: "qa-senior-voices",
    category: "content",
    subcategory: "other",
    template: "qa-type",
    title: "先輩の声を追加したい",
    description: "「同じ不安を持っていた先輩」の体験談を追加する",
    targetFiles: ["src/data/qa-type/sample.ts"],
    instruction: `sample.tsのseniorVoicesに追加してください。

seniorVoices: [
  {
    id: 1,
    name: "山田花子",
    role: "営業部 3年目",
    image: "/images/templates/qa-type/senior-1.jpg",
    anxiety: "私も入社前は「未経験で大丈夫か」と不安でした",
    solution: "でも、3ヶ月の研修で基礎からしっかり学べました",
    advice: "求職者へのアドバイス...",
  },
],`,
    tags: ["先輩", "体験談", "声"],
  },
  {
    id: "qa-selection-flow",
    category: "content",
    subcategory: "timeline",
    template: "qa-type",
    title: "選考フローを変更したい",
    description: "選考ステップの内容を編集する",
    targetFiles: ["src/data/qa-type/sample.ts"],
    instruction: `sample.tsのselectionFlowを編集してください。

selectionFlow: [
  {
    step: 1,
    title: "書類選考",
    duration: "3営業日以内",
    description: "履歴書・職務経歴書を確認",
    tips: "自己PRを具体的に",
  },
  {
    step: 2,
    title: "一次面接",
    duration: "オンライン",
    description: "人事担当との面接",
  },
  // ...
],`,
    tags: ["選考", "フロー", "ステップ"],
  },
  {
    id: "qa-onboarding",
    category: "content",
    subcategory: "timeline",
    template: "qa-type",
    title: "入社後のタイムラインを変更したい",
    description: "オンボーディングの流れを編集する",
    targetFiles: ["src/data/qa-type/sample.ts"],
    instruction: `sample.tsのonboardingTimelineを編集してください。

onboardingTimeline: [
  {
    period: "入社1週目",
    title: "オリエンテーション",
    activities: ["会社説明", "システム設定", "自己紹介"],
  },
  {
    period: "入社1ヶ月",
    title: "基礎研修",
    activities: ["業務知識研修", "OJT開始"],
  },
  // ...
],`,
    tags: ["オンボーディング", "入社後", "タイムライン"],
  },
  {
    id: "qa-consultation",
    category: "content",
    subcategory: "form",
    template: "qa-type",
    title: "相談セクションを変更したい",
    description: "「まだ不安がある方へ」の内容を編集する",
    targetFiles: ["src/components/templates/qa-type/ConsultationSection.tsx"],
    instruction: `ConsultationSection.tsxのテキストや連絡先を変更してください。

// 連絡先を変更
<p>お気軽にご相談ください</p>
<a href="mailto:recruit@example.com">recruit@example.com</a>
<a href="tel:03-xxxx-xxxx">03-xxxx-xxxx</a>

// LINEボタンを追加
<a href="https://line.me/R/ti/p/@xxx">
  LINEで相談する
</a>`,
    tags: ["相談", "連絡先", "お問い合わせ"],
  },
  {
    id: "qa-anxiety-hero",
    category: "style",
    subcategory: "hero",
    template: "qa-type",
    title: "不安解消ヒーローのデザインを変更したい",
    description: "トップのAnxietyHeroセクションのスタイルを調整する",
    targetFiles: ["src/components/templates/qa-type/AnxietyHero.tsx"],
    instruction: `AnxietyHero.tsxのスタイルを変更してください。

// 背景色を変更
<section className="bg-gradient-to-br from-green-50 to-orange-50">
→ <section className="bg-[#f0f7f4]">

// キャッチコピーを変更
<h1>その不安、解消します</h1>
→ <h1>新しいキャッチコピー</h1>`,
    tags: ["ヒーロー", "スタイル", "不安"],
  },

  // ================================================================
  // 追加のケース（レスポンシブ詳細）
  // ================================================================
  {
    id: "all-responsive-image-size",
    category: "responsive",
    subcategory: "mobile",
    template: "all",
    title: "モバイルで画像サイズを調整したい",
    description: "スマホでは画像を小さく、PCでは大きく表示する",
    targetFiles: ["該当コンポーネント"],
    instruction: `Imageコンポーネントまたはimgタグにレスポンシブクラスを追加してください。

<Image
  src="/image.jpg"
  alt="説明"
  width={400}
  height={300}
  className="w-full md:w-1/2 lg:w-1/3"
/>

// サイズを直接指定
<img className="w-32 md:w-48 lg:w-64" src="..." />`,
    tags: ["画像", "サイズ", "レスポンシブ"],
  },
  {
    id: "all-responsive-text-size",
    category: "responsive",
    subcategory: "mobile",
    template: "all",
    title: "モバイルでフォントサイズを調整したい",
    description: "スマホでは小さく、PCでは大きくテキストを表示する",
    targetFiles: ["該当コンポーネント"],
    instruction: `テキスト要素にレスポンシブクラスを追加してください。

<h1 className="text-2xl md:text-3xl lg:text-4xl">
  見出し
</h1>

<p className="text-sm md:text-base lg:text-lg">
  本文
</p>`,
    tags: ["フォント", "サイズ", "モバイル"],
  },
  {
    id: "all-responsive-padding",
    category: "responsive",
    subcategory: "mobile",
    template: "all",
    title: "モバイルで余白を調整したい",
    description: "スマホでは余白を狭く、PCでは広くする",
    targetFiles: ["該当コンポーネント"],
    instruction: `セクションやコンテナにレスポンシブパディングを設定してください。

<section className="py-8 md:py-16 lg:py-24 px-4 md:px-8">
  - モバイル: 上下32px、左右16px
  - タブレット: 上下64px、左右32px
  - PC: 上下96px
</section>`,
    tags: ["余白", "パディング", "モバイル"],
  },
  {
    id: "all-responsive-flex-direction",
    category: "responsive",
    subcategory: "mobile",
    template: "all",
    title: "モバイルで横並びを縦並びにしたい",
    description: "スマホでは縦積み、PCでは横並びにする",
    targetFiles: ["該当コンポーネント"],
    instruction: `flexクラスにレスポンシブ方向を設定してください。

<div className="flex flex-col md:flex-row gap-4">
  - モバイル: 縦並び
  - タブレット以上: 横並び
</div>

// 順番を逆にする
<div className="flex flex-col-reverse md:flex-row">`,
    tags: ["フレックス", "方向", "レスポンシブ"],
  },

  // ================================================================
  // 追加の機能系ケース
  // ================================================================
  {
    id: "all-link-external",
    category: "function",
    subcategory: "link",
    template: "all",
    title: "外部リンクを新しいタブで開きたい",
    description: "外部サイトへのリンクを別タブで開く設定",
    targetFiles: ["該当コンポーネント"],
    instruction: `aタグにtarget="_blank"とrel属性を追加してください。

<a
  href="https://external-site.com"
  target="_blank"
  rel="noopener noreferrer"
>
  外部サイトへ
</a>

// Linkコンポーネントの場合
import Link from "next/link";
<Link
  href="https://external-site.com"
  target="_blank"
  rel="noopener noreferrer"
>
  外部サイトへ
</Link>`,
    notes: ["rel='noopener noreferrer'はセキュリティのため必須"],
    tags: ["リンク", "外部", "新しいタブ"],
  },
  {
    id: "all-scroll-to-section",
    category: "function",
    subcategory: "link",
    template: "all",
    title: "クリックで特定セクションにスクロールしたい",
    description: "ページ内リンクでスムーズスクロールする",
    targetFiles: ["該当コンポーネント"],
    instruction: `1. スクロール先にidを設定
<section id="about">...</section>

2. リンクにhref="#id"を設定
<a href="#about">会社についてへ</a>

3. スムーズスクロールをglobals.cssに追加
html {
  scroll-behavior: smooth;
}

// または、scroll-margin-topでヘッダー分の余白を確保
#about {
  scroll-margin-top: 80px;
}`,
    tags: ["スクロール", "ページ内リンク", "アンカー"],
  },
  {
    id: "all-loading-skeleton",
    category: "function",
    subcategory: "other",
    template: "all",
    title: "ローディング表示を追加したい",
    description: "コンテンツ読み込み中のスケルトン表示を追加する",
    targetFiles: ["該当コンポーネント"],
    instruction: `スケルトンUIを追加してください。

// シンプルなスケルトン
<div className="animate-pulse">
  <div className="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>
  <div className="h-4 bg-gray-200 rounded w-1/2"></div>
</div>

// 画像用スケルトン
<div className="animate-pulse bg-gray-200 aspect-video rounded-lg"></div>

// カード用スケルトン
<div className="animate-pulse">
  <div className="h-48 bg-gray-200 rounded-t-lg"></div>
  <div className="p-4">
    <div className="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>
    <div className="h-4 bg-gray-200 rounded w-1/2"></div>
  </div>
</div>`,
    tags: ["ローディング", "スケルトン", "UX"],
  },
  {
    id: "all-image-lazy",
    category: "function",
    subcategory: "image",
    template: "all",
    title: "画像の遅延読み込みを設定したい",
    description: "スクロールで画像が見えるときに読み込む",
    targetFiles: ["該当コンポーネント"],
    instruction: `Next.jsのImageコンポーネントはデフォルトで遅延読み込み対応です。

// 遅延読み込み（デフォルト）
<Image src="/image.jpg" alt="説明" width={400} height={300} />

// 優先読み込み（ファーストビュー画像向け）
<Image src="/hero.jpg" alt="ヒーロー" width={1920} height={1080} priority />

// 通常のimgタグの場合
<img src="/image.jpg" alt="説明" loading="lazy" />`,
    tags: ["画像", "遅延読み込み", "パフォーマンス"],
  },
  {
    id: "all-image-placeholder",
    category: "function",
    subcategory: "image",
    template: "all",
    title: "画像のプレースホルダーを設定したい",
    description: "画像読み込み中にぼかし画像を表示する",
    targetFiles: ["該当コンポーネント"],
    instruction: `Next.js Imageのplaceholderプロパティを使用してください。

// ぼかしプレースホルダー
<Image
  src="/image.jpg"
  alt="説明"
  width={400}
  height={300}
  placeholder="blur"
  blurDataURL="data:image/jpeg;base64,/9j/4AAQ..."
/>

// 動的に生成する場合は、plaiceholderパッケージを使用`,
    tags: ["画像", "プレースホルダー", "ぼかし"],
  },

  // ================================================================
  // コンポーネント詳細のケース
  // ================================================================
  {
    id: "all-card-border",
    category: "style",
    subcategory: "card",
    template: "all",
    title: "カードにボーダーを追加したい",
    description: "カードに枠線を追加する",
    targetFiles: ["該当コンポーネント"],
    instruction: `カード要素にborderクラスを追加してください。

// 細いボーダー
<div className="border border-gray-200 rounded-lg">

// 太いボーダー
<div className="border-2 border-gray-300 rounded-lg">

// 色付きボーダー
<div className="border-l-4 border-[var(--color-primary)] rounded-lg">`,
    tags: ["カード", "ボーダー", "枠線"],
  },
  {
    id: "all-card-hover-effect",
    category: "animation",
    subcategory: "hover",
    template: "all",
    title: "カードにホバーエフェクトを追加したい",
    description: "マウスオーバー時のアニメーションを追加する",
    targetFiles: ["該当コンポーネント"],
    instruction: `ホバー時のスタイルを追加してください。

// 浮き上がりエフェクト
<div className="transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">

// 拡大エフェクト
<div className="transition-transform duration-300 hover:scale-105">

// 背景色変化
<div className="transition-colors duration-300 hover:bg-gray-50">

// Framer Motionを使用
<motion.div whileHover={{ scale: 1.05, y: -5 }}>`,
    tags: ["ホバー", "アニメーション", "カード"],
  },
  {
    id: "all-button-icon",
    category: "style",
    subcategory: "other",
    template: "all",
    title: "ボタンにアイコンを追加したい",
    description: "ボタンテキストの横にアイコンを表示する",
    targetFiles: ["該当コンポーネント"],
    instruction: `Lucideアイコンをボタン内に追加してください。

import { ArrowRight, Send, Download } from "lucide-react";

// 右にアイコン
<button className="flex items-center gap-2">
  応募する <ArrowRight className="w-4 h-4" />
</button>

// 左にアイコン
<button className="flex items-center gap-2">
  <Send className="w-4 h-4" /> 送信
</button>`,
    tags: ["ボタン", "アイコン", "lucide"],
  },
  {
    id: "all-section-divider",
    category: "style",
    subcategory: "section",
    template: "all",
    title: "セクション間に区切り線を追加したい",
    description: "セクションの境界に線や装飾を追加する",
    targetFiles: ["該当コンポーネント"],
    instruction: `セクション間にdividerを追加してください。

// シンプルな線
<hr className="border-t border-gray-200 my-16" />

// 装飾付き区切り
<div className="flex items-center my-16">
  <div className="flex-1 border-t border-gray-200"></div>
  <span className="px-4 text-gray-400">●</span>
  <div className="flex-1 border-t border-gray-200"></div>
</div>

// グラデーション線
<div className="h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent my-16"></div>`,
    tags: ["区切り線", "セクション", "装飾"],
  },

  // ================================================================
  // データ更新のケース
  // ================================================================
  {
    id: "all-company-info",
    category: "content",
    subcategory: "data",
    template: "all",
    title: "会社基本情報を変更したい",
    description: "社名、住所、電話番号など基本情報を更新する",
    targetFiles: ["src/data/[template]/sample.ts"],
    instruction: `該当テンプレートのsample.tsのcompanyオブジェクトを編集してください。

export const company = {
  name: "新しい会社名",
  nameKana: "あたらしいかいしゃめい",
  nameEn: "New Company Name",
  established: "2020年4月1日",
  employees: 150,
  capital: "1億円",
  address: {
    full: "東京都渋谷区...",
    postalCode: "150-0001",
  },
  phone: "03-xxxx-xxxx",
  email: "info@example.com",
  website: "https://example.com",
};`,
    tags: ["会社情報", "基本", "データ"],
  },
  {
    id: "all-site-config",
    category: "seo",
    subcategory: "metadata",
    template: "all",
    title: "サイト全体のメタ情報を変更したい",
    description: "サイト名、説明、OGP設定を変更する",
    targetFiles: ["src/data/[template]/sample.ts"],
    instruction: `該当テンプレートのsample.tsのsiteConfigを編集してください。

export const siteConfig = {
  siteName: "新しいサイト名 | 採用情報",
  siteDescription: "新しいサイト説明文（120-160文字）",
  siteUrl: "https://recruit.example.com",
  ogImage: "/images/og-image.jpg",
  twitterHandle: "@example",
};`,
    tags: ["サイト設定", "メタ", "OGP"],
  },

  // ================================================================
  // エラー対応のケース
  // ================================================================
  {
    id: "all-error-404",
    category: "function",
    subcategory: "other",
    template: "all",
    title: "404ページをカスタマイズしたい",
    description: "ページが見つからない時の表示を変更する",
    targetFiles: ["src/app/not-found.tsx"],
    instruction: `not-found.tsxを作成または編集してください。

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-gray-300 mb-4">404</h1>
        <h2 className="text-2xl font-bold mb-4">ページが見つかりません</h2>
        <p className="text-gray-600 mb-8">
          お探しのページは存在しないか、移動した可能性があります。
        </p>
        <a href="/" className="btn-primary">
          トップページへ戻る
        </a>
      </div>
    </div>
  );
}`,
    tags: ["404", "エラー", "ページ"],
  },
  {
    id: "all-error-boundary",
    category: "function",
    subcategory: "other",
    template: "all",
    title: "エラー画面をカスタマイズしたい",
    description: "予期しないエラー時の表示を変更する",
    targetFiles: ["src/app/error.tsx"],
    instruction: `error.tsxを作成してください。

"use client";

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h2 className="text-2xl font-bold mb-4">エラーが発生しました</h2>
        <p className="text-gray-600 mb-8">申し訳ありません。問題が発生しました。</p>
        <button onClick={reset} className="btn-primary">
          もう一度試す
        </button>
      </div>
    </div>
  );
}`,
    tags: ["エラー", "例外", "画面"],
  },

  // ================================================================
  // パフォーマンス・最適化のケース
  // ================================================================
  {
    id: "all-perf-image-optimize",
    category: "function",
    subcategory: "image",
    template: "all",
    title: "画像を最適化したい",
    description: "画像のファイルサイズを削減し読み込みを高速化する",
    targetFiles: ["該当コンポーネント", "next.config.js"],
    instruction: `1. Next.js Imageコンポーネントを使用（自動最適化）
import Image from "next/image";
<Image src="/image.jpg" alt="説明" width={800} height={600} />

2. 画像フォーマットを指定
// next.config.js
module.exports = {
  images: {
    formats: ['image/avif', 'image/webp'],
  },
};

3. 画像サイズを適切に指定
// 実際に表示するサイズに近い値を指定
<Image width={400} height={300} /> // 適切なサイズ`,
    tags: ["画像", "最適化", "パフォーマンス"],
  },
  {
    id: "all-perf-font",
    category: "function",
    subcategory: "font",
    template: "all",
    title: "フォント読み込みを最適化したい",
    description: "Webフォントの読み込みを高速化する",
    targetFiles: ["src/app/layout.tsx"],
    instruction: `Next.jsのフォント最適化を使用してください。

import { Noto_Sans_JP } from "next/font/google";

const notoSansJP = Noto_Sans_JP({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",  // 重要: フォント読み込み中もテキスト表示
  preload: true,
});

<body className={notoSansJP.className}>`,
    notes: ["display: 'swap'でCLSを防止"],
    tags: ["フォント", "最適化", "パフォーマンス"],
  },

  // ================================================================
  // アクセシビリティのケース
  // ================================================================
  {
    id: "all-a11y-alt",
    category: "content",
    subcategory: "image",
    template: "all",
    title: "画像のalt属性を適切に設定したい",
    description: "スクリーンリーダー向けの代替テキストを設定する",
    targetFiles: ["該当コンポーネント"],
    instruction: `画像に適切なalt属性を設定してください。

// 良い例
<Image alt="チームミーティングで議論する社員たち" />
<Image alt="オフィスの休憩スペース" />

// 装飾画像の場合は空文字
<Image alt="" /> // スクリーンリーダーが読み上げない

// 避けるべき例
<Image alt="画像" />  // 意味がない
<Image alt="image1.jpg" />  // ファイル名をそのまま`,
    tags: ["alt", "アクセシビリティ", "画像"],
  },
  {
    id: "all-a11y-focus",
    category: "style",
    subcategory: "other",
    template: "all",
    title: "フォーカス表示を改善したい",
    description: "キーボード操作時のフォーカス表示を見やすくする",
    targetFiles: ["src/app/globals.css"],
    instruction: `globals.cssにフォーカススタイルを追加してください。

/* フォーカスリング */
:focus-visible {
  outline: 2px solid var(--color-primary);
  outline-offset: 2px;
}

/* ボタン専用 */
button:focus-visible,
a:focus-visible {
  outline: 2px solid var(--color-primary);
  outline-offset: 2px;
  border-radius: 4px;
}

/* フォーム要素 */
input:focus-visible,
textarea:focus-visible,
select:focus-visible {
  outline: none;
  border-color: var(--color-primary);
  box-shadow: 0 0 0 3px rgba(46, 125, 50, 0.2);
}`,
    tags: ["フォーカス", "アクセシビリティ", "キーボード"],
  },
  {
    id: "all-a11y-sr-only",
    category: "content",
    subcategory: "other",
    template: "all",
    title: "スクリーンリーダー用テキストを追加したい",
    description: "視覚的には非表示だがスクリーンリーダーに読み上げさせる",
    targetFiles: ["該当コンポーネント"],
    instruction: `sr-onlyクラスを使用してください。

// アイコンボタンの説明
<button>
  <span className="sr-only">メニューを開く</span>
  <Menu className="w-6 h-6" />
</button>

// リンクの補足説明
<a href="/jobs">
  募集中の職種を見る
  <span className="sr-only">（新しいタブで開きます）</span>
</a>

// sr-onlyの定義（Tailwindに含まれている）
.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
}`,
    tags: ["スクリーンリーダー", "アクセシビリティ", "テキスト"],
  },

  // ================================================================
  // 追加ケース: より詳細なコンポーネント修正
  // ================================================================
  {
    id: "all-section-background-image",
    category: "style",
    subcategory: "section",
    template: "all",
    title: "セクションに背景画像を設定したい",
    description: "セクションの背景に画像を表示する",
    targetFiles: ["該当コンポーネント"],
    instruction: `セクションに背景画像を設定してください。

// 方法1: インラインスタイル
<section
  style={{ backgroundImage: "url('/images/bg.jpg')" }}
  className="bg-cover bg-center bg-no-repeat"
>
  <div className="bg-black/50 py-20"> {/* オーバーレイ */}
    コンテンツ
  </div>
</section>

// 方法2: Tailwind arbitrary values
<section className="bg-[url('/images/bg.jpg')] bg-cover bg-center">

// 方法3: Next.js Image（より最適化）
<section className="relative">
  <Image src="/images/bg.jpg" alt="" fill className="object-cover -z-10" />
  <div className="relative z-10">コンテンツ</div>
</section>`,
    tags: ["背景画像", "セクション", "スタイル"],
  },
  {
    id: "all-gradient-text",
    category: "style",
    subcategory: "font",
    template: "all",
    title: "テキストにグラデーションを適用したい",
    description: "見出しなどにグラデーション色を適用する",
    targetFiles: ["該当コンポーネント"],
    instruction: `グラデーションテキストを適用してください。

<h1 className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
  グラデーションテキスト
</h1>

// 3色グラデーション
<h1 className="bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">

// ホバーで色変化
<h1 className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent hover:from-purple-600 hover:to-blue-600 transition-all">`,
    tags: ["グラデーション", "テキスト", "色"],
  },
  {
    id: "all-parallax-effect",
    category: "animation",
    subcategory: "scroll",
    template: "all",
    title: "パララックス効果を追加したい",
    description: "スクロール時に背景が遅れて動く効果を追加する",
    targetFiles: ["該当コンポーネント"],
    instruction: `パララックス効果を追加してください。

// 方法1: CSS fixed background
<section
  className="bg-fixed bg-cover bg-center min-h-[50vh]"
  style={{ backgroundImage: "url('/images/parallax.jpg')" }}
>

// 方法2: Framer Motion useScroll
"use client";
import { motion, useScroll, useTransform } from "framer-motion";

function ParallaxSection() {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -200]);

  return (
    <motion.div style={{ y }}>
      <Image src="/images/bg.jpg" alt="" fill />
    </motion.div>
  );
}`,
    tags: ["パララックス", "スクロール", "アニメーション"],
  },
  {
    id: "all-sticky-section",
    category: "layout",
    subcategory: "section",
    template: "all",
    title: "セクションを固定表示にしたい",
    description: "スクロール中に特定のセクションを固定する",
    targetFiles: ["該当コンポーネント"],
    instruction: `stickyクラスを使用してください。

// サイドバーを固定
<div className="flex">
  <aside className="sticky top-20 h-fit">
    固定サイドバー
  </aside>
  <main>メインコンテンツ</main>
</div>

// CTAを固定
<div className="sticky bottom-0 bg-white shadow-lg p-4">
  <Button>今すぐ応募</Button>
</div>

// 見出しを固定（セクション内）
<section>
  <h2 className="sticky top-16 bg-white py-4 z-10">セクション見出し</h2>
  <div>長いコンテンツ...</div>
</section>`,
    tags: ["固定", "スティッキー", "レイアウト"],
  },
  {
    id: "all-modal-dialog",
    category: "function",
    subcategory: "other",
    template: "all",
    title: "モーダル（ポップアップ）を追加したい",
    description: "クリックでモーダルダイアログを表示する",
    targetFiles: ["該当コンポーネント"],
    instruction: `モーダルコンポーネントを作成してください。

"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

function Modal({ isOpen, onClose, children }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 z-50"
            onClick={onClose}
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="fixed inset-4 md:inset-auto md:top-1/2 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2 md:max-w-lg md:w-full bg-white rounded-xl p-6 z-50"
          >
            <button onClick={onClose} className="absolute top-4 right-4">
              <X className="w-6 h-6" />
            </button>
            {children}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

// 使用例
const [isOpen, setIsOpen] = useState(false);
<button onClick={() => setIsOpen(true)}>モーダルを開く</button>
<Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
  <h2>モーダルタイトル</h2>
  <p>コンテンツ</p>
</Modal>`,
    tags: ["モーダル", "ポップアップ", "ダイアログ"],
  },
  {
    id: "all-tabs-component",
    category: "function",
    subcategory: "other",
    template: "all",
    title: "タブ切り替えを追加したい",
    description: "クリックでコンテンツを切り替えるタブUIを追加する",
    targetFiles: ["該当コンポーネント"],
    instruction: `タブコンポーネントを作成してください。

"use client";
import { useState } from "react";
import { motion } from "framer-motion";

function Tabs({ tabs }) {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div>
      {/* タブボタン */}
      <div className="flex border-b border-gray-200">
        {tabs.map((tab, index) => (
          <button
            key={index}
            onClick={() => setActiveTab(index)}
            className={\`px-4 py-2 relative \${
              activeTab === index ? "text-blue-600" : "text-gray-600"
            }\`}
          >
            {tab.label}
            {activeTab === index && (
              <motion.div
                layoutId="activeTab"
                className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600"
              />
            )}
          </button>
        ))}
      </div>
      {/* タブコンテンツ */}
      <div className="p-4">
        {tabs[activeTab].content}
      </div>
    </div>
  );
}

// 使用例
<Tabs tabs={[
  { label: "概要", content: <p>概要コンテンツ</p> },
  { label: "詳細", content: <p>詳細コンテンツ</p> },
  { label: "FAQ", content: <p>FAQコンテンツ</p> },
]} />`,
    tags: ["タブ", "切り替え", "UI"],
  },
  {
    id: "all-tooltip",
    category: "function",
    subcategory: "other",
    template: "all",
    title: "ツールチップを追加したい",
    description: "ホバー時に補足情報を表示する",
    targetFiles: ["該当コンポーネント"],
    instruction: `ツールチップを追加してください。

// シンプルなCSSツールチップ
<div className="group relative inline-block">
  <span>用語</span>
  <div className="invisible group-hover:visible absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-1 bg-gray-900 text-white text-sm rounded whitespace-nowrap">
    ツールチップの説明文
    <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-gray-900"></div>
  </div>
</div>

// Framer Motionでアニメーション付き
<motion.div
  initial={{ opacity: 0, y: 5 }}
  animate={{ opacity: 1, y: 0 }}
  className="tooltip"
>
  説明文
</motion.div>`,
    tags: ["ツールチップ", "ホバー", "ヘルプ"],
  },
  {
    id: "all-badge-notification",
    category: "style",
    subcategory: "other",
    template: "all",
    title: "バッジ（通知マーク）を追加したい",
    description: "新着や件数を示すバッジを表示する",
    targetFiles: ["該当コンポーネント"],
    instruction: `バッジを追加してください。

// 数字バッジ
<div className="relative">
  <button>通知</button>
  <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
    3
  </span>
</div>

// NEWバッジ
<div className="relative">
  <span>機能名</span>
  <span className="ml-2 px-2 py-0.5 bg-green-500 text-white text-xs rounded-full">
    NEW
  </span>
</div>

// ドットバッジ
<div className="relative">
  <button>メニュー</button>
  <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></span>
</div>`,
    tags: ["バッジ", "通知", "新着"],
  },
  {
    id: "all-breadcrumb",
    category: "navigation",
    subcategory: "breadcrumb",
    template: "all",
    title: "パンくずリストを追加したい",
    description: "現在のページ階層を示すナビゲーションを追加する",
    targetFiles: ["該当コンポーネント"],
    instruction: `パンくずリストを追加してください。

import { ChevronRight, Home } from "lucide-react";
import Link from "next/link";

function Breadcrumb({ items }) {
  return (
    <nav className="flex items-center gap-2 text-sm text-gray-600">
      <Link href="/" className="hover:text-gray-900">
        <Home className="w-4 h-4" />
      </Link>
      {items.map((item, index) => (
        <span key={index} className="flex items-center gap-2">
          <ChevronRight className="w-4 h-4 text-gray-400" />
          {item.href ? (
            <Link href={item.href} className="hover:text-gray-900">
              {item.label}
            </Link>
          ) : (
            <span className="text-gray-900 font-medium">{item.label}</span>
          )}
        </span>
      ))}
    </nav>
  );
}

// 使用例
<Breadcrumb items={[
  { label: "採用情報", href: "/jobs" },
  { label: "エンジニア" },
]} />`,
    tags: ["パンくず", "ナビゲーション", "階層"],
  },
  {
    id: "all-progress-indicator",
    category: "function",
    subcategory: "other",
    template: "all",
    title: "進捗インジケーターを追加したい",
    description: "ステップの進捗状況を視覚的に表示する",
    targetFiles: ["該当コンポーネント"],
    instruction: `進捗インジケーターを追加してください。

function StepIndicator({ steps, currentStep }) {
  return (
    <div className="flex items-center justify-between">
      {steps.map((step, index) => (
        <div key={index} className="flex items-center">
          {/* ステップ番号 */}
          <div className={\`w-8 h-8 rounded-full flex items-center justify-center \${
            index <= currentStep
              ? "bg-blue-600 text-white"
              : "bg-gray-200 text-gray-600"
          }\`}>
            {index < currentStep ? "✓" : index + 1}
          </div>
          {/* ステップラベル */}
          <span className="ml-2 text-sm hidden md:inline">{step}</span>
          {/* 接続線 */}
          {index < steps.length - 1 && (
            <div className={\`flex-1 h-0.5 mx-4 \${
              index < currentStep ? "bg-blue-600" : "bg-gray-200"
            }\`} />
          )}
        </div>
      ))}
    </div>
  );
}

// 使用例
<StepIndicator
  steps={["入力", "確認", "完了"]}
  currentStep={1}
/>`,
    tags: ["進捗", "ステップ", "インジケーター"],
  },

  // ================================================================
  // テンプレート固有の追加ケース
  // ================================================================
  {
    id: "story-hero-text-position",
    category: "layout",
    subcategory: "hero",
    template: "story-type",
    title: "ヒーローのテキスト位置を変更したい",
    description: "テキストを左寄せ、右寄せ、下部などに配置する",
    targetFiles: ["src/components/templates/story-type/HeroSection.tsx"],
    instruction: `HeroSection.tsxのテキストコンテナの配置を変更してください。

// 中央配置（デフォルト）
<div className="flex items-center justify-center text-center">

// 左寄せ
<div className="flex items-center justify-start text-left">

// 右寄せ
<div className="flex items-center justify-end text-right">

// 下部配置
<div className="flex items-end justify-center text-center pb-20">

// 左下配置
<div className="flex items-end justify-start text-left p-12">`,
    tags: ["ヒーロー", "位置", "テキスト", "配置"],
  },
  {
    id: "story-stats-icon",
    category: "style",
    subcategory: "other",
    template: "story-type",
    title: "統計セクションにアイコンを追加したい",
    description: "数字の横にアイコンを表示する",
    targetFiles: ["src/components/templates/story-type/StatsSection.tsx"],
    instruction: `StatsSectionにアイコンを追加してください。

import { Users, TrendingUp, Award, Clock } from "lucide-react";

const statsWithIcons = [
  { icon: <Users />, label: "従業員数", value: 150 },
  { icon: <TrendingUp />, label: "成長率", value: "120%" },
  { icon: <Award />, label: "受賞歴", value: 5 },
];

{statsWithIcons.map((stat) => (
  <div className="flex items-center gap-4">
    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary">
      {stat.icon}
    </div>
    <div>
      <p className="text-3xl font-bold">{stat.value}</p>
      <p className="text-gray-600">{stat.label}</p>
    </div>
  </div>
))}`,
    tags: ["統計", "アイコン", "数字"],
  },
  {
    id: "data-chart-animation",
    category: "animation",
    subcategory: "chart",
    template: "data-driven",
    title: "グラフにアニメーションを追加したい",
    description: "チャートの描画時にアニメーション効果を追加する",
    targetFiles: ["src/components/templates/data-driven/GrowthChart.tsx"],
    instruction: `Rechartsのアニメーション設定を変更してください。

// Bar/Line/Areaにアニメーション設定
<Bar
  dataKey="value"
  fill="var(--color-primary)"
  animationDuration={1500}
  animationEasing="ease-out"
/>

<Line
  dataKey="value"
  stroke="var(--color-primary)"
  animationDuration={2000}
  animationEasing="ease-in-out"
  dot={{ r: 6 }}
/>

// アニメーション無効化
<Bar animationDuration={0} />

// カスタムアニメーション
<Area
  animationBegin={500}  // 遅延開始
  animationDuration={1000}
  isAnimationActive={true}
/>`,
    tags: ["グラフ", "アニメーション", "チャート"],
  },
  {
    id: "data-dashboard-layout",
    category: "layout",
    subcategory: "card",
    template: "data-driven",
    title: "ダッシュボードのレイアウトを変更したい",
    description: "カードのサイズや配置をカスタマイズする",
    targetFiles: ["src/components/templates/data-driven/DataDashboard.tsx"],
    instruction: `DataDashboard.tsxのグリッドレイアウトを変更してください。

// 異なるサイズのカードを混在
<div className="grid grid-cols-4 gap-4">
  <div className="col-span-2 row-span-2">大きいカード</div>
  <div className="col-span-1">小さいカード1</div>
  <div className="col-span-1">小さいカード2</div>
  <div className="col-span-1">小さいカード3</div>
  <div className="col-span-1">小さいカード4</div>
</div>

// 横長カード
<div className="col-span-full">横幅いっぱいのカード</div>

// 特定のカードを目立たせる
<div className="col-span-2 bg-gradient-to-r from-blue-500 to-blue-600 text-white">
  ハイライトカード
</div>`,
    tags: ["ダッシュボード", "レイアウト", "グリッド"],
  },
  {
    id: "visual-gallery-lightbox",
    category: "function",
    subcategory: "gallery",
    template: "visual",
    title: "ギャラリーにライトボックスを追加したい",
    description: "画像クリックで拡大表示する",
    targetFiles: ["src/components/templates/visual/PhotoGrid.tsx"],
    instruction: `ライトボックス機能を追加してください。

"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

function Lightbox({ images, currentIndex, onClose, onPrev, onNext }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center"
      onClick={onClose}
    >
      <button onClick={onClose} className="absolute top-4 right-4 text-white">
        <X className="w-8 h-8" />
      </button>
      <button onClick={onPrev} className="absolute left-4 text-white">
        <ChevronLeft className="w-8 h-8" />
      </button>
      <img
        src={images[currentIndex].src}
        alt={images[currentIndex].alt}
        className="max-w-[90vw] max-h-[90vh] object-contain"
        onClick={(e) => e.stopPropagation()}
      />
      <button onClick={onNext} className="absolute right-4 text-white">
        <ChevronRight className="w-8 h-8" />
      </button>
    </motion.div>
  );
}`,
    tags: ["ライトボックス", "ギャラリー", "拡大"],
  },
  {
    id: "visual-video-autoplay",
    category: "function",
    subcategory: "video",
    template: "visual",
    title: "動画の自動再生設定を変更したい",
    description: "動画の自動再生、ループ、ミュート設定を調整する",
    targetFiles: ["src/components/templates/visual/VideoHero.tsx"],
    instruction: `VideoHero.tsxの動画属性を変更してください。

// 自動再生（ミュート必須）
<video autoPlay muted loop playsInline>

// 自動再生なし（クリックで再生）
<video controls playsInline>

// ポスター画像を設定
<video poster="/images/video-poster.jpg" controls>

// 再生コントロールを非表示
<video autoPlay muted loop playsInline className="pointer-events-none">

// モバイルでは画像、PCでは動画
{isMobile ? (
  <Image src="/images/hero.jpg" alt="ヒーロー" fill />
) : (
  <video autoPlay muted loop playsInline>
    <source src="/videos/hero.mp4" type="video/mp4" />
  </video>
)}`,
    tags: ["動画", "自動再生", "ビデオ"],
  },
  {
    id: "simple-section-add",
    category: "layout",
    subcategory: "section",
    template: "simple",
    title: "シンプル型に新しいセクションを追加したい",
    description: "1ページに新しいセクションを挿入する",
    targetFiles: [
      "src/app/templates/simple/page.tsx",
      "src/components/templates/simple/",
    ],
    instruction: `1. 新しいコンポーネントを作成
// src/components/templates/simple/NewSection.tsx
"use client";
import FadeIn from "@/components/animations/FadeIn";

export default function NewSection({ data }) {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <FadeIn>
          <h2 className="text-3xl font-bold text-center mb-12">新セクション</h2>
          {/* コンテンツ */}
        </FadeIn>
      </div>
    </section>
  );
}

2. index.tsにエクスポートを追加
export { default as NewSection } from "./NewSection";

3. page.tsxで使用
import { NewSection } from "@/components/templates/simple";

<MinimalHero />
<NewSection data={newData} />  {/* 追加 */}
<CompanySection />`,
    tags: ["セクション", "追加", "新規"],
  },
  {
    id: "qa-qa-add-page",
    category: "content",
    subcategory: "other",
    template: "qa-type",
    title: "新しいQ&Aカテゴリページを追加したい",
    description: "新しい質問カテゴリのページを作成する",
    targetFiles: [
      "src/app/templates/qa-type/[new-page]/page.tsx",
      "src/data/qa-type/sample.ts",
      "src/lib/constants.ts",
    ],
    instruction: `1. ページファイルを作成
// src/app/templates/qa-type/career/page.tsx
import { QASection, PageHero } from "@/components/templates/qa-type";
import { careerQAs } from "@/data/qa-type/sample";

export const metadata = {
  title: "キャリアについて | Q&A",
};

export default function CareerPage() {
  return (
    <>
      <PageHero
        title="キャリアについて"
        subtitle="CAREER"
        description="キャリアパスに関するよくある質問"
      />
      <QASection questions={careerQAs} />
    </>
  );
}

2. sample.tsにデータを追加
export const careerQAs = [
  { question: "昇進の基準は？", answer: "..." },
];

3. constants.tsのナビゲーションに追加
navigation.qaType: [
  ...existing,
  { href: "/templates/qa-type/career", label: "キャリア" },
]`,
    tags: ["ページ追加", "Q&A", "カテゴリ"],
  },

  // ================================================================
  // フォーム関連の追加ケース
  // ================================================================
  {
    id: "all-form-validation",
    category: "function",
    subcategory: "form",
    template: "all",
    title: "フォームにバリデーションを追加したい",
    description: "入力値のリアルタイムチェックを追加する",
    targetFiles: ["該当フォームコンポーネント"],
    instruction: `フォームバリデーションを追加してください。

"use client";
import { useState } from "react";

function Form() {
  const [email, setEmail] = useState("");
  const [errors, setErrors] = useState({});

  const validateEmail = (value) => {
    if (!value) return "メールアドレスは必須です";
    if (!/^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/.test(value)) {
      return "有効なメールアドレスを入力してください";
    }
    return "";
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const emailError = validateEmail(email);
    if (emailError) {
      setErrors({ email: emailError });
      return;
    }
    // 送信処理
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className={\`border rounded px-4 py-2 \${
          errors.email ? "border-red-500" : "border-gray-300"
        }\`}
      />
      {errors.email && (
        <p className="text-red-500 text-sm mt-1">{errors.email}</p>
      )}
    </form>
  );
}`,
    tags: ["バリデーション", "フォーム", "入力チェック"],
  },
  {
    id: "all-form-file-upload",
    category: "function",
    subcategory: "form",
    template: "all",
    title: "ファイルアップロード機能を追加したい",
    description: "履歴書などのファイルをアップロードできるようにする",
    targetFiles: ["該当フォームコンポーネント"],
    instruction: `ファイルアップロード機能を追加してください。

"use client";
import { useState } from "react";
import { Upload, X, FileText } from "lucide-react";

function FileUpload({ onFileSelect }) {
  const [file, setFile] = useState(null);
  const [dragActive, setDragActive] = useState(false);

  const handleDrag = (e) => {
    e.preventDefault();
    setDragActive(e.type === "dragenter" || e.type === "dragover");
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setDragActive(false);
    if (e.dataTransfer.files?.[0]) {
      setFile(e.dataTransfer.files[0]);
      onFileSelect?.(e.dataTransfer.files[0]);
    }
  };

  return (
    <div
      onDragEnter={handleDrag}
      onDragOver={handleDrag}
      onDragLeave={handleDrag}
      onDrop={handleDrop}
      className={\`border-2 border-dashed rounded-lg p-8 text-center \${
        dragActive ? "border-blue-500 bg-blue-50" : "border-gray-300"
      }\`}
    >
      {file ? (
        <div className="flex items-center justify-center gap-2">
          <FileText className="w-5 h-5" />
          <span>{file.name}</span>
          <button onClick={() => setFile(null)}>
            <X className="w-4 h-4" />
          </button>
        </div>
      ) : (
        <>
          <Upload className="w-8 h-8 mx-auto mb-2 text-gray-400" />
          <p>ドラッグ&ドロップまたはクリックしてアップロード</p>
          <input
            type="file"
            accept=".pdf,.doc,.docx"
            onChange={(e) => setFile(e.target.files?.[0])}
            className="hidden"
          />
        </>
      )}
    </div>
  );
}`,
    tags: ["ファイル", "アップロード", "フォーム"],
  },
  {
    id: "all-form-success-message",
    category: "function",
    subcategory: "form",
    template: "all",
    title: "フォーム送信後のメッセージを表示したい",
    description: "送信完了後に確認メッセージを表示する",
    targetFiles: ["該当フォームコンポーネント"],
    instruction: `送信完了メッセージを追加してください。

"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle } from "lucide-react";

function Form() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    // 送信処理...
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center py-12"
      >
        <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
        <h2 className="text-2xl font-bold mb-2">送信完了しました</h2>
        <p className="text-gray-600 mb-6">
          ご応募ありがとうございます。3営業日以内にご連絡いたします。
        </p>
        <button
          onClick={() => setIsSubmitted(false)}
          className="text-blue-600 hover:underline"
        >
          別の内容で応募する
        </button>
      </motion.div>
    );
  }

  return <form onSubmit={handleSubmit}>...</form>;
}`,
    tags: ["完了", "メッセージ", "フォーム"],
  },

  // ================================================================
  // 画像・メディア関連の追加ケース
  // ================================================================
  {
    id: "all-image-aspect-ratio",
    category: "style",
    subcategory: "image",
    template: "all",
    title: "画像のアスペクト比を固定したい",
    description: "画像の縦横比を統一する",
    targetFiles: ["該当コンポーネント"],
    instruction: `アスペクト比クラスを使用してください。

// 16:9
<div className="aspect-video relative">
  <Image src="/image.jpg" alt="" fill className="object-cover" />
</div>

// 1:1 (正方形)
<div className="aspect-square relative">
  <Image src="/image.jpg" alt="" fill className="object-cover" />
</div>

// 4:3
<div className="aspect-[4/3] relative">
  <Image src="/image.jpg" alt="" fill className="object-cover" />
</div>

// カスタム比率
<div className="aspect-[3/4] relative">  {/* 縦長 */}
<div className="aspect-[21/9] relative"> {/* ウルトラワイド */}`,
    tags: ["アスペクト比", "画像", "サイズ"],
  },
  {
    id: "all-image-filter",
    category: "style",
    subcategory: "image",
    template: "all",
    title: "画像にフィルター効果を追加したい",
    description: "グレースケール、ぼかし、明度などの効果を追加する",
    targetFiles: ["該当コンポーネント"],
    instruction: `Tailwindのフィルタークラスを使用してください。

// グレースケール
<Image className="grayscale hover:grayscale-0 transition-all" />

// ぼかし
<Image className="blur-sm hover:blur-0 transition-all" />

// 明度調整
<Image className="brightness-75 hover:brightness-100" />

// コントラスト
<Image className="contrast-125" />

// セピア
<Image className="sepia" />

// 複合効果
<Image className="grayscale brightness-90 hover:grayscale-0 hover:brightness-100 transition-all duration-500" />

// オーバーレイと組み合わせ
<div className="relative">
  <Image src="..." className="grayscale" />
  <div className="absolute inset-0 bg-blue-600/30 mix-blend-multiply"></div>
</div>`,
    tags: ["フィルター", "画像", "効果"],
  },
  {
    id: "all-avatar-image",
    category: "style",
    subcategory: "image",
    template: "all",
    title: "アバター（プロフィール画像）を表示したい",
    description: "丸い切り抜きのプロフィール画像を表示する",
    targetFiles: ["該当コンポーネント"],
    instruction: `アバター画像を作成してください。

// シンプルなアバター
<div className="w-16 h-16 rounded-full overflow-hidden">
  <Image
    src="/images/avatar.jpg"
    alt="山田太郎"
    width={64}
    height={64}
    className="object-cover"
  />
</div>

// ボーダー付き
<div className="w-20 h-20 rounded-full border-4 border-white shadow-lg overflow-hidden">

// イニシャル表示（画像がない場合）
<div className="w-16 h-16 rounded-full bg-blue-500 flex items-center justify-center text-white text-xl font-bold">
  YT
</div>

// サイズバリエーション
const sizes = {
  sm: "w-8 h-8",
  md: "w-12 h-12",
  lg: "w-16 h-16",
  xl: "w-24 h-24",
};`,
    tags: ["アバター", "プロフィール", "画像"],
  },

  // ================================================================
  // レイアウト詳細ケース
  // ================================================================
  {
    id: "all-layout-two-column",
    category: "layout",
    subcategory: "section",
    template: "all",
    title: "2カラムレイアウトにしたい",
    description: "左右に分かれたレイアウトを作成する",
    targetFiles: ["該当コンポーネント"],
    instruction: `2カラムレイアウトを作成してください。

// 基本的な2カラム
<div className="grid md:grid-cols-2 gap-8">
  <div>左カラム</div>
  <div>右カラム</div>
</div>

// 画像とテキスト（1:1）
<div className="grid md:grid-cols-2 gap-8 items-center">
  <div className="relative aspect-video">
    <Image src="..." fill className="object-cover rounded-lg" />
  </div>
  <div>
    <h2>見出し</h2>
    <p>説明文</p>
  </div>
</div>

// サイドバー型（3:1）
<div className="grid md:grid-cols-4 gap-8">
  <div className="md:col-span-3">メインコンテンツ</div>
  <aside className="md:col-span-1">サイドバー</aside>
</div>

// 交互配置（zigzag）
{items.map((item, i) => (
  <div className={\`grid md:grid-cols-2 gap-8 \${i % 2 === 1 ? "md:flex-row-reverse" : ""}\`}>
    <div>画像</div>
    <div>テキスト</div>
  </div>
))}`,
    tags: ["2カラム", "レイアウト", "グリッド"],
  },
  {
    id: "all-layout-full-width",
    category: "layout",
    subcategory: "section",
    template: "all",
    title: "セクションを画面幅いっぱいにしたい",
    description: "コンテナ幅を超えて画面全体に広げる",
    targetFiles: ["該当コンポーネント"],
    instruction: `フル幅セクションを作成してください。

// フル幅背景 + 中央コンテンツ
<section className="w-full bg-gray-900">
  <div className="container mx-auto px-4 py-16">
    <p className="text-white">コンテンツはコンテナ幅</p>
  </div>
</section>

// 画像をフル幅に
<div className="w-screen relative left-1/2 -translate-x-1/2">
  <Image src="..." className="w-full h-[50vh] object-cover" />
</div>

// コンテナから抜け出す
<div className="mx-[calc(-50vw+50%)] px-[calc(50vw-50%)]">
  フル幅コンテンツ
</div>`,
    tags: ["フル幅", "全幅", "レイアウト"],
  },
  {
    id: "all-layout-masonry",
    category: "layout",
    subcategory: "gallery",
    template: "all",
    title: "マゾンリーレイアウトにしたい",
    description: "Pinterest風の高さが異なるグリッドを作成する",
    targetFiles: ["該当コンポーネント"],
    instruction: `マゾンリーレイアウトを作成してください。

// CSS columnsを使用
<div className="columns-2 md:columns-3 lg:columns-4 gap-4">
  {images.map((img) => (
    <div key={img.id} className="mb-4 break-inside-avoid">
      <Image src={img.src} alt={img.alt} className="w-full rounded-lg" />
    </div>
  ))}
</div>

// グリッドでの擬似マゾンリー
<div className="grid grid-cols-2 md:grid-cols-3 gap-4 auto-rows-[200px]">
  {images.map((img, i) => (
    <div
      key={img.id}
      className={\`rounded-lg overflow-hidden \${
        i % 3 === 0 ? "row-span-2" : ""
      }\`}
    >
      <Image src={img.src} fill className="object-cover" />
    </div>
  ))}
</div>`,
    tags: ["マゾンリー", "グリッド", "ギャラリー"],
  },

  // ================================================================
  // その他の追加ケース
  // ================================================================
  {
    id: "all-dark-mode",
    category: "style",
    subcategory: "color",
    template: "all",
    title: "ダークモードに対応したい",
    description: "ダークモード切り替え機能を追加する",
    targetFiles: ["src/app/globals.css", "該当コンポーネント"],
    instruction: `ダークモード対応を追加してください。

// 1. globals.cssにダークモード変数を追加
@media (prefers-color-scheme: dark) {
  :root {
    --color-bg-primary: #1a1a1a;
    --color-bg-secondary: #2d2d2d;
    --color-text-primary: #ffffff;
    --color-text-secondary: #a0a0a0;
  }
}

// 2. Tailwindのdarkクラスを使用
<div className="bg-white dark:bg-gray-900">
  <p className="text-gray-900 dark:text-white">テキスト</p>
</div>

// 3. トグルボタン（手動切り替え）
const [isDark, setIsDark] = useState(false);

useEffect(() => {
  document.documentElement.classList.toggle("dark", isDark);
}, [isDark]);

<button onClick={() => setIsDark(!isDark)}>
  {isDark ? <Sun /> : <Moon />}
</button>`,
    notes: ["tailwind.config.jsでdarkMode: 'class'の設定が必要な場合がある"],
    tags: ["ダークモード", "テーマ", "色"],
  },
  {
    id: "all-print-style",
    category: "style",
    subcategory: "other",
    template: "all",
    title: "印刷用スタイルを追加したい",
    description: "ページ印刷時の表示を調整する",
    targetFiles: ["src/app/globals.css"],
    instruction: `印刷用スタイルを追加してください。

@media print {
  /* ヘッダー・フッターを非表示 */
  header, footer, nav {
    display: none !important;
  }

  /* 背景色を白に */
  body {
    background: white !important;
    color: black !important;
  }

  /* リンクのURLを表示 */
  a[href]:after {
    content: " (" attr(href) ")";
  }

  /* 改ページ制御 */
  .page-break {
    page-break-before: always;
  }

  /* セクション内で改ページしない */
  section {
    page-break-inside: avoid;
  }

  /* 画像サイズを調整 */
  img {
    max-width: 100% !important;
    height: auto !important;
  }
}`,
    tags: ["印刷", "プリント", "スタイル"],
  },
  {
    id: "all-scroll-to-top",
    category: "function",
    subcategory: "other",
    template: "all",
    title: "トップへ戻るボタンを追加したい",
    description: "スクロール後にページトップに戻るボタンを表示する",
    targetFiles: ["該当コンポーネントまたはlayout.tsx"],
    instruction: `トップへ戻るボタンを追加してください。

"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUp } from "lucide-react";

function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 300);
    };
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 p-3 bg-gray-900 text-white rounded-full shadow-lg hover:bg-gray-700 z-50"
        >
          <ArrowUp className="w-6 h-6" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}`,
    tags: ["トップへ戻る", "スクロール", "ボタン"],
  },
  {
    id: "all-social-share",
    category: "function",
    subcategory: "link",
    template: "all",
    title: "SNSシェアボタンを追加したい",
    description: "Twitter、Facebook、LINEのシェアボタンを追加する",
    targetFiles: ["該当コンポーネント"],
    instruction: `SNSシェアボタンを追加してください。

import { Twitter, Facebook } from "lucide-react";

function ShareButtons({ url, title }) {
  const encodedUrl = encodeURIComponent(url);
  const encodedTitle = encodeURIComponent(title);

  return (
    <div className="flex gap-4">
      {/* Twitter */}
      <a
        href={\`https://twitter.com/intent/tweet?url=\${encodedUrl}&text=\${encodedTitle}\`}
        target="_blank"
        rel="noopener noreferrer"
        className="p-2 bg-[#1DA1F2] text-white rounded-full hover:opacity-80"
      >
        <Twitter className="w-5 h-5" />
      </a>

      {/* Facebook */}
      <a
        href={\`https://www.facebook.com/sharer/sharer.php?u=\${encodedUrl}\`}
        target="_blank"
        rel="noopener noreferrer"
        className="p-2 bg-[#4267B2] text-white rounded-full hover:opacity-80"
      >
        <Facebook className="w-5 h-5" />
      </a>

      {/* LINE */}
      <a
        href={\`https://social-plugins.line.me/lineit/share?url=\${encodedUrl}\`}
        target="_blank"
        rel="noopener noreferrer"
        className="p-2 bg-[#00B900] text-white rounded-full hover:opacity-80"
      >
        LINE
      </a>
    </div>
  );
}`,
    tags: ["シェア", "SNS", "Twitter", "Facebook", "LINE"],
  },
  {
    id: "all-cookie-consent",
    category: "function",
    subcategory: "other",
    template: "all",
    title: "Cookie同意バナーを追加したい",
    description: "プライバシーポリシー同意のバナーを表示する",
    targetFiles: ["該当コンポーネントまたはlayout.tsx"],
    instruction: `Cookie同意バナーを追加してください。

"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) setShowBanner(true);
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookie-consent", "accepted");
    setShowBanner(false);
  };

  return (
    <AnimatePresence>
      {showBanner && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          className="fixed bottom-0 left-0 right-0 bg-gray-900 text-white p-4 z-50"
        >
          <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm">
              当サイトではCookieを使用しています。
              <a href="/privacy" className="underline">プライバシーポリシー</a>
            </p>
            <div className="flex gap-4">
              <button
                onClick={handleAccept}
                className="px-6 py-2 bg-white text-gray-900 rounded-lg font-medium hover:bg-gray-100"
              >
                同意する
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}`,
    tags: ["Cookie", "同意", "プライバシー", "バナー"],
  },

  // ================================================================
  // 大きな変更ケース: ヒーローセクション全体
  // ================================================================
  {
    id: "story-hero-full-redesign",
    category: "layout",
    subcategory: "hero",
    template: "story-type",
    title: "ストーリー型のヒーローセクション全体を作り直したい",
    description: "HeroSectionコンポーネントを完全にリデザインする",
    targetFiles: ["src/components/templates/story-type/HeroSection.tsx"],
    instruction: `ストーリー型のHeroSection.tsxを完全に作り直してください。

以下の要素を含めてください：
- フルスクリーンの背景画像または動画
- メインキャッチコピー（大きなタイトル）
- サブコピー（説明文）
- CTAボタン（応募ボタン）
- スクロールダウンインジケーター

デザインの方向性：[ここに具体的な要望を記載]
例：
- 動画背景にしたい
- 左寄せのテキスト配置にしたい
- 複数のCTAボタンを配置したい
- スライダー形式にしたい`,
    notes: [
      "大きな変更なので、まず現在のコードをバックアップしてから作業",
      "レスポンシブ対応を忘れずに",
    ],
    tags: ["ヒーロー", "リデザイン", "大幅変更"],
  },
  {
    id: "story-hero-split-layout",
    category: "layout",
    subcategory: "hero",
    template: "story-type",
    title: "ストーリー型ヒーローを左右分割レイアウトにしたい",
    description: "左にテキスト、右に画像の2カラムヒーローに変更",
    targetFiles: ["src/components/templates/story-type/HeroSection.tsx"],
    instruction: `HeroSection.tsxを左右分割レイアウトに変更してください。

レイアウト構成：
- 左側（50%）: キャッチコピー、説明文、CTAボタン
- 右側（50%）: メイン画像または動画

モバイルでは縦積みに変更してください。`,
    tags: ["ヒーロー", "2カラム", "レイアウト"],
  },
  {
    id: "story-hero-slider",
    category: "function",
    subcategory: "hero",
    template: "story-type",
    title: "ストーリー型ヒーローをスライダー形式にしたい",
    description: "複数の画像やメッセージをスライドで表示する",
    targetFiles: ["src/components/templates/story-type/HeroSection.tsx"],
    instruction: `HeroSection.tsxをスライダー形式に変更してください。

要件：
- 3〜5枚のスライドを自動で切り替え（5秒間隔）
- 手動でのスライド切り替えボタン
- インジケーター（ドット）表示
- フェードまたはスライドのトランジション

各スライドには：
- 背景画像
- キャッチコピー
- CTAボタン（オプション）`,
    tags: ["ヒーロー", "スライダー", "カルーセル"],
  },
  {
    id: "data-hero-full-redesign",
    category: "layout",
    subcategory: "hero",
    template: "data-driven",
    title: "データ訴求型のヒーローセクション全体を作り直したい",
    description: "ImpactHeroコンポーネントを完全にリデザインする",
    targetFiles: ["src/components/templates/data-driven/ImpactHero.tsx"],
    instruction: `データ訴求型のImpactHero.tsxを完全に作り直してください。

現在の構成：
- 大きな数字のインパクト表示
- 統計カード

変更の方向性を教えてください：
例：
- ダッシュボード風のデザインにしたい
- グラフを前面に出したい
- 動くインフォグラフィックにしたい
- 比較データを強調したい`,
    tags: ["ヒーロー", "データ", "リデザイン"],
  },
  {
    id: "data-hero-dashboard-style",
    category: "layout",
    subcategory: "hero",
    template: "data-driven",
    title: "データ訴求型ヒーローをダッシュボード風にしたい",
    description: "複数のKPIカードとミニグラフを配置したダッシュボード形式に",
    targetFiles: ["src/components/templates/data-driven/ImpactHero.tsx"],
    instruction: `ImpactHero.tsxをダッシュボード風に変更してください。

レイアウト構成：
- 上部: メインキャッチコピー
- 中央: 4〜6個のKPIカード（数字 + ミニグラフ）
- 下部: CTAボタン

各KPIカードには：
- 大きな数字（カウントアップアニメーション）
- ラベル
- 前年比などのトレンド表示
- スパークライン（小さなグラフ）`,
    tags: ["ヒーロー", "ダッシュボード", "KPI"],
  },
  {
    id: "visual-hero-full-redesign",
    category: "layout",
    subcategory: "hero",
    template: "visual",
    title: "ビジュアル型のヒーローセクション全体を作り直したい",
    description: "VideoHeroコンポーネントを完全にリデザインする",
    targetFiles: ["src/components/templates/visual/VideoHero.tsx"],
    instruction: `ビジュアル型のVideoHero.tsxを完全に作り直してください。

現在の構成：
- 背景動画
- オーバーレイテキスト

変更の方向性を教えてください：
例：
- 複数動画の切り替え
- インタラクティブな要素を追加
- パララックス効果を追加
- 3D効果を追加`,
    tags: ["ヒーロー", "動画", "リデザイン"],
  },
  {
    id: "visual-hero-cinematic",
    category: "layout",
    subcategory: "hero",
    template: "visual",
    title: "ビジュアル型ヒーローをシネマティック（映画風）にしたい",
    description: "映画のオープニングのような演出に変更",
    targetFiles: ["src/components/templates/visual/VideoHero.tsx"],
    instruction: `VideoHero.tsxをシネマティックなデザインに変更してください。

要件：
- アスペクト比 21:9（シネスコサイズ）の動画表示
- 上下に黒帯（レターボックス）
- タイトルのフェードイン演出
- サウンドON/OFFボタン
- 「SKIP」ボタンでスクロールダウン`,
    tags: ["ヒーロー", "シネマティック", "映画風"],
  },
  {
    id: "simple-hero-full-redesign",
    category: "layout",
    subcategory: "hero",
    template: "simple",
    title: "シンプル型のヒーローセクション全体を作り直したい",
    description: "MinimalHeroコンポーネントを完全にリデザインする",
    targetFiles: ["src/components/templates/simple/MinimalHero.tsx"],
    instruction: `シンプル型のMinimalHero.tsxを完全に作り直してください。

現在の構成：
- ミニマルなテキストのみ

変更の方向性を教えてください：
例：
- 背景画像を追加したい
- アニメーションを追加したい
- タイピングエフェクトを追加したい`,
    tags: ["ヒーロー", "ミニマル", "リデザイン"],
  },
  {
    id: "qa-hero-full-redesign",
    category: "layout",
    subcategory: "hero",
    template: "qa-type",
    title: "Q&A型のヒーローセクション全体を作り直したい",
    description: "AnxietyHeroコンポーネントを完全にリデザインする",
    targetFiles: ["src/components/templates/qa-type/AnxietyHero.tsx"],
    instruction: `Q&A型のAnxietyHero.tsxを完全に作り直してください。

現在の構成：
- 「その不安、解消します」というメッセージ
- 不安カテゴリへのリンク

変更の方向性を教えてください：
例：
- チャットボット風のUIにしたい
- 検索ボックスを前面に出したい
- よくある質問を直接表示したい`,
    tags: ["ヒーロー", "Q&A", "リデザイン"],
  },

  // ================================================================
  // 大きな変更ケース: ページ構成の変更
  // ================================================================
  {
    id: "story-page-structure-change",
    category: "layout",
    subcategory: "section",
    template: "story-type",
    title: "ストーリー型トップページの構成を大幅に変更したい",
    description: "セクションの追加・削除・並び替えを行う",
    targetFiles: ["src/app/templates/story-type/page.tsx"],
    instruction: `ストーリー型のpage.tsxのセクション構成を変更してください。

現在の構成を教えていただき、以下を指定してください：
- 削除したいセクション
- 追加したいセクション
- 並び順の変更

例：
「HeroSectionの後にすぐJobListSectionを表示して、ValuesセクションはStatsセクションの後に移動してください」`,
    tags: ["ページ構成", "セクション", "並び替え"],
  },
  {
    id: "story-add-new-page",
    category: "layout",
    subcategory: "section",
    template: "story-type",
    title: "ストーリー型に新しいページを追加したい",
    description: "新しいサブページを作成する",
    targetFiles: [
      "src/app/templates/story-type/[new-page]/page.tsx",
      "src/lib/constants.ts",
    ],
    instruction: `ストーリー型に新しいページを追加してください。

以下を教えてください：
- ページ名（URL）: 例 /templates/story-type/culture
- ページタイトル: 例「カルチャー」
- ページの内容・目的: 例「社内文化や雰囲気を伝えるページ」
- 含めたいセクション: 例「写真ギャラリー、社員の声、イベント紹介」

ナビゲーションにも追加してください。`,
    tags: ["新規ページ", "追加", "サブページ"],
  },
  {
    id: "data-page-structure-change",
    category: "layout",
    subcategory: "section",
    template: "data-driven",
    title: "データ訴求型トップページの構成を大幅に変更したい",
    description: "セクションの追加・削除・並び替えを行う",
    targetFiles: ["src/app/templates/data-driven/page.tsx"],
    instruction: `データ訴求型のpage.tsxのセクション構成を変更してください。

現在の構成：
- ImpactHero
- DataDashboard
- GrowthChart
- AwardsSection

変更内容を教えてください：
例：
「AwardsSectionを削除して、代わりに顧客の声セクションを追加してください」`,
    tags: ["ページ構成", "セクション", "データ"],
  },
  {
    id: "visual-page-structure-change",
    category: "layout",
    subcategory: "section",
    template: "visual",
    title: "ビジュアル型トップページの構成を大幅に変更したい",
    description: "セクションの追加・削除・並び替えを行う",
    targetFiles: ["src/app/templates/visual/page.tsx"],
    instruction: `ビジュアル型のpage.tsxのセクション構成を変更してください。

変更内容を教えてください：
例：
「VideoHeroの後にPhotoGridを追加して、KeywordSectionはページの最後に移動してください」`,
    tags: ["ページ構成", "セクション", "ビジュアル"],
  },
  {
    id: "simple-section-complete-change",
    category: "layout",
    subcategory: "section",
    template: "simple",
    title: "シンプル型の全体構成を変更したい",
    description: "1ページ内のセクションを大幅に入れ替える",
    targetFiles: ["src/app/templates/simple/page.tsx"],
    instruction: `シンプル型のpage.tsxのセクション構成を変更してください。

現在の構成：
1. MinimalHero
2. CompanySection
3. JobsAccordion
4. BenefitsGrid
5. FAQAccordion
6. CEOMessage
7. SimpleForm

新しい構成を教えてください。不要なセクションの削除、新規セクションの追加も可能です。`,
    tags: ["ページ構成", "シンプル", "1ページ"],
  },

  // ================================================================
  // 大きな変更ケース: コンポーネント全体の変更
  // ================================================================
  {
    id: "story-members-redesign",
    category: "layout",
    subcategory: "card",
    template: "story-type",
    title: "社員紹介セクション全体を作り直したい",
    description: "MemberInterviewコンポーネントを完全にリデザインする",
    targetFiles: ["src/components/templates/story-type/MemberInterview.tsx"],
    instruction: `MemberInterview.tsxを完全に作り直してください。

現在の表示形式から、以下のどれに変更しますか？
- カード形式（グリッド表示）
- タイムライン形式（縦並び）
- スライダー形式（横スクロール）
- タブ切り替え形式
- モーダル形式（クリックで詳細表示）

各メンバーに表示したい情報：
- 写真
- 名前・役職
- 入社年
- インタビュー内容
- キャリアパス`,
    tags: ["社員紹介", "リデザイン", "インタビュー"],
  },
  {
    id: "story-jobs-redesign",
    category: "layout",
    subcategory: "card",
    template: "story-type",
    title: "募集職種セクション全体を作り直したい",
    description: "JobListSectionコンポーネントを完全にリデザインする",
    targetFiles: ["src/components/templates/story-type/JobListSection.tsx"],
    instruction: `JobListSection.tsxを完全に作り直してください。

現在の表示形式から、以下のどれに変更しますか？
- カード形式（グリッド表示）
- リスト形式（詳細表示）
- アコーディオン形式（クリックで展開）
- テーブル形式（比較しやすい）
- フィルター付き（職種・勤務地で絞り込み）

各職種に表示したい情報を教えてください。`,
    tags: ["募集職種", "リデザイン", "求人"],
  },
  {
    id: "data-dashboard-redesign",
    category: "layout",
    subcategory: "chart",
    template: "data-driven",
    title: "データダッシュボード全体を作り直したい",
    description: "DataDashboardコンポーネントを完全にリデザインする",
    targetFiles: ["src/components/templates/data-driven/DataDashboard.tsx"],
    instruction: `DataDashboard.tsxを完全に作り直してください。

現在のカード形式から、以下のどれに変更しますか？
- タブ切り替え式（カテゴリ別に表示）
- スクロール連動式（スクロールでデータが現れる）
- インタラクティブ式（クリックで詳細表示）
- ダッシュボード式（管理画面風）

表示したいデータカテゴリ：
- 会社データ（従業員数、売上など）
- 働きやすさデータ（残業時間、有給取得率など）
- 成長データ（昇給率、研修時間など）`,
    tags: ["ダッシュボード", "リデザイン", "データ"],
  },
  {
    id: "data-charts-redesign",
    category: "layout",
    subcategory: "chart",
    template: "data-driven",
    title: "グラフセクション全体を作り直したい",
    description: "GrowthChartコンポーネントを完全にリデザインする",
    targetFiles: ["src/components/templates/data-driven/GrowthChart.tsx"],
    instruction: `GrowthChart.tsxを完全に作り直してください。

変更したい内容を教えてください：
- グラフの種類（棒グラフ、折れ線、円グラフ、エリアチャート）
- 表示するデータ
- インタラクティブ機能（ホバーで詳細表示など）
- アニメーション

複数のグラフを並べて表示することも可能です。`,
    tags: ["グラフ", "チャート", "リデザイン"],
  },
  {
    id: "visual-gallery-redesign",
    category: "layout",
    subcategory: "gallery",
    template: "visual",
    title: "フォトギャラリー全体を作り直したい",
    description: "PhotoGrid/GalleryFilterコンポーネントを完全にリデザインする",
    targetFiles: [
      "src/components/templates/visual/PhotoGrid.tsx",
      "src/components/templates/visual/GalleryFilter.tsx",
    ],
    instruction: `フォトギャラリーを完全に作り直してください。

現在のグリッド形式から、以下のどれに変更しますか？
- マゾンリーレイアウト（高さ不揃い）
- 横スクロール式
- フルスクリーンスライダー
- インスタグラム風（正方形グリッド）
- ライトボックス付き（クリックで拡大）

フィルター機能：
- カテゴリフィルター
- 検索機能
- ソート機能`,
    tags: ["ギャラリー", "写真", "リデザイン"],
  },
  {
    id: "visual-people-redesign",
    category: "layout",
    subcategory: "card",
    template: "visual",
    title: "社員紹介ページ全体を作り直したい",
    description: "PEOPLEページのデザインを完全にリデザインする",
    targetFiles: [
      "src/app/templates/visual/people/page.tsx",
      "src/components/templates/visual/MemberCard.tsx",
    ],
    instruction: `ビジュアル型の社員紹介ページを完全に作り直してください。

変更したい内容を教えてください：
- カードのデザイン（写真の見せ方、情報の配置）
- ホバーエフェクト
- 詳細ページへの遷移方法
- フィルター機能（部署別など）`,
    tags: ["社員紹介", "PEOPLE", "リデザイン"],
  },
  {
    id: "qa-faq-redesign",
    category: "layout",
    subcategory: "accordion",
    template: "qa-type",
    title: "Q&Aセクション全体を作り直したい",
    description: "QASectionコンポーネントを完全にリデザインする",
    targetFiles: ["src/components/templates/qa-type/QASection.tsx"],
    instruction: `QASection.tsxを完全に作り直してください。

現在のアコーディオン形式から、以下のどれに変更しますか？
- 検索可能なFAQ
- カテゴリ別タブ切り替え
- チャットボット風UI
- カード形式（常に展開）
- ステップ形式（順番に回答）

追加したい機能：
- 検索機能
- 「役に立った」ボタン
- 関連する質問の表示`,
    tags: ["FAQ", "Q&A", "リデザイン"],
  },

  // ================================================================
  // 大きな変更ケース: フォーム全体の変更
  // ================================================================
  {
    id: "story-form-redesign",
    category: "layout",
    subcategory: "form",
    template: "story-type",
    title: "応募フォーム全体を作り直したい",
    description: "ApplicationFormコンポーネントを完全にリデザインする",
    targetFiles: ["src/components/templates/story-type/ApplicationForm.tsx"],
    instruction: `ApplicationForm.tsxを完全に作り直してください。

変更したい内容を教えてください：
- フォームのステップ数（1ステップ or 複数ステップ）
- 入力項目（名前、メール、電話、志望動機、履歴書添付など）
- デザイン（シンプル、カード形式、ウィザード形式）
- バリデーション方法
- 送信後の挙動（確認画面、完了メッセージ）`,
    tags: ["フォーム", "応募", "リデザイン"],
  },
  {
    id: "story-form-multi-step",
    category: "function",
    subcategory: "form",
    template: "story-type",
    title: "応募フォームをステップ形式にしたい",
    description: "複数ステップに分けたウィザード形式のフォームに変更",
    targetFiles: ["src/components/templates/story-type/ApplicationForm.tsx"],
    instruction: `ApplicationForm.tsxを複数ステップ形式に変更してください。

ステップ構成例：
1. 基本情報（名前、メール、電話）
2. 志望内容（希望職種、志望動機）
3. 経歴（職歴、スキル）
4. 確認・送信

各ステップにはプログレスバーを表示し、前後のステップに移動できるようにしてください。`,
    tags: ["フォーム", "ステップ", "ウィザード"],
  },
  {
    id: "visual-entry-redesign",
    category: "layout",
    subcategory: "form",
    template: "visual",
    title: "エントリーフォーム全体を作り直したい",
    description: "ENTRYページのフォームを完全にリデザインする",
    targetFiles: ["src/app/templates/visual/entry/page.tsx"],
    instruction: `ビジュアル型のエントリーページを完全に作り直してください。

変更したい内容を教えてください：
- 左右分割レイアウト（左：フォーム、右：画像）
- フルページフォーム
- ステップ形式
- モーダル形式`,
    tags: ["フォーム", "エントリー", "リデザイン"],
  },

  // ================================================================
  // 大きな変更ケース: ナビゲーション・ヘッダー・フッター
  // ================================================================
  {
    id: "all-header-redesign",
    category: "layout",
    subcategory: "header",
    template: "all",
    title: "ヘッダー全体を作り直したい",
    description: "Headerコンポーネントを完全にリデザインする",
    targetFiles: ["src/components/common/Header.tsx"],
    instruction: `Header.tsxを完全に作り直してください。

変更したい内容を教えてください：
- ロゴの配置（左、中央）
- メニューの配置（横並び、ドロップダウン、メガメニュー）
- モバイルメニュー（ハンバーガー、ドロワー、フルスクリーン）
- 固定表示の有無
- スクロール時の挙動（縮小、色変化、非表示）
- 言語切り替えボタン
- SNSリンク`,
    tags: ["ヘッダー", "ナビゲーション", "リデザイン"],
  },
  {
    id: "all-header-mega-menu",
    category: "function",
    subcategory: "header",
    template: "all",
    title: "ヘッダーにメガメニューを追加したい",
    description: "ホバーで大きなドロップダウンメニューを表示",
    targetFiles: ["src/components/common/Header.tsx"],
    instruction: `Header.tsxにメガメニュー機能を追加してください。

メガメニューの構成：
- 「採用情報」にホバーでメガメニュー表示
- カテゴリごとにリンクをグループ化
- アイコンや画像を含めることも可能

例：
採用情報 ▼
├── 募集職種
│   ├── エンジニア
│   ├── デザイナー
│   └── 営業
├── 働く環境
│   ├── オフィス紹介
│   └── 福利厚生
└── 選考について
    ├── 選考フロー
    └── よくある質問`,
    tags: ["ヘッダー", "メガメニュー", "ドロップダウン"],
  },
  {
    id: "all-footer-redesign",
    category: "layout",
    subcategory: "footer",
    template: "all",
    title: "フッター全体を作り直したい",
    description: "Footerコンポーネントを完全にリデザインする",
    targetFiles: ["src/components/common/Footer.tsx"],
    instruction: `Footer.tsxを完全に作り直してください。

変更したい内容を教えてください：
- カラム数（2列、3列、4列）
- 含める情報（会社情報、サイトマップ、SNS、お問い合わせ）
- CTAセクションの有無
- ニュースレター登録フォームの追加
- デザイン（シンプル、詳細、ミニマル）`,
    tags: ["フッター", "リデザイン", "レイアウト"],
  },

  // ================================================================
  // 大きな変更ケース: データ構造・コンテンツ全体
  // ================================================================
  {
    id: "story-data-structure-change",
    category: "content",
    subcategory: "data",
    template: "story-type",
    title: "ストーリー型のデータ構造を大幅に変更したい",
    description: "sample.tsのデータ構造を変更し、コンポーネントも対応させる",
    targetFiles: [
      "src/data/story-type/sample.ts",
      "関連するコンポーネント",
    ],
    instruction: `ストーリー型のデータ構造を変更してください。

変更したい内容を教えてください：
- 社員データに新しいフィールドを追加（SNSリンク、趣味など）
- 職種データの構造を変更
- 新しいデータカテゴリを追加（イベント、ブログなど）

変更後はコンポーネント側も対応させます。`,
    tags: ["データ", "構造", "sample.ts"],
  },
  {
    id: "data-all-content-replace",
    category: "content",
    subcategory: "data",
    template: "data-driven",
    title: "データ訴求型の全データを差し替えたい",
    description: "sample.tsの全データを新しい内容に置き換える",
    targetFiles: ["src/data/data-driven/sample.ts"],
    instruction: `データ訴求型のsample.tsの全データを差し替えてください。

新しいデータを教えてください：
- 会社基本情報（社名、住所、設立日など）
- 統計データ（従業員数、売上、成長率など）
- グラフデータ（年度別推移など）
- 比較データ（業界平均との比較など）
- 受賞歴

データはJSONまたはテキスト形式で提供いただければ、sample.tsに変換します。`,
    tags: ["データ", "差し替え", "全体"],
  },

  // ================================================================
  // 大きな変更ケース: テンプレート間の移植
  // ================================================================
  {
    id: "cross-template-component",
    category: "layout",
    subcategory: "section",
    template: "all",
    title: "別のテンプレートのコンポーネントを使いたい",
    description: "他のテンプレートのコンポーネントを現在のテンプレートに移植する",
    targetFiles: ["移植先のpage.tsx", "移植元のコンポーネント"],
    instruction: `別のテンプレートのコンポーネントを移植してください。

教えてください：
- 移植元: どのテンプレートのどのコンポーネント？
  例: ビジュアル型のPhotoGrid
- 移植先: どのテンプレートのどのページ？
  例: ストーリー型のトップページ

必要に応じてスタイルやデータ構造を調整します。`,
    tags: ["移植", "コンポーネント", "テンプレート間"],
  },
  {
    id: "story-add-visual-gallery",
    category: "layout",
    subcategory: "gallery",
    template: "story-type",
    title: "ストーリー型にビジュアル型のギャラリーを追加したい",
    description: "ビジュアル型のPhotoGridをストーリー型に移植",
    targetFiles: [
      "src/app/templates/story-type/page.tsx",
      "src/data/story-type/sample.ts",
    ],
    instruction: `ビジュアル型のPhotoGridコンポーネントをストーリー型に追加してください。

追加位置: [セクション名の後に追加 or 新しいページとして追加]
ギャラリーの内容: [オフィス写真、イベント写真など]`,
    tags: ["ギャラリー", "移植", "写真"],
  },
  {
    id: "data-add-story-members",
    category: "layout",
    subcategory: "card",
    template: "data-driven",
    title: "データ訴求型にストーリー型の社員紹介を追加したい",
    description: "ストーリー型のMemberInterviewをデータ訴求型に移植",
    targetFiles: [
      "src/app/templates/data-driven/page.tsx",
      "src/data/data-driven/sample.ts",
    ],
    instruction: `ストーリー型の社員インタビューコンポーネントをデータ訴求型に追加してください。

追加位置: [セクション名の後に追加]
表示する社員数: [3名、5名など]`,
    tags: ["社員紹介", "移植", "インタビュー"],
  },

  // ================================================================
  // 大きな変更ケース: トップページ（一覧）
  // ================================================================
  {
    id: "top-page-redesign",
    category: "layout",
    subcategory: "section",
    template: "top",
    title: "トップページ（テンプレート一覧）全体を作り直したい",
    description: "一覧ページのデザインを完全にリデザインする",
    targetFiles: ["src/app/page.tsx"],
    instruction: `トップページを完全に作り直してください。

現在の構成：
- ヒーローセクション
- テンプレートカードグリッド
- 特徴セクション

変更したい内容を教えてください：
- ヒーローのデザイン
- テンプレートの見せ方（カード、スライダー、比較表など）
- 追加したいセクション
- 削除したいセクション`,
    tags: ["トップページ", "一覧", "リデザイン"],
  },
  {
    id: "top-template-card-redesign",
    category: "layout",
    subcategory: "card",
    template: "top",
    title: "テンプレートカードのデザインを大幅に変更したい",
    description: "TemplateCardコンポーネントを完全にリデザインする",
    targetFiles: ["src/app/page.tsx"],
    instruction: `テンプレートカードを完全に作り直してください。

現在の表示：
- サムネイル画像
- テンプレート名
- 説明文
- 特徴リスト

変更したい内容を教えてください：
- プレビュー画像の見せ方
- ホバーエフェクト
- 情報の配置
- インタラクション（クリックでプレビュー、詳細モーダルなど）`,
    tags: ["テンプレートカード", "一覧", "リデザイン"],
  },
  {
    id: "top-add-comparison-table",
    category: "layout",
    subcategory: "table",
    template: "top",
    title: "トップページにテンプレート比較表を追加したい",
    description: "テンプレートの機能を比較できる表を追加",
    targetFiles: ["src/app/page.tsx"],
    instruction: `トップページにテンプレート比較表を追加してください。

比較項目例：
- ページ数
- 主な特徴
- 適した企業タイプ
- デザインの傾向
- 含まれるセクション

表形式で並べて比較できるようにしてください。`,
    tags: ["比較表", "テンプレート", "一覧"],
  },
  {
    id: "top-add-preview-modal",
    category: "function",
    subcategory: "other",
    template: "top",
    title: "テンプレートのプレビューモーダルを追加したい",
    description: "クリックでテンプレートのプレビューを大きく表示",
    targetFiles: ["src/app/page.tsx"],
    instruction: `テンプレートカードをクリックしたときにプレビューモーダルを表示してください。

モーダルの内容：
- テンプレートのスクリーンショット（大きく表示）
- 詳細説明
- 含まれるページ一覧
- 「このテンプレートを見る」ボタン
- 「閉じる」ボタン`,
    tags: ["プレビュー", "モーダル", "一覧"],
  },

  // ================================================================
  // 大きな変更ケース: レスポンシブ全体の見直し
  // ================================================================
  {
    id: "all-responsive-complete-review",
    category: "responsive",
    subcategory: "mobile",
    template: "all",
    title: "全ページのレスポンシブデザインを見直したい",
    description: "モバイル表示を全体的に改善する",
    targetFiles: ["該当する全コンポーネント"],
    instruction: `全ページのレスポンシブデザインを見直してください。

確認・改善してほしい点：
- モバイルでの文字サイズ
- モバイルでの余白・間隔
- モバイルでの画像サイズ
- モバイルでのナビゲーション
- タブレットでの表示

特に問題があるページや箇所があれば教えてください。`,
    tags: ["レスポンシブ", "モバイル", "全体"],
  },
  {
    id: "story-responsive-fix",
    category: "responsive",
    subcategory: "mobile",
    template: "story-type",
    title: "ストーリー型のモバイル表示を全体的に修正したい",
    description: "スマートフォンでの表示を改善する",
    targetFiles: ["src/app/templates/story-type/配下の全ファイル"],
    instruction: `ストーリー型の全ページでモバイル表示を改善してください。

特に確認してほしい点：
- ヒーローセクションの高さとテキストサイズ
- カードの配置（1列 or 2列）
- ナビゲーションメニュー
- フォームの使いやすさ
- 画像のサイズと配置`,
    tags: ["レスポンシブ", "モバイル", "ストーリー型"],
  },

  // ================================================================
  // 大きな変更ケース: アニメーション全体の追加・変更
  // ================================================================
  {
    id: "all-animation-complete-add",
    category: "animation",
    subcategory: "scroll",
    template: "all",
    title: "ページ全体にアニメーションを追加したい",
    description: "スクロールアニメーションを全セクションに適用する",
    targetFiles: ["該当ページのpage.tsx"],
    instruction: `ページ全体にスクロールアニメーションを追加してください。

追加したいアニメーション：
- フェードイン（下から上）
- スライドイン（左右から）
- ズームイン
- 順番に表示（stagger）

どのページに追加しますか？
どの程度の演出にしますか？（控えめ / 標準 / 派手）`,
    tags: ["アニメーション", "スクロール", "全体"],
  },
  {
    id: "all-animation-remove",
    category: "animation",
    subcategory: "other",
    template: "all",
    title: "アニメーションを全て削除したい",
    description: "パフォーマンスのためアニメーションを無効化する",
    targetFiles: ["該当コンポーネント"],
    instruction: `指定したページまたは全ページのアニメーションを削除してください。

対象：
- 全ページ
- 特定のページのみ: [ページ名]
- 特定のコンポーネントのみ: [コンポーネント名]

FadeIn、motion.div、アニメーション関連のコードを削除または無効化してください。`,
    tags: ["アニメーション", "削除", "無効化"],
  },
];
