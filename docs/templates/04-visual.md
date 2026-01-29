# テンプレート4: ビジュアル型「写真で魅せる採用サイト」

## コンセプト

高品質な写真と動画を中心に、視覚的なインパクトで企業の魅力を伝えるテンプレート。
オフィス環境や働く様子を「見せる」ことで、企業文化を直感的に伝える。

## 適合する企業特性

- オフィス環境に自信がある企業
- 写真映えする職場や製品がある企業
- クリエイティブな企業文化を持つ企業
- 若年層をターゲットにした採用
- SNS採用を強化したい企業

## テーマカラー

```css
--color-primary: #7B1FA2;  /* パープル - クリエイティブ */
--color-accent: #E91E63;   /* ピンク */
```

---

## サイト構造

| ページ | パス | 概要 |
|--------|------|------|
| HOME | `/templates/visual` | フルスクリーン画像/動画 |
| ギャラリー | `/templates/visual/gallery` | 写真・動画ギャラリー |
| カルチャー | `/templates/visual/culture` | 働く環境・イベント |
| メンバー | `/templates/visual/members` | 社員紹介（写真重視） |
| 募集職種 | `/templates/visual/jobs` | ビジュアルカード形式 |
| 応募する | `/templates/visual/apply` | フォーム |

---

## セクション設計

### HOME

#### セクション1: フルスクリーン動画/スライダー

**レイアウト**: 全画面、動画背景 or 画像スライダー

**コンテンツ**:
- 背景動画（オフィスの様子、働く人々）
- または高品質画像のスライドショー
- オーバーレイにキャッチコピー

**必要ライブラリ**:
```bash
npm install swiper
```

**実装例**:
```tsx
// 動画背景
<section className="relative min-h-screen overflow-hidden">
  <video
    autoPlay
    muted
    loop
    playsInline
    className="absolute inset-0 w-full h-full object-cover"
  >
    <source src="/videos/hero.mp4" type="video/mp4" />
  </video>
  <div className="absolute inset-0 bg-black/40" />
  <div className="relative z-10 flex items-center justify-center min-h-screen">
    <h1 className="text-white text-5xl font-bold">キャッチコピー</h1>
  </div>
</section>

// 画像スライダー（Swiper）
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';

<Swiper
  modules={[Autoplay, EffectFade]}
  effect="fade"
  autoplay={{ delay: 5000, disableOnInteraction: false }}
  loop
  className="h-screen"
>
  {images.map((img) => (
    <SwiperSlide key={img.id}>
      <Image src={img.src} alt={img.alt} fill className="object-cover" />
    </SwiperSlide>
  ))}
</Swiper>
```

---

#### セクション2: Instagram風グリッド

**レイアウト**: 3x3 or 4x4のマソンリーグリッド

**コンテンツ**:
- オフィス風景
- 社員の日常
- イベント写真
- 製品/サービス

**実装例**:
```tsx
<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-1">
  {images.map((img, index) => (
    <motion.div
      key={img.id}
      className="relative aspect-square cursor-pointer overflow-hidden"
      whileHover={{ scale: 1.05 }}
      onClick={() => openLightbox(index)}
    >
      <Image src={img.src} alt={img.alt} fill className="object-cover" />
      <div className="absolute inset-0 bg-black/0 hover:bg-black/30 transition-colors flex items-center justify-center">
        <span className="text-white opacity-0 hover:opacity-100 transition-opacity">
          {img.caption}
        </span>
      </div>
    </motion.div>
  ))}
</div>
```

---

#### セクション3: 横スクロールセクション

**レイアウト**: 横スクロール（カルーセル）

**コンテンツ**:
- カルチャー紹介カード
- 各カードに大きな写真 + 短いテキスト

```tsx
<Swiper
  modules={[Navigation]}
  spaceBetween={24}
  slidesPerView={1.2}
  breakpoints={{
    768: { slidesPerView: 2.2 },
    1024: { slidesPerView: 3.2 },
  }}
  navigation
  className="!overflow-visible"
>
  {cultures.map((culture) => (
    <SwiperSlide key={culture.id}>
      <div className="relative aspect-[3/4] rounded-xl overflow-hidden">
        <Image src={culture.image} alt={culture.title} fill className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
        <div className="absolute bottom-0 p-6 text-white">
          <h3 className="text-2xl font-bold mb-2">{culture.title}</h3>
          <p className="text-sm opacity-80">{culture.description}</p>
        </div>
      </div>
    </SwiperSlide>
  ))}
</Swiper>
```

---

### ギャラリー

#### セクション: フィルタリング付きギャラリー

**レイアウト**: タブ切り替え + マソンリーグリッド

**コンテンツ**:
- カテゴリ: オフィス / イベント / 日常 / 製品
- Lightbox表示

