import Button from "@/components/ui/Button";
import { ResearchCard, TeamMemberCard } from "@/components/ui/Card";
import Interactive3DViewer from "@/components/ui/Interactive3DViewer";

// Sample data
const featuredResearch = [
  {
    category: "AI Safety",
    date: "JAN 2026",
    title: "Constitutional AI: Harmless Training via Principles",
    abstract: "We introduce a method for training a harmless AI assistant through self-improvement without human labels. The only human oversight is provided through a list of rules or principles.",
    authors: ["Minsu Kim", "Jiyoung Lee"],
    href: "/research/constitutional-ai",
    featured: true,
  },
  {
    category: "NLP",
    date: "DEC 2025",
    title: "Chain of Thought Reasoning in Large Scale Models",
    abstract: "Exploring how chain-of-thought prompting elicits reasoning in large language models.",
    authors: ["Suhyeon Choi", "Haneul Jung"],
    href: "/research/cot",
  },
  {
    category: "Efficiency",
    date: "NOV 2025",
    title: "Efficient Training of Transformer Models",
    abstract: "New techniques to reduce computational costs while maintaining model performance.",
    authors: ["Doyun Han", "Seoa Yoon"],
    href: "/research/efficient",
  },
  {
    category: "Multimodal",
    date: "OCT 2025",
    title: "Unified Vision-Language Architectures",
    abstract: "A single model architecture that handles both text and image generation tasks seamlessly.",
    authors: ["Minjae Kang", "Jimin Park"],
    href: "/research/multimodal",
  }
];

