# テンプレート3: シンプル型「ミニマル採用サイト」

## コンセプト

必要最低限の情報を美しくシンプルに配置した、洗練されたテンプレート。
高速表示とシンプルな情報設計で、どの業種にも対応可能。

## 適合する企業特性

- シンプルな情報発信を好む企業
- ブランドイメージを重視する企業
- 少人数採用の企業
- 制作コストを抑えたい企業
- コーポレートサイトのトーンに合わせたい企業

## テーマカラー

```css
--color-primary: #424242;  /* ダークグレー - 洗練・モダン */
--color-accent: #000000;   /* ブラック */
```

---

## サイト構造

| ページ | パス | 概要 |
|--------|------|------|
| HOME（全情報） | `/templates/simple` | 1ページ完結型 |

**特徴**: シングルページアプリケーション（SPA）風の設計。
スクロールで全セクションを表示し、応募まで完結。

---

## セクション設計（1ページ構成）

### セクション1: ヒーロー

**レイアウト**: フルスクリーン、中央揃え、余白多め

**コンテンツ**:
- 企業名（大きく）
- シンプルなキャッチコピー（1行）
- 「採用情報を見る」ボタン（スクロール誘導）

**デザイン指示**:
- 背景: 白 or 薄いグレー
- フォント: 細めのゴシック
- アニメーション: 控えめ（フェードインのみ）

```tsx
<section className="min-h-screen flex items-center justify-center">
  <div className="text-center">
    <h1 className="text-4xl md:text-6xl font-light tracking-wider mb-4">
      企業名
    </h1>
    <p className="text-xl text-gray-500 mb-8">
      シンプルなキャッチコピー
    </p>
    <button className="border border-black px-8 py-3 hover:bg-black hover:text-white transition-colors">
      採用情報を見る
    </button>
  </div>
</section>
```

---

### セクション2: 会社概要

**レイアウト**: 左テキスト / 右画像

**コンテンツ**:
- 会社説明（3-5行）
- 創業年・従業員数などの基本情報（箇条書き）

**デザイン指示**:
- 余白を広く
- 情報は最小限

---

### セクション3: 募集職種

**レイアウト**: シンプルなリスト形式

**コンテンツ**:
```
職種名                    雇用形態    勤務地
────────────────────────────────────────────
エンジニア                正社員      東京
デザイナー                正社員      東京
```

**デザイン指示**:
- テーブルではなくシンプルなリスト
- ホバーで詳細表示（アコーディオン）

```tsx
// アコーディオン形式
const [openId, setOpenId] = useState<string | null>(null);

<div className="divide-y">
  {jobs.map((job) => (
    <div key={job.id} className="py-6">
      <button
        onClick={() => setOpenId(openId === job.id ? null : job.id)}
        className="w-full flex justify-between items-center text-left"
      >
        <span className="text-xl">{job.title}</span>
        <span className="text-gray-500">{job.type}</span>
      </button>
      <AnimatePresence>
        {openId === job.id && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <div className="pt-4 text-gray-600">
              {/* 詳細情報 */}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  ))}
</div>
```

---

### セクション4: 福利厚生

**レイアウト**: 2カラムまたは3カラムのシンプルなリスト

**コンテンツ**:
- アイコンなし、テキストのみ
- 箇条書きで簡潔に

```tsx
<div className="grid md:grid-cols-2 gap-x-12 gap-y-4">
  <div className="flex justify-between border-b pb-2">
    <span>年間休日</span>
    <span className="text-gray-500">120日</span>
  </div>
  {/* ... */}
</div>
```

---

### セクション5: 応募フォーム

**レイアウト**: シンプルなフォーム、最小限の項目

**コンテンツ**:
- 名前
- メールアドレス
- 希望職種
- メッセージ（任意）

**デザイン指示**:
- 入力欄: ボーダーのみ（シンプル）
- ボタン: 黒背景、白文字

```tsx
<input
  type="text"
  className="w-full border-b border-gray-300 py-3 focus:border-black focus:outline-none transition-colors"
  placeholder="お名前"
/>
```

---

## コンポーネント一覧

| コンポーネント | 説明 | 複雑さ |
|---------------|------|--------|
| `MinimalHero` | シンプルなヒーロー | 低 |
| `AccordionList` | アコーディオン形式のリスト | 中 |
| `MinimalForm` | ミニマルなフォーム | 低 |
| `SimpleTable` | シンプルなテーブル表示 | 低 |

---

## デザイン原則

### 余白

```css
/* 通常より広めの余白 */
.section-padding {
  padding: 6rem 0; /* py-24 */
}

@media (min-width: 768px) {
  .section-padding {
    padding: 8rem 0; /* md:py-32 */
  }
}
```

### フォント

```css
/* 細めのフォントウェイト */
h1, h2 {
  font-weight: 300; /* font-light */
  letter-spacing: 0.1em; /* tracking-wider */
}
```

### カラー

```css
/* グレースケール中心 */
--color-text-primary: #1a1a1a;
--color-text-secondary: #666666;
--color-border: #e5e5e5;
--color-bg: #fafafa;
```

### アニメーション

- 控えめに
- フェードインのみ
- ホバーは色変化のみ

---

## サンプルデータ構造

```typescript
// src/data/simple/sample.ts

export const company = {
  name: "株式会社シンプル",
  tagline: "シンプルに、本質を。",
  description: "私たちは〇〇を通じて、社会に価値を提供しています。",
  founded: "2015年",
  employees: 25,
  location: "東京都渋谷区",
};

export const jobs = [
  {
    id: "engineer",
    title: "エンジニア",
    type: "正社員",
    location: "東京",
    salary: "400万円〜600万円",
    description: "Webアプリケーションの開発...",
    requirements: ["プログラミング経験2年以上"],
  },
];

export const benefits = [
  { label: "年間休日", value: "120日" },
  { label: "有給休暇", value: "入社半年後10日" },
  { label: "社会保険", value: "完備" },
  { label: "交通費", value: "全額支給" },
];
```

---

## 実装のポイント

### パフォーマンス最適化

1. **画像最小化**: 必要最低限の画像のみ
2. **フォント**: システムフォントまたは1種類のみ
3. **アニメーション**: 控えめに
4. **コード分割**: 1ページなので不要

### アクセシビリティ

1. 十分なコントラスト比（グレーでも読みやすく）
2. フォーカス状態の明示
3. スクロール位置のURL反映（オプション）

---

## 実装優先順位

1. 1ページのレイアウト作成
2. アコーディオンコンポーネント
3. ミニマルフォーム
4. 微調整（余白、アニメーション）

---

## 企業向けヒアリング項目

- [ ] 会社名・キャッチコピー
- [ ] 会社説明文（100-200文字）
- [ ] 基本情報（設立年、従業員数、所在地）
- [ ] 募集職種（最小限の情報）
- [ ] 福利厚生（箇条書き）
- [ ] ブランドカラー（あれば）
