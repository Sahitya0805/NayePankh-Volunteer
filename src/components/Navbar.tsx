'use client';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Menu, X, Heart } from 'lucide-react';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-zinc-950/80 backdrop-blur-md border-b border-zinc-800/50' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center group-hover:scale-105 transition-transform">
              <Heart className="w-5 h-5 text-white" fill="currentColor" />
            </div>
            <span className="text-xl font-bold tracking-tight text-white">Naye<span className="text-blue-400">Pankh</span></span>
          </Link>
          <nav className="hidden md:flex items-center gap-8">
            <Link href="/#mission" className="text-sm font-medium text-zinc-400 hover:text-white transition-colors">Mission</Link>
            <Link href="/#programs" className="text-sm font-medium text-zinc-400 hover:text-white transition-colors">Programs</Link>
            <Link href="/login" className="text-sm font-medium text-zinc-400 hover:text-white transition-colors">Login</Link>
            <Link href="/register" className="inline-flex items-center justify-center rounded-lg font-medium transition-all duration-200 h-8 px-3 text-xs bg-blue-600 text-white hover:bg-blue-500 shadow-lg shadow-blue-500/20">Become a Volunteer</Link>
          </nav>
          <button className="md:hidden p-2 text-zinc-400 hover:text-white" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>
    </header>
  );
}