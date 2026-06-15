'use client';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Menu, X, Heart } from 'lucide-react';
import { Button } from '@/components/ui/Button';

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-100' : 'bg-white'}`}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex h-20 items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center">
              <Heart className="w-6 h-6 text-white" fill="currentColor" />
            </div>
            <span className="text-xl font-bold text-slate-900 tracking-tight">Naye<span className="text-blue-600">Pankh</span></span>
          </Link>
          
          <nav className="hidden md:flex items-center gap-8">
            <Link href="/" className="text-sm font-semibold text-slate-600 hover:text-blue-600 transition-colors">Home</Link>
            <Link href="/#about" className="text-sm font-semibold text-slate-600 hover:text-blue-600 transition-colors">About Us</Link>
            <Link href="/#programs" className="text-sm font-semibold text-slate-600 hover:text-blue-600 transition-colors">Programs</Link>
            <Link href="/login" className="text-sm font-semibold text-slate-600 hover:text-blue-600 transition-colors">Login</Link>
            <Button variant="secondary" size="sm" href="/register">Volunteer Now</Button>
          </nav>

          <button className="md:hidden p-2 text-slate-600" onClick={() => setMobileOpen(!mobileOpen)}>
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>
      
      {mobileOpen && (
        <div className="md:hidden bg-white border-t border-slate-100 p-4 space-y-3 shadow-lg">
          <Link href="/" className="block text-sm font-semibold text-slate-600 py-2" onClick={() => setMobileOpen(false)}>Home</Link>
          <Link href="/#about" className="block text-sm font-semibold text-slate-600 py-2" onClick={() => setMobileOpen(false)}>About Us</Link>
          <Link href="/#programs" className="block text-sm font-semibold text-slate-600 py-2" onClick={() => setMobileOpen(false)}>Programs</Link>
          <Button variant="secondary" className="w-full" href="/register" onClick={() => setMobileOpen(false)}>Volunteer Now</Button>
        </div>
      )}
    </header>
  );
}
