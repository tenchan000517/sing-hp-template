"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Search,
  Filter,
  ChevronDown,
  ChevronRight,
  Copy,
  Check,
  FileCode,
  Palette,
  Layout,
  Sparkles,
  Smartphone,
  Settings,
  Globe,
  Navigation,
  X,
  Menu,
  Home,
  BookOpen,
  FolderOpen,
  Terminal,
  GitBranch,
  AlertCircle,
} from "lucide-react";
import {
  manualCases,
  categoryLabels,
  templateLabels,
  type Category,
  type TemplateType,
  type ManualCase,
} from "@/data/manual/cases";

const categoryIcons: Record<Category, React.ReactNode> = {
  layout: <Layout className="w-4 h-4" />,
  style: <Palette className="w-4 h-4" />,
  content: <FileCode className="w-4 h-4" />,
  animation: <Sparkles className="w-4 h-4" />,
  responsive: <Smartphone className="w-4 h-4" />,
  function: <Settings className="w-4 h-4" />,
  seo: <Globe className="w-4 h-4" />,
  navigation: <Navigation className="w-4 h-4" />,
};

const categoryColors: Record<Category, string> = {
  layout: "bg-blue-100 text-blue-700 border-blue-200",
  style: "bg-purple-100 text-purple-700 border-purple-200",
  content: "bg-green-100 text-green-700 border-green-200",
  animation: "bg-yellow-100 text-yellow-700 border-yellow-200",
  responsive: "bg-pink-100 text-pink-700 border-pink-200",
  function: "bg-orange-100 text-orange-700 border-orange-200",
  seo: "bg-cyan-100 text-cyan-700 border-cyan-200",
  navigation: "bg-indigo-100 text-indigo-700 border-indigo-200",
};

// カードヘッダーの背景色
const categoryHeaderBg: Record<Category, string> = {
  layout: "bg-blue-500",
  style: "bg-purple-500",
  content: "bg-green-500",
  animation: "bg-yellow-500",
  responsive: "bg-pink-500",
  function: "bg-orange-500",
  seo: "bg-cyan-500",
  navigation: "bg-indigo-500",
};

const templateColors: Record<TemplateType, string> = {
  all: "bg-gray-100 text-gray-700",
  top: "bg-slate-100 text-slate-700",
  "story-type": "bg-green-100 text-green-700",
  "data-driven": "bg-blue-100 text-blue-700",
  visual: "bg-purple-100 text-purple-700",
  simple: "bg-gray-100 text-gray-700",
  "qa-type": "bg-emerald-100 text-emerald-700",
};

