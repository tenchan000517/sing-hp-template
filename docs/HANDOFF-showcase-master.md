# ショーケース完成 マスターHANDOFF

このドキュメントは、7つのテンプレートショーケースを完成させるための統括管理ファイルです。
**セッションが分かれても、このファイルを読めば現在の進捗と次のタスクが分かります。**

---

## 1. プロジェクト概要

**目的**: 各テンプレートのショーケースを「本当に存在する企業の本当のWEBサイト」と思えるクオリティで完成させる

**ゴール**: クライアントが「このテンプレートなら契約したい」と思えるショーケース

**重要原則**:
- **見た目のクオリティが最優先**（SEO/LLMOは重要ではない）
- **hp-templateの実装が正**（ドキュメントより実装を信頼）
- **Anti-AIデザイン**（カード乱用、グラデーション、過剰装飾を避ける）

---

## 2. 実装優先順位（この順番で作業する）

| 優先度 | テンプレート | 理由 | 推定工数 |
|--------|-------------|------|---------|
| 🔴 1 | **trust-visual** | 完全未着手（0%） | 大 |
| 🔴 2 | **fullorder** | 完全未着手（0%） | 大 |
| 🔴 3 | **recruit-magazine** | 記事詳細ページ欠落（重大） | 中 |
| 🔴 4 | **leadgen-visual** | contact/worksページ未実装 | 小 |
| 🟠 5 | **leadgen-minimal** | contactフォーム機能なし | 小 |
| 🟠 6 | **authority-minimal** | フォーム機能なし、FAQ未実装 | 小 |
| 🟡 7 | **standard** | 画像配置、カード修正 | 小 |

---

## 3. 全体進捗ダッシュボード

**最終更新**: 2026-02-02

| # | テンプレート | 進捗 | ページ | データ | 画像 | フォーム | 状態 |
|---|-------------|------|--------|--------|------|---------|------|
| 1 | trust-visual | 95% | 6/6 ✅ | ✅ | ✅ | ✅ | 🟢 完了（画像修正済み） |
| 2 | fullorder | 85% | 6/6 ✅ | ✅ | ⚠️ | ✅ | 🟡 プレースホルダー多数 |
| 3 | recruit-magazine | 85% | 8/7 ✅ | ✅ | ⚠️ | - | 🟡 プレースホルダー多数 |
| 4 | leadgen-visual | 90% | 6/6 ✅ | ✅ | ✅ | ✅ | 🟢 完了（画像コピー済み） |
| 5 | leadgen-minimal | 85% | 7/6 ✅ | ✅ | ⚠️ | ✅ | 🟡 プレースホルダー多数 |
| 6 | authority-minimal | 85% | 6/6 ✅ | ✅ | ⚠️ | ✅ | 🟡 プレースホルダー多数（FAQ追加済み） |
| 7 | standard | 85% | 6/6 ✅ | ✅ | ⚠️ | ✅ | 🟡 プレースホルダー多数（カード廃止済み） |

**凡例**: ✅完了 ⚠️部分的 ❌未実装 -該当なし

### 共通機能追加
- [x] BackToTopBar: 全7テンプレートに「テンプレート一覧に戻る」バー追加
  - スクロールダウンで表示、スクロールアップで非表示
  - 追従ヘッダーと干渉しない設計

---

## 4. テンプレート別 詳細タスクリスト

---

### 4.1 trust-visual（あおぞら法律事務所）🟢 優先度1

**状態**: 実装完了（2026-02-02）
**企業名**: あおぞら法律事務所
**業種**: 法律事務所
**参照**: `docs/templates/trust-visual/HANDOFF.md`

#### Phase 1: 基盤構築
- [x] ディレクトリ作成: `src/app/templates/trust-visual/`
- [x] ディレクトリ作成: `src/data/trust-visual/`
- [x] データファイル作成: `src/data/trust-visual/sample.ts`
  - [x] company（基本情報）
  - [x] navigation（6ページ分）
  - [x] hero（代表弁護士写真）
  - [x] achievements（相談5,000件+）
  - [x] reasons（選ばれる理由4つ）
  - [x] services/serviceDetails（取扱分野4つ）
  - [x] lawyers（弁護士3名）
  - [x] fees（料金表）
  - [x] caseStudies（解決事例3件）
  - [x] media（メディア掲載3件）
  - [x] ceoMessage（代表メッセージ）
  - [x] officeInfo（事務所情報）
  - [x] contactForm設定
- [x] レイアウト作成: `src/app/templates/trust-visual/layout.tsx`
- [x] Layout コンポーネント: `src/app/templates/trust-visual/_components/Layout.tsx`

