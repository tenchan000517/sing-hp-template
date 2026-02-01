import { notFound } from "next/navigation";
import Link from "next/link";
import { Header, Footer } from "../../_components/Layout";
import { articles } from "@/data/recruit-magazine/sample";

// 記事タイプ定義
type ArticleContent = {
  lead: string;
  sections: {
    heading: string;
    text: string;
  }[];
  profile?: {
    name: string;
    position: string;
    joinYear: string;
    message: string;
  };
  schedule?: {
    time: string;
    activity: string;
  }[];
};

type Article = {
  id: number;
  category: string;
  title: string;
  excerpt: string;
  image: string;
  tags: string[];
  date: string;
  content?: ArticleContent;
};

export function generateStaticParams() {
  return articles.map((article) => ({
    id: String(article.id),
  }));
}

export function generateMetadata({ params }: { params: { id: string } }) {
  const article = articles.find((a) => a.id === Number(params.id)) as Article | undefined;
  if (!article) {
    return { title: "記事が見つかりません" };
  }
  return {
    title: article.title.replace(/\n/g, " "),
    description: article.excerpt,
  };
}

// 関連記事取得
function getRelatedArticles(currentId: number, category: string) {
  return articles
    .filter((a) => a.id !== currentId && a.category === category)
    .slice(0, 2);
}

export default function ArticlePage({ params }: { params: { id: string } }) {
  const article = articles.find((a) => a.id === Number(params.id)) as Article | undefined;

  if (!article) {
    notFound();
  }

  const relatedArticles = getRelatedArticles(article.id, article.category);

  return (
    <div className="min-h-screen bg-[var(--color-bg-base)]">
      <Header />

      <main className="pt-20">
        {/* ヒーローイメージ */}
        <section className="relative h-[60vh] min-h-[400px] bg-gray-200">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${article.image})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-8 md:p-16">
            <div className="container mx-auto">
              <span className="inline-block bg-[var(--color-accent)] text-white text-xs font-bold tracking-widest px-4 py-2 mb-6">
                {article.category}
              </span>
              <h1 className="text-3xl md:text-5xl font-bold text-white leading-tight whitespace-pre-line max-w-3xl">
                {article.title}
              </h1>
              <p className="text-white/80 mt-4 text-sm">{article.date}</p>
            </div>
          </div>
        </section>

        {/* 記事本文 */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto">
              {/* タグ */}
              <div className="flex flex-wrap gap-2 mb-8">
                {article.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs bg-gray-100 text-gray-600 px-3 py-1"
                  >
                    #{tag}
                  </span>
                ))}
              </div>

              {/* リード文 */}
              {article.content?.lead && (
                <p className="text-xl md:text-2xl leading-relaxed text-gray-800 mb-12 font-medium">
                  {article.content.lead}
                </p>
              )}

              {/* 本文セクション */}
              {article.content?.sections ? (
                <div className="space-y-12">
                  {article.content.sections.map((section, idx) => (
                    <div key={idx}>
                      <h2 className="text-2xl font-bold text-[var(--color-primary)] mb-4 border-l-4 border-[var(--color-accent)] pl-4">
                        {section.heading}
                      </h2>
                      <p className="text-gray-700 leading-loose whitespace-pre-line">
                        {section.text}
                      </p>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="prose prose-lg max-w-none">
                  <p className="text-gray-700 leading-loose">{article.excerpt}</p>
                  <p className="text-gray-500 mt-8 text-center">
                    記事の続きは現在準備中です。
                  </p>
                </div>
              )}

              {/* プロフィール */}
              {article.content?.profile && (
                <div className="mt-16 bg-gray-50 p-8">
                  <h3 className="text-sm font-bold tracking-widest text-gray-500 mb-4">PROFILE</h3>
                  <div className="flex items-start gap-6">
                    <div className="w-20 h-20 bg-gray-300 rounded-full flex-shrink-0" />
                    <div>
                      <p className="font-bold text-xl">{article.content.profile.name}</p>
                      <p className="text-sm text-gray-500 mb-3">
                        {article.content.profile.position} / {article.content.profile.joinYear}
                      </p>
                      <p className="text-gray-700 text-sm leading-relaxed">
                        {article.content.profile.message}
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {/* 1日のスケジュール */}
              {article.content?.schedule && (
                <div className="mt-12 bg-[var(--color-primary)] text-white p-8">
                  <h3 className="text-sm font-bold tracking-widest mb-6">ONE DAY SCHEDULE</h3>
                  <div className="space-y-4">
                    {article.content.schedule.map((item, idx) => (
                      <div key={idx} className="flex items-center gap-6 border-b border-white/10 pb-4 last:border-0">
                        <span className="text-[var(--color-accent)] font-bold w-16">{item.time}</span>
                        <span className="text-white/90">{item.activity}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-[var(--color-accent)]">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              三河精密で働いてみませんか？
            </h2>
            <p className="text-white/90 mb-8">
              工場見学・カジュアル面談、随時受付中。
            </p>
            <Link
              href="/templates/recruit-magazine/entry"
              className="inline-block bg-white text-[var(--color-primary)] px-8 py-4 font-bold tracking-widest hover:bg-gray-100 transition-colors"
            >
              ENTRY
            </Link>
          </div>
        </section>

        {/* 関連記事 */}
        {relatedArticles.length > 0 && (
          <section className="py-16 md:py-24 bg-gray-50">
            <div className="container mx-auto px-6">
              <h2 className="text-2xl font-bold text-center mb-12 tracking-widest">
                RELATED ARTICLES
              </h2>
              <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                {relatedArticles.map((related) => (
                  <Link
                    key={related.id}
                    href={`/templates/recruit-magazine/article/${related.id}`}
                    className="group"
                  >
                    <div className="aspect-[16/9] bg-gray-200 mb-4 overflow-hidden">
                      <div
                        className="w-full h-full bg-cover bg-center transition-transform group-hover:scale-105"
                        style={{ backgroundImage: `url(${related.image})` }}
                      />
                    </div>
                    <span className="text-xs font-bold tracking-widest text-[var(--color-accent)]">
                      {related.category}
                    </span>
                    <h3 className="font-bold mt-2 group-hover:text-[var(--color-accent)] transition-colors whitespace-pre-line">
                      {related.title}
                    </h3>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* 全記事へ戻る */}
        <section className="py-12 border-t">
          <div className="container mx-auto px-6 text-center">
            <Link
              href="/templates/recruit-magazine"
              className="inline-flex items-center gap-2 text-[var(--color-primary)] font-bold tracking-widest hover:text-[var(--color-accent)] transition-colors"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              ALL ARTICLES
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