function CaseCard({ caseItem }: { caseItem: ManualCase }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(caseItem.instruction);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow bg-white"
    >
      {/* カラーヘッダー */}
      <div className={`${categoryHeaderBg[caseItem.category]} px-4 py-2 flex items-center justify-between`}>
        <div className="flex items-center gap-2 text-white text-sm font-medium">
          {categoryIcons[caseItem.category]}
          <span>{categoryLabels[caseItem.category]}</span>
        </div>
        <span className="text-xs text-white/80 bg-white/20 px-2 py-0.5 rounded">
          {templateLabels[caseItem.template]}
        </span>
      </div>
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full text-left p-4 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
      >
        <div className="flex items-start justify-between gap-3">
          <div className="flex-1 min-w-0">
            <h3 className="text-base font-semibold text-gray-900 mb-1">
              {caseItem.title}
            </h3>
            <p className="text-sm text-gray-500 line-clamp-2">{caseItem.description}</p>
          </div>
          <div className="flex-shrink-0">
            {isExpanded ? (
              <ChevronDown className="w-5 h-5 text-gray-400" />
            ) : (
              <ChevronRight className="w-5 h-5 text-gray-400" />
            )}
          </div>
        </div>
      </button>

      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden"
          >
            <div className="px-5 pb-5 border-t border-gray-100 pt-4">
              {/* 対象ファイル */}
              <div className="mb-4">
                <h4 className="text-sm font-semibold text-gray-700 mb-2 flex items-center gap-2">
                  <FileCode className="w-4 h-4" />
                  対象ファイル
                </h4>
                <div className="flex flex-wrap gap-2">
                  {caseItem.targetFiles.map((file, index) => (
                    <code
                      key={index}
                      className="px-2 py-1 bg-gray-100 rounded text-xs text-gray-700 font-mono"
                    >
                      {file}
                    </code>
                  ))}
                </div>
              </div>

              {/* Claude Codeへの指示 */}
              <div className="mb-4">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="text-sm font-semibold text-gray-700 flex items-center gap-2">
                    <BookOpen className="w-4 h-4" />
                    Claude Codeへの指示
                  </h4>
                  <button
                    onClick={handleCopy}
                    className="flex items-center gap-1 px-2 py-1 text-xs text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded transition-colors"
                  >
                    {copied ? (
                      <>
                        <Check className="w-3 h-3 text-green-500" />
                        コピー済み
                      </>
                    ) : (
                      <>
                        <Copy className="w-3 h-3" />
                        コピー
                      </>
                    )}
                  </button>
                </div>
                <pre className="p-4 bg-gray-900 text-gray-100 rounded-lg overflow-x-auto text-sm font-mono whitespace-pre-wrap">
                  {caseItem.instruction}
                </pre>
              </div>

              {/* 注意点 */}
              {caseItem.notes && caseItem.notes.length > 0 && (
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-700 mb-2">
                    注意点
                  </h4>
                  <ul className="list-disc list-inside space-y-1">
                    {caseItem.notes.map((note, index) => (
                      <li key={index} className="text-sm text-gray-600">
                        {note}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* タグ */}
              <div className="flex flex-wrap gap-1">
                {caseItem.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="px-2 py-0.5 bg-gray-100 text-gray-500 rounded text-xs"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

// はじめにセクションのコンポーネント
function GettingStartedSection() {
  return (
    <div className="space-y-6">
      {/* 重要な注意事項 */}
      <div className="bg-amber-50 border border-amber-200 rounded-xl p-5">
        <div className="flex items-start gap-3">
          <AlertCircle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
          <div>
            <h3 className="font-semibold text-amber-800 mb-2">作業前の注意</h3>
            <ul className="text-sm text-amber-700 space-y-1">
              <li>・作業開始前に必ず <code className="bg-amber-100 px-1 rounded">git pull</code> を実行してください</li>
              <li>・作業完了後は必ずコミット＆プッシュしてください</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Step 1: VS Code起動 */}
      <div className="bg-white rounded-xl border border-gray-200 p-5">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold">1</div>
          <h3 className="font-semibold text-gray-900">VS Codeでプロジェクトを開く</h3>
        </div>
        <div className="space-y-3 text-sm text-gray-600">
          <div className="flex items-start gap-3">
            <FolderOpen className="w-5 h-5 text-gray-400 flex-shrink-0 mt-0.5" />
            <div>
              <p className="font-medium text-gray-800">VS Codeを起動</p>
              <p>アプリケーションからVS Codeを開きます</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <FolderOpen className="w-5 h-5 text-gray-400 flex-shrink-0 mt-0.5" />
            <div>
              <p className="font-medium text-gray-800">File → Open Folder を選択</p>
              <p>メニューバーから「File」→「Open Folder...」をクリック</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <FolderOpen className="w-5 h-5 text-gray-400 flex-shrink-0 mt-0.5" />
            <div>
              <p className="font-medium text-gray-800">sing-hp-template フォルダを選択</p>
              <p>プロジェクトのフォルダを選んで「開く」をクリック</p>
            </div>
          </div>
        </div>
      </div>

      {/* Step 2: ターミナル起動 */}
      <div className="bg-white rounded-xl border border-gray-200 p-5">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold">2</div>
          <h3 className="font-semibold text-gray-900">ターミナルを開いてClaude Codeを起動</h3>
        </div>
        <div className="space-y-3 text-sm text-gray-600">
          <div className="flex items-start gap-3">
            <Terminal className="w-5 h-5 text-gray-400 flex-shrink-0 mt-0.5" />
            <div>
              <p className="font-medium text-gray-800">ターミナルを開く</p>
              <p>メニューの「Terminal」→「New Terminal」または <kbd className="px-2 py-0.5 bg-gray-100 rounded text-xs">Ctrl + `</kbd></p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <Terminal className="w-5 h-5 text-gray-400 flex-shrink-0 mt-0.5" />
            <div>
              <p className="font-medium text-gray-800">Claude Codeを起動</p>
              <pre className="mt-2 p-3 bg-gray-900 text-gray-100 rounded-lg overflow-x-auto">claude</pre>
            </div>
          </div>
        </div>
      </div>

      {/* Step 3: 作業前のプル */}
      <div className="bg-white rounded-xl border border-gray-200 p-5">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center text-green-600 font-bold">3</div>
          <h3 className="font-semibold text-gray-900">作業前：最新の状態に更新（Pull）</h3>
        </div>
        <div className="space-y-3 text-sm text-gray-600">
          <div className="flex items-start gap-3">
            <GitBranch className="w-5 h-5 text-gray-400 flex-shrink-0 mt-0.5" />
            <div>
              <p className="font-medium text-gray-800">Claude Codeに指示</p>
              <pre className="mt-2 p-3 bg-gray-900 text-gray-100 rounded-lg overflow-x-auto">git pull してください</pre>
              <p className="mt-2 text-gray-500">※他の人の変更を取り込んでから作業を開始します</p>
            </div>
          </div>
        </div>
      </div>

      {/* Step 4: 作業後のコミット＆プッシュ */}
      <div className="bg-white rounded-xl border border-gray-200 p-5">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center text-green-600 font-bold">4</div>
          <h3 className="font-semibold text-gray-900">作業後：変更を保存（Commit & Push）</h3>
        </div>
        <div className="space-y-3 text-sm text-gray-600">
          <div className="flex items-start gap-3">
            <GitBranch className="w-5 h-5 text-gray-400 flex-shrink-0 mt-0.5" />
            <div>
              <p className="font-medium text-gray-800">Claude Codeに指示</p>
              <pre className="mt-2 p-3 bg-gray-900 text-gray-100 rounded-lg overflow-x-auto">コミットしてプッシュしてください</pre>
              <p className="mt-2 text-gray-500">※Claude Codeが変更内容を確認し、適切なコミットメッセージで保存・共有します</p>
            </div>
          </div>
        </div>
      </div>

      {/* 作業の流れまとめ */}
      <div className="bg-blue-50 border border-blue-200 rounded-xl p-5">
        <h3 className="font-semibold text-blue-800 mb-3">作業の流れまとめ</h3>
        <div className="flex flex-wrap items-center gap-2 text-sm">
          <span className="px-3 py-1 bg-white rounded-full text-blue-700 border border-blue-200">VS Code起動</span>
          <span className="text-blue-400">→</span>
          <span className="px-3 py-1 bg-white rounded-full text-blue-700 border border-blue-200">フォルダを開く</span>
          <span className="text-blue-400">→</span>
          <span className="px-3 py-1 bg-white rounded-full text-blue-700 border border-blue-200">ターミナル</span>
          <span className="text-blue-400">→</span>
          <span className="px-3 py-1 bg-white rounded-full text-blue-700 border border-blue-200">claude</span>
          <span className="text-blue-400">→</span>
          <span className="px-3 py-1 bg-white rounded-full text-green-700 border border-green-200">git pull</span>
          <span className="text-blue-400">→</span>
          <span className="px-3 py-1 bg-white rounded-full text-purple-700 border border-purple-200">作業</span>
          <span className="text-blue-400">→</span>
          <span className="px-3 py-1 bg-white rounded-full text-green-700 border border-green-200">commit & push</span>
        </div>
      </div>
    </div>
  );
}

export default function ManualPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<Category | "all">(
    "all"
  );
  const [selectedTemplate, setSelectedTemplate] = useState<
    TemplateType | "all"
  >("all");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [showGettingStarted, setShowGettingStarted] = useState(false);

  const filteredCases = useMemo(() => {
    return manualCases.filter((caseItem) => {
      // 検索クエリでフィルタ
      const searchLower = searchQuery.toLowerCase();
      const matchesSearch =
        searchQuery === "" ||
        caseItem.title.toLowerCase().includes(searchLower) ||
        caseItem.description.toLowerCase().includes(searchLower) ||
        caseItem.tags.some((tag) => tag.toLowerCase().includes(searchLower)) ||
        caseItem.instruction.toLowerCase().includes(searchLower);

      // カテゴリでフィルタ
      const matchesCategory =
        selectedCategory === "all" || caseItem.category === selectedCategory;

      // テンプレートでフィルタ
      const matchesTemplate =
        selectedTemplate === "all" ||
        caseItem.template === selectedTemplate ||
        caseItem.template === "all";

      return matchesSearch && matchesCategory && matchesTemplate;
    });
  }, [searchQuery, selectedCategory, selectedTemplate]);

  // カテゴリごとのケース数をカウント
  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = { all: manualCases.length };
    Object.keys(categoryLabels).forEach((cat) => {
      counts[cat] = manualCases.filter((c) => c.category === cat).length;
    });
    return counts;
  }, []);

  // テンプレートごとのケース数をカウント
  const templateCounts = useMemo(() => {
    const counts: Record<string, number> = { all: manualCases.length };
    Object.keys(templateLabels).forEach((temp) => {
      counts[temp] = manualCases.filter(
        (c) => c.template === temp || c.template === "all"
      ).length;
    });
    return counts;
  }, []);

  return (
    <div className="flex min-h-screen">
      {/* モバイルサイドバートグル */}
      <button
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        className="lg:hidden fixed bottom-4 right-4 z-50 p-3 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700 transition-colors"
      >
        {isSidebarOpen ? (
          <X className="w-6 h-6" />
        ) : (
          <Filter className="w-6 h-6" />
        )}
      </button>

      {/* オーバーレイ（モバイル） */}
      {isSidebarOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black/50 z-30"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* サイドバー */}
      <aside
        className={`fixed lg:sticky top-0 left-0 h-screen w-72 bg-white border-r border-gray-200 overflow-y-auto z-40 transition-transform lg:translate-x-0 ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="p-5">
          {/* ロゴ・タイトル */}
          <a
            href="/"
            className="flex items-center gap-2 mb-6 text-gray-600 hover:text-gray-900"
          >
            <Home className="w-4 h-4" />
            <span className="text-sm">テンプレート一覧へ戻る</span>
          </a>

          <h1 className="text-xl font-bold text-gray-900 mb-1">修正マニュアル</h1>
          <p className="text-sm text-gray-500 mb-6">
            Claude Codeへの指示ガイド
          </p>

          {/* はじめにボタン */}
          <div className="mb-6">
            <button
              onClick={() => setShowGettingStarted(true)}
              className={`w-full flex items-center gap-2 px-3 py-3 rounded-lg text-sm font-medium transition-colors ${
                showGettingStarted
                  ? "bg-green-100 text-green-700 border border-green-200"
                  : "bg-green-50 text-green-700 hover:bg-green-100 border border-green-100"
              }`}
            >
              <BookOpen className="w-4 h-4" />
              はじめに（作業手順）
            </button>
          </div>

          {/* カテゴリフィルター */}
          <div className="mb-6">
            <h2 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">
              カテゴリ
            </h2>
            <div className="space-y-1">
              <button
                onClick={() => { setSelectedCategory("all"); setShowGettingStarted(false); }}
                className={`w-full flex items-center justify-between px-3 py-2 rounded-lg text-sm transition-colors ${
                  selectedCategory === "all" && !showGettingStarted
                    ? "bg-blue-50 text-blue-700 font-medium"
                    : "text-gray-600 hover:bg-gray-100"
                }`}
              >
                <span>すべて</span>
                <span className="text-xs text-gray-400">
                  {categoryCounts.all}
                </span>
              </button>
              {(Object.keys(categoryLabels) as Category[]).map((category) => (
                <button
                  key={category}
                  onClick={() => {
                    setSelectedCategory("all");
                    setShowGettingStarted(false);
                    setIsSidebarOpen(false);
                    // スクロール
                    setTimeout(() => {
                      const el = document.getElementById(`category-${category}`);
                      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
                    }, 100);
                  }}
                  className="w-full flex items-center justify-between px-3 py-2 rounded-lg text-sm transition-colors text-gray-600 hover:bg-gray-100"
                >
                  <span className="flex items-center gap-2">
                    {categoryIcons[category]}
                    {categoryLabels[category]}
                  </span>
                  <span className="text-xs text-gray-400">
                    {categoryCounts[category]}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* テンプレートフィルター */}
          <div className="mb-6">
            <h2 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">
              テンプレート
            </h2>
            <div className="space-y-1">
              <button
                onClick={() => { setSelectedTemplate("all"); setShowGettingStarted(false); }}
                className={`w-full flex items-center justify-between px-3 py-2 rounded-lg text-sm transition-colors ${
                  selectedTemplate === "all" && !showGettingStarted
                    ? "bg-blue-50 text-blue-700 font-medium"
                    : "text-gray-600 hover:bg-gray-100"
                }`}
              >
                <span>すべて</span>
                <span className="text-xs text-gray-400">
                  {templateCounts.all}
                </span>
              </button>
              {(Object.keys(templateLabels) as TemplateType[]).map(
                (template) => (
                  <button
                    key={template}
                    onClick={() => { setSelectedTemplate(template); setShowGettingStarted(false); }}
                    className={`w-full flex items-center justify-between px-3 py-2 rounded-lg text-sm transition-colors ${
                      selectedTemplate === template
                        ? "bg-blue-50 text-blue-700 font-medium"
                        : "text-gray-600 hover:bg-gray-100"
                    }`}
                  >
                    <span>{templateLabels[template]}</span>
                    <span className="text-xs text-gray-400">
                      {templateCounts[template]}
                    </span>
                  </button>
                )
              )}
            </div>
          </div>
        </div>
      </aside>

      {/* メインコンテンツ */}
      <main className="flex-1 lg:ml-0">
        {/* ヘッダー */}
        <header className="sticky top-0 z-20 bg-white border-b border-gray-200 px-4 lg:px-8 py-4">
          <div className="max-w-4xl mx-auto">
            {/* 検索ボックス */}
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="キーワードで検索... (例: ヒーロー、色、フォント、画像)"
                value={searchQuery}
                onChange={(e) => { setSearchQuery(e.target.value); setShowGettingStarted(false); }}
                className="w-full pl-12 pr-4 py-3 bg-gray-100 border-0 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  <X className="w-5 h-5" />
                </button>
              )}
            </div>

            {/* フィルター状態表示 */}
            {(selectedCategory !== "all" ||
              selectedTemplate !== "all" ||
              searchQuery) && (
              <div className="flex flex-wrap items-center gap-2 mt-3">
                <span className="text-sm text-gray-500">フィルター:</span>
                {selectedCategory !== "all" && (
                  <span
                    className={`inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs ${categoryColors[selectedCategory]}`}
                  >
                    {categoryIcons[selectedCategory]}
                    {categoryLabels[selectedCategory]}
                    <button
                      onClick={() => setSelectedCategory("all")}
                      className="ml-1 hover:opacity-70"
                    >
                      <X className="w-3 h-3" />
                    </button>
                  </span>
                )}
                {selectedTemplate !== "all" && (
                  <span
                    className={`inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs ${templateColors[selectedTemplate]}`}
                  >
                    {templateLabels[selectedTemplate]}
                    <button
                      onClick={() => setSelectedTemplate("all")}
                      className="ml-1 hover:opacity-70"
                    >
                      <X className="w-3 h-3" />
                    </button>
                  </span>
                )}
                {searchQuery && (
                  <span className="inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs bg-gray-100 text-gray-700">
                    検索: {searchQuery}
                    <button
                      onClick={() => setSearchQuery("")}
                      className="ml-1 hover:opacity-70"
                    >
                      <X className="w-3 h-3" />
                    </button>
                  </span>
                )}
                <button
                  onClick={() => {
                    setSelectedCategory("all");
                    setSelectedTemplate("all");
                    setSearchQuery("");
                  }}
                  className="text-xs text-blue-600 hover:text-blue-800"
                >
                  すべてクリア
                </button>
              </div>
            )}
          </div>
        </header>

        {/* メインコンテンツエリア */}
        <div className="p-4 lg:p-8">
          <div className="max-w-7xl mx-auto">
            {showGettingStarted ? (
              /* はじめにセクション */
              <>
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-2xl font-bold text-gray-900">はじめに（作業手順）</h2>
                  <button
                    onClick={() => setShowGettingStarted(false)}
                    className="text-sm text-blue-600 hover:text-blue-800"
                  >
                    ケース一覧に戻る
                  </button>
                </div>
                <GettingStartedSection />
              </>
            ) : (
              /* ケースリスト */
              <>
                {/* 結果件数 */}
                <p className="text-sm text-gray-500 mb-6">
                  {filteredCases.length}件のケースが見つかりました
                </p>

                {/* カテゴリごとにグループ化して表示 */}
                {selectedCategory === "all" ? (
                  /* 全カテゴリ表示時はカテゴリごとにセクション分け */
                  (Object.keys(categoryLabels) as Category[]).map((category) => {
                    const categoryItems = filteredCases.filter(c => c.category === category);
                    if (categoryItems.length === 0) return null;
                    return (
                      <div key={category} id={`category-${category}`} className="mb-10 scroll-mt-20">
                        <div className={`flex items-center gap-2 mb-4 pb-2 border-b-2 ${categoryColors[category].split(' ')[0].replace('bg-', 'border-')}`}>
                          {categoryIcons[category]}
                          <h2 className="text-lg font-bold text-gray-800">
                            {categoryLabels[category]}
                          </h2>
                          <span className="text-sm text-gray-500">({categoryItems.length})</span>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
                          <AnimatePresence mode="popLayout">
                            {categoryItems.map((caseItem) => (
                              <CaseCard key={caseItem.id} caseItem={caseItem} />
                            ))}
                          </AnimatePresence>
                        </div>
                      </div>
                    );
                  })
                ) : (
                  /* 特定カテゴリ選択時は2カラムグリッド */
                  <div id={`category-${selectedCategory}`} className="scroll-mt-20">
                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
                      <AnimatePresence mode="popLayout">
                        {filteredCases.map((caseItem) => (
                          <CaseCard key={caseItem.id} caseItem={caseItem} />
                        ))}
                      </AnimatePresence>
                    </div>
                  </div>
                )}

                {/* 結果なし */}
                {filteredCases.length === 0 && (
                  <div className="text-center py-16">
                    <Search className="w-12 h-12 text-gray-300 mx-auto mb-4" />
                    <h3 className="text-lg font-semibold text-gray-700 mb-2">
                      該当するケースが見つかりません
                    </h3>
                    <p className="text-gray-500 mb-4">
                      検索条件を変更してお試しください
                    </p>
                    <button
                      onClick={() => {
                        setSelectedCategory("all");
                        setSelectedTemplate("all");
                        setSearchQuery("");
                      }}
                      className="text-blue-600 hover:text-blue-800 font-medium"
                    >
                      フィルターをクリア
                    </button>
                  </div>
                )}
              </>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
