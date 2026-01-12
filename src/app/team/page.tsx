import { Metadata } from "next";
import { TeamMemberCard } from "@/components/ui/Card";

export const metadata: Metadata = {
    title: "팀 소개 - AI 연구소",
    description: "혁신적인 AI 연구를 이끄는 연구진을 소개합니다.",
};

// Team data
const leadership = [
    {
        name: "김민수",
        position: "소장 & 수석 연구원",
        bio: "AI 안전성 및 언어모델 전문가. Stanford 박사 졸업 후 연구소를 설립. 15년 이상의 AI 연구 경력 보유.",
    },
];

const researchers = [
    {
        name: "이지영",
        position: "책임 연구원",
        bio: "자연어 처리 및 멀티모달 AI 연구. NeurIPS, ICML, ACL 등 세계 최고 학회에 다수의 논문 발표.",
    },
    {
        name: "박준혁",
        position: "선임 연구원",
        bio: "강화학습 및 AI 정렬(Alignment) 연구. KAIST AI 대학원 박사 졸업.",
    },
    {
        name: "최수현",
        position: "선임 연구원",
        bio: "대규모 언어모델 효율화 연구. 모델 압축 및 추론 최적화 전문가.",
    },
    {
        name: "정하늘",
        position: "연구원",
        bio: "AI 윤리 및 공정성 연구. 책임 있는 AI 개발을 위한 가이드라인 수립에 기여.",
    },
    {
        name: "한도윤",
        position: "연구 엔지니어",
        bio: "대규모 분산 학습 시스템 설계 및 구현. GPU 클러스터 최적화 전문가.",
    },
    {
        name: "윤서아",
        position: "연구 엔지니어",
        bio: "MLOps 및 모델 배포 파이프라인 구축. 안정적인 AI 서비스 운영 경험 다수.",
    },
];

export default function TeamPage() {
    return (
        <>
            {/* Hero */}
            <section className="py-32 md:py-40 bg-gradient-to-b from-[var(--warm-cream)] to-white relative">
                <div className="container-main">
                    <div className="max-w-3xl">
                        <p className="text-caption uppercase tracking-wider mb-4 font-semibold text-[var(--ai-blue)]">우리 팀</p>
                        <h1 className="text-h1 mb-6 text-[var(--deep-navy)]" style={{ fontFamily: 'var(--font-heading)' }}>
                            연구진 소개
                        </h1>
                        <p className="text-body1 text-[var(--soft-gray)] text-xl leading-relaxed max-w-2xl">
                            인류의 이익을 위한 AI 발전에 헌신하는
                            다양한 분야의 연구자, 엔지니어, 과학자들을 소개합니다.
                        </p>
                    </div>
                </div>
            </section>

            {/* Leadership */}
            <section className="py-32 bg-white">
                <div className="container-main">
                    <h2 className="text-h2 mb-12" style={{ fontFamily: 'var(--font-heading)' }}>
                        연구소장
                    </h2>
                    <div className="max-w-sm">
                        {leadership.map((member, index) => (
                            <TeamMemberCard key={index} {...member} />
                        ))}
                    </div>
                </div>
            </section>

            {/* Research Team */}
            <section className="py-32 bg-[var(--background)]">
                <div className="container-main">
                    <h2 className="text-h2 mb-12" style={{ fontFamily: 'var(--font-heading)' }}>
                        연구팀
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {researchers.map((member, index) => (
                            <TeamMemberCard key={index} {...member} />
                        ))}
                    </div>
                </div>
            </section>

            {/* Join Us CTA */}
            <section className="py-32 bg-white">
                <div className="container-main text-center">
                    <h2 className="text-h2 mb-6" style={{ fontFamily: 'var(--font-heading)' }}>
                        함께하실 분을 찾습니다
                    </h2>
                    <p className="text-body1 text-[var(--soft-gray)] mb-8 max-w-xl mx-auto">
                        안전하고 유익한 AI를 만들겠다는 비전을 공유하는
                        재능 있는 연구자와 엔지니어를 항상 찾고 있습니다.
                    </p>
                    <a
                        href="/careers"
                        className="inline-flex items-center gap-2 px-6 py-3 bg-[var(--deep-navy)] text-white rounded-full font-medium hover:opacity-90 transition-opacity"
                    >
                        채용 공고 보기
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </a>
                </div>
            </section>
        </>
    );
}
