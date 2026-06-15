'use client';

import { motion } from 'framer-motion';
import { ShieldCheck, Users, Heart } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';

export function HeroSection() {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          {/* Left Side: Text & CTAs */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }} 
            animate={{ opacity: 1, x: 0 }} 
            transition={{ duration: 0.6 }} 
            className="flex-1 text-center lg:text-left"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-xs font-bold uppercase tracking-wider mb-6">
              <ShieldCheck className="w-4 h-4" /> UP Govt. | 80G & 12A Registered NGO
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-tight mb-6">
              It's that easy to bring a <span className="text-blue-600">Smile</span> on Their Faces.
            </h1>
            
            <p className="text-lg text-slate-600 mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              We don't ask for much, just help us with what you can—Be it Money, Skill, or Your Time. Join India's fastest-growing student-led NGO.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
              <Button variant="secondary" size="lg" asChild>
                <Link href="/register">Volunteer With Us</Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/donate">Donate Now</Link>
              </Button>
            </div>
            
            <div className="mt-12 flex items-center justify-center lg:justify-start gap-8 text-slate-500">
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5 text-blue-600" /> 
                <span className="font-semibold text-slate-900">10,000+</span> Volunteers
              </div>
              <div className="flex items-center gap-2">
                <Heart className="w-5 h-5 text-orange-500" /> 
                <span className="font-semibold text-slate-900">50+</span> Cities
              </div>
            </div>
          </motion.div>

          {/* Right Side: Image */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }} 
            animate={{ opacity: 1, x: 0 }} 
            transition={{ duration: 0.6, delay: 0.2 }} 
            className="flex-1 w-full max-w-lg lg:max-w-none"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
              <img 
                src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=800&auto=format&fit=crop&q=80" 
                alt="Volunteers helping children" 
                className="w-full h-auto object-cover" 
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                <p className="text-white font-semibold text-lg">"Service to mankind is the service to god."</p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}