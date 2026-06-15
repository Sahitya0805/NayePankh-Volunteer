'use client';
import { motion } from 'framer-motion';
import { MapPin, Calendar, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';

const programs = [
  { id: 1, title: 'Education for All', desc: 'Providing free quality education and study materials to underprivileged children in urban slums.', location: 'Kanpur, UP', date: 'Ongoing', image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800&auto=format&fit=crop&q=80' },
  { id: 2, title: 'Health & Hygiene Camps', desc: 'Organizing free medical checkups, blood donation drives, and hygiene awareness workshops.', location: 'Ghaziabad, UP', date: 'Monthly', image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&auto=format&fit=crop&q=80' },
  { id: 3, title: 'Skill Development', desc: 'Empowering youth with vocational training in computer literacy, tailoring, and handicrafts.', location: 'Multiple Cities', date: 'Ongoing', image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800&auto=format&fit=crop&q=80' }
];

export function ProgramsSection() {
  return (
    <section id="programs" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Our Core Programs</h2>
          <p className="text-slate-600">Think global, act local. We are revolutionizing the society together through targeted, impactful initiatives.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {programs.map((p, i) => (
            <motion.div key={p.id} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="np-card overflow-hidden flex flex-col">
              <img src={p.image} alt={p.title} className="w-full h-48 object-cover" />
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-xl font-bold text-slate-900 mb-2">{p.title}</h3>
                <p className="text-slate-600 text-sm mb-4 flex-1">{p.desc}</p>
                <div className="space-y-2 mb-6 text-sm text-slate-500">
                  <div className="flex items-center gap-2"><MapPin className="w-4 h-4 text-blue-600" /> {p.location}</div>
                  <div className="flex items-center gap-2"><Calendar className="w-4 h-4 text-blue-600" /> {p.date}</div>
                </div>
                <Button variant="outline" className="w-full group" asChild>
                  <Link href="/register">Join this Cause <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" /></Link>
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
