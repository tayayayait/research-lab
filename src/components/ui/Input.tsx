'use client';

import React, { useId } from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    error?: string;
    variant?: 'default' | 'underline';
}

export default function Input({
    label,
    error,
    variant = 'default',
    className = '',
    id,
    ...props
}: InputProps) {
    const reactId = useId();
    const inputId = id || `input-${reactId}`;

    const baseStyles = `
    w-full px-4 py-3 text-base text-[var(--deep-navy)]
    placeholder-[var(--light-gray)]
    transition-colors duration-200 ease-out
    focus:outline-none
    disabled:bg-[var(--clean-gray)] disabled:cursor-not-allowed
  `;

    const variantStyles = {
        default: `
      bg-white border border-[var(--border-light)] rounded-[var(--radius-input)]
      focus:border-[var(--ai-blue)]
      ${error ? 'border-[var(--alert-red)]' : ''}
    `,
        underline: `
      bg-transparent border-0 border-b border-[var(--border-medium)] rounded-none px-0
      focus:border-[var(--ai-blue)]
      ${error ? 'border-[var(--alert-red)]' : ''}
    `,
    };

    return (
        <div className="w-full">
            {label && (
                <label
                    htmlFor={inputId}
                    className="block text-sm font-medium text-[var(--deep-navy)] mb-2"
                >
                    {label}
                </label>
            )}
            <input
                id={inputId}
                className={`${baseStyles} ${variantStyles[variant]} ${className}`}
                {...props}
            />
            {error && (
                <p className="mt-1 text-sm text-[var(--alert-red)]">{error}</p>
            )}
        </div>
    );
}

// Textarea variant
interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
    label?: string;
    error?: string;
}

export function Textarea({
    label,
    error,
    className = '',
    id,
    ...props
}: TextareaProps) {
    const reactId = useId();
    const inputId = id || `textarea-${reactId}`;

    return (
        <div className="w-full">
            {label && (
                <label
                    htmlFor={inputId}
                    className="block text-sm font-medium text-[var(--deep-navy)] mb-2"
                >
                    {label}
                </label>
            )}
            <textarea
                id={inputId}
                className={`
          w-full px-4 py-3 text-base text-[var(--deep-navy)]
          placeholder-[var(--light-gray)]
          bg-white border border-[var(--border-light)] rounded-[var(--radius-input)]
          transition-colors duration-200 ease-out
          focus:outline-none focus:border-[var(--ai-blue)]
          disabled:bg-[var(--clean-gray)] disabled:cursor-not-allowed
          min-h-[120px] resize-y
          ${error ? 'border-[var(--alert-red)]' : ''}
          ${className}
        `}
                {...props}
            />
            {error && (
                <p className="mt-1 text-sm text-[var(--alert-red)]">{error}</p>
            )}
        </div>
    );
}