const teamPreview = [
  {
    name: "Dr. Kim",
    position: "Director",
    bio: "AI Safety expert. Ph.D. from Stanford. Leading the research lab since 2024.",
  },
  {
    name: "Dr. Lee",
    position: "Principal Researcher",
    bio: "Specializing in NLP and Multimodal AI. Previously at Google DeepMind.",
  },
  {
    name: "Dr. Park",
    position: "Senior Researcher",
    bio: "Reinforcement Learning specialist. KAIST AI Ph.D. Focus on Alignment.",
  },
  {
    name: "Dr. Choi",
    position: "Researcher",
    bio: "Computer Vision and Generative Models. Researching diffusion models.",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-[var(--color-bg-base)] overflow-x-hidden selection:bg-[var(--color-brand-highlight)] selection:text-white">

      {/* 1. Hero Section (Immersive & Impactful) */}
      <section className="relative min-h-[92vh] flex items-center justify-center pt-24 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute top-0 right-0 w-[50vw] h-[50vh] bg-[radial-gradient(circle_at_center,rgba(240,82,156,0.06)_0%,transparent_70%)] blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[60vw] h-[60vh] bg-[radial-gradient(circle_at_center,rgba(0,100,224,0.04)_0%,transparent_70%)] blur-3xl pointer-events-none" />

        <div className="container-premium relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Typography Content */}
          <div className="col-span-12 lg:col-span-7 animate-enter">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[var(--color-brand-primary)]/10 bg-white/50 backdrop-blur-sm mb-8 text-sm font-bold text-[var(--color-brand-primary)] animate-enter delay-100 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-[var(--color-brand-highlight)] animate-pulse" />
              Building Safe & Beneficial AGI
            </div>

            <h1 className="text-display mb-8 text-[var(--color-text-main)] tracking-tight">
              Accelerating<br />
              <span className="bg-gradient-to-r from-[var(--color-brand-highlight)] via-[#9C27B0] to-[var(--color-brand-accent)] bg-clip-text text-transparent">
                AI Research
              </span><br />
              for Humanity
            </h1>

            <p className="text-body-lg text-[var(--color-text-sub)] mb-10 max-w-2xl leading-relaxed animate-enter delay-200">
              우리는 인공지능의 최전선을 연구하며,<br className="hidden md:block" />
              인류에게 유익하고 안전한 일반 인공지능(AGI)을 구축합니다.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 animate-enter delay-300">
              <Button size="lg" className="shadow-[var(--shadow-glow)] hover:shadow-[0_0_60px_rgba(240,82,156,0.4)]">
                Our Research
              </Button>
              <Button variant="secondary" size="lg" className="bg-white/60 backdrop-blur-sm border border-[var(--color-brand-primary)]/10 hover:bg-white text-[var(--color-text-main)]">
                Meet the Team
              </Button>
            </div>
          </div>

          {/* 3D Visual (Integrated) */}
          <div className="col-span-12 lg:col-span-5 relative h-[450px] lg:h-[650px] w-full animate-enter delay-400">
            <div className="absolute inset-0 bg-gradient-to-tr from-[var(--color-brand-highlight)]/15 to-[var(--color-brand-accent)]/15 rounded-full blur-[80px] scale-75" />
            <div className="relative w-full h-full scale-110 lg:translate-x-10">
              <Interactive3DViewer
                src="/images/ai-research-hero.png"
                alt="Abstract AI Visualization"
                className="w-full h-full object-contain drop-shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 2. Research Section (Masonry-style Grid) */}
      <section className="py-[var(--spacing-section)] bg-[var(--color-bg-subtle)] relative">
        <div className="container-premium">
          <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-4">
            <div>
              <p className="text-sm font-bold uppercase tracking-widest text-[var(--color-brand-accent)] mb-3">Breakthroughs</p>
              <h2 className="text-h1 text-[var(--color-text-main)]">Latest Research</h2>
            </div>
            <Button variant="link" className="text-lg group">
              View all Publications
              <span className="inline-block transition-transform group-hover:translate-x-1">→</span>
            </Button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Featured Card (Large) */}
            <div className="col-span-12 lg:col-span-7 h-full">
              <ResearchCard {...featuredResearch[0]} />
            </div>

            {/* Secondary Cards (Vertical Stack) */}
            <div className="col-span-12 lg:col-span-5 flex flex-col gap-8">
              {featuredResearch.slice(1, 4).map((paper, idx) => (
                <div key={idx} className="flex-1">
                  <ResearchCard {...paper} featured={false} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 3. Team Section (Horizontal Scroll) */}
      <section className="py-[var(--spacing-section)] bg-[var(--color-bg-base)] overflow-hidden">
        <div className="container-premium mb-12">
          <p className="text-sm font-bold uppercase tracking-widest text-[var(--color-brand-highlight)] mb-3">People</p>
          <h2 className="text-h1 mb-6">World-class Researchers</h2>
          <p className="text-body-lg text-[var(--color-text-sub)] max-w-2xl">
            스탠포드, MIT, 구글 딥마인드 출신의 연구진들이 모여<br />
            가장 어려운 AI 난제들에 도전하고 있습니다.
          </p>
        </div>

        {/* Horizontal Scroll Container */}
        <div className="pl-[max(24px,calc((100vw-1320px)/2))] overflow-x-auto pb-16 pt-4 no-scrollbar flex gap-6 pr-24 snap-x">
          {teamPreview.map((member, idx) => (
            <div key={idx} className="min-w-[300px] md:min-w-[360px] snap-center">
              <TeamMemberCard {...member} />
            </div>
          ))}
          {/* Join Us Card */}
          <div className="min-w-[300px] md:min-w-[360px] snap-center">
            <div className="h-full bg-[var(--color-brand-primary)] rounded-[var(--radius-card)] p-10 flex flex-col justify-center items-center text-center text-white relative overflow-hidden group border border-[var(--color-border)]">
              <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-brand-highlight)] to-[var(--color-brand-accent)] opacity-0 group-hover:opacity-20 transition-opacity duration-500" />
              <h3 className="text-h2 mb-4 font-display text-white">Join Us</h3>
              <p className="text-white/80 mb-8 leading-relaxed">
                We are looking for exceptional talent to join our mission.
              </p>
              <Button className="bg-white text-[var(--color-brand-primary)] hover:bg-white/90 border-0">
                View Openings
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