**実装ポイント**:
```tsx
const [filter, setFilter] = useState("all");
const filteredImages = filter === "all"
  ? images
  : images.filter((img) => img.category === filter);

<div className="flex gap-4 mb-8">
  {["all", "office", "event", "daily", "product"].map((cat) => (
    <button
      key={cat}
      onClick={() => setFilter(cat)}
      className={`px-4 py-2 rounded-full ${
        filter === cat ? "bg-primary text-white" : "bg-gray-100"
      }`}
    >
      {cat === "all" ? "すべて" : cat}
    </button>
  ))}
</div>
```

---

### メンバー

#### セクション: 大きな写真のメンバーカード

**レイアウト**: 2カラム（PC）、1カラム（SP）

**コンテンツ**:
- 大きな写真（縦長、3:4）
- 名前・役職
- 一言コメント
- SNSリンク（オプション）

```tsx
<div className="grid md:grid-cols-2 gap-8">
  {members.map((member) => (
    <motion.div
      key={member.id}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      className="group"
    >
      <div className="relative aspect-[3/4] rounded-xl overflow-hidden mb-4">
        <Image src={member.photo} alt={member.name} fill className="object-cover transition-transform duration-500 group-hover:scale-105" />
      </div>
      <h3 className="text-xl font-bold">{member.name}</h3>
      <p className="text-gray-500">{member.position}</p>
      <p className="mt-2 text-sm">{member.comment}</p>
    </motion.div>
  ))}
</div>
```

---

## コンポーネント一覧

| コンポーネント | 説明 | 優先度 |
|---------------|------|--------|
| `VideoHero` | 動画背景ヒーロー | 高 |
| `ImageSlider` | 全画面画像スライダー | 高 |
| `PhotoGrid` | Instagram風グリッド | 高 |
| `HorizontalScroll` | 横スクロールカルーセル | 中 |
| `Lightbox` | 画像拡大表示 | 高 |
| `MemberPhotoCard` | 写真重視のメンバーカード | 中 |
| `FilterTabs` | フィルタリングタブ | 中 |

---

## 画像・動画要件

### 推奨サイズ

| 種類 | サイズ | 用途 |
|------|--------|------|
| ヒーロー動画 | 1920x1080（16:9） | 背景動画 |
| ヒーロー画像 | 1920x1080 | スライダー |
| グリッド画像 | 800x800（1:1） | Instagram風 |
| メンバー写真 | 800x1067（3:4） | メンバー紹介 |
| サムネイル | 400x400 | 一覧表示 |

### 動画仕様

- フォーマット: MP4（H.264）
- 長さ: 15-30秒
- ファイルサイズ: 10MB以下推奨
- 音声: なし（または別ファイル）

### 画像最適化

```tsx
// next/imageの使用
<Image
  src={imagePath}
  alt={alt}
  fill
  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
  quality={85}
  placeholder="blur"
  blurDataURL={blurDataURL}
/>
```

---

## サンプルデータ構造

```typescript
// src/data/visual/sample.ts

export const heroMedia = {
  type: "video", // "video" | "slider"
  video: {
    src: "/videos/hero.mp4",
    poster: "/images/hero-poster.jpg",
  },
  slides: [
    { id: 1, src: "/images/slide1.jpg", alt: "オフィス風景" },
    { id: 2, src: "/images/slide2.jpg", alt: "チームミーティング" },
    { id: 3, src: "/images/slide3.jpg", alt: "社員の笑顔" },
  ],
};

export const gallery = [
  {
    id: 1,
    src: "/images/gallery/office1.jpg",
    alt: "オフィス入口",
    category: "office",
    caption: "開放的なエントランス",
  },
  // ...
];

export const cultures = [
  {
    id: 1,
    title: "フレックスタイム",
    description: "自分のペースで働ける環境",
    image: "/images/culture/flex.jpg",
  },
  // ...
];
```

---

## 実装優先順位

1. Swiperライブラリ導入
2. VideoHero / ImageSlider
3. PhotoGrid + Lightbox
4. HOMEページ
5. ギャラリーページ
6. その他ページ

---

## パフォーマンス考慮事項

### 画像の遅延読み込み

```tsx
// Intersection Observerで表示時に読み込み
import { useInView } from "framer-motion";

const ref = useRef(null);
const isInView = useInView(ref, { once: true });

<div ref={ref}>
  {isInView && <Image ... />}
</div>
```

### 動画の最適化

1. **ポスター画像**: 動画読み込み前に表示
2. **遅延読み込み**: スクロールして見える時に再生
3. **低解像度プレビュー**: 高速接続で高解像度に切り替え

---

## 企業向けヒアリング項目

- [ ] 既存の写真素材（オフィス、社員、イベント）
- [ ] 動画素材（あれば）
- [ ] 撮影の可否・日程
- [ ] 写真掲載の社員承諾
- [ ] SNSアカウント（連携用）
- [ ] ブランドカラー
- [ ] 重視したい雰囲気（モダン/カジュアル/プロフェッショナルなど）
