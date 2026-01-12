'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Button from '../ui/Button';

const navLinks = [
    { href: '/', label: 'Research' },
    { href: '/publications', label: 'Publications' },
    { href: '/team', label: 'People' },
    { href: '/about', label: 'About' },
];

export default function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <>
            <header
                className={`
                    fixed top-6 left-1/2 -translate-x-1/2 z-50
                    transition-all duration-500 cubic-bezier(0.2, 0.8, 0.2, 1)
                    ${scrolled
                        ? 'bg-[rgba(255,255,255,0.85)] shadow-[var(--shadow-floating)] py-2 px-3 scale-95 border-transparent'
                        : 'bg-[rgba(255,255,255,0.7)] shadow-[var(--shadow-soft)] py-3 px-4 border border-white/40'
                    }
                    backdrop-blur-xl rounded-full max-w-[90vw] w-fit
                `}
            >
                <div className="flex items-center gap-2 md:gap-6">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-2.5 px-3">
                        <div className="w-8 h-8 rounded-full bg-[var(--color-brand-primary)] flex items-center justify-center text-white font-bold font-display text-sm shadow-md">
                            AI
                        </div>
                        <span className="font-display font-bold text-lg text-[var(--color-brand-primary)] tracking-tight hidden sm:block">
                            Research Lab
                        </span>
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center gap-1">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className="
                                    px-5 py-2.5 text-sm font-semibold text-[var(--color-text-sub)] 
                                    hover:text-[var(--color-brand-primary)] hover:bg-[var(--color-bg-subtle)] 
                                    rounded-full transition-all duration-200
                                "
                            >
                                {link.label}
                            </Link>
                        ))}
                    </nav>

                    {/* Desktop CTA */}
                    <div className="hidden md:block pl-2">
                        <Button size="sm" className="bg-[var(--color-brand-primary)] hover:bg-[var(--color-brand-accent)] text-white border-0 shadow-lg hover:shadow-xl h-10 min-w-[100px]">
                            Join Us
                        </Button>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden p-2 text-[var(--color-brand-primary)] hover:bg-[var(--color-bg-subtle)] rounded-full transition-colors"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        aria-label="메뉴 열기"
                    >
                        <div className="w-6 h-6 flex flex-col justify-center gap-1.5">
                            <span className={`block w-5 h-0.5 bg-current transition-transform ${mobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
                            <span className={`block w-5 h-0.5 bg-current transition-opacity ${mobileMenuOpen ? 'opacity-0' : ''}`} />
                            <span className={`block w-5 h-0.5 bg-current transition-transform ${mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
                        </div>
                    </button>
                </div>
            </header>

            {/* Mobile Menu Overlay */}
            {mobileMenuOpen && (
                <div className="fixed inset-0 z-40 md:hidden">
                    <div
                        className="absolute inset-0 bg-[var(--color-brand-primary)]/20 backdrop-blur-sm"
                        onClick={() => setMobileMenuOpen(false)}
                    />
                    <div className="absolute top-24 left-4 right-4 bg-white/95 backdrop-blur-2xl rounded-[32px] p-6 shadow-2xl border border-white/50 animate-enter">
                        <nav className="flex flex-col gap-2">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    className="text-[var(--color-brand-primary)] hover:bg-[var(--color-bg-subtle)] rounded-2xl px-5 py-4 transition-colors duration-200 font-bold text-lg"
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    {link.label}
                                </Link>
                            ))}
                            <div className="pt-4 mt-4 border-t border-[var(--color-border)]">
                                <Button className="w-full bg-[var(--color-brand-primary)]">
                                    Join Us
                                </Button>
                            </div>
                        </nav>
                    </div>
                </div>
            )}
        </>
    );
}
