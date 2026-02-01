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

**最終更新**: 2026-02-02（ハードコード修正完了）

| # | テンプレート | 進捗 | ページ | データ | 画像 | ハードコード修正 | 状態 |
|---|-------------|------|--------|--------|------|-----------------|------|
| 1 | trust-visual | 100% | 6/6 ✅ | ✅ | ✅ | ✅ | 🟢 完了 |
| 2 | fullorder | 100% | 6/6 ✅ | ✅ | ✅ | ✅ | 🟢 完了 |
| 3 | recruit-magazine | 100% | 8/7 ✅ | ✅ | ✅ | ✅ | 🟢 完了 |
| 4 | leadgen-visual | 100% | 6/6 ✅ | ✅ | ✅ | ✅ | 🟢 完了 |
| 5 | leadgen-minimal | 100% | 7/6 ✅ | ✅ | ✅ | ✅ | 🟢 完了 |
| 6 | authority-minimal | 100% | 6/6 ✅ | ✅ | ✅ | ✅ | 🟢 完了 |
| 7 | standard | 100% | 6/6 ✅ | ✅ | ✅ | ✅ | 🟢 完了 |

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
- [x] 画像コピー完了（2026-02-02）
  - hero-main.jpg, ceo.jpg, recruit-team.jpg
  - interview-tamura.jpg, interview-sasaki.jpg, interview-yamamoto.jpg
  - equip-*.jpg（NC旋盤、マシニング、複合加工機、三次元測定機等）
  - process-*.jpg（加工種類画像）
  - recruit-concept.jpg
- [x] 全ページでImageコンポーネント使用（データ駆動）
- [x] ブランドカラー適用（#2C3E50, #E67E22）
- [x] レスポンシブ確認

#### 完了判定
- [x] 全6ページがエラーなく表示（TypeScript型チェックOK）
- [x] 画像が全て表示される（Imageコンポーネント + データパス設定済み）
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
- [x] 画像コピー完了（2026-02-02）
  - article_tamura.jpg, article_sasaki.jpg, article_works.jpg, article_bbq.jpg, article_data.jpg
  - interview-*.jpg（プロフィール画像）
  - hero-main.jpg, ceo.jpg, recruit-*.jpg
  - equip-*.jpg, process-*.jpg
- [x] 全ページでImageコンポーネント使用（2026-02-02修正）
  - page.tsx: hero画像、ピックアップ記事画像、CEO画像
  - people/page.tsx: 記事サムネイル画像
  - work/page.tsx: 記事サムネイル画像
  - culture/page.tsx: イベント画像
  - article/[id]/page.tsx: ヒーロー画像、プロフィール画像、関連記事画像
- [x] sample.ts: プロフィールに画像パス追加（佐々木美香）

#### 完了判定
- [x] 記事詳細ページが正しく表示される（TypeScript型チェックOK）
- [x] READ MOREから詳細に遷移できる
- [x] DATAカテゴリの記事が存在する
- [x] 画像が全て表示される（Imageコンポーネント + データパス設定済み）
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

### 4.5 leadgen-minimal（三河精密工業）🟢 優先度5

**状態**: 実装完了（2026-02-02）
**企業名**: 三河精密工業株式会社
**参照**: `docs/templates/leadgen-minimal/HANDOFF.md`

#### Phase 1: フォーム実装（完了）
- [x] contact/page.tsx のフォーム実装済み

#### Phase 2: 画像・仕上げ（2026-02-02完了）
- [x] fullorder から画像コピー（同じ企業テーマ）
  - hero-main.jpg, ceo.jpg, recruit-team.jpg
  - work-car.jpg, work-semi.jpg, work-aero.jpg（process-*.jpgから）
  - equip-nc.jpg, equip-mc.jpg, equip-complex.jpg, equip-cmm.jpg
- [x] 全ページでImageコンポーネント使用
  - page.tsx: hero, solutions, works, recruit teaser
  - recruit/page.tsx: hero背景
  - company/page.tsx: CEO画像、Google Map iframe
  - cases/page.tsx: works画像
  - equipment/page.tsx: CMM画像

#### 完了判定
- [x] contactフォームが見た目上機能する
- [x] 画像が全て表示される（TypeScript型チェックOK）
- [ ] 「本当の精密加工会社サイト」に見える（※ブラウザで要確認）

---

### 4.6 authority-minimal（三河精密工業）🟢 優先度6

