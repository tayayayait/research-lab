'use client';

import React from 'react';

interface CardProps {
    children: React.ReactNode;
    className?: string;
    variant?: 'default' | 'glass' | 'feature' | 'flat';
    hover?: boolean;
}

export default function Card({
    children,
    className = '',
    variant = 'default',
    hover = true
}: CardProps) {
    const variants = {
        default: `
            bg-white rounded-[var(--radius-card)] p-10
            border border-[var(--color-border)]
            shadow-[0_4px_20px_rgba(10,50,53,0.04)]
            relative overflow-hidden
        `,
        glass: `
            bg-white/60 backdrop-blur-xl rounded-[var(--radius-card)] p-10
            border border-white/40
            shadow-[0_8px_32px_rgba(10,50,53,0.05)]
        `,
        feature: `
            bg-gradient-to-br from-white to-[var(--color-bg-subtle)] 
            rounded-[var(--radius-card)] p-12
            border border-[var(--color-border)]
            shadow-[0_20px_40px_rgba(10,50,53,0.08)]
        `,
        flat: `
            bg-[var(--color-bg-surface)] rounded-[var(--radius-card)] p-8
            border border-[var(--color-border)]
        `
    };

    const hoverEffects = hover
        ? 'hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(10,50,53,0.12)] hover:border-[var(--color-brand-highlight)]/30 transition-all duration-500 ease-out'
        : '';

    return (
        <div className={`${variants[variant]} ${hoverEffects} flex flex-col h-full ${className}`}>
            {children}
        </div>
    );
}

// Research Card variant
interface ResearchCardProps {
    category: string;
    date: string;
    title: string;
    abstract: string;
    authors: string[];
    href?: string;
    featured?: boolean;
}

export function ResearchCard({
    category,
    date,
    title,
    abstract,
    authors,
    href = '#',
    featured = false,
}: ResearchCardProps) {
    return (
        <a href={href} className="block group h-full">
            <Card variant={featured ? 'feature' : 'default'} hover>
                {/* Category & Date Row */}
                <div className="flex items-center justify-between mb-6">
                    <span className={`
                        inline-flex items-center px-4 py-1.5 text-xs font-bold uppercase tracking-wider 
                        rounded-full border
                        ${featured
                            ? 'bg-[var(--color-brand-primary)] text-white border-transparent'
                            : 'bg-transparent text-[var(--color-brand-primary)] border-[var(--color-border)]'
                        }
                    `}>
                        {category}
                    </span>
                    <span className="text-sm font-medium text-[var(--color-text-sub)] font-mono">{date}</span>
                </div>

                {/* Title */}
                <h3 className={`
                    text-[var(--color-text-main)] mb-6 
                    group-hover:text-[var(--color-brand-accent)] transition-colors duration-300
                    leading-tight
                    ${featured ? 'text-4xl font-bold' : 'text-2xl font-bold'}
                `} style={{ fontFamily: 'var(--font-display)' }}>
                    {title}
                </h3>

                {/* Abstract */}
                <p className={`text-[var(--color-text-sub)] mb-8 line-clamp-3 leading-relaxed ${featured ? 'text-xl' : 'text-base'}`}>
                    {abstract}
                </p>

                {/* Footer: Authors & Arrow */}
                <div className="mt-auto pt-6 border-t border-[var(--color-border-devider)] flex items-center justify-between">
                    <p className="text-sm font-medium text-[var(--color-text-sub)]">
                        {authors.join(' · ')}
                    </p>
                    <div className="w-10 h-10 rounded-full bg-[var(--color-bg-subtle)] flex items-center justify-center group-hover:bg-[var(--color-brand-accent)] group-hover:text-white transition-all duration-300">
                        <svg className="w-5 h-5 -rotate-45 group-hover:rotate-0 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                    </div>
                </div>
            </Card>
        </a>
    );
}

// Team Member Card variant
interface TeamMemberCardProps {
    name: string;
    position: string;
    bio: string;
    imageUrl?: string;
}

export function TeamMemberCard({
    name,
    position,
    bio,
    imageUrl,
}: TeamMemberCardProps) {
    return (
        <Card variant="default" className="text-center group !p-8">
            {/* Avatar */}
            <div className="relative w-32 h-32 mx-auto mb-6">
                <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-[var(--color-brand-highlight)] to-[var(--color-brand-accent)] opacity-20 blur-xl group-hover:opacity-40 transition-opacity duration-500" />
                <div className="relative w-full h-full rounded-full bg-[var(--color-bg-subtle)] overflow-hidden border-4 border-white shadow-sm group-hover:scale-105 transition-transform duration-500">
                    {imageUrl ? (
                        <img src={imageUrl} alt={name} className="w-full h-full object-cover" />
                    ) : (
                        <div className="w-full h-full flex items-center justify-center text-4xl font-bold text-[var(--color-brand-primary)]">
                            {name.charAt(0)}
                        </div>
                    )}
                </div>
            </div>

            {/* Name */}
            <h3 className="text-2xl font-bold text-[var(--color-text-main)] mb-2" style={{ fontFamily: 'var(--font-display)' }}>
                {name}
            </h3>

            {/* Position */}
            <p className="text-sm font-bold uppercase tracking-wider text-[var(--color-brand-highlight)] mb-4">{position}</p>

            {/* Bio */}
            <p className="text-[var(--color-text-sub)] line-clamp-3 text-sm leading-relaxed">
                {bio}
            </p>
        </Card>
    );
}