#### Phase 2: ページ実装（6ページ）
- [x] トップページ: `page.tsx`
  - [x] Hero（代表弁護士写真）
  - [x] Achievements（実績カウンター）
  - [x] Reasons（選ばれる理由4つ）
  - [x] Services（取扱分野）
  - [x] Cases（解決事例ピックアップ）
  - [x] Media（掲載実績）
  - [x] Contact導線
- [x] 事務所概要: `about/page.tsx`
  - [x] 代表メッセージ
  - [x] 事務所情報テーブル
  - [x] Google Map
- [x] 専門分野: `service/page.tsx`
  - [x] 分野リスト
  - [x] 料金表
- [x] 弁護士紹介: `lawyers/page.tsx`
  - [x] 田中裕子（代表）
  - [x] 山本健一（パートナー）
  - [x] 鈴木美咲（アソシエイト）
- [x] 解決事例: `case/page.tsx`
  - [x] 相続事例
  - [x] 企業法務事例
  - [x] 離婚事例
- [x] お問い合わせ: `contact/page.tsx`
  - [x] フォーム実装

#### Phase 3: 画像・仕上げ
- [x] hp-templateから画像コピー
- [x] ブランドカラー適用（#1a365d, #38a169）
- [ ] Noto Serif JP + Lato フォント設定（※要確認）
- [x] レスポンシブ確認
- [x] **弁護士画像の性別修正**（2026-02-02）
  - [x] 田中裕子（代表弁護士・女性）→ customer-05.jpg（女性）に変更
  - [x] 鈴木美咲（アソシエイト・女性）→ customer-02.jpg（女性）に変更

#### 完了判定
- [x] 全6ページがエラーなく表示（TypeScript型チェックOK）
- [x] 画像が全て表示される（hp-templateからコピー済み）
- [x] フォームが見た目上機能する
- [x] 弁護士の性別と画像が一致
- [ ] 「本当の法律事務所サイト」に見える（※ブラウザで要確認）

---

### 4.2 fullorder（三河精密工業）🟢 優先度2

**状態**: 実装完了（2026-02-02）
**企業名**: 三河精密工業株式会社
**業種**: 精密金属加工
**参照**: `docs/templates/fullorder/HANDOFF.md`

#### Phase 1: 基盤構築
- [x] ディレクトリ作成: `src/app/templates/fullorder/`
- [x] ディレクトリ作成: `src/data/fullorder/`
- [x] データファイル作成: `src/data/fullorder/sample.ts`
  - [x] company（基本情報）
  - [x] navigation（6ページ分）
  - [x] hero（職人がノギスで検査中）
  - [x] reasons（選ばれる3つの理由）
  - [x] services（対応加工6項目）
  - [x] equipmentCarousel（設備紹介）
  - [x] recruitTeaser（採用メッセージ）
  - [x] processTypes（加工種類）
  - [x] specs（対応表）
  - [x] qualityFlow（品質管理フロー）
  - [x] equipments（設備詳細）
  - [x] ceoMessage（代表メッセージ）
  - [x] companyInfo（会社情報）
  - [x] history（沿革）
  - [x] infographics（残業15h、有給85%等）
  - [x] interviews（田村/佐々木/山本）
  - [x] jobs（募集要項）
  - [x] contactForm設定
- [x] レイアウト作成: `src/app/templates/fullorder/layout.tsx`
- [x] Layout コンポーネント: `src/app/templates/fullorder/_components/Layout.tsx`

#### Phase 2: ページ実装（6ページ）
- [x] トップページ: `page.tsx`
  - [x] Hero（フルスクリーン背景）
  - [x] Reasons（3項目）
  - [x] Services（アイコン+テキスト）
  - [x] Equipment（横スクロール）
  - [x] Recruit（採用メッセージ）
  - [x] Contact導線
- [x] サービス: `service/page.tsx`
  - [x] ProcessTypes
  - [x] Specs（テーブル）
  - [x] QualityFlow
- [x] 設備紹介: `equipment/page.tsx`
  - [x] カテゴリ別リスト
- [x] 会社概要: `company/page.tsx`
  - [x] CEO Message
  - [x] 会社情報テーブル
  - [x] 沿革
  - [x] Google Map
- [x] 採用情報: `recruit/page.tsx`
  - [x] Concept
  - [x] Infographics
  - [x] Interviews（3名）
  - [x] Jobs
  - [x] Entry CTA