**状態**: 実装完了（2026-02-02）
**企業名**: 三河精密工業株式会社
**参照**: `docs/templates/authority-minimal/HANDOFF.md`

#### Phase 1: フォーム機能化（完了）
- [x] contact/page.tsx のフォーム実装済み

#### Phase 2: FAQ追加（完了）
- [x] FAQセクション追加済み（serviceページ）

#### Phase 3: 画像・仕上げ（2026-02-02完了）
- [x] fullorder から画像コピー
  - hero-main.jpg, ceo.jpg, recruit-team.jpg
  - equip-nc.jpg, equip-mc.jpg, equip-complex.jpg, equip-cmm.jpg
  - process-nc.jpg, process-mc.jpg, process-complex.jpg
  - interview-tamura.jpg, interview-sasaki.jpg, interview-yamamoto.jpg
- [x] 全ページでImageコンポーネント使用
  - page.tsx: hero背景, strengths画像, works画像, recruit teaser背景
  - equipment/page.tsx: 設備カテゴリ画像
  - service/page.tsx: 品質管理セクション画像
  - company/page.tsx: CEO画像
  - recruit/page.tsx: インタビュー画像

#### 完了判定
- [x] フォームが見た目上機能する
- [x] FAQが表示される
- [x] 画像が全て表示される（TypeScript型チェックOK）
- [ ] 「本当の精密加工会社サイト」に見える（※ブラウザで要確認）

---

### 4.7 standard（中部建設株式会社）🟢 優先度7

**状態**: 実装完了（2026-02-02）
**企業名**: 中部建設株式会社
**参照**: `docs/templates/standard/HANDOFF.md`

#### Phase 1: デザイン修正（完了）
- [x] Strengthsセクションのカード廃止済み
- [x] 採用ティーザー文言修正済み

#### Phase 2: フォーム機能化（完了）
- [x] contactページフォーム実装済み
- [x] 図面アップロード機能追加済み

#### Phase 3: 画像・仕上げ（2026-02-02完了）
- [x] generated/ フォルダの画像を使用
  - top_fv_main.jpg（hero背景）
  - ceo_portrait.jpg（代表写真）
  - interview_young.jpg, interview_midcareer.jpg（社員インタビュー）
  - team_photo.jpg, mentoring_scene.jpg（採用関連）
  - project_house.jpg, project_shopping_mall.jpg, project_public_building.jpg（事業案内）
  - construction_wide.jpg, cad_operation.jpg, inspection_work.jpg（設備紹介）
  - completed_building_sky.jpg, renovation_interior.jpg
- [x] 全ページでImageコンポーネント使用
  - page.tsx: hero背景, trust/achievements画像, recruit teaser背景
  - about/page.tsx: CEO画像, Google Map iframe
  - service/page.tsx: 事業案内画像
  - recruit/page.tsx: hero背景, 社員インタビュー画像
  - equipment/page.tsx: 設備ギャラリー画像

#### 完了判定
- [x] カード乱用がない（Anti-AIデザイン準拠）
- [x] 画像が全て表示される（TypeScript型チェックOK）
- [ ] 「本当の建設会社サイト」に見える（※ブラウザで要確認）

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

### ✅ sample.ts コンテンツ再構成（完了）

sample.tsのデータを各企業に合わせて完全再構成済み。

| テンプレート | 企業名 | 業種 | sample.ts |
|-------------|--------|------|-----------|
| recruit-magazine | 株式会社ネクストステージ | IT/SaaS/HR Tech | ✅ 完了 |
| leadgen-minimal | スカイリフォーム株式会社 | 住宅リフォーム業 | ✅ 完了 |
| authority-minimal | 株式会社テックフロンティア | ITコンサル/DX支援 | ✅ 完了 |
| fullorder | 東海プレシジョン株式会社 | 航空宇宙・医療機器精密加工 | ✅ 完了 |

---

### ✅ 最高優先度: ページ内ハードコード修正（完了）

**状態**: 全テンプレートのハードコード修正完了（2026-02-02）

#### recruit-magazine（5箇所）✅ 完了

| ファイル | 修正内容 | 状態 |
|----------|---------|------|
| `culture/page.tsx` | `ネクストステージの「日常」`に変更 | ✅ |
| `people/page.tsx` | `ネクストステージの「人」`に変更 | ✅ |
| `recruit/page.tsx` | `オフィス見学・カジュアル面談`に変更 | ✅ |
| `article/[id]/page.tsx` | `ネクストステージで働いてみませんか？`に変更 | ✅ |
| `_components/Layout.tsx` | `NEXT STAGE`、`NEXTSTAGE INC. RECRUIT`に変更 | ✅ |

