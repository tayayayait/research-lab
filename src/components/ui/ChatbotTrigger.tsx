'use client';

import React, { useState, useRef, useEffect } from 'react';
import Button from './Button';

type Message = {
    role: 'user' | 'assistant';
    content: string;
};

export default function ChatbotTrigger() {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState<Message[]>([
        { role: 'assistant', content: '안녕하세요! 저는 AI 연구소의 연구 어시스턴트입니다. 논문, 연구 프로젝트, 또는 팀원에 대해 궁금한 점이 있으시면 질문해 주세요.' }
    ]);
    const [input, setInput] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const messagesEndRef = useRef<HTMLDivElement>(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    const handleSubmit = async (e?: React.FormEvent) => {
        e?.preventDefault();
        if (!input.trim() || isLoading) return;

        const userMessage = { role: 'user' as const, content: input };
        setMessages(prev => [...prev, userMessage]);
        setInput('');
        setIsLoading(true);

        try {
            const response = await fetch('/api/chat', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    messages: [...messages, userMessage].map(m => ({ role: m.role, content: m.content }))
                }),
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const data = await response.json();
            setMessages(prev => [...prev, { role: 'assistant', content: data.result.content }]);
        } catch (error) {
            console.error('Chat error:', error);
            setMessages(prev => [...prev, { role: 'assistant', content: '죄송합니다. 오류가 발생했습니다. 잠시 후 다시 시도해주세요.' }]);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <>
            {/* Trigger Button */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className={`fixed bottom-8 right-8 z-50 w-14 h-14 rounded-full 
                bg-gradient-to-br from-[var(--color-brand-primary)] to-[var(--color-brand-accent)]
                text-white shadow-[var(--shadow-floating)]
                flex items-center justify-center
                hover:scale-110 hover:shadow-xl
                transition-all duration-300 ease-out cursor-pointer
                ${isOpen ? 'rotate-90' : 'rotate-0'}`}
                aria-label="Toggle Chatbot"
            >
                {isOpen ? (
                    <span className="text-xl font-bold">✕</span>
                ) : (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                    </svg>
                )}
            </button>

            {/* Chat Window */}
            {isOpen && (
                <div className="fixed bottom-24 right-8 z-50 w-[380px] max-w-[calc(100vw-2rem)] 
                    bg-white rounded-[24px] shadow-2xl overflow-hidden 
                    border border-[var(--color-border)] animate-enter flex flex-col max-h-[600px]">

                    {/* Header */}
                    <div className="bg-[var(--color-brand-primary)] p-5 text-white flex items-center gap-3 shadow-sm">
                        <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center backdrop-blur-sm">
                            <span className="text-xl">🤖</span>
                        </div>
                        <div>
                            <h3 className="font-bold text-lg leading-tight">AI Research Assistant</h3>
                            <p className="text-xs text-teal-100/80">Online • Asking about AI Safety</p>
                        </div>
                    </div>

                    {/* Messages Area */}
                    <div className="flex-1 p-5 overflow-y-auto bg-[#F8F9FA] min-h-[350px]">
                        <div className="flex flex-col gap-4">
                            {messages.map((msg, idx) => (
                                <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                                    {msg.role === 'assistant' && (
                                        <div className="w-8 h-8 rounded-full bg-[var(--color-brand-primary)] flex items-center justify-center text-xs mr-2 shrink-0 border border-white/20 shadow-sm text-white">
                                            AI
                                        </div>
                                    )}
                                    <div
                                        className={`
                                            max-w-[80%] px-4 py-3 rounded-2xl text-sm leading-relaxed shadow-sm
                                            ${msg.role === 'user'
                                                ? 'bg-[var(--color-brand-primary)] text-white rounded-br-none'
                                                : 'bg-white text-[var(--color-text-main)] border border-gray-100 rounded-bl-none'
                                            }
                                        `}
                                    >
                                        {msg.content}
                                    </div>
                                </div>
                            ))}
                            {isLoading && (
                                <div className="flex justify-start">
                                    <div className="w-8 h-8 rounded-full bg-[var(--color-brand-primary)] flex items-center justify-center text-xs mr-2 shrink-0 opacity-50 text-white">
                                        AI
                                    </div>
                                    <div className="bg-white px-4 py-3 rounded-2xl rounded-bl-none border border-gray-100 shadow-sm">
                                        <div className="flex gap-1">
                                            <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" />
                                            <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-100" />
                                            <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-200" />
                                        </div>
                                    </div>
                                </div>
                            )}
                            <div ref={messagesEndRef} />
                        </div>
                    </div>

                    {/* Input Area */}
                    <div className="p-4 bg-white border-t border-[var(--color-border)]">
                        <form onSubmit={handleSubmit} className="flex flex-col gap-2">
                            <div className="relative">
                                <input
                                    type="text"
                                    value={input}
                                    onChange={(e) => setInput(e.target.value)}
                                    placeholder="메시지를 입력하세요..."
                                    className="w-full pl-5 pr-12 py-3 bg-gray-50 border border-gray-200 rounded-full text-sm focus:outline-none focus:border-[var(--color-brand-primary)] focus:ring-1 focus:ring-[var(--color-brand-primary)] transition-all"
                                    disabled={isLoading}
                                />
                                <button
                                    type="submit"
                                    disabled={!input.trim() || isLoading}
                                    className="absolute right-1.5 top-1/2 -translate-y-1/2 w-9 h-9 bg-[var(--color-brand-primary)] text-white rounded-full flex items-center justify-center hover:bg-[var(--color-brand-primary)]/90 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                                >
                                    <svg className="w-4 h-4 translate-x-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                                    </svg>
                                </button>
                            </div>
                            <p className="text-[10px] text-center text-gray-400">
                                Powered by AI Research Lab RAG System
                            </p>
                        </form>
                    </div>
                </div>
            )}
        </>
    );
}
