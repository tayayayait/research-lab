import React from 'react';
import Link from 'next/link';
import Button from '../ui/Button';

const footerLinks = {
    research: [
        { href: '/research', label: 'All Publications' },
        { href: '/research?category=safety', label: 'AI Safety' },
        { href: '/research?category=nlp', label: 'Reasoning & NLP' },
        { href: '/research?category=multimodal', label: 'Multimodal' },
    ],
    company: [
        { href: '/about', label: 'About Us' },
        { href: '/team', label: 'Our Team' },
        { href: '/news', label: 'News & Blog' },
        { href: '/contact', label: 'Contact' },
    ],
    legal: [
        { href: '/privacy', label: 'Privacy Policy' },
        { href: '/terms', label: 'Terms of Service' },
        { href: '/ethics', label: 'Code of Ethics' },
    ],
};

export default function Footer() {
    return (
        <footer className="bg-[var(--color-brand-primary)] text-white relative overflow-hidden">
            {/* Background Pattern (Shared) */}
            <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10 pointer-events-none" />
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[1000px] bg-[radial-gradient(circle_at_center,rgba(240,82,156,0.15)_0%,transparent_60%)] pointer-events-none blur-3xl" />

            {/* 1. CTA Section (Integrated from Home) */}
            <div className="relative z-10 border-b border-white/10">
                <div className="container-premium py-[120px] text-center">
                    <h2 className="text-display mb-6 md:text-[5rem] text-[3.5rem]">Ready to Collaborate?</h2>
                    <p className="text-xl md:text-2xl text-teal-100/80 mb-10 max-w-2xl mx-auto font-light leading-relaxed">
                        AI의 미래를 함께 만들어갈<br />파트너와 연구자를 찾습니다.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button size="lg" className="bg-[var(--color-brand-highlight)] hover:bg-[#D03580] text-white border-0 shadow-[0_10px_40px_rgba(240,82,156,0.4)]">
                            Contact Us
                        </Button>
                        <Button variant="outline" size="lg" className="border-white/30 text-white hover:bg-white hover:text-[var(--color-brand-primary)]">
                            Subscribe to Newsletter
                        </Button>
                    </div>
                </div>
            </div>

            {/* 2. Main Footer Links */}
            <div className="container-premium py-16 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-24 mb-16">
                    {/* Brand Column */}
                    <div className="md:col-span-4 lg:col-span-5">
                        <Link href="/" className="inline-flex items-center gap-3 mb-6">
                            <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-[var(--color-brand-primary)] font-bold text-lg shadow-lg">
                                AI
                            </div>
                            <span className="font-display font-bold text-2xl tracking-tight">
                                Research Lab
                            </span>
                        </Link>
                        <p className="text-teal-100/60 leading-relaxed max-w-sm mb-8">
                            We are dedicated to building safe and beneficial AGI for humanity. Our research focuses on alignment, reasoning, and efficiency.
                        </p>
                        <div className="flex gap-4">
                            {/* Social Icons Placeholder */}
                            {['Twitter', 'GitHub', 'LinkedIn'].map((social) => (
                                <a key={social} href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors pointer-events-none">
                                    <span className="sr-only">{social}</span>
                                    <div className="w-4 h-4 bg-current opacity-50" />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Links Columns */}
                    <div className="md:col-span-8 lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-8">
                        <div>
                            <h4 className="font-bold text-lg mb-6">Research</h4>
                            <ul className="space-y-4">
                                {footerLinks.research.map((link) => (
                                    <li key={link.href}>
                                        <Link href={link.href} className="text-teal-100/60 hover:text-white transition-colors">
                                            {link.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-bold text-lg mb-6">Company</h4>
                            <ul className="space-y-4">
                                {footerLinks.company.map((link) => (
                                    <li key={link.href}>
                                        <Link href={link.href} className="text-teal-100/60 hover:text-white transition-colors">
                                            {link.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-bold text-lg mb-6">Legal</h4>
                            <ul className="space-y-4">
                                {footerLinks.legal.map((link) => (
                                    <li key={link.href}>
                                        <Link href={link.href} className="text-teal-100/60 hover:text-white transition-colors">
                                            {link.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Copyright */}
                <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-teal-100/40">
                    <p>© 2026 AI Research Lab. All rights reserved.</p>
                    <p>Designed with V2 Premium Design System.</p>
                </div>
            </div>
        </footer>
    );
}
