# テンプレート5: インタラクティブ型「体験できる採用サイト」

## コンセプト

クイズやシミュレーションなど、ユーザー参加型のコンテンツで企業との相性を確認できるテンプレート。
エンゲージメントを高め、ミスマッチを減らす。

## 適合する企業特性

- ITやテック企業
- ユニークな採用を行いたい企業
- ミスマッチを減らしたい企業
- 先進的な企業イメージを打ち出したい企業
- 若年層（Z世代）をターゲットにした採用

## テーマカラー

```css
--color-primary: #E65100;  /* オレンジ - 活力・挑戦 */
--color-accent: #00BCD4;   /* シアン */
```

---

## サイト構造

| ページ | パス | 概要 |
|--------|------|------|
| HOME | `/templates/interactive` | インタラクティブ要素の紹介 |
| 適性診断 | `/templates/interactive/quiz` | 相性診断クイズ |
| 職種マッチング | `/templates/interactive/matching` | スキル→職種提案 |
| 1日体験シミュレーター | `/templates/interactive/simulator` | 仕事体験 |
| 給与シミュレーター | `/templates/interactive/salary` | 年収シミュレーション |
| 会社を知る | `/templates/interactive/about` | 通常の会社紹介 |
| 応募する | `/templates/interactive/apply` | フォーム |

---

## コア機能設計

### 機能1: 適性診断クイズ

**目的**: 企業文化との相性を診断し、マッチング率を表示

**フロー**:
```
開始 → 質問（5-10問）→ 結果表示 → 詳細解説 → 応募へ誘導
```

**実装例**:

```typescript
// 質問データ構造
interface Question {
  id: number;
  question: string;
  options: {
    text: string;
    scores: {
      culture: number;      // 文化への適性
      teamwork: number;     // チームワーク
      challenge: number;    // 挑戦志向
      worklife: number;     // ワークライフバランス
    };
  }[];
}

// 質問例
const questions: Question[] = [
  {
    id: 1,
    question: "チームで仕事をする時、あなたはどのタイプ？",
    options: [
      { text: "リーダーシップを取りたい", scores: { culture: 3, teamwork: 4, challenge: 4, worklife: 2 } },
      { text: "サポート役が得意", scores: { culture: 4, teamwork: 5, challenge: 2, worklife: 3 } },
      { text: "一人で黙々と進めたい", scores: { culture: 2, teamwork: 2, challenge: 3, worklife: 4 } },
      { text: "状況に応じて変える", scores: { culture: 4, teamwork: 4, challenge: 3, worklife: 3 } },
    ],
  },
  // ...
];
```

**コンポーネント構成**:

```tsx
// QuizContainer.tsx
const [currentQuestion, setCurrentQuestion] = useState(0);
const [answers, setAnswers] = useState<number[]>([]);
const [result, setResult] = useState<QuizResult | null>(null);

// 進捗バー
<div className="w-full bg-gray-200 rounded-full h-2 mb-8">
  <motion.div
    className="bg-primary h-2 rounded-full"
    initial={{ width: 0 }}
    animate={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
  />
</div>

// 質問カード
<AnimatePresence mode="wait">
  <motion.div
    key={currentQuestion}
    initial={{ opacity: 0, x: 50 }}
    animate={{ opacity: 1, x: 0 }}
    exit={{ opacity: 0, x: -50 }}
  >
    <h2 className="text-2xl font-bold mb-6">{question.question}</h2>
    <div className="space-y-4">
      {question.options.map((option, index) => (
        <button
          key={index}
          onClick={() => handleAnswer(index)}
          className="w-full p-4 text-left border rounded-lg hover:border-primary transition-colors"
        >
          {option.text}
        </button>
      ))}
    </div>
  </motion.div>
</AnimatePresence>
```

**結果表示**:

```tsx
// QuizResult.tsx
<div className="text-center">
  <motion.div
    initial={{ scale: 0 }}
    animate={{ scale: 1 }}
    className="text-6xl font-bold text-primary mb-4"
  >
    {result.matchRate}%
  </motion.div>
  <h2 className="text-2xl font-bold mb-2">マッチ度</h2>
  <p className="text-gray-600 mb-8">{result.message}</p>

  {/* レーダーチャート */}
  <RadarChart data={result.scores} />

  {/* おすすめ職種 */}
  <div className="mt-8">
    <h3 className="text-lg font-bold mb-4">あなたにおすすめの職種</h3>
    {result.recommendedJobs.map((job) => (
      <JobCard key={job.id} job={job} />
    ))}
  </div>
</div>
```

