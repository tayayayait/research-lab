'use client';

import React, { useState } from 'react';
import { ResearchCard } from "@/components/ui/Card";

// Extended Sample Data
const allPublications = [
    {
        id: 1,
        category: "AI Safety",
        date: "JAN 2026",
        title: "Constitutional AI: Harmless Training via Principles",
        abstract: "We introduce a method for training a harmless AI assistant through self-improvement without human labels. The only human oversight is provided through a list of rules or principles.",
        authors: ["Minsu Kim", "Jiyoung Lee"],
        featured: true,
    },
    {
        id: 2,
        category: "NLP",
        date: "DEC 2025",
        title: "Chain of Thought Reasoning in Large Scale Models",
        abstract: "Exploring how chain-of-thought prompting elicits reasoning in large language models for complex problem solving tasks.",
        authors: ["Suhyeon Choi", "Haneul Jung"],
    },
    {
        id: 3,
        category: "Efficiency",
        date: "NOV 2025",
        title: "Efficient Training of Transformer Models",
        abstract: "New techniques to reduce computational costs while maintaining model performance through sparse attention mechanisms.",
        authors: ["Doyun Han", "Seoa Yoon"],
    },
    {
        id: 4,
        category: "Multimodal",
        date: "OCT 2025",
        title: "Unified Vision-Language Architectures",
        abstract: "A single model architecture that handles both text and image generation tasks seamlessly, achieving state-of-the-art results on standard benchmarks.",
        authors: ["Minjae Kang", "Jimin Park"],
    },
    {
        id: 5,
        category: "AI Safety",
        date: "SEP 2025",
        title: "Robustness to Adversarial Attacks in Vision Models",
        abstract: "Analyzing the vulnerability of current vision models to adversarial attacks and proposing a new defense mechanism.",
        authors: ["Jihye Kim", "Taeyoung Ryu"],
    },
    {
        id: 6,
        category: "Reasoning",
        date: "AUG 2025",
        title: "Solving Math Word Problems with Verifiers",
        abstract: "Training verifiers to judge the correctness of model solutions significantly improves performance on math word problems.",
        authors: ["Kyungmin Park", "Sohee Lee"],
    },
];

const categories = ["All", "AI Safety", "NLP", "Multimodal", "Efficiency", "Reasoning"];

export default function PublicationsPage() {
    const [selectedCategory, setSelectedCategory] = useState("All");

    const filteredPublications = selectedCategory === "All"
        ? allPublications
        : allPublications.filter(pub => pub.category === selectedCategory || (selectedCategory === "NLP" && pub.category === "Reasoning" /* Grouping example */));

    return (
        <div className="min-h-screen bg-[var(--color-bg-base)] pt-32 pb-20">

            {/* Page Header */}
            <div className="container-premium mb-16 animate-enter">
                <p className="text-sm font-bold uppercase tracking-widest text-[var(--color-brand-highlight)] mb-4">Research & Insights</p>
                <h1 className="text-display mb-8 text-[var(--color-text-main)]">Publications</h1>
                <p className="text-body-lg text-[var(--color-text-sub)] max-w-2xl">
                    우리의 최신 연구 성과와 기술적 발견을 공유합니다.<br />
                    인류를 위한 안전하고 유익한 AGI를 향한 여정을 확인해 보세요.
                </p>
            </div>

            {/* Filter Tabs */}
            <div className="container-premium mb-16 sticky top-24 z-30">
                <div className="bg-white/80 backdrop-blur-xl p-2 rounded-full border border-[var(--color-border)] inline-flex flex-wrap gap-1 shadow-sm animate-enter delay-100">
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setSelectedCategory(cat)}
                            className={`
                px-6 py-2.5 rounded-full text-sm font-bold transition-all duration-300
                ${selectedCategory === cat
                                    ? 'bg-[var(--color-brand-primary)] text-white shadow-md'
                                    : 'text-[var(--color-text-sub)] hover:bg-[var(--color-bg-subtle)] hover:text-[var(--color-text-main)]'
                                }
              `}
                        >
                            {cat}
                        </button>
                    ))}
                </div>
            </div>

            {/* Publications Grid */}
            <div className="container-premium grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 animate-enter delay-200">
                {filteredPublications.map((pub) => (
                    <div key={pub.id} className="h-full">
                        <ResearchCard
                            category={pub.category}
                            date={pub.date}
                            title={pub.title}
                            abstract={pub.abstract}
                            authors={pub.authors}
                            href={`/research/${pub.id}`}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}