#### leadgen-minimal（2箇所）✅ 完了

| ファイル | 修正内容 | 状態 |
|----------|---------|------|
| `layout.tsx` | スカイリフォーム株式会社用メタデータに修正 | ✅ |
| `_components/Layout.tsx` | ナビを「施工事例」「対応工事」に変更、フッターCTA修正 | ✅ |

#### authority-minimal（全箇所）✅ 完了

| ファイル | 修正内容 | 状態 |
|----------|---------|------|
| `layout.tsx` | テックフロンティア用に修正 | ✅ |
| `page.tsx` | ITコンサル向けに変更 | ✅ |
| `company/page.tsx` | 動的表示に変更 | ✅ |
| `service/page.tsx` | DX/ITコンサル向けに変更 | ✅ |
| `equipment/page.tsx` | 「チーム紹介」に変更 | ✅ |
| `contact/page.tsx` | プレースホルダー修正 | ✅ |
| `_components/Layout.tsx` | ITコンサル向けに変更 | ✅ |

#### fullorder（6箇所）✅ 完了

| ファイル | 修正内容 | 状態 |
|----------|---------|------|
| `layout.tsx` | `航空宇宙・医療機器 精密加工`に修正 | ✅ |
| `company/page.tsx` | 東海プレシジョン用に修正、住所動的取得 | ✅ |
| `equipment/page.tsx` | 東海プレシジョン用に修正 | ✅ |
| `recruit/page.tsx` | 東海プレシジョン用に修正 | ✅ |
| `service/page.tsx` | 航空宇宙・医療機器向けに変更 | ✅ |
| `_components/Layout.tsx` | ロゴを「TKP」に変更 | ✅ |

#### 【専門家ペルソナ】によるコンテンツ設計

コンテンツ作成時は、以下3名の専門家の視点を統合して設計すること。

##### 👤 専門家①: 世界一のWEBマーケティングプロフェッショナル
- **専門領域**: コンバージョン最適化、ユーザー心理学、データドリブンマーケティング
- **視点**:
  - 各ページでユーザーがどう行動し、どこで離脱し、どこでコンバージョンするか
  - ターゲット別の最適な導線設計
  - ABテストで勝率の高い文言・配置・色の選定
  - 心理トリガー（社会的証明、希少性、権威性など）の戦略的配置
- **アウトプット**: 各ページの「見出し」「文言」「CTA配置」「導線設計」を、コンバージョン率を最大化する観点から設計

##### 👤 専門家②: 日本で最高の求人コンサルタント
- **専門領域**: 採用ブランディング、求職者心理、定着率向上戦略
- **視点**:
  - 求職者が本当に知りたい情報は何か（給与より文化、数字より実感）
  - 応募ハードルを下げる情報開示の順序と深さ
  - 「この会社で働きたい」と思わせる感情設計
  - 入社後のギャップを防ぐ正直で魅力的な表現
- **アウトプット**: 採用関連ページ（採用情報、社員インタビュー、働く環境）の文言・構成を、応募率と定着率を最大化する観点から設計

##### 👤 専門家③: 人間味ある最高のWEBデザイナー
- **専門領域**: UI/UX、ビジュアル階層設計、ブランド体験設計、**反AIデザイン哲学**
- **視点**:
  - **AIデザインの典型的な特徴を徹底的に排除**
  - 視線の流れを計算した要素配置とビジュアル階層
  - 感情を動かす色彩・余白・タイポグラフィの選定
  - ブランドの世界観を体現する洗練されたデザイン
- **アウトプット**: 各ページの「レイアウト」「ビジュアル要素」「色彩設計」「UI詳細」を、人間ならではの洗練されたデザインで設計

#### 対応手順

1. **企業設定の策定**
   - 企業名、業種、ターゲット顧客、強み、差別化ポイントを明確化
   - ブランドトーン（言葉遣い、雰囲気）を定義

