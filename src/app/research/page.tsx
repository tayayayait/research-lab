import { Metadata } from "next";
import { ResearchCard } from "@/components/ui/Card";
import Button from "@/components/ui/Button";

export const metadata: Metadata = {
    title: "연구 - AI 연구소",
    description: "AI 안전성, 자연어 처리, 머신러닝 분야의 최신 논문을 살펴보세요.",
};

// Sample research data
const allResearch = [
    {
        category: "AI 안전성",
        date: "2026년 1월",
        title: "Constitutional AI: AI 피드백을 통한 안전한 학습 방법론",
        abstract: "인간 피드백을 원칙적으로 활용하여 유익하고, 해롭지 않으며, 정직한 AI 어시스턴트를 훈련하는 Constitutional AI(CAI) 방법을 개발했습니다.",
        authors: ["김민수 박사", "이지영 박사", "박준혁 박사"],
        href: "/research/constitutional-ai",
    },
    {
        category: "자연어 처리",
        date: "2025년 12월",
        title: "Chain of Thought를 활용한 대규모 언어모델 추론 연구",
        abstract: "Chain of Thought 프롬프팅이 대규모 언어모델에서 복잡한 추론 능력을 어떻게 가능하게 하는지 다양한 벤치마크를 통해 연구했습니다.",
        authors: ["최수현 박사", "정하늘 박사"],
        href: "/research/chain-of-thought",
    },
    {
        category: "머신러닝",
        date: "2025년 11월",
        title: "Transformer 모델의 효율적인 학습 방법론",
        abstract: "모델 성능을 유지하면서 학습 시 필요한 계산량을 줄이는 새로운 기법들을 제시합니다.",
        authors: ["한도윤 박사", "윤서아 박사", "강민재 박사"],
        href: "/research/efficient-training",
    },
    {
        category: "AI 안전성",
        date: "2025년 10월",
        title: "Sleeper Agents: 안전 학습을 우회하는 기만적 LLM 연구",
        abstract: "안전 학습을 통해서도 지속되는 기만적 행동을 보이도록 LLM을 훈련할 수 있음을 보여주며, 중요한 안전 문제를 제기합니다.",
        authors: ["김민수 박사", "박준혁 박사"],
        href: "/research/sleeper-agents",
    },
    {
        category: "자연어 처리",
        date: "2025년 9월",
        title: "한국어 언어모델의 다국어 이해 능력 연구",
        abstract: "한국어 언어모델이 다국어 이해 및 코드 스위칭 상황을 어떻게 처리하는지에 대한 종합적인 연구입니다.",
        authors: ["이지영 박사", "최수현 박사", "정하늘 박사"],
        href: "/research/multilingual-korean",
    },
    {
        category: "머신러닝",
        date: "2025년 8월",
        title: "신경망 언어모델의 스케일링 법칙",
        abstract: "모델 크기, 데이터셋 크기, 계산량의 함수로서 언어모델 성능에 대한 경험적 스케일링 법칙을 연구합니다.",
        authors: ["한도윤 박사", "강민재 박사"],
        href: "/research/scaling-laws",
    },
];

const categories = ["전체", "AI 안전성", "자연어 처리", "머신러닝"];

export default function ResearchPage() {
    return (
        <>
            {/* Hero */}
            <section className="py-32 md:py-40 bg-gradient-to-b from-[var(--warm-cream)] to-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.05)_0%,transparent_70%)] pointer-events-none" />
                <div className="container-main relative">
                    <div className="max-w-3xl">
                        <p className="text-caption uppercase tracking-wider mb-4 font-semibold text-[var(--ai-blue)]">연구 자료실</p>
                        <h1 className="text-h1 mb-6 text-[var(--deep-navy)]" style={{ fontFamily: 'var(--font-heading)' }}>
                            연구 성과
                        </h1>
                        <p className="text-body1 text-[var(--soft-gray)] text-xl leading-relaxed max-w-2xl">
                            AI 안전성, 자연어 처리, 머신러닝 분야의 최신 논문을 살펴보세요.
                            모든 논문은 다운로드 가능합니다.
                        </p>
                    </div>
                </div>
            </section>

            {/* Filters & Papers */}
            <section className="py-32 bg-white">
                <div className="container-main">
                    {/* Category Filters */}
                    <div className="flex flex-wrap gap-3 mb-16">
                        {categories.map((category) => (
                            <button
                                key={category}
                                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200
                  ${category === "전체"
                                        ? "bg-[var(--deep-navy)] text-white"
                                        : "bg-[var(--clean-gray)] text-[var(--soft-gray)] hover:bg-[var(--border-light)]"
                                    }`}
                            >
                                {category}
                            </button>
                        ))}
                    </div>

                    {/* Research Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {allResearch.map((paper, index) => (
                            <ResearchCard key={index} {...paper} />
                        ))}
                    </div>

                    {/* Pagination */}
                    <div className="flex justify-center items-center gap-2 mt-12">
                        <button className="w-10 h-10 rounded-lg flex items-center justify-center text-[var(--soft-gray)] hover:bg-[var(--clean-gray)] transition-colors">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                            </svg>
                        </button>
                        <button className="w-10 h-10 rounded-lg flex items-center justify-center bg-[var(--deep-navy)] text-white">1</button>
                        <button className="w-10 h-10 rounded-lg flex items-center justify-center text-[var(--soft-gray)] hover:bg-[var(--clean-gray)] transition-colors">2</button>
                        <button className="w-10 h-10 rounded-lg flex items-center justify-center text-[var(--soft-gray)] hover:bg-[var(--clean-gray)] transition-colors">3</button>
                        <button className="w-10 h-10 rounded-lg flex items-center justify-center text-[var(--soft-gray)] hover:bg-[var(--clean-gray)] transition-colors">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </button>
                    </div>
                </div>
            </section>
        </>
    );
}