- [x] お問い合わせ: `contact/page.tsx`
  - [x] フォーム（図面添付対応）

#### Phase 3: 画像・仕上げ
- [ ] hp-templateから画像コピー（※画像ファイルなし、プレースホルダー使用）
- [x] ブランドカラー適用（#2C3E50, #E67E22）
- [x] レスポンシブ確認

#### 完了判定
- [x] 全6ページがエラーなく表示（TypeScript型チェックOK）
- [ ] 画像が全て表示される（※プレースホルダー状態）
- [x] フォームが見た目上機能する
- [ ] 「本当の精密加工会社サイト」に見える（※ブラウザで要確認）

---

### 4.3 recruit-magazine（三河精密工業）🟢 優先度3

**状態**: 実装完了（2026-02-02）
**企業名**: 三河精密工業株式会社
**参照**: `docs/templates/recruit-magazine/HANDOFF.md`

#### Phase 1: 記事詳細ページ実装
- [x] 動的ルート作成: `article/[id]/page.tsx`
  - [x] 記事本文表示（lead、sections）
  - [x] Sidebar（プロフィール、スケジュール）
  - [x] CTA（工場見学誘導）
  - [x] 関連記事表示

#### Phase 2: データ拡充
- [x] articles配列の完全化（sample.ts）
  - [x] 田村インタビュー: content構造あり
  - [x] 0.005mmの壁（WORKS）: content追加
  - [x] BBQ大会（CULTURE）: content追加
  - [x] 佐々木インタビュー: content追加（profile, schedule付き）
  - [x] DATA記事: 新規作成

#### Phase 3: UI修正
- [x] READ MOREリンクを個別記事（/article/[id]）に修正
- [x] カテゴリページにリンク追加（PEOPLE, WORKS, CULTURE）

#### Phase 4: 画像・仕上げ
- [ ] hp-templateから画像コピー（※画像ファイルなし、プレースホルダー使用）

#### 完了判定
- [x] 記事詳細ページが正しく表示される（TypeScript型チェックOK）
- [x] READ MOREから詳細に遷移できる
- [x] DATAカテゴリの記事が存在する
- [ ] 「本当の採用マガジンサイト」に見える（※ブラウザで要確認）

---

### 4.4 leadgen-visual（三河精密工業）🔴 優先度4

**状態**: 5/6ページ実装、contact/worksページ未実装（ナビリンク切れ）
**企業名**: 三河精密工業株式会社
**参照**: `docs/templates/leadgen-visual/HANDOFF.md`

#### 重大な問題
constants.ts でナビゲーションに `/contact` と `/works` へのリンクがあるが、ページが存在しない。

#### Phase 1: 欠落ページ実装
- [ ] お問い合わせ: `contact/page.tsx`
  - [ ] ダーク背景
  - [ ] 透過フォーム
  - [ ] 発光CTAボタン
  - [ ] 設計図面背景画像
- [ ] 加工実績詳細（必要に応じて）: works詳細ページ

#### Phase 2: 動画対応（Visual必須）
- [ ] Hero動画: hero-movie.mp4 配置
- [ ] About動画: about-bg.mp4 配置
- [ ] インタビュー動画プレースホルダー改善

#### Phase 3: データ修正
- [ ] 佐々木氏のインタビューデータ追加（現在2名のみ）
- [ ] navigation修正（実在ページとの整合性）

#### Phase 4: 画像・仕上げ
- [ ] hp-templateから画像コピー
- [ ] 全プレースホルダーを実画像に置換
- [ ] パララックス効果の実装確認

#### 完了判定
- [ ] 全ナビゲーションリンクが機能する
- [ ] 動画が再生される（またはフォールバック）
- [ ] contactフォームが見た目上機能する
- [ ] 「本当の精密加工会社サイト（ダークモード）」に見える

---

### 4.5 leadgen-minimal（スカイリフォーム）🟠 優先度5

**状態**: ページは実装済み、contactフォームがプレースホルダー状態
**企業名**: スカイリフォーム株式会社（※要確認：HANDOFFでは三河精密）
**参照**: `docs/templates/leadgen-minimal/HANDOFF.md`

#### 重大な問題
contactページが存在するが「サンプルのお問い合わせフォーム」テキストのみでCVできない。

#### Phase 1: フォーム実装（最優先）
- [ ] contact/page.tsx のフォーム実装
  - [ ] 会社名（任意）
  - [ ] 氏名（必須）
  - [ ] Email（必須）
  - [ ] TEL（任意）
  - [ ] 用件選択
  - [ ] 内容（必須）
  - [ ] 図面添付（任意）

