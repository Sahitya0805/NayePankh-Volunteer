'use client';
import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Heart, Mail, Lock, User, Phone, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/Button';

export default function RegisterPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', password: '' });

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // STRICTLY allow only numbers, +, -, and spaces. Alphabets are instantly removed.
    const value = e.target.value.replace(/[^0-9+\-\s]/g, '');
    setFormData({ ...formData, phone: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setError('Please enter a valid email address.');
      return;
    }
    if (formData.phone.replace(/\D/g, '').length < 10) {
      setError('Please enter a valid phone number (at least 10 digits).');
      return;
    }
    setIsLoading(true);
    setTimeout(() => { setIsLoading(false); window.location.href = '/dashboard'; }, 1500);
  };

  return (
    <div className="min-h-screen bg-stone-50 flex items-center justify-center p-4 py-12">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="w-full max-w-md">
        <div className="bg-white rounded-2xl shadow-xl border border-stone-200 p-8">
          <div className="text-center mb-8">
            <Link href="/" className="inline-flex items-center gap-2 mb-6 group">
              <div className="w-10 h-10 rounded-full bg-emerald-700 flex items-center justify-center group-hover:scale-105 transition-transform"><Heart className="w-6 h-6 text-white" fill="currentColor" /></div>
              <span className="text-2xl font-bold text-stone-900">Naye<span className="text-emerald-700">Pankh</span></span>
            </Link>
            <h1 className="text-2xl font-bold text-stone-900 mb-2">Join Our Team</h1>
            <p className="text-stone-500">Make a difference in the lives of those in need.</p>
          </div>
          <form className="space-y-4" onSubmit={handleSubmit}>
            {error && <div className="p-3 rounded-lg bg-red-50 border border-red-200 text-red-700 text-sm text-center">{error}</div>}
            <div>
              <label className="block text-sm font-medium text-stone-700 mb-1.5">Full Name</label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-stone-400" />
                <input type="text" required value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} className="w-full bg-stone-50 border border-stone-200 rounded-lg pl-10 pr-4 py-2.5 text-stone-900 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500 transition-all" placeholder="John Doe" />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-stone-700 mb-1.5">Email Address</label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-stone-400" />
                <input type="email" required value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} className="w-full bg-stone-50 border border-stone-200 rounded-lg pl-10 pr-4 py-2.5 text-stone-900 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500 transition-all" placeholder="you@example.com" />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-stone-700 mb-1.5">Phone Number</label>
              <div className="relative">
                <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-stone-400" />
                <input type="tel" required value={formData.phone} onChange={handlePhoneChange} className="w-full bg-stone-50 border border-stone-200 rounded-lg pl-10 pr-4 py-2.5 text-stone-900 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500 transition-all" placeholder="+91 98765 43210" />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-stone-700 mb-1.5">Password</label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-stone-400" />
                <input type="password" required minLength={8} value={formData.password} onChange={(e) => setFormData({...formData, password: e.target.value})} className="w-full bg-stone-50 border border-stone-200 rounded-lg pl-10 pr-4 py-2.5 text-stone-900 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500 transition-all" placeholder="••••••••" />
              </div>
            </div>
            <Button variant="secondary" type="submit" className="w-full" isLoading={isLoading}>Create Account <ArrowRight className="w-4 h-4 ml-2" /></Button>
          </form>
          <p className="text-center text-sm text-stone-500 mt-6">Already have an account? <Link href="/login" className="text-emerald-700 font-semibold hover:underline cursor-pointer">Sign in</Link></p>
        </div>
      </motion.div>
    </div>
  );
}