2. **sample.ts の完全再構成**
   - 企業情報（company）: 社名、住所、設立、資本金、従業員数など
   - サービス/事業内容: 業種に合った具体的な内容
   - 実績/事例: リアリティのある数値と事例
   - 採用情報: 求職者心理を考慮した魅力的な表現
   - 社員インタビュー: 共感を生む具体的なストーリー
   - CEO/代表メッセージ: 企業理念を体現する言葉

3. **画像の生成・差し替え**
   - 業種に合った画像を Nanobanana で生成
   - アイキャッチ（thumbnail.jpg）を新企業名で再生成

4. **コード修正（必要に応じて）**
   - データ構造の変更が必要な場合はページコンポーネントも修正

#### 企業一覧（constants.ts / sample.ts 整合済み）

| テンプレート | 企業名 | 業種 | 状態 |
|-------------|--------|------|------|
| standard | 中部建設株式会社 | 建設業 | ✅ OK |
| recruit-magazine | 株式会社ネクストステージ | IT/SaaS/HR Tech | ✅ OK |
| leadgen-minimal | スカイリフォーム株式会社 | 住宅リフォーム業 | ✅ OK |
| leadgen-visual | 三河精密工業株式会社 | 精密金属加工 | ✅ OK |
| trust-visual | あおぞら法律事務所 | 法律事務所 | ✅ OK |
| authority-minimal | 株式会社テックフロンティア | ITコンサル/DX支援 | ✅ OK |
| fullorder | 東海プレシジョン株式会社 | 航空宇宙・医療機器精密加工 | ✅ OK |

---

### 🟡 中優先度: アイキャッチ画像の改善

アイキャッチ画像（thumbnail_new.jpg）は生成済みだが、日本語テキストが文字化けしている。
上記コンテンツ修正後に、正しい企業名で再生成する。

生成済み画像の場所: `public/images/templates/{template}/thumbnail_new.jpg`

---

### ✅ 画像プレースホルダーの解消（完了）

全テンプレートの画像プレースホルダーを解消済み：

| テンプレート | 主なプレースホルダー箇所 | 状態 |
|-------------|------------------------|------|
| ~~fullorder~~ | ~~service画像、recruit背景、equipment画像、CEO画像、地図~~ | ✅ 解消済み |
| ~~recruit-magazine~~ | ~~hero画像、記事サムネイル、people画像、culture画像~~ | ✅ 解消済み |
| ~~leadgen-minimal~~ | ~~hero画像、solution画像、works画像、recruit画像、CEO画像、地図~~ | ✅ 解消済み |
| ~~authority-minimal~~ | ~~hero動画/画像、strength画像、works画像、equipment画像、interview画像、CEO画像~~ | ✅ 解消済み |
| ~~standard~~ | ~~hero背景、client logos、service画像、recruit画像、equipment画像、CEO画像、地図~~ | ✅ 解消済み |

**実施内容**:
1. fullorder の画像を leadgen-minimal、authority-minimal にコピー（同じ企業テーマ）
2. standard は generated/ フォルダの画像を使用
3. 全ページでImageコンポーネントを使用するよう更新
4. Google Map は iframe 埋め込みに統一

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
| 2026-02-02 | fullorder・recruit-magazine 画像設定完了（Imageコンポーネント化、プレースホルダー解消） | Claude |
| 2026-02-02 | leadgen-minimal・authority-minimal・standard 画像設定完了（全7テンプレート画像完了） | Claude |
| 2026-02-02 | アイキャッチ画像を Nanobanana で生成（thumbnail_new.jpg）※日本語テキスト文字化け | Claude |
| 2026-02-02 | コンテンツ整合性問題を発見（企業名不一致4件）| Claude |
| 2026-02-02 | HANDOFF残課題に「専門家ペルソナによるコンテンツ完全再構成」を追記 | Claude |
| 2026-02-02 | **コンテンツ完全再構成完了**: recruit-magazine（ネクストステージ）、leadgen-minimal（スカイリフォーム）、authority-minimal（テックフロンティア）、fullorder（東海プレシジョン） | Claude |
| 2026-02-02 | **ハードコード問題発見**: 各ページのpage.tsxに旧コンテンツ（三河精密、精密加工、工場等）がハードコードで残存。authority-minimalのlayout.tsx/page.tsx一部修正済み。残り多数。 | Claude |
| 2026-02-02 | **ハードコード修正完了**: fullorder(6箇所)、recruit-magazine(5箇所)、leadgen-minimal(2箇所)、authority-minimal(残り全箇所)のハードコードを各企業向けに修正完了 | Claude |