---

### 機能2: 職種マッチング

**目的**: スキルや経験を入力すると、最適な職種を提案

**フロー**:
```
スキル選択 → 経験年数入力 → 希望条件入力 → マッチング結果
```

**実装例**:

```tsx
// スキル選択（タグ形式）
const [selectedSkills, setSelectedSkills] = useState<string[]>([]);

<div className="flex flex-wrap gap-2">
  {skills.map((skill) => (
    <button
      key={skill}
      onClick={() => toggleSkill(skill)}
      className={`px-4 py-2 rounded-full border transition-colors ${
        selectedSkills.includes(skill)
          ? "bg-primary text-white border-primary"
          : "border-gray-300 hover:border-primary"
      }`}
    >
      {skill}
    </button>
  ))}
</div>

// マッチング結果
const matchedJobs = useMemo(() => {
  return jobs
    .map((job) => ({
      ...job,
      matchScore: calculateMatchScore(job, selectedSkills, experience, preferences),
    }))
    .sort((a, b) => b.matchScore - a.matchScore);
}, [selectedSkills, experience, preferences]);
```

---

### 機能3: 1日体験シミュレーター

**目的**: 職種ごとの1日をインタラクティブに体験

**フロー**:
```
職種選択 → 時間軸で選択肢を提示 → 選んだ内容でストーリー分岐 → 1日の振り返り
```

**実装例**:

```typescript
// シナリオデータ構造
interface Scenario {
  time: string;
  situation: string;
  choices: {
    text: string;
    result: string;
    nextScenario: number | "end";
    feedback: "positive" | "neutral" | "negative";
  }[];
}

// シナリオ例
const scenarios: Scenario[] = [
  {
    time: "09:00",
    situation: "朝礼が終わりました。今日のタスクは3つあります。どれから始めますか？",
    choices: [
      {
        text: "緊急度の高いタスクAから",
        result: "優先順位をつけて効率的に進められました！",
        nextScenario: 2,
        feedback: "positive",
      },
      {
        text: "簡単なタスクCから",
        result: "小さな達成感を得られましたが、タスクAが後回しに...",
        nextScenario: 3,
        feedback: "neutral",
      },
    ],
  },
  // ...
];
```

**コンポーネント**:

```tsx
// SimulatorScene.tsx
<div className="max-w-2xl mx-auto">
  <div className="bg-primary text-white px-4 py-2 rounded-t-lg">
    <span className="text-2xl font-bold">{scenario.time}</span>
  </div>
  <div className="bg-white p-6 rounded-b-lg shadow-lg">
    <p className="text-lg mb-6">{scenario.situation}</p>
    <div className="space-y-3">
      {scenario.choices.map((choice, index) => (
        <motion.button
          key={index}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => handleChoice(choice)}
          className="w-full p-4 text-left border rounded-lg hover:border-primary transition-colors"
        >
          {choice.text}
        </motion.button>
      ))}
    </div>
  </div>
</div>
```

---

### 機能4: 給与シミュレーター

**目的**: 経験やスキルを入力して、想定年収を計算

**実装例**:

```tsx
// SalarySimulator.tsx
const [inputs, setInputs] = useState({
  experience: 0,
  skills: [],
  certifications: [],
  position: "",
});

const estimatedSalary = useMemo(() => {
  const base = 250000; // 基本給
  const experienceBonus = inputs.experience * 15000;
  const skillBonus = inputs.skills.length * 10000;
  const certBonus = inputs.certifications.length * 5000;
  const positionMultiplier = positionMultipliers[inputs.position] || 1;

  return Math.round((base + experienceBonus + skillBonus + certBonus) * positionMultiplier);
}, [inputs]);

// 表示
<div className="text-center py-12 bg-gradient-to-br from-primary to-accent text-white rounded-xl">
  <p className="text-sm opacity-80 mb-2">あなたの想定年収</p>
  <motion.p
    key={estimatedSalary}
    initial={{ scale: 0.5, opacity: 0 }}
    animate={{ scale: 1, opacity: 1 }}
    className="text-5xl font-bold"
  >
    {(estimatedSalary * 12).toLocaleString()}円
  </motion.p>
  <p className="text-sm opacity-80 mt-2">（月給 {estimatedSalary.toLocaleString()}円 × 12ヶ月）</p>
</div>
```

