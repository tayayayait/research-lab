'use client';

import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'link';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

const variants = {
  primary: "bg-[var(--color-brand-accent)] text-white hover:bg-[#0053BA] shadow-[0_4px_14px_rgba(0,100,224,0.3)] hover:shadow-[0_6px_20px_rgba(0,100,224,0.4)] hover:-translate-y-0.5",
  secondary: "bg-[var(--color-bg-surface)] text-[var(--color-text-main)] border border-[var(--color-border)] hover:border-[var(--color-brand-primary)] hover:shadow-md hover:-translate-y-0.5",
  outline: "bg-transparent border-2 border-[var(--color-text-main)] text-[var(--color-text-main)] hover:bg-[var(--color-text-main)] hover:text-white",
  ghost: "bg-transparent text-[var(--color-text-sub)] hover:text-[var(--color-text-main)] hover:bg-[var(--color-border)]",
  link: "bg-transparent text-[var(--color-brand-accent)] hover:underline p-0 h-auto min-h-0",
};

const sizeStyles = {
  sm: 'h-10 px-5 text-sm min-w-[100px]',
  md: 'h-[52px] px-8 text-base min-w-[140px]',
  lg: 'h-[60px] px-10 text-lg min-w-[180px]',
};

export default function Button({
  variant = 'primary',
  size = 'md',
  children,
  className = '',
  ...props
}: ButtonProps) {
  const baseStyles = `
    inline-flex items-center justify-center gap-2.5
    rounded-full font-semibold tracking-tight
    transition-all duration-300 cubic-bezier(0.2, 0.8, 0.2, 1)
    disabled:opacity-50 disabled:cursor-not-allowed
    active:scale-95
  `;

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${variant !== 'link' ? sizeStyles[size] : ''} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
