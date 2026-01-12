'use client';

import Image from 'next/image';

interface Interactive3DViewerProps {
    src: string;
    alt: string;
    className?: string;
}

export default function Interactive3DViewer({ src, alt, className = '' }: Interactive3DViewerProps) {
    return (
        <div className={`relative ${className}`}>
            {/* Anthropic-style: 3D Rotation + Floating Animation */}
            <div
                className="w-full h-full"
                style={{
                    perspective: '1000px',
                }}
            >
                <div
                    className="w-full h-full"
                    style={{
                        animation: 'anthropicRotate 20s linear infinite, anthropicFloat 8s ease-in-out infinite',
                        transformStyle: 'preserve-3d',
                    }}
                >
                    <Image
                        src={src}
                        alt={alt}
                        fill
                        className="object-contain"
                        style={{
                            maskImage: 'radial-gradient(circle closest-side, black 80%, transparent 100%)',
                            WebkitMaskImage: 'radial-gradient(circle closest-side, black 80%, transparent 100%)',
                        }}
                        priority
                        draggable={false}
                    />
                </div>
            </div>

            {/* CSS Keyframes - Anthropic Style Rotation + Float */}
            <style jsx>{`
                @keyframes anthropicRotate {
                    0% {
                        transform: rotateY(0deg);
                    }
                    100% {
                        transform: rotateY(360deg);
                    }
                }
                @keyframes anthropicFloat {
                    0%, 100% {
                        transform: translateY(0px) rotateY(0deg);
                    }
                    25% {
                        transform: translateY(-12px) rotateY(90deg);
                    }
                    50% {
                        transform: translateY(-6px) rotateY(180deg);
                    }
                    75% {
                        transform: translateY(-15px) rotateY(270deg);
                    }
                }
            `}</style>
        </div>
    );
}
