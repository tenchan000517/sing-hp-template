
import Link from 'next/link';
import Image from 'next/image';
import { Header, Footer } from '../_components/Layout';
import { recruitConcept, infographics, interviews, jobs } from '@/data/authority-minimal/sample';

export default function RecruitPage() {
    return (
        <>
            <Header />
            <main className="pt-20 bg-white min-h-screen">
                {/* Page Title & Hero */}
                <div className="bg-gray-900 text-white py-32 relative overflow-hidden">
                    <div className="absolute inset-0 opacity-30 bg-blue-900 mix-blend-multiply" />
                    <div className="container mx-auto px-6 relative z-10 text-center">
                        <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">{recruitConcept.catch}</h1>
                        <p className="opacity-90 text-lg max-w-2xl mx-auto leading-relaxed">{recruitConcept.text}</p>
                    </div>
                </div>

                {/* Section 2: Infographics */}
                <section className="py-24 bg-[var(--color-bg-secondary)]">
                    <div className="container mx-auto px-6">
                        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                            {infographics.map((info, i) => (
                                <div key={i} className="bg-white p-8 rounded-sm shadow-sm text-center card-hover">
                                    <div className="text-gray-500 font-bold mb-2 text-sm">{info.label}</div>
                                    <div className="text-[var(--color-accent)] font-bold mb-2 flex items-baseline justify-center gap-1">
                                        <span className="text-5xl">{info.value}</span>
                                        <span className="text-lg">{info.unit}</span>
                                    </div>
                                    <div className="text-xs text-gray-400">{info.description}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Section 3: Interviews */}
                <section className="py-24 bg-white">
                    <div className="container mx-auto px-6">
                        <h2 className="text-3xl font-bold text-[var(--color-primary)] mb-16 text-center">先輩社員の声</h2>
                        <div className="space-y-24">
                            {interviews.map((interview, index) => {
                                const interviewImages = [
                                    '/images/templates/authority-minimal/interview-tamura.jpg',
                                    '/images/templates/authority-minimal/interview-sasaki.jpg',
                                    '/images/templates/authority-minimal/interview-yamamoto.jpg'
                                ];
                                return (
                                <div key={interview.id} className={`flex flex-col md:flex-row gap-12 items-center ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
                                    <div className="w-full md:w-1/2 aspect-[4/3] relative rounded-sm overflow-hidden group">
                                        <Image
                                            src={interviewImages[index % interviewImages.length]}
                                            alt={interview.name}
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                    <div className="w-full md:w-1/2">
                                        <div className="flex items-center gap-4 mb-4">
                                            <span className="bg-[var(--color-bg-secondary)] px-3 py-1 text-sm font-bold text-[var(--color-primary)] rounded-full">
                                                {interview.role}
                                            </span>
                                            <span className="text-gray-500 text-sm">{interview.age} / {interview.background}</span>
                                        </div>
                                        <h3 className="text-2xl font-bold text-[var(--color-primary)] mb-6 leading-tigher">
                                            「{interview.catch}」
                                        </h3>
                                        <p className="text-gray-600 leading-relaxed text-lg">
                                            {interview.text}
                                        </p>
                                    </div>
                                </div>
                                );
                            })}
                        </div>
                    </div>
                </section>

                {/* Section 4: Jobs & Entry */}
                <section className="py-24 bg-[var(--color-bg-secondary)]" id="jobs">
                    <div className="container mx-auto px-6 max-w-5xl">
                        <h2 className="text-3xl font-bold text-[var(--color-primary)] mb-12 text-center">募集要項</h2>

                        <div className="grid md:grid-cols-2 gap-8 mb-16">
                            {jobs.map((job, i) => (
                                <div key={i} className="bg-white p-8 rounded-sm border-l-4 border-[var(--color-accent)] card-hover">
                                    <h3 className="text-xl font-bold text-[var(--color-primary)] mb-2">{job.title}</h3>
                                    <div className="text-sm text-[var(--color-accent)] font-bold mb-4">{job.type}</div>
                                    <div className="space-y-3 text-sm text-gray-600">
                                        <p className="flex justify-between border-b border-gray-100 pb-2">
                                            <span>給与</span>
                                            <span className="font-medium text-gray-900">{job.salary}</span>
                                        </p>
                                        <p>{job.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="text-center">
                            <Link
                                href="/templates/authority-minimal/contact?type=recruit"
                                className="inline-block bg-[var(--color-accent)] hover:bg-[var(--color-accent-light)] text-white text-2xl font-bold px-16 py-6 rounded-sm shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all"
                            >
                                応募フォームへ進む<span className="block text-sm font-normal opacity-80 mt-1">（1分で完了）</span>
                            </Link>
                            <p className="mt-8 text-gray-500">お電話でのご応募も受け付けております<br />0564-52-3456（採用担当：水野）</p>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