#### Phase 2: データ拡充
- [ ] パートナーロゴ（trustLogos）を実データに
- [ ] FAQセクションデータ追加
- [ ] 社員インタビューデータ追加（現在なし）

#### Phase 3: 画像・仕上げ
- [ ] hp-templateから画像コピー
- [ ] プレースホルダー画像を置換

#### 完了判定
- [ ] contactフォームが見た目上機能する
- [ ] 画像が全て表示される
- [ ] 「本当のリフォーム会社サイト」に見える

---

### 4.6 authority-minimal（株式会社テックフロンティア）🟠 優先度6

**状態**: 6ページ実装済み、フォーム機能なし、FAQ未実装
**企業名**: 株式会社テックフロンティア（※要確認：HANDOFFでは三河精密）
**参照**: `docs/templates/authority-minimal/HANDOFF.md`

#### Phase 1: フォーム機能化
- [ ] contact/page.tsx のフォーム実装
  - [ ] バリデーション追加
  - [ ] 送信ボタン機能化（見た目上）
  - [ ] エラー表示
  - [ ] 図面アップロードUI

#### Phase 2: 追加ページ/セクション
- [ ] FAQセクション追加（serviceページ下部）
  - [ ] 見積もりの流れ
  - [ ] 最小ロット
  - [ ] 対応可能な加工範囲
- [ ] キャリアパス図解（recruitページ）

#### Phase 3: 画像・仕上げ
- [ ] hp-templateから画像コピー
- [ ] 全14個のプレースホルダーを置換
- [ ] 動画背景の配置（あれば）

#### 完了判定
- [ ] フォームが見た目上機能する
- [ ] FAQが表示される
- [ ] 画像が全て表示される
- [ ] 「本当のITコンサル会社サイト」に見える

---

### 4.7 standard（中部建設株式会社）🟡 優先度7

**状態**: 6ページ実装済み、画像プレースホルダー、Anti-AIデザイン違反あり
**企業名**: 中部建設株式会社（※要確認：HANDOFFでは三河精密）
**参照**: `docs/templates/standard/HANDOFF.md`

#### Phase 1: デザイン修正
- [ ] Strengthsセクションのカード廃止
  - [ ] 現在: `bg-white p-8 rounded shadow-sm`
  - [ ] 修正: 太字見出し + リード文のみに変更
- [ ] 採用ティーザー文言修正
  - [ ] 現在: 「技術は、人から人へ。」
  - [ ] 要件: 「一緒に、ミクロンに挑む仲間を。」

#### Phase 2: 機能追加
- [ ] 図面アップロード機能（contactページ）
  - [ ] `<input type="file">` 追加
  - [ ] ドラッグ&ドロップUI

#### Phase 3: 画像・仕上げ
- [ ] hp-templateから画像コピー
- [ ] 14個のプレースホルダーを置換
  - [ ] hero-main.jpg
  - [ ] logo-client-*.png（取引先ロゴ）
  - [ ] interview-*.jpg（3名）
  - [ ] ceo.jpg
  - [ ] service_*.jpg
  - [ ] equipment_*.jpg

#### Phase 4: 細部調整
- [ ] 佐々木氏の職位修正（「事務」→「総務部」の整合性確認）
- [ ] Google Map埋め込み確認

#### 完了判定
- [ ] カード乱用がない（Anti-AIデザイン準拠）
- [ ] 画像が全て表示される
- [ ] 「本当の建設会社サイト」に見える

---

## 5. 共通タスク（全テンプレート対象）

### 画像コピー手順
```bash
# hp-templateから画像をコピー
cp -r /mnt/c/hp-template/template-{id}/public/images/* \
      /mnt/c/sing-hp-template/public/images/templates/{id}/
```

### 動作確認手順
```bash
npm run dev
# http://localhost:3000/templates/{template-id} で確認
```

### 品質チェックリスト（各テンプレート完了時）
- [ ] 全ページがエラーなく表示される
- [ ] レスポンシブ対応（PC/SP）
- [ ] 画像が全て表示される
- [ ] リンク切れがない
- [ ] 【】プレースホルダーが残っていない
- [ ] AIっぽさがない（カード乱用、過剰装飾なし）
- [ ] 「本当の企業サイト」に見える

---

## 6. ディレクトリ構成リファレンス

### 参照ドキュメント（要件）
```
/mnt/c/sing-hp-template/docs/templates/{template-id}/
├── HANDOFF.md          # 要件定義（最重要）
├── sample-prompt.md    # 企業詳細設定
└── website_plan.md     # 構成案
```

