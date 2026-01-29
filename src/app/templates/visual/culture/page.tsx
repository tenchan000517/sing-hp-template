import { Metadata } from "next";
import Image from "next/image";
import FadeIn from "@/components/animations/FadeIn";
import VideoInterview from "@/components/templates/visual/VideoInterview";
import { company, events, members } from "@/data/visual/sample";

export const metadata: Metadata = {
  title: "CULTURE",
  description: `${company.name}の社風・文化を紹介。イベント、1日密着、座談会の様子をお届けします。`,
};

export default function CulturePage() {
  // 座談会用に3名の社員を選出
  const discussionMembers = members.slice(0, 3);

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-primary-dark)] py-20 text-white">
        <div className="container mx-auto px-4 text-center">
          <span className="mb-4 block text-sm font-medium uppercase tracking-widest opacity-80">
            CULTURE
          </span>
          <h1 className="text-3xl font-bold md:text-4xl">カルチャー</h1>
          <p className="mt-4 text-lg opacity-90">
            私たちの社風を写真と動画でお届けします
          </p>
        </div>
      </section>

      {/* Events Timeline */}
      <section className="bg-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <FadeIn direction="up">
            <h2 className="mb-12 text-center text-2xl font-bold">
              年間イベント
            </h2>
          </FadeIn>

          <div className="mx-auto max-w-4xl">
            {events.map((event, index) => (
              <FadeIn
                key={event.month}
                direction={index % 2 === 0 ? "left" : "right"}
                delay={index * 0.1}
              >
                <div
                  className={`mb-12 flex flex-col gap-6 md:flex-row ${
                    index % 2 === 0 ? "" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Content */}
                  <div className="flex-1">
                    <div
                      className={`${
                        index % 2 === 0 ? "md:text-right md:pr-8" : "md:pl-8"
                      }`}
                    >
                      <span className="inline-block rounded-full bg-[var(--color-primary)] px-4 py-1 text-sm font-medium text-white">
                        {event.month}
                      </span>
                      <h3 className="mt-3 text-xl font-bold">{event.name}</h3>
                      <p className="mt-2 text-[var(--color-text-secondary)]">
                        {event.description}
                      </p>
                    </div>
                  </div>

                  {/* Photos */}
                  <div className="flex flex-1 gap-2">
                    {event.photos.slice(0, 2).map((photo, photoIndex) => (
                      <div
                        key={photoIndex}
                        className="flex-1 overflow-hidden rounded-lg"
                      >
                        <Image
                          src={photo}
                          alt={`${event.name}の様子`}
                          width={400}
                          height={300}
                          className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* 1日密着動画 */}
      <VideoInterview
        title="1日密着動画"
        posterImage="/images/templates/visual/daily-poster.jpg"
      />

      {/* 座談会 */}
      <section className="bg-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <FadeIn direction="up">
            <h2 className="mb-4 text-center text-2xl font-bold">社員座談会</h2>
            <p className="mb-12 text-center text-[var(--color-text-secondary)]">
              テーマ：「この会社の好きなところ」
            </p>
          </FadeIn>

          <div className="mx-auto max-w-3xl space-y-8">
            {/* 参加者紹介 */}
            <FadeIn direction="up">
              <div className="mb-8 flex justify-center gap-4">
                {discussionMembers.map((member) => (
                  <div key={member.id} className="text-center">
                    <div className="mx-auto mb-2 h-16 w-16 overflow-hidden rounded-full">
                      <Image
                        src={member.photo}
                        alt={member.name}
                        width={64}
                        height={64}
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <p className="text-sm font-medium">{member.name}</p>
                    <p className="text-xs text-[var(--color-text-muted)]">
                      {member.position}
                    </p>
                  </div>
                ))}
              </div>
            </FadeIn>

            {/* 対話形式 */}
            <div className="space-y-6">
              <FadeIn direction="left">
                <div className="flex gap-4">
                  <div className="h-12 w-12 flex-shrink-0 overflow-hidden rounded-full">
                    <Image
                      src={discussionMembers[0].photo}
                      alt={discussionMembers[0].name}
                      width={48}
                      height={48}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="flex-1 rounded-2xl rounded-tl-none bg-[var(--color-bg-secondary)] p-4">
                    <p className="mb-1 text-sm font-medium text-[var(--color-primary)]">
                      {discussionMembers[0].name}
                    </p>
                    <p className="text-[var(--color-text-secondary)]">
                      私が好きなのは、失敗を責めない文化ですね。新しいことに挑戦しやすいです。クリエイティブな仕事だからこそ、チャレンジを応援してくれる環境は大事だと思います。
                    </p>
                  </div>
                </div>
              </FadeIn>

              <FadeIn direction="right">
                <div className="flex flex-row-reverse gap-4">
                  <div className="h-12 w-12 flex-shrink-0 overflow-hidden rounded-full">
                    <Image
                      src={discussionMembers[1].photo}
                      alt={discussionMembers[1].name}
                      width={48}
                      height={48}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="flex-1 rounded-2xl rounded-tr-none bg-[var(--color-primary)]/10 p-4">
                    <p className="mb-1 text-right text-sm font-medium text-[var(--color-primary)]">
                      {discussionMembers[1].name}
                    </p>
                    <p className="text-right text-[var(--color-text-secondary)]">
                      わかります！先輩たちが優しいんですよね。分からないことも気軽に聞けます。後輩の意見も真剣に聞いてくれるので、成長できる環境だと思います。
                    </p>
                  </div>
                </div>
              </FadeIn>

              <FadeIn direction="left">
                <div className="flex gap-4">
                  <div className="h-12 w-12 flex-shrink-0 overflow-hidden rounded-full">
                    <Image
                      src={discussionMembers[2].photo}
                      alt={discussionMembers[2].name}
                      width={48}
                      height={48}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="flex-1 rounded-2xl rounded-tl-none bg-[var(--color-bg-secondary)] p-4">
                    <p className="mb-1 text-sm font-medium text-[var(--color-primary)]">
                      {discussionMembers[2].name}
                    </p>
                    <p className="text-[var(--color-text-secondary)]">
                      新卒で入社しましたが、最初から責任ある仕事を任せてもらえて驚きました。もちろんサポートはしてくれますが、自分で考えて動く力が身につきます。
                    </p>
                  </div>
                </div>
              </FadeIn>

              <FadeIn direction="right">
                <div className="flex flex-row-reverse gap-4">
                  <div className="h-12 w-12 flex-shrink-0 overflow-hidden rounded-full">
                    <Image
                      src={discussionMembers[0].photo}
                      alt={discussionMembers[0].name}
                      width={48}
                      height={48}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="flex-1 rounded-2xl rounded-tr-none bg-[var(--color-primary)]/10 p-4">
                    <p className="mb-1 text-right text-sm font-medium text-[var(--color-primary)]">
                      {discussionMembers[0].name}
                    </p>
                    <p className="text-right text-[var(--color-text-secondary)]">
                      あとは、イベントが楽しいですよね。BBQや社員旅行など、仕事以外でも交流できる機会が多いので、チームワークが自然と良くなります。
                    </p>
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
