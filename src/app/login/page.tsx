'use client';
import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Heart, Mail, Lock, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/Button';

export default function LoginPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError('Please enter a valid email address.');
      return;
    }
    setIsLoading(true);
    setTimeout(() => { setIsLoading(false); window.location.href = '/dashboard'; }, 1000);
  };

  return (
    <div className="min-h-screen bg-stone-50 flex items-center justify-center p-4">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="w-full max-w-md">
        <div className="bg-white rounded-2xl shadow-xl border border-stone-200 p-8">
          <div className="text-center mb-8">
            <Link href="/" className="inline-flex items-center gap-2 mb-6 group">
              <div className="w-10 h-10 rounded-full bg-emerald-700 flex items-center justify-center group-hover:scale-105 transition-transform"><Heart className="w-6 h-6 text-white" fill="currentColor" /></div>
              <span className="text-2xl font-bold text-stone-900">Naye<span className="text-emerald-700">Pankh</span></span>
            </Link>
            <h1 className="text-2xl font-bold text-stone-900 mb-2">Welcome back</h1>
            <p className="text-stone-500">Sign in to your volunteer account</p>
          </div>
          <form className="space-y-4" onSubmit={handleSubmit}>
            {error && <div className="p-3 rounded-lg bg-red-50 border border-red-200 text-red-700 text-sm text-center">{error}</div>}
            <div>
              <label className="block text-sm font-medium text-stone-700 mb-1.5">Email Address</label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-stone-400" />
                <input type="email" required value={email} onChange={(e) => setEmail(e.target.value)} className="w-full bg-stone-50 border border-stone-200 rounded-lg pl-10 pr-4 py-2.5 text-stone-900 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500 transition-all" placeholder="you@example.com" />
              </div>
            </div>
            <div>
              <div className="flex items-center justify-between mb-1.5">
                <label className="block text-sm font-medium text-stone-700">Password</label>
                <Link href="/forgot-password" className="text-sm text-emerald-700 hover:text-emerald-800 cursor-pointer">Forgot password?</Link>
              </div>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-stone-400" />
                <input type="password" required value={password} onChange={(e) => setPassword(e.target.value)} className="w-full bg-stone-50 border border-stone-200 rounded-lg pl-10 pr-4 py-2.5 text-stone-900 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500 transition-all" placeholder="••••••••" />
              </div>
            </div>
            <Button variant="primary" type="submit" className="w-full" isLoading={isLoading}>Sign In <ArrowRight className="w-4 h-4 ml-2" /></Button>
          </form>
          <p className="text-center text-sm text-stone-500 mt-6">Don't have an account? <Link href="/register" className="text-emerald-700 font-semibold hover:underline cursor-pointer">Register here</Link></p>
        </div>
      </motion.div>
    </div>
  );
}
