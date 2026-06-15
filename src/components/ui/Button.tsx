'use client';
import * as React from 'react';
import { cn } from '@/lib/utils';
import Link from 'next/link';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  isLoading?: boolean;
  href?: string;
  asChild?: boolean; 
}

export function Button({ className, variant = 'primary', size = 'md', isLoading = false, children, disabled, href, onClick, asChild, ...props }: ButtonProps) {
  const base = "inline-flex items-center justify-center rounded-full font-bold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500/50 disabled:pointer-events-none disabled:opacity-50 active:scale-95 cursor-pointer";
  const variants = {
    primary: "bg-emerald-700 text-white hover:bg-emerald-800 shadow-md hover:shadow-lg",
    secondary: "bg-amber-600 text-white hover:bg-amber-700 shadow-md hover:shadow-lg",
    outline: "border-2 border-emerald-700 bg-transparent text-emerald-700 hover:bg-emerald-50",
    ghost: "text-stone-600 hover:bg-stone-100 hover:text-emerald-700"
  };
  const sizes = { sm: "h-9 px-4 text-sm", md: "h-10 px-6 text-sm", lg: "h-12 px-8 text-base" };
  const classes = cn(base, variants[variant], sizes[size], className);

  if (href) {
    return (
      <Link href={href} className={classes} onClick={onClick as React.MouseEventHandler<HTMLAnchorElement>}>
        {isLoading && <svg className="mr-2 h-4 w-4 animate-spin" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none"/><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"/></svg>}
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} disabled={disabled || isLoading} onClick={onClick} {...props}>
      {isLoading && <svg className="mr-2 h-4 w-4 animate-spin" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none"/><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"/></svg>}
      {children}
    </button>
  );
}