---

## コンポーネント一覧

| コンポーネント | 説明 | 複雑さ |
|---------------|------|--------|
| `QuizContainer` | 診断クイズ全体 | 高 |
| `QuizQuestion` | 質問カード | 中 |
| `QuizResult` | 結果表示 | 中 |
| `RadarChart` | レーダーチャート | 中 |
| `SkillSelector` | スキル選択UI | 中 |
| `MatchingResult` | マッチング結果 | 中 |
| `SimulatorScene` | シミュレーターシーン | 高 |
| `SalaryCalculator` | 給与計算 | 中 |
| `ProgressIndicator` | 進捗表示 | 低 |

---

## 必要ライブラリ

```bash
# レーダーチャート用
npm install recharts

# アニメーション（既存）
# framer-motion

# 状態管理（複雑な場合）
npm install zustand
# または
npm install jotai
```

---

## データ永続化

### LocalStorageでの保存

```typescript
// 診断結果を保存
const saveResult = (result: QuizResult) => {
  localStorage.setItem("quiz_result", JSON.stringify(result));
  localStorage.setItem("quiz_date", new Date().toISOString());
};

// 結果を読み込み
const loadResult = (): QuizResult | null => {
  const saved = localStorage.getItem("quiz_result");
  return saved ? JSON.parse(saved) : null;
};
```

### 応募フォームへの連携

```tsx
// 応募フォームで診断結果を自動入力
const quizResult = loadResult();

<input
  type="hidden"
  name="quiz_match_rate"
  value={quizResult?.matchRate || ""}
/>
<input
  type="hidden"
  name="recommended_job"
  value={quizResult?.recommendedJobs[0]?.id || ""}
/>
```

---

## サンプルデータ構造

```typescript
// src/data/interactive/sample.ts

export const quizQuestions: Question[] = [
  {
    id: 1,
    question: "あなたの仕事スタイルは？",
    options: [
      { text: "計画的にコツコツ進める", scores: {...} },
      { text: "締め切り直前に集中する", scores: {...} },
      // ...
    ],
  },
  // 5-10問
];

export const skills = [
  "JavaScript", "TypeScript", "React", "Vue", "Node.js",
  "Python", "Java", "Go", "AWS", "Docker",
  "デザイン", "マーケティング", "営業", "マネジメント",
];

export const simulatorScenarios: { [jobId: string]: Scenario[] } = {
  engineer: [...],
  designer: [...],
  sales: [...],
};

export const salaryConfig = {
  baseByPosition: {
    engineer: 280000,
    designer: 260000,
    sales: 250000,
  },
  experienceMultiplier: 15000,
  skillBonus: 10000,
  certificationBonus: {
    "基本情報技術者": 5000,
    "応用情報技術者": 10000,
    // ...
  },
};
```

---

## 実装優先順位

1. 適性診断クイズ（メイン機能）
2. 結果表示 + レーダーチャート
3. HOMEページ
4. 職種マッチング
5. 給与シミュレーター
6. 1日体験シミュレーター（最も複雑）

---

## ゲーミフィケーション要素

### バッジ・実績

```typescript
const achievements = [
  { id: "first_quiz", name: "初めての診断", icon: "🎯" },
  { id: "perfect_match", name: "相性90%以上", icon: "⭐" },
  { id: "all_scenarios", name: "全シナリオクリア", icon: "🏆" },
];
```

### プログレスバー

```tsx
// サイト全体の閲覧進捗
const progress = calculateProgress(visitedPages, totalPages);

<div className="fixed bottom-0 left-0 right-0 h-1 bg-gray-200">
  <div
    className="h-full bg-primary transition-all duration-500"
    style={{ width: `${progress}%` }}
  />
</div>
```

---

## 企業向けヒアリング項目

- [ ] 求める人物像（診断ロジックに反映）
- [ ] 各職種に必要なスキル・経験
- [ ] 給与テーブル（シミュレーター用）
- [ ] 実際の1日の流れ（シミュレーター用）
- [ ] 文化や価値観のキーワード
- [ ] 診断結果のパターン数（3-5パターン推奨）
