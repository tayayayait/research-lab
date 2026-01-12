import React from 'react';
import { TeamMemberCard } from "@/components/ui/Card";

const teamMembers = [
    {
        name: "Dr. Kim",
        position: "Director",
        bio: "AI Safety expert. Ph.D. from Stanford. Leading the research lab since 2024. Focused on alignment theory and constitutional AI.",
    },
    {
        name: "Dr. Lee",
        position: "Principal Researcher",
        bio: "Specializing in NLP and Multimodal AI. Previously at Google DeepMind. Expert in large language model architectures.",
    },
    {
        name: "Dr. Park",
        position: "Senior Researcher",
        bio: "Reinforcement Learning specialist. KAIST AI Ph.D. Researching reward modeling and policy optimization.",
    },
    {
        name: "Dr. Choi",
        position: "Researcher",
        bio: "Computer Vision and Generative Models. Researching diffusion models and image synthesis.",
    },
    {
        name: "Sarah Jung",
        position: "Research Engineer",
        bio: "Building scalable training infrastructure. Expert in distributed systems and GPU optimization.",
    },
    {
        name: "David Chen",
        position: "Policy Researcher",
        bio: "Analyzing the societal impact of AI. Background in ethics and public policy.",
    },
    {
        name: "Minji Kim",
        position: "Research Scientist",
        bio: "Focusing on reasoning and math problem solving capabilities of LLMs.",
    },
    {
        name: "James Wilson",
        position: "Frontend Engineer",
        bio: "Creating immersive web experiences for AI demonstrations and visualization.",
    },
];

const values = [
    {
        icon: "🛡️",
        title: "Safety First",
        desc: "We prioritize safety in every step of our research process."
    },
    {
        icon: "🌍",
        title: "Global Impact",
        desc: "Our goal is to benefit all of humanity, not just a select few."
    },
    {
        icon: "🔓",
        title: "Open Science",
        desc: "We believe in sharing our knowledge and tools with the community."
    }
]

export default function AboutPage() {
    return (
        <div className="min-h-screen bg-[var(--color-bg-base)]">

            {/* 1. Hero Section */}
            <section className="relative pt-40 pb-20 overflow-hidden">
                <div className="absolute top-0 right-0 w-[60vw] h-[60vh] bg-[radial-gradient(circle_at_center,rgba(10,50,53,0.05)_0%,transparent_70%)] blur-3xl pointer-events-none" />

                <div className="container-premium relative z-10 text-center animate-enter">
                    <p className="text-sm font-bold uppercase tracking-widest text-[var(--color-brand-accent)] mb-6">Our Mission</p>
                    <h1 className="text-display mb-10 mx-auto max-w-4xl text-[var(--color-text-main)]">
                        Building AGI that is <br />
                        <span className="text-[var(--color-brand-highlight)]">Safe, Secure, and Beneficial</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-[var(--color-text-sub)] max-w-3xl mx-auto leading-relaxed">
                        우리는 인공지능이 인류 최고의 발명품이 될 것이라 믿습니다.<br />
                        하지만 그것은 안전하고 통제 가능할 때만 의미가 있습니다.
                    </p>
                </div>
            </section>

            {/* 2. Values Grid */}
            <section className="py-[var(--spacing-section)] bg-white relative">
                <div className="container-premium">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {values.map((value, idx) => (
                            <div key={idx} className="bg-[var(--color-bg-base)] p-10 rounded-[var(--radius-card)] text-center animate-enter" style={{ animationDelay: `${idx * 100}ms` }}>
                                <div className="text-6xl mb-6">{value.icon}</div>
                                <h3 className="text-2xl font-bold mb-4 font-display">{value.title}</h3>
                                <p className="text-[var(--color-text-sub)]">{value.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 3. Team Grid */}
            <section className="py-[var(--spacing-section)] bg-[var(--color-bg-base)]">
                <div className="container-premium">
                    <div className="mb-16">
                        <h2 className="text-h1 mb-6">Meet Our Team</h2>
                        <p className="text-body-lg text-[var(--color-text-sub)]">
                            다양한 배경을 가진 열정적인 연구자들이 모여있습니다.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                        {teamMembers.map((member, idx) => (
                            <div key={idx} className="animate-enter" style={{ animationDelay: `${idx * 50}ms` }}>
                                <TeamMemberCard {...member} />
                            </div>
                        ))}
                    </div>
                </div>
            </section>

        </div>
    );
}