### 画像取得元（正）
```
/mnt/c/hp-template/template-{id}/public/images/
```

### 実装先
```
/mnt/c/sing-hp-template/
├── src/app/templates/{id}/      # ページ
├── src/data/{id}/sample.ts      # データ
├── src/components/templates/{id}/ # コンポーネント（任意）
└── public/images/templates/{id}/ # 画像
```

---

## 7. セッション開始時の手順

新しいセッションを開始したら、以下の手順で作業を再開してください：

### Step 1: このファイルを読む
```
docs/HANDOFF-showcase-master.md
```

### Step 2: 進捗ダッシュボード（セクション3）を確認
- 現在の全体進捗を把握
- 次に着手すべきテンプレートを特定

### Step 3: 該当テンプレートのタスクリスト（セクション4）を確認
- チェックが入っていないタスクから再開
- Phase順に作業

### Step 4: 作業完了後、このファイルを更新
- チェックボックスを更新
- 進捗ダッシュボードを更新
- 更新履歴に記録

---

## 8. 重要な注意事項

### hp-templateが「正」
```
/mnt/c/hp-template/template-{id}/src/  # これが正しい実装
```
- ドキュメントよりも実装を信頼
- ページ構成、コンポーネント構造、デザインはhp-templateを参照

### 企業名の不整合に注意
調査の結果、HANDOFFドキュメントと実装で企業名が異なる場合があります：
- HANDOFF: ほぼ全て「三河精密工業株式会社」
- 実装: テンプレートごとに異なる企業名

**対応方針**: 実装されている企業名を維持（変更すると大規模修正が必要）

### Anti-AIデザイン原則
- カード乱用禁止（太字見出し + リード文で表現）
- 紫・グラデーション禁止
- 過剰な影・装飾禁止
- 余白で語る設計

---

## 9. 残課題（次セッションで対応）

### 🔴 高優先度: 画像プレースホルダーの解消

以下のテンプレートで多数のプレースホルダー（`bg-gray-200` + テキスト）が残っている：

| テンプレート | 主なプレースホルダー箇所 |
|-------------|------------------------|
| fullorder | service画像、recruit背景、equipment画像、CEO画像、地図 |
| recruit-magazine | hero画像、記事サムネイル、people画像、culture画像 |
| leadgen-minimal | hero画像、solution画像、works画像、recruit画像、CEO画像、地図 |
| authority-minimal | hero動画/画像、strength画像、works画像、equipment画像、interview画像、CEO画像 |
| standard | hero背景、client logos、service画像、recruit画像、equipment画像、CEO画像、地図 |

**対応方針**:
1. hp-templateに実画像があれば使用
2. なければ適切なストック画像を生成/取得
3. または企業テーマに合ったプレースホルダー表示に改善

### 🟠 中優先度: TOPページサムネイル整合性

一部テンプレートでサムネイル画像と企業テーマが不一致：
- **leadgen-minimal**: 「スカイリフォーム」なのに精密加工工場の画像
- **standard**: 「中部建設」なのに製造業の画像

**対応方針**: サムネイル画像の差し替え、または constants.ts の企業名修正

---

## 10. 更新履歴

| 日付 | 内容 | 担当 |
|------|------|------|
| 2026-02-02 | マスターHANDOFF作成 | Claude |
| 2026-02-02 | 詳細ギャップ分析結果を反映、タスクリスト追加 | Claude |
| 2026-02-02 | trust-visual 6ページ実装完了 | Claude |
| 2026-02-02 | fullorder 6ページ新規実装完了 | Claude |
| 2026-02-02 | recruit-magazine 記事詳細ページ追加、リンク修正完了 | Claude |
| 2026-02-02 | leadgen-visual contactページ新規実装完了 | Claude |
| 2026-02-02 | leadgen-minimal contactフォーム機能化完了 | Claude |
| 2026-02-02 | authority-minimal contactフォーム機能化完了 | Claude |
| 2026-02-02 | standard contactフォーム機能化、図面添付対応完了 | Claude |
| 2026-02-02 | 全テンプレート画像コピー完了、authority-minimalにFAQ追加、standardのカード廃止・文言修正完了 | Claude |
| 2026-02-02 | trust-visual弁護士画像の性別修正（田中裕子・鈴木美咲を女性画像に変更） | Claude |
| 2026-02-02 | BackToTopBar追加（全7テンプレート、スクロールで表示/非表示） | Claude |
| 2026-02-02 | 残課題セクション追加（プレースホルダー解消、サムネイル整合性） | Claude |
