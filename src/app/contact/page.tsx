'use client';

import { Metadata } from "next";
import Input, { Textarea } from "@/components/ui/Input";
import Button from "@/components/ui/Button";

// Note: Metadata should be in a separate file or we use generateMetadata for client components
// For simplicity, we'll keep this as a client component for form handling

export default function ContactPage() {
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        alert('문의가 접수되었습니다. 빠른 시일 내에 답변드리겠습니다.');
    };

    return (
        <>
            {/* Hero */}
            <section className="py-16 md:py-20 bg-gradient-to-b from-[var(--warm-cream)] to-white">
                <div className="container-main">
                    <div className="max-w-2xl">
                        <p className="text-caption uppercase tracking-wider mb-2">Get in Touch</p>
                        <h1 className="text-h1 mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
                            Contact Us
                        </h1>
                        <p className="text-body1 text-[var(--soft-gray)]">
                            Have questions about our research or interested in collaboration?
                            We'd love to hear from you.
                        </p>
                    </div>
                </div>
            </section>

            {/* Contact Form & Info */}
            <section className="py-12 bg-white">
                <div className="container-main">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                        {/* Contact Form */}
                        <div>
                            <h2 className="text-h3 mb-6" style={{ fontFamily: 'var(--font-heading)' }}>
                                Send us a Message
                            </h2>
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <Input
                                        label="이름"
                                        placeholder="홍길동"
                                        required
                                    />
                                    <Input
                                        label="이메일"
                                        type="email"
                                        placeholder="example@email.com"
                                        required
                                    />
                                </div>
                                <Input
                                    label="소속"
                                    placeholder="회사 또는 기관명"
                                />
                                <Input
                                    label="제목"
                                    placeholder="문의 제목을 입력해 주세요"
                                    required
                                />
                                <Textarea
                                    label="문의 내용"
                                    placeholder="문의하실 내용을 자세히 작성해 주세요"
                                    rows={6}
                                    required
                                />
                                <Button type="submit" size="lg" className="w-full md:w-auto">
                                    문의하기
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                                    </svg>
                                </Button>
                            </form>
                        </div>

                        {/* Contact Info */}
                        <div>
                            <h2 className="text-h3 mb-6" style={{ fontFamily: 'var(--font-heading)' }}>
                                Contact Information
                            </h2>

                            <div className="space-y-6">
                                {/* Address */}
                                <div className="flex gap-4">
                                    <div className="w-12 h-12 rounded-lg bg-[var(--clean-gray)] flex items-center justify-center shrink-0">
                                        <svg className="w-6 h-6 text-[var(--ai-blue)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-[var(--deep-navy)] mb-1">주소</h3>
                                        <p className="text-[var(--soft-gray)]">
                                            서울특별시 강남구 테헤란로 123<br />
                                            AI 연구소 빌딩 10층
                                        </p>
                                    </div>
                                </div>

                                {/* Email */}
                                <div className="flex gap-4">
                                    <div className="w-12 h-12 rounded-lg bg-[var(--clean-gray)] flex items-center justify-center shrink-0">
                                        <svg className="w-6 h-6 text-[var(--ai-blue)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-[var(--deep-navy)] mb-1">이메일</h3>
                                        <a href="mailto:contact@airesearchlab.kr" className="text-[var(--ai-blue)] hover:underline">
                                            contact@airesearchlab.kr
                                        </a>
                                    </div>
                                </div>

                                {/* Phone */}
                                <div className="flex gap-4">
                                    <div className="w-12 h-12 rounded-lg bg-[var(--clean-gray)] flex items-center justify-center shrink-0">
                                        <svg className="w-6 h-6 text-[var(--ai-blue)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-[var(--deep-navy)] mb-1">전화</h3>
                                        <a href="tel:+82-2-1234-5678" className="text-[var(--ai-blue)] hover:underline">
                                            02-1234-5678
                                        </a>
                                    </div>
                                </div>
                            </div>

                            {/* Office Hours */}
                            <div className="mt-10 p-6 bg-[var(--clean-gray)] rounded-[var(--radius-card)]">
                                <h3 className="font-semibold text-[var(--deep-navy)] mb-3">운영 시간</h3>
                                <div className="space-y-2 text-sm text-[var(--soft-gray)]">
                                    <p>월요일 - 금요일: 09:00 - 18:00</p>
                                    <p>토요일, 일요일, 공휴일: 휴무</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
