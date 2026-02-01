
import Link from 'next/link';
import Image from 'next/image';
import { Header, Footer } from '../_components/Layout';
import { recruit } from '@/data/standard/sample';

const jobs = [
    {
        title: "機械加工スタッフ（NC旋盤・マシニング）",
        salary: "月給 220,000円 〜 350,000円",
        location: "本社工場（愛知県岡崎市）",
        description: "自動車部品の精密加工。プログラム作成から段取り、加工までお任せします。"
    },
    {
        title: "品質管理・検査",
        salary: "月給 200,000円 〜 300,000円",
        location: "本社工場（愛知県岡崎市）",
        description: "三次元測定機などを使用した製品の寸法検査、品質データの管理。"
    },
    {
        title: "生産管理・営業事務",
        salary: "月給 190,000円 〜 280,000円",
        location: "本社（愛知県岡崎市）",
        description: "受注管理、納期調整、材料発注、見積書作成などの事務業務。"
    }
];

export default function RecruitPage() {
    return (
        <>
            <Header />
            <main className="pt-20">
                {/* Hero */}
                <section className="relative py-32 bg-[var(--color-primary-dark)] text-white overflow-hidden">
                    <div className="absolute inset-0 bg-black/50 z-10"></div>
                    <div className="absolute inset-0 z-0">
                        <Image
                            src="/images/templates/standard/generated/team_photo.jpg"
                            alt="採用情報"
                            fill
                            className="object-cover"
                        />
                    </div>
                    <div className="container mx-auto px-6 relative z-20 text-center max-w-3xl">
                        <h1 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
                            {recruit.message.title}
                        </h1>
                        <p className="text-lg opacity-90 leading-relaxed whitespace-pre-line">
                            {recruit.message.body}
                        </p>
                    </div>
                </section>

                {/* Stats */}
                <section className="py-20 bg-white">
                    <div className="container mx-auto px-6">
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                            {recruit.stats.map((stat, i) => (
                                <div key={i} className="text-center p-6 bg-gray-50 rounded">
                                    <p className="text-sm text-gray-500 mb-2 font-bold">{stat.label}</p>
                                    <p className="text-3xl font-bold text-[var(--color-primary)]">
                                        {stat.value}<span className="text-base font-normal text-gray-600">{stat.unit}</span>
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Members */}
                <section className="py-24 bg-[var(--color-bg-secondary)]">
                    <div className="container mx-auto px-6">
                        <h2 className="text-2xl font-bold mb-16 text-[var(--color-primary)] text-center">社員インタビュー</h2>
                        <div className="grid md:grid-cols-3 gap-12">
                            {recruit.members.map((member, idx) => {
                                const memberImages = [
                                    '/images/templates/standard/generated/interview_young.jpg',
                                    '/images/templates/standard/generated/interview_midcareer.jpg',
                                    '/images/templates/standard/generated/mentoring_scene.jpg'
                                ];
                                return (
                                <div key={idx} className="bg-white rounded overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                                    <div className="aspect-square relative">
                                        <Image
                                            src={memberImages[idx % memberImages.length]}
                                            alt={member.name}
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                    <div className="p-8">
                                        <p className="text-sm font-bold text-[var(--color-accent)] mb-2">{member.position}</p>
                                        <h3 className="text-xl font-bold mb-4 text-[var(--color-primary)]">{member.name}</h3>
                                        <p className="text-gray-600 leading-relaxed text-sm">
                                            "{member.message}"
                                        </p>
                                    </div>
                                </div>
                                );
                            })}
                        </div>
                    </div>
                </section>

                {/* Jobs */}
                <section className="py-24 bg-white">
                    <div className="container mx-auto px-6 max-w-4xl">
                        <h2 className="text-2xl font-bold mb-12 text-[var(--color-primary)] text-center">募集要項</h2>
                        <div className="space-y-6">
                            {jobs.map((job, idx) => (
                                <div key={idx} className="border border-gray-200 rounded p-6 hover:border-[var(--color-accent)] transition-colors cursor-pointer bg-white">
                                    <h3 className="text-xl font-bold text-[var(--color-primary)] mb-2">{job.title}</h3>
                                    <div className="flex flex-col md:flex-row gap-4 text-sm text-gray-600 mb-4">
                                        <span className="bg-[var(--color-bg-secondary)] px-3 py-1 rounded">給与: {job.salary}</span>
                                        <span className="bg-[var(--color-bg-secondary)] px-3 py-1 rounded">勤務地: {job.location}</span>
                                    </div>
                                    <p className="text-gray-600">
                                        {job.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Entry CTA */}
                <section className="py-24 bg-[var(--color-bg-secondary)] text-center">
                    <div className="container mx-auto px-6 max-w-2xl">
                        <h2 className="text-2xl font-bold mb-8 text-[var(--color-primary)]">まずは話を聞いてみませんか？</h2>
                        <p className="text-gray-600 mb-10">
                            「工場見学だけ」「カジュアル面談」も大歓迎です。<br />
                            まずは三河精密の工場の雰囲気を感じてください。
                        </p>
                        <Link
                            href="/templates/standard/contact"
                            className="inline-block bg-[var(--color-accent)] hover:bg-[var(--color-accent-light)] text-white px-12 py-4 rounded font-bold text-xl shadow-lg hover:shadow-xl transition-all"
                        >
                            エントリー・見学申し込み
                        </Link>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
