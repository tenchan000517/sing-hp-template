import { Metadata } from "next";
import VideoHero from "@/components/templates/visual/VideoHero";
import PhotoGrid from "@/components/templates/visual/PhotoGrid";
import KeywordSection from "@/components/templates/visual/KeywordSection";
import VideoInterview from "@/components/templates/visual/VideoInterview";
import CTABanner from "@/components/templates/visual/CTABanner";
import { company, keywords, galleryPhotos } from "@/data/visual/sample";

export const metadata: Metadata = {
  title: "HOME",
  description: `${company.name}の採用情報サイト。デザイン・映像制作のプロフェッショナルを募集しています。`,
};

export default function VisualHome() {
  // ホームページ用に写真を厳選（20枚程度）
  const homePhotos = galleryPhotos.slice(0, 20);

  return (
    <>
      {/* フルスクリーンビデオヒーロー */}
      <VideoHero
        mainCopy="ここで、はたらく。"
        posterImage="/images/templates/visual/hero-poster.jpg"
      />

      {/* フォトグリッド */}
      <PhotoGrid photos={homePhotos} columns={4} />

      {/* 3つのキーワード（パララックス） */}
      <KeywordSection keywords={keywords} />

      {/* 動画インタビューダイジェスト */}
      <VideoInterview
        title="社員の声"
        posterImage="/images/templates/visual/interview-poster.jpg"
      />

      {/* CTAバナー */}
      <CTABanner
        mainCopy="あなたも、私たちの仲間に。"
        subCopy="まずは募集職種をチェック"
        buttonText="募集職種を見る"
        buttonHref="/templates/visual/jobs"
      />
    </>
  );
}
